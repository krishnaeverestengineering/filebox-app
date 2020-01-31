import React, {Component} from "react"
import {connect} from "react-redux"
import "./file-dashboard.css"
import {Header} from "../../components/files-dashboard/header"
import { 
    Container,
    Grid,
 } from "@material-ui/core"
import FileMenu from "../../components/files-dashboard/fileMenu"
import { NgIf, NgShow } from "../../components/helpers/ngif"
import {getFiles, createFolderAction, deleteFolderAction} from "../../actions/actions";
import { urlParams } from "../../helpers"
import SideMenuBar from "../../components/files-dashboard/sidebar-menu"
import Emitter from "../../helpers/events"
import FileSystem from "../../components/files-dashboard/filesystem"
import ConfirmationPopup from "../../components/popup/confirmation-popup"
import CreateFolderPopup from "../../components/popup/createfolder"

class FilesDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmationPopup: false,
            createFolderPopup: false,
            selectedFile: null,
        }
    }

    componentDidMount() {
        Emitter.on("file.deleteClick", this.onDeleteClicked);
        Emitter.on("file.deleteCancle", this.onDeleteFolderCancle);
        Emitter.on("file.deleteConfirm", this.onDeleteFolderConfirm);
        Emitter.on("file.createFolderClick", this.onCreateFolderClicked);
        Emitter.on("file.createFolderCancle", this.onCreateFolderCancle);
        Emitter.on("file.createFolderConfirm", this.onCreateFolderConfirm);
        Emitter.on("file.deleteSuccess", this.onDeleteFileDeletedSuccess);
        this.props.dispatch(getFiles(this.getPath()))
    }

    componentWillUnmount() {
        Emitter.off("file.deleteClick");
        Emitter.off("file.deleteCancle");
        Emitter.off("file.deleteConfirm");
        Emitter.off("file.createFolderClick");
        Emitter.off("file.createFolderCancle");
        Emitter.off("file.createFolderConfirm");
        Emitter.off("file.deleteSuccess");
    }

    componentWillReceiveProps(newProps) {
        if(this.props.location.search != newProps.location.search) {
            this.props.dispatch(getFiles(this.getPath()))
        }
    }

    onDeleteClicked = (file) => {
        this.setState({ confirmationPopup : true, selectedFile: file })
    }

    onDeleteFolderCancle = () => {
        this.setState({ confirmationPopup : false, selectedFile: null })
    }

    onDeleteFolderConfirm = () => {
        this.props.dispatch(deleteFolderAction(this.state.selectedFile));
        this.onDeleteFolderCancle();
    }

    onCreateFolderClicked = () => {
        this.setState({ createFolderPopup: true })
    }

    onCreateFolderCancle = () => {
        this.setState({ createFolderPopup: false })
    }

    onCreateFolderConfirm = (name) => {
        this.onCreateFolderCancle();
        this.onFolderCreate(name);
    }

    onDeleteFileDeletedSuccess = () => {
        this.props.dispatch(getFiles(this.getPath()));
    }

    onFileSelected = (file) => {
        this.props.history.push("?path=" + file.id)
        this.props.dispatch(getFiles(file.id))
    }

    onFolderCreate = (name) => {
        this.props.dispatch(createFolderAction({
            name: name,
            pid: this.getPath()
        }));
    }

    getPath = () => {
        const params = urlParams()
        if("path" in params) {
            return params.path;
        }
        return "/";
    }

    renderConfirmationPopup = () => {
        return (
            <NgIf cond = {this.state.confirmationPopup}>
                <ConfirmationPopup text = "Are you sure to Delete Folder?" />
            </NgIf>
        )
    }

    renderCreateFolderPopup = () => {
        return (
            <NgIf cond = {this.state.createFolderPopup}>
                <CreateFolderPopup text='Create Folder' />  
            </NgIf> 
        )
    }

    renderFileSystem = () => {
        return (
            <Container>
                <div>
                    <FileMenu onFolderCreate = {this.onFolderCreate} />
                </div> 
                <div>
                    <NgShow cond = {!this.props.loading && this.props.files.length > 0}>
                        <div className = "grid_root">
                            <FileSystem onFileSelected = {this.onFileSelected} files = {this.props.files}/>
                        </div>
                    </NgShow>
                    <NgIf cond = {this.props.files.length <= 0}>
                        <h4 style={{textAlign: "center"}}>Empty Folder</h4>
                    </NgIf>
                </div>
            </Container>
        )
    }

    render() {
        return (
            <div>
                <Header />

                { this.renderConfirmationPopup() }
                { this.renderCreateFolderPopup() }
                
                <div className = "root">
                    <Container maxWidth = "xl">
                        <Grid container>
                            <Grid item xs = {2}>
                                <SideMenuBar />
                            </Grid>
                            <Grid item xs = {7}>
                                { this.renderFileSystem() }
                            </Grid>
                            <Grid item xs = {2}>
                                <div>
                                   
                                </div>
                            </Grid>
                        </Grid>
                        
                    </Container>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading, 
        files: state.filesDashboardReducers.folders,
    }
}

export default connect(mapStateToProps, null)(FilesDashboard);