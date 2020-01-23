import React from 'react';  
import './createfolder.css';  
import { InputBase, TextField, Button, Typography } from '@material-ui/core';
import {connect} from "react-redux";
import {createFolderAction} from "../../actions/actions";

class CreateFolderPopup extends React.Component {  

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
            this.props.onSave(this.state.name);
            this.props.closePopup();
        }
    }

    render() {  
        return (  
            <div className='popup'>  
                <div className='popup_inner'>  
                    <h5>New Folder</h5>  
                    <form noValidate autoComplete="off">
                        <TextField id="standard-basic" label="Untitled Folder" 
                        onChange={(e) => this.setState({name: e.target.value})}/>
                    </form>
                    <div>
                        <Button onClick={this.props.closePopup}>
                            <Typography>
                                CLOSE
                            </Typography>
                        </Button> 
                        <Button onClick =  {this.onSave.bind(this)}>
                            <Typography>
                                CREATE
                            </Typography>
                        </Button> 
                    </div>
                </div>  
            </div>  
            );  
        }  
}  

const mapDispatchToProps = dispatch => {
    return {
      // explicitly forwarding arguments
      onSave: file => dispatch(createFolderAction(file)),
    }
  }

export default connect(null, mapDispatchToProps)(CreateFolderPopup);