import React from "react";
import { 
    Grid,
 } from "@material-ui/core"
import FileItem from "./fileItem";
import { connect } from "react-redux";
import ConfirmationPopup from "../conffirmation-popup";
import { NgIf } from "../helpers/ngif";
import { deleteFolderAction } from "../../actions/actions";

class GridLayout extends React.PureComponent {
    constructor(props){
        super(props);  
        this.state = { 
            confirmationPopup: false,
            file: null
         };  
    }  

    deleteFolder = (file) => {
        console.log(file.filename)
        this.setState({
            confirmationPopup: true,
            file: file
        })
    }

    renameFolder = (file) => {
        console.log(file.filename)
    }

    onClosePopup = () => {
        console.log("cancled")
        this.setState({
            confirmationPopup : false,
            file: null
        })
    }

    onClickYes = () => {
        console.log("confirmed")
        this.setState({
            confirmationPopup : false
        })
        this.props.dispatch(deleteFolderAction(this.state.file))
    }

    render() {
        return (
            <div className = "grid">
                <NgIf cond = {this.state.confirmationPopup}>
                    <ConfirmationPopup onClosePopup = {this.onClosePopup}
                        onClickYes = {this.onClickYes}
                         text = "Are you sure to Delete Folder?" />
                </NgIf>

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

export default connect(null, null)(GridLayout);