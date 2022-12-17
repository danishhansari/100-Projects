let count = document.querySelector('.count');
let lower = document.querySelector('.loBtn');
let upper = document.querySelector('.upBtn');
let number = 0;
lower.addEventListener('click', function(){
   number--;
   if(number<0){
    count.style.color = 'red';
   }
   else if(number===0){
      count.style.color = 'black';      
   }
   else
   count.style.color = 'green';
   count.textContent = number; 
})
upper.addEventListener('click', function(){
    number++;
    if(number>0){
        count.style.color = 'green';
   }
   else if(number===0){
      count.style.color = 'black';      
   }
       else
         count.style.color = 'red'
         count.textContent = number; 
 })