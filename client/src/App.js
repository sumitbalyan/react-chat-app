import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';

const App = ()=> (
    <Router>
        <Switch>
            <Route exact path='/'>
                <Join />
            </Route>
            <Route path='/chat'>
                <Chat />
            </Route>
        </Switch>
    </Router>
);

export default App;