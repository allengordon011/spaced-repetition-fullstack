import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

ReactDOM.render(
  <App />, document.getElementById('app')
)
