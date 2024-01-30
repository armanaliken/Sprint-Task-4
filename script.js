function goToRegister() {
    document.getElementById("login-or-username").innerHTML =
        "<a id=\"login-or-username\" onclick=\"goToLogin()\" href=\"#\"><h3>Login</h3></a>";
    document.getElementById("register-or-logout").innerHTML =
        "<a id=\"register-or-logout\" onclick=\"goToRegister()\" href=\"#\"><h3>Register</h3></a>";
    document.getElementById("form").innerHTML =
        "   <div class=\"form\">\n" +
        "        <p>EMAIL:</p>\n" +
        "        <input id=\"email\" type=\"text\">\n" +
        "        <p>PASSWORD:</p>\n" +
        "        <input id=\"password\" type=\"password\">\n" +
        "        <p>FULL NAME:</p>\n" +
        "        <input id=\"name\" type=\"text\">\n" +
        "        <p>COUNTRY:</p>\n" +
        "        <select id=\"country\" name=\"country\">\n" +
        "            <option value=\"KAZAKHSTAN\">KAZAKHSTAN</option>\n" +
        "            <option value=\"RUSSIA\">RUSSIA</option>\n" +
        "            <option value=\"USA\">USA</option>\n" +
        "        </select>\n" +
        "        <p>DATE OF BIRTH:</p>\n" +
        "        <input id=\"birthdate\" type=\"date\">\n" +
        "        <br>\n" +
        "        <button id=\"sign-in\" onclick=\"registerUser()\">SIGN IN</button>\n" +
        "    </div>";
}

function goToLogin() {
    document.getElementById("login-or-username").innerHTML =
        "<a id=\"login-or-username\" onclick=\"goToLogin()\" href=\"#\"><h3>Login</h3></a>";
    document.getElementById("register-or-logout").innerHTML =
        "<a id=\"register-or-logout\" onclick=\"goToRegister()\" href=\"#\"><h3>Register</h3></a>";
    document.getElementById("form").innerHTML =
        "   <div class=\"form\" id=\"form\">\n" +
        "        <p>EMAIL:</p>\n" +
        "        <input id='email' type=\"text\">\n" +
        "        <p>PASSWORD:</p>\n" +
        "        <input id='password' type=\"password\">\n" +
        "        <br>\n" +
        "        <button onclick='login()'>SIGN IN</button>\n" +
        "    </div>";
}

function registerUser() {
    let email = document.getElementById("email").value;
    let user = {
        "email": email,
        "password": document.getElementById("password").value,
        "name": document.getElementById("name").value,
        "country": document.getElementById("country").value,
        "birthdate": document.getElementById("birthdate").value
    }

    localStorage.setItem(email, JSON.stringify(user));
    alert("Success! Now you can login...")
    goToLogin();
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = localStorage.getItem(email);

    if (user == null) {
        alert("User with this email not registered! Please try again or sign up!");
    } else if (JSON.parse(user).password === password) {
        goToWelcomePage(email);
    } else {
        alert("Incorrect password. Please try again!");
    }
}

function goToWelcomePage(email) {
    let user = JSON.parse(localStorage.getItem(email));

    document.getElementById("login-or-username").innerHTML =
        "            <div  id=\"login-or-username\" >\n" +
        "                <a href=\"#\"><h3>" + user.name + "</h3></a>\n" +
        "            </div>";
    document.getElementById("register-or-logout").innerHTML =
        "           <div id=\"register-or-logout\">\n" +
        "                <a onclick=\"goToLogin()\" href=\"#\"><h3>Logout</h3></a>\n" +
        "            </div>";
    document.getElementById("form").innerHTML =
        "   <div class=\"welcome\">\n" +
        "        <h1>Welcome, " + user.name + "!</h1>\n" +
        "        <br>\n" +
        "        <br>\n" +
        "        <p>EMAIL:</p>\n" +
        "        <p><b>" + email + "</b></p>\n" +
        "        <p>FULL NAME:</p>\n" +
        "        <p><b>" + user.name + "</b></p>\n" +
        "        <p>COUNTRY:</p>\n" +
        "        <p><b>" + user.country + "</b></p>\n" +
        "        <p>BIRTHDATE:</p>\n" +
        "        <p><b>" + user.birthdate + "</b></p>\n" +
        "    </div>";
}