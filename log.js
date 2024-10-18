// script.js


// Add additional JavaScript code here



const container = document.querySelector('.container');
const signUpButton = document.getElementById('register');
const signInButton = document.getElementById('login');

signUpButton.addEventListener('click', () => {
    container.classList.add('active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('active');
});

// Add additional JavaScript code here

// Add animation to the page
const header = document.querySelector('header');
const navbar = document.querySelector('.navbar');
const navbarLogo = document.querySelector('.navbar-logo');
const navItem = document.querySelectorAll('.nav-item');
const dropdown = document.querySelectorAll('.dropdown');
const containerForm = document.querySelector('.container form');
const inputFields = document.querySelectorAll('input');
const buttons = document.querySelectorAll('button');

// Add animation to the header
header.style.animation = 'fadeIn 2s';

// Add animation to the navbar
navbar.style.animation = 'slideIn 2s';

// Add animation to the navbar logo
navbarLogo.style.animation = 'rotate 2s';

// Add animation to the nav items
navItem.forEach((item) => {
  item.style.animation = 'fadeIn 2s';
});

// Add animation to the dropdown
dropdown.forEach((item) => {
  item.style.animation = 'fadeIn 2s';
});

// Add animation to the container form
containerForm.style.animation = 'fadeIn 2s';

// Add animation to the input fields
inputFields.forEach((field) => {
  field.style.animation = 'fadeIn 2s';
});

// Add animation to the buttons
buttons.forEach((button) => {
  button.style.animation = 'fadeIn 2s';
});
