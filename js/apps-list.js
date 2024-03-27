const appsFilterBtns = document.querySelectorAll(".apps__list-btn");
const colFilterBtns = document.querySelectorAll(".filter__col-item");

const shadow = document.querySelector(".shadow");

const filterApps = document.querySelector(".filter__apps-item");
const filterAppsList = document.querySelector(".filter__apps2");
const filterAppsInputs = document.querySelectorAll('.filter__apps-item2 input');
let appsArr = ['Апартаменты'];

const filterSearchInput = document.querySelector(".filter__search-inp");
const filterSearchList = document.querySelector(".filter__search-list");
const filterSearchInputs = document.querySelectorAll('.filter__search-item input');
let searchArr = [];

const filterFrom = document.querySelector(".filter__from");
const filterFromList = document.querySelector(".filter__from2");
const filterFromInputs = document.querySelectorAll(".filter__from-item2 input");

const filterDev = document.querySelector(".filter__developers");
const filterDevList = document.querySelector(".filter__developers2");
const filterDevInputs = document.querySelectorAll(".filter__developers-item2 input");
let devArr = [];

const filterAdd = document.querySelector(".filter__add");
const filterAddList = document.querySelector(".filter__add2");
const filterAddInputs = document.querySelectorAll('.filter__add-item2 input');
let addArr = [];

const filterTitle = document.querySelector(".apps__title-filter");
const filterTitleList = document.querySelector(".apps__title-filter2");

const filterPrice = document.querySelector('.filter__price2-list');
const filterPriceList = document.querySelector('.filter__price3');
const filterPriceInputs = document.querySelectorAll('.filter__price2-item input');

const filterArea = document.querySelector('.filter__area');
const filterAreaList = document.querySelector('.filter__area2');
const filterAreaInputs = document.querySelectorAll('.filter__area2-item input');

const burgerOpen = document.querySelectorAll(".header__burger");
const burgerClose = document.querySelector(".burger__menu-close");
const burgerMenu = document.querySelector(".burger__menu");
const burgerLinks = document.querySelectorAll(".header__top-link");

let scrollY;
function blockScroll() {
  scrollY = window.pageYOffset;
  document.body.style.top = `-${window.pageYOffset}px`;
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
}
function unblockScroll() {
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

for (let i of colFilterBtns)
  i.addEventListener("click", () => {
    i.classList.toggle("active");
  });

shadow?.addEventListener("click", () => {
  filterAppsList.classList.remove("active");
  filterSearchList.classList.remove("active");
  filterFromList.classList.remove("active");
  filterDevList.classList.remove("active");
  filterAddList.classList.remove("active");
  filterTitleList.classList.remove("active");

  burgerMenu.classList.remove("active");

  filterAppsListM.classList.remove("active");
  filterDateListM.classList.remove("active");
  filterPriceList.classList.remove("active");
  filterAreaList.classList.remove("active");
  filterTitleListM.classList.remove("active");

  for(let i of document.querySelectorAll('.filter__search-inp')) i.value = ''
  

  shadow.classList.remove("active");

  unblockScroll();

  if (window.matchMedia("(max-width: 1180px)").matches) {
    document.querySelector(".shadow").style.background = "rgba(34,33,30,.7)";
  }
});

for (let i of burgerLinks) {
  i.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    shadow.classList.remove("active");
  });
}

for (let i of burgerOpen) {
  i.addEventListener("click", () => {
    burgerMenu.classList.add("active");

    if (window.matchMedia("(min-width: 769px)").matches) {
      shadow.classList.add("active");
    }
    document.querySelector(".shadow").style.background = "unset";

    if (window.matchMedia("(max-width: 814px)").matches) {
      document.querySelector(".widget").style.opacity = "0";
    }
  });
}
burgerClose.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  document.querySelector(".shadow").classList.remove("active");

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

filterApps.addEventListener("click", () => {
  filterAppsList.classList.add("active");
  shadow.classList.add("active");
});
for(let i = 0; i < filterAppsInputs.length; i++) filterAppsInputs[i].addEventListener('click', ()=>{
  
  let labelText = document.querySelectorAll('.filter__apps-item2 label')[i].textContent;
  
  if (appsArr.indexOf(labelText) !== -1) {
    appsArr.splice(appsArr.indexOf(labelText), 1);
  }
  else{
    appsArr.push(labelText);
  }

  if(appsArr.join(', ').length > 19) document.querySelector('.filter__apps-item f').textContent = appsArr.join(', ').substring(0, 19) + '...';
  else document.querySelector('.filter__apps-item f').textContent = appsArr.join(', ');
})

filterSearchInput.addEventListener("input", (e) => {
  filterSearchList.classList.add("active");
  shadow.classList.add("active");
  if (!e.target.value) filterSearchList.classList.remove("active");
});
for(let i = 0; i < filterSearchInputs.length; i++) filterSearchInputs[i].addEventListener('click', ()=>{
  
  let labelText = document.querySelectorAll('.filter__search-item label')[i].textContent;
  
  if (searchArr.indexOf(labelText) !== -1) {
    searchArr.splice(searchArr.indexOf(labelText), 1);
  }
  else{
    searchArr.push(labelText);
  }
  if(searchArr.join(', ').length > 30){
    document.querySelector('.filter__search-inp').placeholder = searchArr.join(', ').substring(0, 30) + '...';
    
  } 
  else document.querySelector('.filter__search-inp').placeholder = searchArr.join(', ');

  if(!document.querySelector('.filter__search-inp').placeholder) document.querySelector('.filter__search-inp').placeholder = 'Район, название проекта'
})

filterFrom.addEventListener("click", () => {
  filterFromList.classList.add("active");
  shadow.classList.add("active");
});
for(let i = 0; i < filterFromInputs.length; i++) filterFromInputs[i].addEventListener('click', ()=>{
  for(let j of filterFromInputs) j.checked = false;
  filterFromInputs[i].checked = true;
  document.querySelector('.filter__from-item f').textContent = document.querySelectorAll('.filter__from-item2 label')[i].textContent
})

filterDev.addEventListener("click", () => {
  filterDevList.classList.add("active");
  shadow.classList.add("active");
});
for(let i = 0; i < filterDevInputs.length; i++) filterDevInputs[i].addEventListener('click', ()=>{
  
  let labelText = document.querySelectorAll('.filter__developers-item2 label')[i].textContent;
  if (devArr.indexOf(labelText) !== -1) {
    devArr.splice(devArr.indexOf(labelText), 1);
  }
  else{
    devArr.push(labelText);
  }

  if(devArr.join(', ').length > 19) document.querySelector('.filter__developers-item f').textContent = devArr.join(', ').substring(0, 19) + '...';
  else document.querySelector('.filter__developers-item f').textContent = devArr.join(', ');

  let flag = false;
  for(let k of filterDevInputs) if(k.checked) flag = true;
  
  if(!flag) document.querySelector('.filter__developers-item f').textContent = 'Застройщик'
})

filterAdd.addEventListener("click", () => {
  filterAddList.classList.add("active");
  shadow.classList.add("active");
});
for(let i = 0; i < filterAddInputs.length; i++) filterAddInputs[i].addEventListener('click', ()=>{
  
  let labelText = document.querySelectorAll('.filter__add-item2 label')[i].textContent;
  if (addArr.indexOf(labelText) !== -1) {
    addArr.splice(addArr.indexOf(labelText), 1);
  }
  else{
    addArr.push(labelText);
  }

  if(addArr.join(', ').length > 19) document.querySelector('.filter__add-item f').textContent = addArr.join(', ').substring(0, 19) + '...';
  else document.querySelector('.filter__add-item f').textContent = addArr.join(', ');

  let flag = false;
  for(let k of filterAddInputs) if(k.checked) flag = true

  if(!flag) document.querySelector('.filter__add-item f').textContent = 'Доп. параметры'
})

filterTitle.addEventListener("click", () => {
  filterTitleList.classList.add("active");
  shadow.classList.add("active");
});
filterPrice.addEventListener("click", () => {
  filterPriceList.classList.add("active");
  shadow.classList.add("active");
});
for(let i = 0; i < filterPriceInputs.length; i++) filterPriceInputs[i].addEventListener('click', ()=>{
  for(let j of filterPriceInputs) j.checked = false;
  filterPriceInputs[i].checked = true;
  document.querySelector('.filter__price2-item.spec f').textContent = document.querySelectorAll('.filter__price2-item label')[i].textContent
})
filterArea.addEventListener("click", () => {
  filterAreaList.classList.add("active");
  shadow.classList.add("active");
});
for(let i = 0; i < filterAreaInputs.length; i++) filterAreaInputs[i].addEventListener('click', ()=>{
  for(let j of filterAreaInputs) j.checked = false;
  filterAreaInputs[i].checked = true;
  document.querySelector('.filter__area-item f').textContent = document.querySelectorAll('.filter__area2-item label')[i].textContent
})

const swiperLikes = document.querySelectorAll(".swiper__card-list svg");
const swiperLikesBox = document.querySelectorAll(".swiper__like");

if (!window.matchMedia("(max-width: 768px)").matches) {
  for (let i = 0; i < swiperLikes.length; i++) {
    swiperLikes[i]?.addEventListener("mouseover", () => {
      swiperLikesBox[i].classList.add("active");
    });
    swiperLikes[i]?.addEventListener("mouseout", () => {
      swiperLikesBox[i].classList.remove("active");
    });
  }
}

for (let i = 0; i < swiperLikes.length; i++) {
  swiperLikes[i]?.addEventListener("click", () => {
    swiperLikes[i].classList.toggle("clicked");
    if (swiperLikes[i].classList.contains("clicked")) {
      swiperLikesBox[i].innerHTML = "Убрать из избранного";
    } else {
      swiperLikesBox[i].innerHTML = "Добавить в избранное";
    }
  });
}

/*/ mobile /*/

const filterAppsM = document.querySelector(".mobile .filter__apps-item");
const filterAppsListM = document.querySelector(".filter__apps2.mobile");

const filterDateM = document.querySelector('.mobile .filter__date');
const filterDateListM = document.querySelector('.filter__date2');


const filterAreaM = document.querySelector('.filter__area2-list');
const filterAreaMList = document.querySelector('.filter__area2');

const filterTitleM = document.querySelector('.filter__icon.mobile');
const filterTitleListM = document.querySelector('.apps__title-filter2.filter__choice.mobile');

const filterFromBtns = document.querySelectorAll('.filter__from-btn');

for(let i of filterFromBtns) i.addEventListener('click', ()=>{

  i.classList.toggle('active')
})

const disctrictsSearchInput = document.querySelector(
  ".mobile .filter__search-box"
);

let searchInput = document.querySelectorAll(".filter__search-box input")[
  document.querySelectorAll(".filter__search-box input").length - 1
];
disctrictsSearchInput.addEventListener("click", () => {
  document
    .querySelector(".filter__search-list.filter__choice.mobile")
    .classList.add("active");

  searchInput.readOnly = false;
  disctrictsSearchInput.disabled = true;
  blockScroll();
});
searchInput.addEventListener("input", () => {
  document.querySelector(".filter__list-box2").classList.remove("unactive");
  document.querySelector(".filter__list-box").classList.add("unactive");

  if (searchInput.value.length == 0) {
    document.querySelector(".filter__list-box2").classList.add("unactive");
    document.querySelector(".filter__list-box").classList.remove("unactive");
  }
});
document.querySelector(".filter__list-close").addEventListener("click", () => {
  searchInput.readOnly = true;
  disctrictsSearchInput.disabled = false;
  document
    .querySelector(".filter__search-list.filter__choice.mobile")
    .classList.remove("active");
  unblockScroll();
});

filterAppsM.addEventListener("click", () => {
  filterAppsListM.classList.add("active");
  shadow.classList.add("active");
  blockScroll();
});
filterDateM.addEventListener("click", () => {
  filterDateListM.classList.add("active");
  shadow.classList.add("active");
  blockScroll();
});

filterAreaM.addEventListener("click", () => {
  filterAreaMList.classList.add("active");
  shadow.classList.add("active");
  blockScroll();
});
filterTitleM.addEventListener("click", () => {
  filterTitleListM.classList.add("active");
  shadow.classList.add("active");
  blockScroll();
});

