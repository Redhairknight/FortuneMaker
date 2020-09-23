
import * as firebase from "firebase";
import 'firebase/firestore';
import { React } from "react";


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB97d2vcGhUCuesj609g7MTViqLCONehfw",
    authDomain: "deco7180-1a385.firebaseapp.com",
    databaseURL: "https://deco7180-1a385.firebaseio.com",
    projectId: "deco7180-1a385",
    storageBucket: "deco7180-1a385.appspot.com",
    messagingSenderId: "728515436174",
    appId: "1:728515436174:web:54a804d907d14cef40f3df",

  };


var loadingComplete = false;

if (firebase.apps.length == 0) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    if (firebase.app().name == '[DEFAULT]') {
        loadingComplete = true

    }
};


export {
    loadingComplete,
}