import React from 'react';  
import './createfolder.css';  
import { TextField, Button, Typography } from '@material-ui/core';
import Emitter from '../../helpers/events';

class CreateFolderPopup extends React.Component {  
    constructor(props){
        super(props);
        this.state = {
            name: null,
            type: null,
            icon: null
        };
    }

    render() {  
        return (  
            <div className='popup'>  
                <div className='popup_inner'> 
                    <div className='popup_content'>
                        <div>
                            <h4>{this.props.text}</h4> 
                        </div>
                        <div>
                            <form noValidate autoComplete="off">
                                <TextField id="standard-basic" label="Name" 
                                onChange={(e) => this.setState({name: e.target.value})}
                                style={{width: "340px"}}
                                required/>
                            </form>
                        </div>
                        <div style={{width: "340px", display: "flex", justifyContent: "flex-end"}}>
                            <Button 
                            className = "btn"
                            disableElevation
                            variant="contained"
                            onClick= { () => {Emitter.emit("file.createFolderCancle")}}
                            color="secondary">
                                <Typography> Close </Typography>
                            </Button> 
                            <Button 
                            className = "btn"
                            disableElevation
                            variant="contained"
                            onClick = { () => {
                                if(this.state.name != "" && this.state.name != null )
                                    Emitter.emit("file.createFolderConfirm", this.state.name)
                            }}
                            color="primary">
                                <Typography> Create </Typography>
                            </Button> 
                        </div>
                    </div>
                </div>  
            </div>  
            );  
        }  
}  

export default CreateFolderPopup;