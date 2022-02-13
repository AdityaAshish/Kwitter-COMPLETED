
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

user_name= localStorage.getItem("username");
document.getElementById("user_name_h3").innerHTML="Welcome  "+"<b>"+user_name+"</b>";
function addroom() {
room_name=document.getElementById("Addroom_textbox").value
firebase.database().ref("/").child(room_name).update({
      purpose:"adding roomname"
});
localStorage.setItem("roomname", room_name);
window.location="kwitterpage.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname="+Room_names);
row= "<div class='room-name'id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="kwitter.html";
}

function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location= "kwitterpage.html";
}
