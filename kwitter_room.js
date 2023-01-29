
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDVZ6Z7Et2cWFXX7fmHCxjJZIamGm3o7zU",
      authDomain: "kwitter-d6e77.firebaseapp.com",
      databaseURL: "https://kwitter-d6e77-default-rtdb.firebaseio.com",
      projectId: "kwitter-d6e77",
      storageBucket: "kwitter-d6e77.appspot.com",
      messagingSenderId: "288464219815",
      appId: "1:288464219815:web:f35cf93457b4f56de2b582"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "+Room_names);
row="<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter_room.html";
}

