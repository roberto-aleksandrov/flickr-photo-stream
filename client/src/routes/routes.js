import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routesConfig from './routes-config';

class Routes extends Component { 
    render() {
        return (
            <Switch>
                <Route exact path={routesConfig.photos.path} component={routesConfig.photos.component}/>
                <Route exact path={routesConfig.users.path} component={routesConfig.users.component} />
                <Route exact path={routesConfig.createUser.path} component={routesConfig.createUser.component} />
                <Route exact path={routesConfig.updateUser.path} component={routesConfig.updateUser.component} />
                <Redirect to='/' />
            </Switch>
        );
    }
}

export default Routes;