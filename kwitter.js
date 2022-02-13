function Login() {
    user_name= document.getElementById("Username_inputbox").value;
    localStorage.setItem("username", user_name);
    window.location="kwitter_room.html";
}