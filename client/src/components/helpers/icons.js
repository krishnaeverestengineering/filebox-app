import React from 'react';
import img_folder from '../../assets/icons/folder.svg';
import img_more from '../../assets/icons/more.svg';
import img_file from '../../assets/icons/file.svg';

export const Icon = (props) => {
    if(props.name == null) return null;
    let img;
    if(props.name == 'directory'){
        img = img_folder;
    } else if (props.name == "more") {
        img = img_more;
    } else if (props.name == ".txt") {
        img = img_file;
    } 
    return (
        <img style = {{verticalAlign: "bottom", maxHeight: "100%", width: props.width, height: props.height}}
             src={img}
             alt={props.name}/>
    );
};