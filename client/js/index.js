import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleWare } from 'redux';
import rootReducer from './reducers';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import App from './components/App';
import Landing from './components/Landing';
import thunk from 'redux-thunk';


console.log(`Client running in ${process.env.NODE_ENV} mode`);

const store = createStore(rootReducer, applyMiddleWare(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Landing}>
          <Route path="app" component={App}/>
          </Route>
        </Router>
    </Provider>,
    document.getElementById('app'))
