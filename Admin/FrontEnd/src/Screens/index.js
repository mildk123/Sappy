import React from 'react';

import Auth from './Auth/index';

import Home from './Home';
import EditUser from './EditUser';
import Services from './Services';
import Error from './Error';


import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'

class Routes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Auth} />
                        <Route path="/Home" component={Home} />
                        <Route path="/edit" component={EditUser} />
                        <Route path="/services" component={Services} />
                        <Route component={Error} />
                        
                    </Switch>

                </div>
            </BrowserRouter>
        )
    }

}


export default Routes;