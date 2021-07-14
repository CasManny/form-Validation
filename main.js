const form = document.getElementById("form");
const username = document.querySelector(".username-input");
const email = document.querySelector(".email-input");
const password = document.querySelector(".password-input");
const password2 = document.querySelector(".password2-input");

form.addEventListener("submit",checkForm);

function checkForm(e) {
    e.preventDefault();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if(usernameValue === '') {
        showError(username,"username cannot be blank");
    } else if(usernameValue.length < 8) {
        showError(username, "username must be atleast 8 characters")
    } else {
        showSuccess(username)
    }
    if(!checkEmail(emailValue)) {
        showError(email, "email address not valid")
    } else {
        showSuccess(email)
    }
    
    if(passwordValue === "") {
        showError(password,"password cannot be blank")
    } else {
        showSuccess(password);
    }
    if(password2Value === "") {
        showError(password,"password cannot be blank")
    } else {
        showSuccess(password2);
        
    }
    if(password2Value !== passwordValue) {
        showError(password2, "password don't match")
    }

}

function showError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector(".message");
    small.textContent = message;
    formControl.className = "form-control error";
}


function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control correct";
    
}

function checkEmail(email) {
  const regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const tested = regex.test(email)
  return tested;
}


