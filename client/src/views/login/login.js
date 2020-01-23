import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {InitGoogleSignIn, authenticateUserAction} from "../../actions/actions"
import { Button } from "@material-ui/core";
import * as types from "../../actions/actionTypes";
import { urlParams } from "../../helpers";

class LoginPage extends React.PureComponent {

    componentDidMount() {
        this.props.dispatch(authenticateUserAction(123))
    }

    componentWillReceiveProps(newProps) {
        // const user = newProps.auth.currentUser.get().getId()
        // console.log(user)
        // console.log("props received")
        // if(user.get())
        //     this.props.dispatch(authenticateUserAction(user.get().getId()))
    }

    onGoogleSignInClicked = () => {
        this.props.auth.signIn();
    }

    render() {
        if(this.props.isSignedIn) {
            return (
                <Redirect to = "/files" />
            )
        } else {
            return (

                <div>
                   
                    <Button onClick = {this.onGoogleSignInClicked}
                        variant = "contained" 
                        color = "secondary" >
                        Sign In with Google
                    </Button>
                </div>
            )
        } 
    }
}

export const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.signInReducers.auth,
        isSignedIn : state.signInReducers.isSignedIn
    }
}

export default connect(mapStateToProps, null)(LoginPage);

