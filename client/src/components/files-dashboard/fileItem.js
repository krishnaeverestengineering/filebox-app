import React, { Fragment } from "react";
import {connect} from "react-redux"
import {getFiles} from "../../actions/actions";
import {
    Typography,
    Button,
    Container,
    Grid,
    Paper,
    Menu,
    MenuItem,
    Popper,
    Grow,
    ClickAwayListener,
    MenuList
} from "@material-ui/core";
import { Route, HashRouter, Link, Router } from "react-router-dom";
import { urlParams } from "../../helpers";
import { Icon } from "../helpers/icons";
import { NgShow } from "../helpers/ngif";
import ConfirmationPopup from "../conffirmation-popup";

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
          this.props.renameFolder(this.props.file)
      }
      handleDeleteClicked = () => {
        this.handleOptionsClose();
        this.props.deleteFolder(this.props.file)
    }

    render() {
        const { anchorEl } = this.state;
        return (
            <Fragment>
                <Paper>
                    <Menu 
                    id="file-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleOptionsClose}
                   >
                        <MenuItem onClick = {this.handleDeleteClicked}>Delete</MenuItem>
                        <MenuItem onClick = {this.handleRenameClicked}>Rename</MenuItem>
                    </Menu>
                </Paper>
                
                <Paper  
                    className = "box" 
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