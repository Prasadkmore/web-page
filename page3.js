// Function to check password strength
function checkPasswordStrength(password) {
    // Regular expression for strong password (min 8 characters, mix of letters, numbers, special chars)
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

// Function to handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting immediately
    event.preventDefault();

    // Get the username and password values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if both fields are filled
    if (username.trim() === "" || password.trim() === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Check password strength
    if (!checkPasswordStrength(password)) {
        alert("Password is not strong enough. It should have at least 8 characters, including a mix of upper/lowercase letters, numbers, and special characters.");
        return;
    }

   
    console.log("Username:", username);
    console.log("Password:", password);


});

document.getElementById("password").addEventListener("input", function(event) {
    const password = event.target.value;
    const strengthMessage = document.getElementById("password-strength-message");

    if (checkPasswordStrength(password)) {
        strengthMessage.textContent = "Password strength: Strong";
        strengthMessage.style.color = "green";
    } else {
        strengthMessage.textContent = "Password strength: Weak";
        strengthMessage.style.color = "red";
    }
});
