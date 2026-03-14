document.getElementById("signIn-btn").addEventListener('click', function() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameValue = username.value;
    const pwdValue = password.value;

    if (usernameValue === "admin" && pwdValue === "admin123") {
        window.location.href = "home.html";
        // window.location.assign('./home.html');
        username.value = "";
        password.value = "";
    }
    else {
        alert("Sign In Failed, Try Again");
        username.value = "";
        password.value = "";
        return;
    }
})

