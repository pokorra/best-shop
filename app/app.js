const toggleButton = document.querySelector('.hamburger');
const navLinks = document.querySelector('.menu_nav');
const menuContainer = document.querySelector('.menu')
const hamSpans = document.querySelectorAll('.ham-span');

toggleButton.addEventListener('click', ()=>{
    navLinks.classList.toggle('active')
    menuContainer.classList.toggle('wider')
    hamSpans.forEach((item) => {
        item.classList.toggle('span-cross')
    } )
})