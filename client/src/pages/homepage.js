import React from "react"
import { Redirect } from 'react-router';
import {connect} from "react-redux"
import {checkSignIn} from "../actions/actions";

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(checkSignIn());
    }

    render() {
        if(this.props.redirectionUrl != null) {
            return (
                <Redirect to = {this.props.redirectionUrl} />
            )
        }
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.signInReducers.redirectionUrl)
    return {redirectionUrl: state.signInReducers.redirectionUrl}
}

export default connect(mapStateToProps, null)(HomePage);