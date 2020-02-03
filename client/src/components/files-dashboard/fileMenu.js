import React, { Fragment } from "react"
import { withStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import {compose} from "redux";
import Emitter from "../../helpers/events";
import { Paper, Menu, MenuItem } from "@material-ui/core";

const classes = theme => {
    return ({
        root: {
            flexGrow: 1,
          },
          menubar: {
              padding: "5px 8px",
              display: "inline-block",
              verticalAlign: "text-bottom",
              fontSize: "14px",
              letterSpacing: "0.06em",
              color: "#909090",
              cursor:"pointer"
          }
    });
};

class FileMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showOptions: false,
            anchorEl: null,
        };
    }

    handleOptionsOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
        event.stopPropagation();
      };

      handleOptionsClose = () => {
        this.setState({ anchorEl: null });
      };

      handleNewTextFile = (event) => {
          this.handleOptionsClose(event);
          Emitter.emit("file.create", {fileType: 0, fileFormat: ".txt"})
      }

    renderFileCreateOptions = (anchorEl) => {
        return (
            <Paper>
                <Menu 
                id="file-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleOptionsClose}>
                    <MenuItem onClick = {this.handleNewTextFile}>New Text File</MenuItem>
                    <MenuItem onClick = {this.handleOptionsClose}>New Document</MenuItem>
                    <MenuItem onClick = {this.handleOptionsClose}>New Excel Sheet</MenuItem>
                </Menu>
            </Paper>
        )
    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        return (                    
            <Fragment>
                <div className = {classes.root}>
                    {this.renderFileCreateOptions(anchorEl)}
                    <div>
                        <span className = {classes.menubar}
                            aria-owns={anchorEl ? 'file-menu' : null}
                            aria-haspopup="true"
                            onClick={this.handleOptionsOpen}>
                            New File
                        </span>
                        <span className = {classes.menubar} 
                        onClick = { () => {Emitter.emit("file.createFolderClick")}}>
                            New Directory
                        </span>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default compose(
    withStyles(classes),
    connect(null, null)
)(FileMenu);