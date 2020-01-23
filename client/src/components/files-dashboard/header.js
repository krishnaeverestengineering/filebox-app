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
      height: 50,
      backgroundColor: "white",
    },
    header_container: {
        height: "inherit"
    },
    header_title: {
        display: "block",
        float:"left", paddingTop: 10
    },
    header_logout: {
        display: "block",
        float:"right",
        paddingTop: 5
    }
  }));

export const Header = () => {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <Container maxWidth = "md">
                <Grid container>
                    <Grid item xs = {6}>
                        <div className = {classes.header_title}>
                            <Typography variant = "h6">
                                Filebox
                            </Typography>
                        </div>
                        
                    </Grid>
                    <Grid item xs = {6} >
                        <div className = {classes.header_logout}>
                            <Button>
                                Signout
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}