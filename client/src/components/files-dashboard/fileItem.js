import React from "react";
import {connect} from "react-redux"
import {getFiles} from "../../actions/actions";
import {
    Typography,
    Button,
    Container,
    Grid
} from "@material-ui/core";

class FileItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onItemSelected = (e) => {
        e.preventDefault();
        console.log(this.props.file)
        this.props.dispatch(getFiles(this.props.file.path))
    }

    render() {
        return (
            <div 
                className = "box" 
                onClick = {this.onItemSelected}
            >
                <div>
                    {this.props.file.filename}
                </div>
            </div>  
        )
    }
}

export default connect(null, null)(FileItem);