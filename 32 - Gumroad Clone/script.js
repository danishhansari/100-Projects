// Elements

let button = document.querySelector('.button');
let open = false;
let navbar = document.querySelector('.navbar');
let openLogo = document.querySelector('.open-logo');
let closeLogo = document.querySelector('.close-logo');
closeLogo.style.display = "none";
let list = document.querySelector('.list');
button.addEventListener('click',() => {
    if(open ==false){
        navbar.style.backgroundColor = "black"
        button.classList.add('open');
        closeLogo.style.display = 'block';
        openLogo.style.display="none";
        open = true;
        list.style.display = "block";
    }
    else{
        navbar.style.backgroundColor = "white"
        openLogo.style.display = 'block';
        closeLogo.style.display = 'none';
        button.classList.remove('open');
        open = false;
        list.style.display = "none";
    }
})