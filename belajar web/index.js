const menuToggle = document.querySelector('.menu-toggel input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('geser');
});