import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDxMtk7A3f12eq-9wcdM9IrMWDMWkcjVJ8",
  authDomain: "teamvotingapp-7e7fc.firebaseapp.com",
  databaseURL: "https://teamvotingapp-7e7fc-default-rtdb.firebaseio.com",
  projectId: "teamvotingapp-7e7fc",
  storageBucket: "teamvotingapp-7e7fc.appspot.com",
  messagingSenderId: "864431226611",
  appId: "1:864431226611:web:7f5df1d95ca0261cab0186"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();