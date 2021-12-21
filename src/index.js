import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { Login } from 'pages/Login';
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
