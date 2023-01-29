//YOUR FIREBASE LINKS
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

    user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
like=message_data["like"];
message=message_data["message"];
name=message_data["name"];

name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id +" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("Clicked on like button"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes 
      });


}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
 }




