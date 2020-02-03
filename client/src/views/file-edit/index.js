import React, { Fragment } from "react";
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import { Container, Button } from "@material-ui/core";
import { getFileContentAction, editTextFileContentAction } from "../../actions/actions";
import { connect } from "react-redux";
import Emitter from "../../helpers/events";
import { NgIf } from "../../components/helpers/ngif";

class FileEdit extends React.Component {
    constructor() {
        super();
        this.state = {
          name: 'CodeMirror',
          code: "text here",
          filename: "",
          loading: true
        };
      }
    
    componentDidMount() {
        Emitter.on("file.getContent", this.geTextFileContent);
        this.props.dispatch(getFileContentAction(this.props.match.params.fileId));
    }

    componentWillUnmount() {
        Emitter.off("file.getContent");
    }

    updateCode(newCode) {
        this.setState({
            code: newCode,
        });
    }

    geTextFileContent = (data) => {
        this.updateCode(data.content);
        this.setState({loading: false, filename: data.file.filename + data.file.ext})
    }

    onSaveClick = () => {
        this.props.dispatch(editTextFileContentAction({
            fid: this.props.match.params.fileId,
            content: this.state.code
        }))
        console.log(this.state.code)
    }

    render() {
        let options = {
            lineNumbers: true,
        };
        return (
            <Fragment>
                <Container>
                    <NgIf cond = {!this.state.loading}>
                        <br />
                        <br />
                        <br />
                        <h3>{this.state.filename}</h3>
                        <CodeMirror value={this.state.code}
                        onChange={this.updateCode.bind(this)}
                        options={options} />
                        <br />
                        <div>
                            <Button onClick = {this.onSaveClick.bind(this)}
                            variant = "contained"
                            disableElevation
                            >Save</Button>
                        </div>
                    </NgIf>
                    <NgIf cond = {this.state.loading}>
                        <h1>Loading...</h1>
                    </NgIf>
                </Container>
                
            </Fragment>
        )
    }
}

export const mapStateToProps = (state) => {
    return ({})
}

export default connect(mapStateToProps, null)(FileEdit);