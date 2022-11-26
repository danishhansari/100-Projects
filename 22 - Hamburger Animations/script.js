// let button = document.querySelector('.button-1')
// let menuOpen = false;
// button.addEventListener('click', () => {
//     button.classList.toggle('active')
//     console.log("open");
// })

const buttonThree = document.querySelector('.button-three');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
button.addEventListener('click',() => { 
    const CurrentState = button.getAttribute('data-state');   
    if(!CurrentState || CurrentState === 'closed'){
        button.setAttribute('aria-expanded', 'true');
        button.setAttribute('data-state','opened')
    }
    else{
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('data-state','closed');
    }
})
})




