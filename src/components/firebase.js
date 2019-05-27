import firebase from 'firebase';
//import 'firebase/firebase-firestore'
var config = {
    apiKey: "AIzaSyAKPkYLaegcUjtbMuwJsSVp0SUqqHq5mmQ",
    authDomain: "burger-queen-1eb9a.firebaseapp.com",
    databaseURL: "https://burger-queen-1eb9a.firebaseio.com",
    projectId: "burger-queen-1eb9a",
    storageBucket: "burger-queen-1eb9a.appspot.com",
    messagingSenderId: "840604359126",
    appId: "1:840604359126:web:785af717d770139c"
  };

  // Initialize Firebase
firebase.initializeApp(config);

export default firebase;
