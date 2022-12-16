let body = document.querySelector('.main');
let btn = document.querySelector('#btn');
btn.addEventListener('click',colorChange);

function randomNumber(){
    return Math.floor(Math.random() * 255);
}
function colorChange(){
    let red = randomNumber();
    let green = randomNumber(); 
    let blue = randomNumber();
    let color = `rgb(${red},${green},${blue})`
    console.log(color);
    body.style.background = color;
}