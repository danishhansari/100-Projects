const menu = document.querySelector(".ham");
const nav  = document.querySelector(".list");
let menuOpen = false;
menu.addEventListener('click',() =>{
    if(!menuOpen){
        menu.classList.add('active')
        menuOpen = true;
        nav.classList.add('open');
    }
    else{
        menu.classList.remove('active');
        menuOpen = false;
        nav.classList.remove('open');
    }
})