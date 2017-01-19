import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import Landing from './components/Landing';


console.log(`Client running in ${process.env.NODE_ENV} mode`);

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/app" component={App}/>
          <Route path="/" component={Landing}/>
        </Router>
    </Provider>,
    document.getElementById('app'))
