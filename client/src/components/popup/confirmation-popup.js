import React from 'react';  
import './createfolder.css';  
import { Button, Typography } from '@material-ui/core';
import Emitter from '../../helpers/events';

class ConfirmationPopup extends React.Component {  

    constructor(props){
        super(props);
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
                            variant="contained" 
                            onClick={() => {
                                Emitter.emit("file.deleteCancle");
                            }}
                            color="secondary">
                                <Typography>
                                    No
                                </Typography>
                            </Button> 
                            <Button 
                            className = "btn"
                            disableElevation
                            variant="contained" onClick = {() => {
                                Emitter.emit("file.deleteConfirm");
                            }} color="primary">
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

export default ConfirmationPopup;