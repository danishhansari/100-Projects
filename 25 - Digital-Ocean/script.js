// Navigation & Hamburger

const menu = document.querySelector(".ham");
const nav  = document.querySelector(".items");
menu.addEventListener('click',() => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
})

// FAQ
const faqs = document.querySelectorAll('.faq')

faqs.forEach((faq) => {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('active');
    })
})