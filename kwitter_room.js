
//ADD YOUR FIREBASE LINKS
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTgYYOsJAEf8rtfPwu2XLfHN0fPlXBM1s",
  authDomain: "test-6b314.firebaseapp.com",
  databaseURL: "https://test-6b314-default-rtdb.firebaseio.com",
  projectId: "test-6b314",
  storageBucket: "test-6b314.appspot.com",
  messagingSenderId: "425349772283",
  appId: "1:425349772283:web:6b3078c47b21f0ce32515e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user.name,
  message:msg,
  like:0

});
document.getElementById("msg").value="";
}