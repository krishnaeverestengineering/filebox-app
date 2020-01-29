import React from 'react';
import img_folder from '../../assets/icons/folder.svg';
import img_more from '../../assets/icons/more.svg';

export const Icon = (props) => {
    if(props.name == null) return null;
    let img;
    if(props.name == 'directory'){
        img = img_folder;
    } else if (props.name == "more") {
        img = img_more;
    }
    return (
        <img style = {{verticalAlign: "bottom", maxHeight: "100%", width: props.width, height: props.height}}
             src={img}
             alt={props.name}/>
    );
};