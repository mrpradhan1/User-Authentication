document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logout-btn");
    const details = document.getElementById("profile-details");

    // Retrieve user details from local storage
    const username = localStorage.getItem("username");
    const emailID = localStorage.getItem("emailID");
    const accessToken1 = localStorage.getItem("access_token");
    const password = localStorage.getItem("password");

    // Create and append elements to display user details
    const PElement = document.createElement("p");
    PElement.textContent = "Full Name: " + username;
    const emailElement = document.createElement("p");
    emailElement.textContent = "Email: " + emailID;
    const Token = document.createElement("p");
    Token.textContent = "Token: " + accessToken1;
    const Password = document.createElement("p");
    Password.textContent = "Password: " + password;

    details.appendChild(PElement);
    details.appendChild(emailElement);
    details.appendChild(Token);
    details.appendChild(Password);

    // Handle Logout
    logoutButton.addEventListener("click", function () {
        // Clear local storage and redirect to the signup page
        localStorage.removeItem("username");
        localStorage.removeItem("emailID");
        localStorage.removeItem("password");
        localStorage.removeItem("access_token");
        window.location.href = "index.html";
    });
});
