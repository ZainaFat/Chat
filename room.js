
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBBke1yR_h-ITQKrJZUlwa1Ay5583lyc6s",
    authDomain: "letschat-6cf7d.firebaseapp.com",
    databaseURL: "https://letschat-6cf7d-default-rtdb.firebaseio.com",
    projectId: "letschat-6cf7d",
    storageBucket: "letschat-6cf7d.appspot.com",
    messagingSenderId: "373929065735",
    appId: "1:373929065735:web:0d2c38da505049fd82d9a2",
    measurementId: "G-Y7BBZQ2MJD"
  };
  //Initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "page.html";
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
      window.location = "page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "login.html";
  }
  