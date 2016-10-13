import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import Router from 'react-router/BrowserRouter';

import './index.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
