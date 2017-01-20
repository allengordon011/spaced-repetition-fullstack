import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import answerReducer from './reducers';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import App from './components/App';
import Landing from './components/Landing';
import thunk from 'redux-thunk';


console.log(`Client running in ${process.env.NODE_ENV} mode`);


let store = createStore(answerReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>

    ,
    document.getElementById('app'))
  // <Router history={browserHistory}>
  //     <Route path="/" component={Landing}>
  //     <Route path="app" component={App}/>
  //     </Route>
  //   </Router>
