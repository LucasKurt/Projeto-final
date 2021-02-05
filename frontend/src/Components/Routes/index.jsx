import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../../Pages/Home';
import Entre from '../../Pages/Entre';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/entre' component={Entre}/>
        </Switch>
    );
}

export default Routes;