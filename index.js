// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {Auth0Provider} from "@auth0/auth0-react"

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
// <Auth0Provider domain ='dev-lyivi6chqjaf3vxu.au.auth0.com'
// clientId='evxLigsKxJlLrC1JTwz80iugTIetUbAj'
// redirectUri={window.location.origin}>
//     <App />
//     </Auth0Provider>


//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();






import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
       domain="dev-dhdgbw5f.us.auth0.com"
       clientId="hanoOG9KmKPcp9ZVaTSjc8RA3eGLnZsX"
       redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
