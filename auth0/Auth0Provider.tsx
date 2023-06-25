import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN || ''}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ''}
    authorizationParams={{
      redirect_uri: process.env.REACT_APP_ORIGIN_URL,
      audience: process.env.REACT_APP_WORKER_API_AUDIENCE,
    }}
    cacheLocation="localstorage" // Fixes https://community.auth0.com/t/auth0-spa-2-x-returning-missing-refresh-token/98999/27
    useRefreshTokens={true} // Fixes https://community.auth0.com/t/silent-authorization-not-working-after-login-signup/37114/5
  >
    <App />
  </Auth0Provider>,
);