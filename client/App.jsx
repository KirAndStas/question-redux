import React, { Component }         from 'react';
import { BrowserRouter }            from 'react-router-dom';
import { Switch, Route, Redirect }  from 'react-router';

import Questions   from './containers/Questions.jsx';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/:id' component={Questions} />
                    <Redirect from='*' to='/1' />
                </Switch>
            </BrowserRouter>
        );
    }
}
