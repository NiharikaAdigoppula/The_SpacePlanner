document.addEventListener('DOMContentLoaded', () => {
    displayUserDetails();
    setupLogoutButtons();
});

function displayUserDetails() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    if (user) {
        // Display user details if they exist
        fullName.textContent = `${user.firstName} ${user.lastName}`;
        email.textContent = user.email;
        phone.textContent = user.phone;
    } else {
        // Redirect to login page if no user is logged in
        alert('No user is currently logged in.');
        window.location.href = 'login.html';
    }
}

function setupLogoutButtons() {
    const logoutButtons = document.querySelectorAll('.logout');
    logoutButtons.forEach(button => {
        button.addEventListener('click', logoutUser);
    });
}

function logoutUser() {
    localStorage.removeItem('loggedInUser'); // Clear user data from localStorage
    alert('You have been logged out.');
    window.location.href = 'index.html'; // Redirect to homepage or login page
}
