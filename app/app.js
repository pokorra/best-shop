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

// scrolling
const main = document.querySelector('#main');
const why = document.querySelector('#why');
const benefits = document.querySelector('#benefits');
const prices = document.querySelector('#prices');
const contact = document.querySelector('#contact');
const best = document.querySelector('.logo_best_shop');

const toWhy =  document.querySelector('.to-why');
const toBens =  document.querySelector('.to-bens');
const toPrices = document.querySelector('.to-prices');
const toCont =  document.querySelector('.to-cont');
const toTop =  document.querySelector('.to-top');


function Smooth(from, to){
    to.addEventListener('click', ()=>{
        from.scrollIntoView({behavior: "smooth"});
        console.log(from, to);
    })
};

Smooth(why, toWhy);
Smooth(benefits, toBens);
Smooth(prices, toPrices);
Smooth(contact, toCont);
Smooth(main, toTop);
Smooth(main, best);
