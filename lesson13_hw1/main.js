//Helpers
const phoneRegex = /^\+380\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Main Script
const orderForm = document.querySelector("#orderForm");
const formInfo = {};

function validateForm() {
    let isValid = true;

    if (!formInfo.userName) {
        document.querySelector("#userNameError").innerHTML = "Please enter username!";
        isValid = false;
    }

    if (!formInfo.message) {
        document.querySelector("#messageError").innerHTML = "Please enter message!";
        isValid = false;
    } else if (formInfo.message.length < 5) {
        document.querySelector("#messageError").innerHTML = "The message cannot be less than 5 characters!";
        isValid = false;
    }

    if (!formInfo.userPhone) {
        document.querySelector("#userPhoneError").innerHTML = "Please enter phone number!";
        isValid = false;
    } else if (!phoneRegex.test(formInfo.userPhone)) {
        document.querySelector("#userPhoneError").innerHTML = "Enter a valid phone number!";
        isValid = false;
    }

    if (!formInfo.userEmail) {
        document.querySelector("#userEmailError").innerHTML = "Please enter email!";
        isValid = false;
    } else if (!emailRegex.test(formInfo.userEmail)) {
        document.querySelector("#userEmailError").innerHTML = "Enter a valid email!";
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    document.querySelector("#userNameError").innerHTML = "";
    document.querySelector("#messageError").innerHTML = "";
    document.querySelector("#userPhoneError").innerHTML = "";
    document.querySelector("#userEmailError").innerHTML = "";
}

orderForm.addEventListener("submit", (e) => {
    e.preventDefault();

    clearErrors();

//Отримання даних
    formInfo.userName = orderForm.querySelector("#userName").value.trim();
    formInfo.message = orderForm.querySelector("#message").value.trim();
    formInfo.userPhone = orderForm.querySelector("#userPhone").value.trim();
    formInfo.userEmail = orderForm.querySelector("#userEmail").value.trim();
    formInfo.btn = orderForm.querySelector("#btn").value;

//Валідація і логіка
    if (validateForm()) {
        console.log("User Data:", formInfo);
        orderForm.reset();
    } else {
        console.log("Form data is invalid!");
    }
});