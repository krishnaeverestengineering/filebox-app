import React from "react";
import { 
    Grid,
 } from "@material-ui/core"
import FileItem from "./fileItem";
import { connect } from "react-redux";
import { deleteFolderAction } from "../../actions/actions";
import Emitter from "../../helpers/events";

class FileSystem extends React.PureComponent {
    constructor(props){
        super(props);  
        this.state = { 
            confirmationPopup: false,
            file: null
         };  
    }

    componentDidMount() {
        Emitter.on("file.deleteConfirmation", (file) => {
            this.setState({
                confirmationPopup: true,
                file: file
            })
        })
    }

    componentWillUnmount() {
        Emitter.off("file.deleteConfirmation")
    }

    deleteFolder = (file) => {
        this.setState({
            confirmationPopup: true,
            file: file
        })
    }

    renameFolder = (file) => {
        console.log(file.filename)
    }

    onClosePopup = () => {
        this.setState({
            confirmationPopup : false,
            file: null
        })
    }

    onClickYes = () => {
        this.setState({
            confirmationPopup : false
        })
        this.props.dispatch(deleteFolderAction(this.state.file))
    }

    render() {
        return (
            <div className = "grid">
                <Grid container spacing = {1}
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    {
                        this.props.files.map(f => {
                            return (
                                <Grid item key = {f.id} xs = {2} >
                                        <FileItem 
                                        deleteFolder = {this.deleteFolder}
                                        renameFolder = {this.renameFolder}
                                        onFileSelected = {this.props.onFileSelected}
                                        file = {f}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        )
    }
}

export default connect(null, null)(FileSystem);