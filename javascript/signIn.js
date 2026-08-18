
let form = document.getElementById("registerForm");

let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    setTimeout(function() {
        window.location.href = "../index.html";
    }, 1000);
    
});