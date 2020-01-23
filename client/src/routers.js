import React from "react";
import { BrowserRouter, Route, IndexRoute, Switch } from 'react-router-dom';
import Home from "./views/files-dashboard";
import Login from "./views/login";
import homepage from "./pages/homepage";
import connectpage from "./pages/connectpage";

export default class AppRouter extends React.Component {
    render() {
        return (
            <div style={{height: '100%'}}>
              <BrowserRouter>
                <Switch>
                  <Route path="/files/:path*" component={Home} />
                  <Route path = "/login" component = {connectpage} />
                  <Route exact path = "/" component = {Login} />
                </Switch>
              </BrowserRouter>
            </div>
        );
    }
}