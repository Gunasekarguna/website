
function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (username === "" || password === "") {
    errorMessage.textContent = "Both fields are required.";
    return false;
  }

  if (username === "admin" && password === "admin123") {
    alert("Login successful!");
    return true;
  } else {
    errorMessage.textContent = "Invalid username or password.";
    return false;
  }
}
