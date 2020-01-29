import React from 'react';  
import './popup/createfolder.css';  
import { InputBase, TextField, Button, Typography } from '@material-ui/core';
import {connect} from "react-redux";
import {createFolderAction} from "../actions/actions";

class ConfirmationPopup extends React.Component {  

    constructor(props){
        super(props);
        this.state = {
            name: null,
            type: null,
            icon: null
        };
    }

    onSave(e) {
        e.preventDefault();
        if(this.state.name !== null){
            this.props.onFolderCreate(this.state.name);
            this.props.closePopup();
        }
    }

    render() {  
        return (  
            <div className='popup'>  
                <div className='popup_inner'> 
                    <div className='popup_content'>
                        <div>
                            <h4>{this.props.text}</h4> 
                        </div>
                        <div style={{width: "340px", display: "flex", justifyContent: "flex-end"}}>
                            <Button 
                            className = "btn"
                            disableElevation
                            variant="contained" onClick={this.props.onClosePopup} color="secondary">
                                <Typography>
                                    No
                                </Typography>
                            </Button> 
                            <Button 
                            className = "btn"
                            disableElevation
                            variant="contained" onClick =  {this.props.onClickYes} color="primary">
                                <Typography>
                                    Yes
                                </Typography>
                            </Button> 
                        </div>
                    </div>
                </div>  
            </div>  
            );  
        }  
}  

const mapDispatchToProps = dispatch => {
    return {
      onSave: file => dispatch(createFolderAction(file)),
    }
  }

export default connect(null, mapDispatchToProps)(ConfirmationPopup);