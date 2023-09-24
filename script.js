// Get references to HTML elements
const signupForm = document.getElementById("signup-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById('emailID');
const passwordInput = document.getElementById("password");
const confPasswordInput = document.getElementById("conf-psw");
const signupMessage = document.getElementById("signup-message");

// const logoutButton = document.getElementById("logout-btn");

// Check if the user is already logged in (has an access token)
const accessToken = localStorage.getItem("access_token");

if (accessToken) {
    // User is logged in, redirect to the profile page
    window.location.href = "profile.html";
}

// Handle Signup Form Submission
signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
console.log("hi");
    // Get user input
    const username = usernameInput.value;
    const emailID= emailInput.value;
    const password = passwordInput.value;
    const confirmpassword = confPasswordInput.value;

    // Validate input (add more validation as needed)
    if (!username || !password || !emailID || !confirmpassword) {
        signupMessage.textContent = "Please fill in all fields.";
        return;
    }
    if(password!==confirmpassword){
        signupMessage.textContent = "Please confirm your Password";
        return;
    }

    // Generate a random 16-byte access token (hexadecimal)
    const accessToken = Array.from({ length: 16 }, () =>
        Math.floor(Math.random() * 256).toString(16).padStart(2, "0")
    ).join("");

    // Store user data in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("emailID", emailID);
    localStorage.setItem("password",password);
    localStorage.setItem("access_token", accessToken);

    // Display success message and redirect to the profile page
    signupMessage.textContent = "Signup successful!";
    setTimeout(() => {
        window.location.href = "profile.html";
    }, 1000);
});

// Check if the user is logged in on the profile page
if (!accessToken) {
    // User is not logged in, redirect to the signup page
    window.location.href = "index.html";
} else{
    window.location.href = "profile.html";
}
    
