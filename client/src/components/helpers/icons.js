import React from 'react';
import img_folder from '../../assets/icons/folder.svg';

export const Icon = (props) => {
    if(props.name == null) return null;
    let img;
    if(props.name == 'directory'){
        img = img_folder;
    }
    return (
        <img style = {{verticalAlign: "bottom", maxHeight: "100%", width: "50px", height: "50px"}}
             src={img}
             alt={props.name}/>
    );
};