var firebaseConfig = {
    apiKey: "AIzaSyB2kIm--sP96KzeKhvNiCbbv-5WQ9iLhPw",
    authDomain: "redesocial-748fc.firebaseapp.com",
    databaseURL: "https://redesocial-748fc-default-rtdb.firebaseio.com",
    projectId: "redesocial-748fc",
    storageBucket: "redesocial-748fc.appspot.com",
    messagingSenderId: "587453726972",
    appId: "1:587453726972:web:65a063d62ca2aa5a0d5779"
  };


firebase.initializeApp(firebaseConfig);


function addUser(){
 Name = document.getElementById("userName").value;
 //localStorage.setItem("user",Name);
 firebase.database().ref("/").child(Name).update({
    purpose : "adicionar nome "
  });
 window.location ="kwitterRoom.html"
}
