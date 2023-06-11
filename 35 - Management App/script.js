let hamburger = document.querySelector(".ham");
let mobileList = document.querySelector(".mobile-list");
hamburger.addEventListener("click" ,() =>{
    hamburger.classList.toggle("active");
    mobileList.classList.toggle("active")
});

