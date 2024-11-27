const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Show registration form
registerLink.addEventListener('click', () => {
    wrapper.classList.add('active'); // Add 'active' class to show registration form
});

// Show login form
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active'); // Remove 'active' class to show login form
});

// Open popup
btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup'); // Show popup
});

// Close popup
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup'); // Hide popup
});