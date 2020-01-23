import React from "react"
import {connect} from "react-redux"
import {authenticateUserAction} from "../actions/actions";
import { urlParams } from "../helpers";
import { Redirect } from "react-router-dom";

class ConnectPage extends React.Component {
    componentDidMount() {
       // const id = window.gapi.auth2["currentUser"].get().getId();
        console.log(window.gapi)
        //this.props.dispatch(authenticateUserAction(id))
    }

    componentWillReceiveProps(newProps) {
        let id = this.props.auth == null ? -1 : this.props.auth["currentUser"].get().getId();
        if(newProps.auth.currentUser.get().getId() !== id) {
                this.props.dispatch(authenticateUserAction(newProps.auth.currentUser.get().getId()))
        }
    }

    render() {
        if(this.props.isSignedIn) {
            return(
                <div>
                    <Redirect to = "/files" />
                </div>
            )
        } else {
            return(
                <div>
                    Loading...
                </div>
            )
        }
    }
}

export const mapStateToProps = (state) => {
    console.log(state)
    return {
        isSignedIn: state.signInReducers.isSignedIn
    }
}

export default connect(mapStateToProps, null)(ConnectPage);