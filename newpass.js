// const baseUrl = "http://localhost:4000/api/user/";
const baseUrl = "https://finish-api.onrender.com/api/user/";

loadEmailFromCache();

function loadEmailFromCache() {
    const email = localStorage.getItem("temp-email");
    if (email) {
        document.getElementById("email-text").innerText = localStorage.getItem("temp-email");
    } else {
        window.location.href = "restpass.html";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // add the email value from catch to the email input

    const passwordInputs = document.querySelectorAll("input[type='password']");
    const toggleButtons = document.querySelectorAll(".eye");

    toggleButtons.forEach(function (toggleButton, index) {
        toggleButton.addEventListener("click", function () {
            const passwordInput = passwordInputs[index];
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                toggleButton.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
            } else {
                passwordInput.type = "password";
                toggleButton.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
            }
        });
    });

    const resetPasswordForm = document.getElementById("resetPasswordForm");
    resetPasswordForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const code = document.getElementById("code").value;
        const password = document.getElementById("password").value;
        const passwordConfirm = document.getElementById("passwordConfirm").value;

        const data = {
            code, password, passwordConfirm, email: localStorage.getItem("temp-email"),
        };

        fetch(baseUrl + 'resetPassword', {
            method: 'PATCH', headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(data),
        })
        .then((res) => {
            console.log("response: " + res);
            if (!res.ok) {
                throw res;
            }
            window.location.href = "login.html";
        }).catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});
