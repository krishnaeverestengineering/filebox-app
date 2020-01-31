import React, { Fragment } from "react";
import {connect} from "react-redux"
import {getFiles} from "../../actions/actions";
import {
    Paper,
    Menu,
    MenuItem,
} from "@material-ui/core";
import { Icon } from "../helpers/icons";
import { NgShow } from "../helpers/ngif";
import Emitter from "../../helpers/events";

class FileItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showOptions: false,
            anchorEl: null,
        }
    }

    handleOptionsOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
        event.stopPropagation();
      };

      handleOptionsClose = () => {
        this.setState({ anchorEl: null });
      };

      handleRenameClicked = () => {
          this.handleOptionsClose();
          Emitter.emit("file.renameClick", this.props.file);
      }
      handleDeleteClicked = () => {
        this.handleOptionsClose();
        Emitter.emit("file.deleteClick", this.props.file);
    }

    onItemSelected = (e) => {
        e.preventDefault();
        this.props.dispatch(getFiles(this.props.file.path))
        this.props.onFileSelected(this.props.file)
    }

    renderFileMenuOptions = (anchorEl) => {
        return (
<           Paper>
                <Menu 
                id="file-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleOptionsClose}>
                    <MenuItem onClick = {this.handleDeleteClicked}>Delete</MenuItem>
                    <MenuItem onClick = {this.handleRenameClicked}>Rename</MenuItem>
                </Menu>
            </Paper>
        )
    }

    render() {
        const { anchorEl } = this.state;
        return (
            <Fragment>

                { this.renderFileMenuOptions(anchorEl) }
                
                <Paper  
                    className = "box" 
                    onClick = {this.onItemSelected}
                    onMouseEnter = {() => {
                        this.setState({
                            showOptions: true
                        })
                    }}
                    onMouseLeave = {(e) => {
                        e.stopPropagation();
                        this.setState({
                            showOptions: false
                        })
                    }}
                    >
                    <div style = {{ backgroundColor:"red"}}>
                        <NgShow cond = {this.state.showOptions}>
                            <div style = {{
                             position:"absolute", left:"85%"}}>
                                <div
                                    aria-owns={anchorEl ? 'file-menu' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleOptionsOpen}>
                                    <Icon name = "more" width = "10px" height = "20px"/>
                                </div>
                            </div>
                        </NgShow>
                    </div>

                    <div style = {{height:"70px"}}>
                        <Icon name = "directory" width = "50px" height = "50px"/>
                    </div>

                    <div>
                        {this.props.file.filename}
                    </div>
                </Paper>
            </Fragment>
            
        )
    }
}

export default connect(null, null)(FileItem);