import React from "react";
import { BrowserRouter, Route, IndexRoute, Switch } from 'react-router-dom';
import Home from "./views/files-dashboard";
import Login from "./views/login";
import PrivateRoute from "./components/helpers/privateroute";
import FileEdit from "./views/file-edit";

export default class AppRouter extends React.Component {
    render() {
        return (
            <div style={{height: '100%'}}>
              <BrowserRouter>
                <Switch>
                  <Route path="/files" component={Home} />
                  <Route path="/edit/:fileId" component={FileEdit} />
                  <PrivateRoute exact path = "/" component = {Login} />
                </Switch>
              </BrowserRouter>
            </div>
        );
    }
}