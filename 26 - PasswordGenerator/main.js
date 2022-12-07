let text = document.querySelector('#text');
let pass1 = document.querySelector('.pass-1');
let pass2 = document.querySelector('.pass-2');
let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    showPass()
    showPass2()
})
function showPass(){
    let string = "abcdefghijklmnopqrstuvwxyz1234567890~!@#$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    for(let i =0 ; i<=12;i++){
        let ans = Math.floor(Math.random()*string.length);
        password += string.substring(ans,ans+1);   
    }
    pass1.innerText = password;
}
function showPass2(){
    let string = "abcdefghijklmnopqrstuvwxyz1234567890~!@#$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    for(let i =0 ; i<=12;i++){
        let ans = Math.floor(Math.random()*string.length);
        password += string.substring(ans,ans+1);   
    }
    pass2.innerText = password;
}