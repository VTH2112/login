// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBLSWi7nXFX02JJk4fseA5Rb5TUDpxY0ME",
    authDomain: "login-94d38.firebaseapp.com",
    projectId: "login-94d38",
    storageBucket: "login-94d38.appspot.com",
    messagingSenderId: "648122172961",
    appId: "1:648122172961:web:91a910f266b5140b7a0560",
    measurementId: "G-0672ZHP66W"
  };
  // Initialize Firebase
  const firebaseDB = firebase.initializeApp(firebaseConfig);
  const firebaseAnalytics = firebase.analytics();

  export{ firebaseDB ,  firebaseAnalytics};