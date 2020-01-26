import React, { Fragment } from "react";
import {connect} from "react-redux"
import {getFiles} from "../../actions/actions";
import {
    Typography,
    Button,
    Container,
    Grid,
    Paper
} from "@material-ui/core";
import { Route, HashRouter, Link, Router } from "react-router-dom";
import { urlParams } from "../../helpers";
import { Icon } from "../helpers/icons";

class FileItem extends React.Component {
    onItemSelected = (e) => {
        e.preventDefault();
        this.props.onFileSelected(this.props.file)
    }

    render() {
        return (
            <Fragment>
                <Paper  
                    className = "box" 
                    onClick = {this.onItemSelected}>
                    <div style = {{height:"50px"}}>
                        <Icon name = "directory" />
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