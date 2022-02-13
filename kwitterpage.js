//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD9mQnBm4O40C_CIXF89rBXVFceFRFi7Lw",
      authDomain: "kwitter-bc148.firebaseapp.com",
      databaseURL: "https://kwitter-bc148-default-rtdb.firebaseio.com",
      projectId: "kwitter-bc148",
      storageBucket: "kwitter-bc148.appspot.com",
      messagingSenderId: "200000766482",
      appId: "1:200000766482:web:5f43d11ae57771eec5cecb"
    };
    
firebase.initializeApp(firebaseConfig);

var user_name =localStorage.getItem("username");
var room_name = localStorage.getItem("roomname");

function send(){
      var msg = document.getElementById("msg_textbox").value;
      firebase.database().ref(room_name).push({
            name: user_name, message: msg, like: 0
      });
      document.getElementById("msg_textbox").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name= message_data["name"];
message= message_data["message"];
like= message_data["like"];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button= "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";
row= name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row
//End code
      } });  }); }
getData();



function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location.replace("kwitter.html");

}
function updateLike(message_id) {
      console.log("like_button clicked"+ message_id)
      button_id=message_id
      likes=document.getElementById(button_id).value;
      updated_likes= Number(likes)+1;
      console.log("updated likes="+updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}



