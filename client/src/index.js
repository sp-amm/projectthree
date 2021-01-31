import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import  { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Router>
    <Auth0Provider
        domain="dev-yyxgirqx.au.auth0.com"
        clientId="tIG5eAs0YU1Ld4WdhpydVIsS7NvNx5mL"
        redirectUri= {window.location.origin} >
            <App />
    </Auth0Provider>
  </Router>, 
  document.getElementById('root'));


