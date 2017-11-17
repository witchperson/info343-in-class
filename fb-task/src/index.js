import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB3_o8DxL0JNZnUd3FjI7FU4Drtg35F9-o",
    authDomain: "info343-task.firebaseapp.com",
    databaseURL: "https://info343-task.firebaseio.com",
    projectId: "info343-task",
    storageBucket: "info343-task.appspot.com",
    messagingSenderId: "295188582522"
  };
firebase.initializeApp(config);

firebase.auth().signInAnonymously()
    .then(()=>{
        ReactDOM.render(<App />, document.getElementById('root'));
        registerServiceWorker();
    })
    .catch(err=>console.log(err));