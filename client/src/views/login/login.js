import React, {Fragment} from "react";
import {connect} from "react-redux";
import { 
    Button, 
    Typography,
    Container,
} from "@material-ui/core";
import {
    getAccessTokenAction,
} from "../../actions/actions";
import { NgShow } from "../../components/helpers/ngif";
import { LoginHeader } from "../../components/login-header";
const {OAuth2Client} = require('google-auth-library');


class LoginPage extends React.PureComponent {

    CLIENT_ID = "422393599134-73gn0s2am4dhu7unaaipfecuhr62a69m.apps.googleusercontent.com";
    client = new OAuth2Client(this.CLIENT_ID);
    constructor(props) {
        super(props);
        this.state = {
            auth: null,
            isLoading: true,
        }
    }

    componentDidMount() {
        console.log(this.props)
        window.gapi.load('client:auth2', async () => {
            window.gapi.client.init({
                clientId: this.CLIENT_ID,
                scope: "email",

            }).then(() => {
                this.setState({
                    auth: window.gapi.auth2.getAuthInstance(),
                    isLoading: false,
                });
                this.state.auth.isSignedIn.listen(this.onSignInChanged);
                this.onSignInChanged(this.state.auth.isSignedIn.get());
            });
        })
    }

    veirfyIdToken = async (id_token) => {
        console.log(id_token)
        const ticket = await this.client.verifyIdToken({
            idToken: id_token,
            audience: this.CLIENT_ID,
        });
        const payload = ticket.getPayload();
        return payload['sub'];
    }

    onSignInChanged = async (isSignedIn) => {
        console.log(isSignedIn);
        if(isSignedIn) {
            const id_token = this.state.auth.currentUser.get().getAuthResponse().id_token;
           // const userId = await this.veirfyIdToken(id_token);
            this.props.dispatch(getAccessTokenAction(this.state.auth.currentUser.get().getId()))
        }
        else {
            console.log("logout")
        }
    }

    onGoogleSignInClicked = () => {
        this.state.auth.signIn();
    }

    render() {
        return (
            <Fragment>
                <LoginHeader onSignInClicked =  {this.onGoogleSignInClicked} />
                <NgShow cond = {!this.props.isSignedIn}>
                    <Container style = {{top: "100%", paddingTop: "100px"}}>
                        <div>
                            <h1 style = {{textAlign: "center"}}>FILEBOX</h1>
                        </div>
                        <div>
                            <h2 style = {{textAlign: "center"}}>
                                Boost productivity with Filebox Storage
                            </h2>
                        </div>
                        <div>
                            <h4 style = {{textAlign: "center"}}>
                                The simple file storage solution 
                            </h4>
                        </div>
                    </Container>
                </NgShow>
            </Fragment>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        isSignedIn : state.signInReducers.isSignedIn
    }
}

export default connect(mapStateToProps, null)(LoginPage);

