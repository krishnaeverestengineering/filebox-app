import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({component: Component, authenticated, ...rest}) => {
    console.log(authenticated)
    return (
        <Route
        {...rest}
       
        render={(props) =>
          authenticated === true ? <Redirect to="/files" /> : <Component {...props} />
        }
      />
    )}

const mapStateToProps = (state) => ({
    authenticated: state.signInReducers.isSignedIn
})

export default connect(mapStateToProps)(PrivateRoute);