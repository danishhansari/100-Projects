const filterButtons = document.querySelectorAll(".filter-btn");
const filterImages = document.querySelectorAll(".filter-img");
const contentElements = document.querySelectorAll(".who-uses .content");
const removeClass = (elements) => {
  elements.forEach(element => {
    element.classList.remove("active");
  });
};
const addClass = (element, className) => {
  element.classList.add(className);
};
const handleClick = (index) => {
  removeClass(filterButtons);
  removeClass(filterImages);
  removeClass(contentElements);
  addClass(filterButtons[index], "active");
  addClass(filterImages[index], "active");
  addClass(contentElements[index], "active");
};
filterButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    handleClick(index);
  });
});
// HAMBURGER

let mobileMenu = document.querySelector(".mobile-menu");
let hamClose = document.getElementById("hamClose");
let hamOpen = document.getElementById("hamOpen");

hamClose.addEventListener("click", () => {
  mobileMenu.classList.add("active")
})
hamOpen.addEventListener("click", () => {
  mobileMenu.classList.remove("active")
})
// Alert

let alertDiv = document.querySelector(".privacy");
let acceptBtn = document.querySelector(".accept");
let preferenceBtn = document.querySelector(".preference");

setTimeout(() => {
  alertDiv.style.display="block";
}, 4000);
acceptBtn.addEventListener("click", () => {
  alertDiv.style.display="none";
})
preferenceBtn.addEventListener("click", () => {
  alertDiv.style.display="none";
})
// // Making Dropdown
let dropDown = document.querySelectorAll(".mobile-menu ul section");
let chevronIcon = document.querySelectorAll(".mobile-menu ul .fa-chevron-down");
let hamProduct = document.querySelector("#product");
let forCreators = document.querySelector("#for-creators");
let resourceLi = document.querySelector("#resource");

hamProduct.addEventListener("click",() => {
  dropDown[0].classList.toggle("active");
  chevronIcon[0].classList.toggle("fa-chevron-down")
  chevronIcon[0].classList.toggle("fa-chevron-up")
})
forCreators.addEventListener("click" , () => {
  dropDown[1].classList.toggle("active");
  chevronIcon[1].classList.toggle("fa-chevron-down")
  chevronIcon[1].classList.toggle("fa-chevron-up")
})
resourceLi.addEventListener("click" , () => {
  dropDown[2].classList.toggle("active");
  chevronIcon[2].classList.toggle("fa-chevron-down")
  chevronIcon[2].classList.toggle("fa-chevron-up")
})

// Countries Api
let Menu = document.querySelector("#country")
const fetchApi = async () => {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all')
    const data = await res.json();
    const countries = data.map(country => `${country.flag} ${country.name.common}`).sort()
    Menu.innerHTML = countries.map((country) => `<option>${country}</option>`).join('')
  } catch (error) {
    console.log(error)
  }
}
fetchApi()
// Language
let languageBtn = document.querySelector("#language")
let overlay = document.querySelector(".overlay");
let xBtn = document.querySelector(".overlay .x-btn");
let cancelBtn = document.querySelector(".overlay .lang-btn .cancel");
let saveBtn = document.querySelector(".overlay .lang-btn .save");
let allLanguage = document.querySelectorAll(".overlay .language p");
languageBtn.addEventListener("click", () => {
  overlayToggler()
  document.body.style.overflowY = "hidden"
})
const overlayToggler = () => {
  overlay.classList.toggle("active");
  document.body.style.overflowY = "auto"
}
xBtn.addEventListener("click",overlayToggler);
cancelBtn.addEventListener("click",overlayToggler);
saveBtn.addEventListener("click",overlayToggler)
allLanguage.forEach((element) => {
  element.addEventListener("click",() => {
      removeClass(allLanguage,"active")
      addClass(element, "active")
  })
})
const currencyInfo = [
  {heading: "Austrialian Dollars",
  para :"AUD - AU$"
  },
  {
    heading:"Brazillian Real",
    para:"BRL - BRL"
  }
  ,{heading: "Canadian Dollars",
  para :"CAD - CA$"
  },
  {
    heading:"Czech Koruna",
    para:"CZK - CZK"
  }
  ,{heading: "Danish Krone",
  para :"DKK - DKK"
  },
  {
    heading:"Euro",
    para:"EUR - €"
  }
  ,{heading: "British Pounds",
  para :"GBP - £"
  },
  {
    heading:"Hong Kong Dollars",
    para:"HKD - HKD"
  }
  ,{heading: "Hungarian Forint",
  para :"HUF - HUF"
  },
  {
    heading:"Mexicon Peso",
    para:"MXN - MXN"
  }
  ,{heading: "Norwegian Kroner",
  para :"NOK - NOK"
  },
  {
    heading:"New Zealand Dollars",
    para:"NZD - NZD"
  }
  ,{heading: "Polish Zloty",
  para :"PLN - PLN"
  },
  {
    heading:"Swedish Krona",
    para:"SEK - SEK"
  }
  ,{heading: "Singapore Dollars",
  para :"SGD - SGD"
  },
  {
    heading:"US Dollars",
    para:"USD - $"
  }
];
const currencyFn = () => {
  let currencyElem = document.querySelector("#currency-div");
  let bigDiv =[];
  let div;
  currencyInfo.forEach(elem => {
    let heading = document.createElement("h4");
    heading.innerHTML = `${elem.heading}`;
    let para  = document.createElement("span");
    para.innerHTML = `${elem.para}`
    div = document.createElement("div");
    div.classList.add("currency-btn");
    div.appendChild(heading);
    div.appendChild(para)
    currencyElem.appendChild(div); 
    div.querySelector(":nth-child(1)").classList.add("active")
    bigDiv.push(div)
  });
  bigDiv[0].classList.add("active")
  bigDiv.forEach((element) => {
    element.addEventListener("click", () => {
      removeClass(bigDiv, "active");
      addClass(element,"active")
    })
  })   
}
let currencyBtn = document.getElementById("currency-overlay");
let currencyDiv = document.querySelector("footer .currency-border");
currencyDiv.addEventListener("click" ,() => {
  document.body.style.overflow= "hidden"
  addClass(currencyBtn, "active")
  currencyFn()
});
let xBtn2 = document.querySelector("#currency-overlay .x-btn");
let cancelBtn2 = document.querySelector("#currency-overlay .lang-btn .cancel");
let updateBtn = document.querySelector("#currency-overlay .lang-btn .save");
let btnArray = [xBtn2,cancelBtn2,updateBtn];
btnArray.forEach(element => {
  element.addEventListener("click", () => {
    removeCurrency()
  })
})
const removeCurrency = () => {
  currencyBtn.classList.remove("active");
  document.body.style.overflowY = "auto"
}
// Navbar Dropdown
let dropdownElm = document.querySelectorAll(".navbar .desktop-only > li");
dropdownElm.forEach(elem => {
  elem.addEventListener("click", () => {
    elem.classList.toggle("active");
  })
})