import React, { Fragment } from "react"
import { withStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import {compose} from "redux";
import Emitter from "../../helpers/events";

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
    render() {
        const { classes } = this.props;
        return (                    
            <Fragment>
                <div className = {classes.root}>
                    <div>
                        <span className = {classes.menubar}>
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