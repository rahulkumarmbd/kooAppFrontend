import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Check } from './App';
import { VerificationContextProvider } from './koo_app/components/Context/verificationContextProvider'
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App /> */}
    <VerificationContextProvider>
       <Check />
    </VerificationContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
