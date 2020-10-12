const toggleButton = document.querySelector('.hamburger');
const navLinks = document.querySelector('.menu_nav');
const menuContainer = document.querySelector('.menu')

toggleButton.addEventListener('click', ()=>{
    navLinks.classList.toggle('active')
    menuContainer.classList.toggle('wider')
})