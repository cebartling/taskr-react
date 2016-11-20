import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from "firebase";
import "bootstrap/dist/css/bootstrap-flex.css"

const config = {
    apiKey: "AIzaSyB4kZD9hoMFucDLj9Oaz2XD6IguEUx3Owo",
    authDomain: "taskr-demo.firebaseapp.com",
    databaseURL: "https://taskr-demo.firebaseio.com",
    storageBucket: "taskr-demo.appspot.com",
    ymessagingSenderId: "1082586470711"
};
firebase.initializeApp(config);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
