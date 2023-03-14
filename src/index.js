import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-1j1mx5wvijf8261p.us.auth0.com"
  clientId="DYTYVv5eeg1BNV9xG2Ylu2X8JSVTb5IB"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Auth0Provider>
);

