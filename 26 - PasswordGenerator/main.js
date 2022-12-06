let text = document.querySelector('#text');
document.querySelector('.btn').addEventListener('click',showPass);
function showPass(){
    let string = "abcdefghijklmnopqrstuvwxyz1234567890~!@#$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    for(let i =0 ; i<=12;i++){
        let ans = Math.floor(Math.random()*string.length);
        password += string.substring(ans,ans+1);   
    }
 text.value = password;
}