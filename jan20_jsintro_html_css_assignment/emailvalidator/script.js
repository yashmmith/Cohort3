let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

let emailError = document.querySelector("#emailerror");
let passwordError = document.querySelector("#passworderror");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    emailError.textContent = "";
    passwordError.textContent = "";
    emailError.style.display = "none";
    passwordError.style.display = "none";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailValid = emailRegex.test(email.value);
    let passwordValid = passwordRegex.test(password.value);

    if (!emailValid) {
        emailError.textContent = "Invalid email format";
        emailError.style.display = "block";
    }

    if (!passwordValid) {
        passwordError.textContent =
            "Password must be 8+ chars, include uppercase, lowercase, number & symbol";
        passwordError.style.display = "block";
    }

    if (emailValid && passwordValid) {
        alert("Validation Successful ✅");
        form.reset();
    }
});


