const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const pmAm = document.querySelector('.pm-am');


const clock = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    if(hr<10){
        hr = '0' + hr;
    }
    if(sec<10){
        sec = '0' + sec;
    }
    if(min<10){
        min = '0' + min;
    }
    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
},1000);
const data = new Date();
let hr = data.getHours();
if(hr>12)
pmAm.textContent = 'PM'
else
pmAm.textContent = 'AM';
