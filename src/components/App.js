import React from 'react';
import {Route, Router} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/STreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';
import createBrowserHistory from '../history';

// Warning: Please use `require("history").createBrowserHistory`
//  instead of `require("history/createBrowserHistory")`.

const App = () => {
    return(
        <div className="ui container">
            <Router history={createBrowserHistory}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </Router>
        </div>
    )
}
export default App;