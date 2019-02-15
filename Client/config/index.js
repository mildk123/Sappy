
import firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAOFzLyTCwGSev50MXUYRsOGuZHuOtpTU4",
    authDomain: "sappy-3e1b0.firebaseapp.com",
    databaseURL: "https://sappy-3e1b0.firebaseio.com",
    projectId: "sappy-3e1b0",
    storageBucket: "sappy-3e1b0.appspot.com",
    messagingSenderId: "570661165157"
  };
  firebase.initializeApp(config);

export default firebase;