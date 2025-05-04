const firebaseConfig = {
    apiKey: "AIzaSyDYY7n7b7BqeunhFuzDJk7aWRnqXfcNcVU",
    authDomain: "fir-auth-af81d.firebaseapp.com",
    projectId: "fir-auth-af81d",
    storageBucket: "fir-auth-af81d.firebasestorage.app",
    messagingSenderId: "140903808832",
    appId: "1:140903808832:web:02743d5c663214073a84a5",
    measurementId: "G-DSP0H22J8E"
  };
  firebase.initializeApp(firebaseConfig);

var email = document.getElementById("email");
var password = document.getElementById("password");
var signUpButton = document.getElementById("signUpButton");

signUpButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(email.value, password.value);
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email.value, password.value)
      .then(function() {
        // Redirect the user to the protected resources page
        window.location.href = "/firebase-auth/home.html";
        console.log("User created successfully");
      })
      .catch(function(error) {
        // Show an error message
        console.log(error);
        alert(error.message);
      });
  });