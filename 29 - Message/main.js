let form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    let input = document.querySelector('.text');
    let alertt = document.querySelector('.alert');
    let message = document.querySelector('.msg');
    if(input.value === ''){
        alertt.classList.add('show');
        setTimeout(function(){
            alertt.classList.remove('show');
        },4000)
    }
    else{
        message.textContent = input.value;
        input.value = '';
    }
})
()