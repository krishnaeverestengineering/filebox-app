import React, { Fragment } from "react"
import {
    Typography,
    Button,
    Container,
    Grid
} from "@material-ui/core"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";
import {compose} from "redux";
import CreateFolderPopup from "../popup/createfolder";

const classes = theme => {
    return ({
        root: {
            flexGrow: 1,
            //marginLeft: "-32px",
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
    constructor(props){
        super(props);  
        this.state = { showPopup: false };  
    }  

    togglePopup() {  
        this.setState({  
                showPopup: !this.state.showPopup  
        });  
    }

    render() {
        const { classes } = this.props;
        return (                    
            <Fragment>
            <div className = {classes.root}>
                {
                    this.state.showPopup ?  
                        <CreateFolderPopup  
                                text='Create Folder'  
                                closePopup={this.togglePopup.bind(this)}
                                onFolderCreate = {this.props.onFolderCreate}
                        />  
                        : null  
                }   
                <div>
                    <span className = {classes.menubar}>
                        New File
                    </span>
                    <span className = {classes.menubar} onClick={this.togglePopup.bind(this)}>
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