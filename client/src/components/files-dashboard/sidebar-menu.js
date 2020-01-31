import React from "react";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class SideMenuBar extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <div>
                        <h2>Filebox</h2>
                    </div>
                    <div className = "side-menu">
                        <ul>
                            <li>
                                <Link to = "/files">Files</Link>
                            </li>
                            <li>
                                Shared Files
                            </li>
                            <li>
                                Trash
                            </li>
                        </ul>
                    </div>
                    <br />
                    <hr />
                    <div className = "side-menu">
                        <ul>
                            <li>
                                Upload File
                            </li>
                            <li>
                                Upload Folder
                            </li>
                            <li>
                                New Folder
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
        )
    }
}