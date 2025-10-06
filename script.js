
const form = document.getElementById("form");
const Username = document.getElementById("Username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const lognMenu = document.getElementById("loginMenu");

const Username_error = document.getElementById("Username");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");

form.addEventListener("submit", (e) => {
    const email_check = /^[a-zA-Z0-9._%+-]+@[a-zA-AZ0-9.-]+=\.[a-zA-Z]{2,}$/;

    if(Username.value == null || Username.value == ""){
        e.preventDefault();
        Username_error.innerHTML = "Username can't be Blank";
    }
    else{
        Username_error.innerHTML = "";
    }

    if( email.test(email_check)|| email.value == null || email.value == ""){
        e.preventDefault();
        email_error.innerHTML = "Invalid Email Address";
    }
    else{
        email.innerHTML = "";
    }

    if(password.value == null || password.value == ""){
        e.preventDefault();
        password_error.innerHTML = "Check your Password";
    }
    else{
        password_error.innerHTML = "";
    }
})

