import React from 'react';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/STreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';


const App = () => {
    return(
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}
export default App;