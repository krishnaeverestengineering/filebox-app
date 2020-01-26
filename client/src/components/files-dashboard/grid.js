import React from "react";
import { 
    Container,
    Grid,
    Paper
 } from "@material-ui/core"
import FileItem from "./fileItem";

class GridLayout extends React.PureComponent {
    render() {
        return (
            <div className = "grid">
                <Grid container spacing = {1}
                    direction="row"
                    justify="flex-start"
                    alignItems="center">
                    {
                        this.props.files.map(f => {
                            return (
                                <Grid item key = {f.id} xs = {2} >
                                        <FileItem onFileSelected = {this.props.onFileSelected} file = {f}/>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        )
    }
}

export default GridLayout;