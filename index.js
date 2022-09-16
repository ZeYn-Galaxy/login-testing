let submit = document.getElementById("submit");
let username = document.getElementById("Username");
let password = document.getElementById("Password");

submit.addEventListener('click', (e) => {
    let valName = username.value;
    let valPass = password.value;
    let admin = "Admin";
    let passAdmin = "admin123";

    if (valName != "" && valPass != ""){
        if (valName == admin && valPass == passAdmin){
            alert("Login Berhasil!");
        }
    }
})