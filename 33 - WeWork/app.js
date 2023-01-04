// Getting all the element

const ham = document.querySelector('.ham');
const x = document.querySelector('.ham-close');
const openNav = document.querySelector('.open-navbar');
const imageEl = document.querySelector('.carousel');
const leftArrow = document.getElementById('left')
const rightArrow = document.getElementById('right');
let topTitle = document.querySelector('.top-title');
const dropMenu = document.querySelectorAll('#country-state');
const flagEl = document.getElementById('flag');
setTimeout(() => {
    topTitle.style.display = 'none';
}, 3000);
ham.addEventListener('click',() => {
    openNav.classList.add('active');
});
x.addEventListener('click',() => {
    openNav.classList.remove('active');
});
const imagesEl = [
    { url: 'image/1.jpg'},
    { url: 'image/2.jpg'},
    { url: 'image/3.jpg'},
    { url: 'image/4.jpg'},
    { url: 'image/5.jpg'},
    { url: 'image/6.jpg'},
    { url: 'image/7.jpg'},
    { url: 'image/8.jpg'}
];
let count = 0;
renderCarousel(count);
rightArrow.addEventListener('click', () => {
    if(count<imagesEl.length){
        count++;
        renderCarousel(count);
    }
    else{
        count = 0;
        renderCarousel(count);
    }
})
leftArrow.addEventListener('click', () => {
    if(count === 0){
        count=imagesEl.length -1 ;
        renderCarousel(count);
    }
    else{
        count--;
        renderCarousel(count);
    }
})
function renderCarousel(count){
    imageEl.style.background = `url("${imagesEl[count].url}")`;
    imageEl.style.backgroundPosition = `center`;    
    imageEl.style.backgroundSize = `cover`;
    imageEl.style.backgroundRepeat = `no-repeat`;    

}
setInterval(() => {
    if(count <= imagesEl.length){
        count++;
        renderCarousel(count);
    }
    else{
        count = 0;
        renderCarousel(count);
    }
},3000);

dropMenu.forEach(menu => {
    countrySet(menu);
})

function countrySet(Menu){
fetch("https://restcountries.com/v3.1/all").then(res => {
    return res.json();
}).then(data => {
    let output = '';
    data.forEach(country => {
        output += `<option>${country.name.common} ${country.flag}</option>`
    });
    Menu.innerHTML += output;
}).catch(err => {
    console.log(err);
});
}
flagDropDown();
function flagDropDown(){
    fetch("https://restcountries.com/v3.1/all").then(res => {
        return res.json();
    }).then(data => {
        let show = '';
        data.forEach(country => {
            show += `<option>${country.flag}</option>`;
        });
        flagEl.innerHTML += show;
    }).catch(err => {
        console.log(err);
    });
}




// Scroll Snap effect
const wrapper = document.querySelector('.wrapper-slide')
let pressed = false,
startX = 0;


wrapper.addEventListener('mousedown', function(e){
    pressed = true;
    startX = e.clientX;
});
wrapper.addEventListener('mouseleave', function(e){
    pressed = false;
});
window.addEventListener('mouseup', function (e){
    pressed = false;    
})
wrapper.addEventListener('mousemove', function(e){
    if(!pressed){
        return 
    }
    this.scrollLeft += startX - e.clientX;
});




