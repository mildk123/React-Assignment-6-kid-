import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import firebase from "firebase";



// var config = {
//   apiKey: "AIzaSyBsG8fFno4QcDiQUG_rGMbfOOWlqbb8aqk",
//   authDomain: "r-quizapp.firebaseapp.com",
//   databaseURL: "https://r-quizapp.firebaseio.com",
//   projectId: "r-quizapp",
//   storageBucket: "r-quizapp.appspot.com",
//   messagingSenderId: "701947553138"
// };
// firebase.initializeApp(config);



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
