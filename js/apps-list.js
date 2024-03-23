const appsFilterBtns = document.querySelectorAll(".apps__list-btn");

const shadow = document.querySelector(".shadow");

const filterApps = document.querySelector(".filter__apps-item");
const filterAppsList = document.querySelector(".filter__apps2");
const filterSearchInput = document.querySelector('.filter__search-inp');
const filterSearchList = document.querySelector('.filter__search-list');
const filterFrom = document.querySelector(".filter__from");
const filterFromList = document.querySelector(".filter__from2");


const burgerOpen = document.querySelectorAll(".header__burger");
const burgerClose = document.querySelector(".burger__menu-close");
const burgerMenu = document.querySelector(".burger__menu");
const burgerLinks = document.querySelectorAll(".header__top-link");

let scrollY;
function openedPopup() {
  scrollY = window.scrollY;
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
}

function closedPopup() {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  window.scrollTo(0, scrollY);
}



for (let i of appsFilterBtns)
  i.addEventListener("click", () => {
    for (let j of appsFilterBtns) j.classList.remove("active");
    i.classList.add("active");
});

shadow?.addEventListener("click", () => {
    filterAppsList.classList.remove("active");
    filterSearchList.classList.remove('active');
    filterFromList.classList.remove('active');
  
    burgerMenu.classList.remove("active");
  
    shadow.classList.remove("active");
  
    closedPopup();
  
    if (window.matchMedia("(max-width: 1180px)").matches) {
      document.querySelector(".shadow").style.background = "rgba(34,33,30,.7)";
    }
  });


for (let i of burgerLinks) {
  i.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    shadow.classList.remove("active");
    closedPopup();
  });
}

for (let i of burgerOpen) {
  i.addEventListener("click", () => {
    burgerMenu.classList.add("active");

    if (window.matchMedia("(min-width: 769px)").matches) {
      shadow.classList.add("active");
    }
    document.querySelector(".shadow").style.background = "unset";

    openedPopup();
    if (window.matchMedia("(max-width: 814px)").matches) {
      document.querySelector(".widget").style.opacity = "0";
    }
  });
}
burgerClose.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  document.querySelector(".shadow").classList.remove("active");
  closedPopup();
  if (window.matchMedia("(max-width: 1180px)").matches) {
    document.querySelector(".shadow").style.background = "rgba(34,33,30,.7)";
  }

  if (window.matchMedia("(max-width: 814px)").matches) {
    document.querySelector(".widget").style.opacity = "1";
  }
});

const switchLang = document.querySelectorAll(".header__switch-item");
const switchList = document.querySelectorAll(".header__top-switch2");

for (let i = 0; i < switchLang.length; i++) {
  switchLang[i].addEventListener("click", () => {
    switchList[i].classList.toggle("active");
  });
}


filterApps.addEventListener('click', ()=>{
    filterAppsList.classList.add('active')
    shadow.classList.add('active')
})

filterSearchInput.addEventListener('input', (e)=>{
    filterSearchList.classList.add('active')
    shadow.classList.add('active')
    if(!e.target.value)  filterSearchList.classList.remove('active')
})

filterFrom.addEventListener('click', ()=>{
    filterFromList.classList.add('active')
    shadow.classList.add('active')
})
