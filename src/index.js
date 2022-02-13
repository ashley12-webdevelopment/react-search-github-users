import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

//  domain="ashley12-webdevelopment.au.auth0.com"
//       clientId="JkBJ1j5UmJxfvvO6MakC0tI6X7VOpzWH"

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-a7ba0epn.us.auth0.com"
      clientId="IRV1H9jofm31eQZjTC4WOAIwiSrwpo7V"
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
      >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
