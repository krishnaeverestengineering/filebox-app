import React from "react"
import {
    Typography,
    Button,
    Container,
    Grid
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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
    }
  }));

export const FileMenu = () => {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <div>
                            <span className = {classes.menubar}>
                                New File
                            </span>
                            <span className = {classes.menubar}>
                                New Directory
                            </span>
                        </div>
        </div>
    )
}