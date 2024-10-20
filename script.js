const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.menu ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});