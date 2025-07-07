function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
      alert("Login successful!");
      window.location.href = "welcome.html";
    } else {
      errorMsg.textContent = "Invalid username or password!";
    }
  }