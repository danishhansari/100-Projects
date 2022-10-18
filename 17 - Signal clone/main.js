const menuBtn = document.querySelector('.ham');
const nav= document.querySelector('.ul-group');
let menuOpen = false;
menuBtn.addEventListener('click',() => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        nav.classList.add('open');
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
        nav.classList.remove('open');
    }
})
