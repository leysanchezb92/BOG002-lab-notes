import React from 'react';
import ReactDOM from 'react-dom';
import RouterPaths from './router';
import reportWebVitals from './reportWebVitals';
import { firebaseObj as firebaseConfig } from './firebase-config';
import { FirebaseAppProvider } from 'reactfire';

ReactDOM.render((
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <RouterPaths />
    </React.StrictMode>
  </FirebaseAppProvider>
  ),document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
