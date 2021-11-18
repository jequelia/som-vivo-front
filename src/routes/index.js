import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Details from '../pages/details';
import Home from '../pages/home';
import Login from '../pages/login'


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route path="/details" component={Details}></Route>
        </Switch>
    );
}

export default Routes;