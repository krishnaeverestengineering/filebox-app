import React, {Component} from "react"
import {connect} from "react-redux"
import "./file_dashboard.css"
import {Header} from "../../components/files-dashboard/header"
import { 
    Container,
    Grid,
    Paper
 } from "@material-ui/core"
import { FileMenu } from "../../components/files-dashboard/fileMenu"
import FileItem from "../../components/files-dashboard/fileItem"
import GridLayout from "../../components/files-dashboard/grid"
import { NgIf, NgShow } from "../../components/helpers/ngif"
import {getFiles} from "../../actions/actions";
import CreateFolder from "../../components/popup/createfolder";
import { EventReceiver } from "../../components/events"

class FilesDashboard extends Component {

    constructor(props){
        super(props);  
        console.log(props.emit)
        this.state = { showPopup: false };  
        }  
        
          togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
         }  

    componentDidMount() {
        this.props.dispatch(getFiles(this.props.path))
    }

    render() {
        return (
            <div>
                 <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button> 
                    {this.state.showPopup ?  
                        <CreateFolder  
                                text='Click "Close Button" to hide popup'  
                                closePopup={this.togglePopup.bind(this)}  
                        />  
                        : null  
                    }   
                <Header />
                <div className = "root">
                    <Container maxWidth = "md">
                        <div>
                            <FileMenu />
                        </div> 
                        <NgShow cond = {!this.props.loading}>
                            <div className = "grid_root">
                                <GridLayout files = {this.props.files}/>
                            </div>
                        </NgShow>
                    </Container>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        loading: state.loading, 
        path: state.filesDashboardReducers.path,
        files: state.filesDashboardReducers.folders,
    }
}

export default connect(mapStateToProps, null)(FilesDashboard);