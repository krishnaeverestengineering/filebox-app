import React, {Component} from "react"
import {connect} from "react-redux"
import "./file_dashboard.css"
import {Header} from "../../components/files-dashboard/header"
import { 
    Container,
    Grid,
    Paper,
    Breadcrumbs,
    Link,
    Typography
 } from "@material-ui/core"
import FileMenu from "../../components/files-dashboard/fileMenu"
import FileItem from "../../components/files-dashboard/fileItem"
import GridLayout from "../../components/files-dashboard/grid"
import { NgIf, NgShow } from "../../components/helpers/ngif"
import {getFiles, createFolderAction} from "../../actions/actions";
import CreateFolder from "../../components/popup/createfolder";
import { EventReceiver } from "../../components/events"
import { urlParams } from "../../helpers"
import SideMenuBar from "../../components/files-dashboard/sidebar-menu"

class FilesDashboard extends Component {
    componentDidMount() {
        this.props.dispatch(getFiles(this.getPath()))
    }

    onFileSelected = (file) => {
        console.log(file.filename);
        this.props.history.push("?path=" + file.id)
        this.props.dispatch(getFiles(file.id))
    }

    onFolderCreate = (name) => {
        console.log(name)
        this.props.dispatch(createFolderAction({
            name: name,
            pid: this.getPath()
        }));
    }

    componentWillReceiveProps(newProps) {
        if(this.props.location.search != newProps.location.search) {
            this.props.dispatch(getFiles(this.getPath()))
        }
    }

    getPath = () => {
        const params = urlParams()
        if("path" in params) {
            return params.path;
        }
        return "/";
    }

    render() {
        return (
            <div>
                <Header />
                <div className = "root">
                    <Container maxWidth = "xl">
                        <Grid container>
                            <Grid item xs = {2}>
                                <SideMenuBar />
                            </Grid>
                            <Grid item xs = {7}>
                                <Container>
                                    <div>
                                        <FileMenu onFolderCreate = {this.onFolderCreate} />
                                    </div> 
                                    <div>
                                        <NgShow cond = {!this.props.loading && this.props.files.length > 0}>
                                            <div className = "grid_root">
                                                <GridLayout onFileSelected = {this.onFileSelected} files = {this.props.files}/>
                                            </div>
                                        </NgShow>
                                        <NgShow cond = {this.props.files.length <= 0}>
                                            <h4 style={{textAlign: "center"}}>Empty Folder</h4>
                                        </NgShow>
                                    </div>
                                </Container>
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