
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

const openPopupBtn = document.querySelector('.complexes__inner-link');
const popup = document.querySelector('.modal')

openPopupBtn.addEventListener('click', ()=>{
    popup.classList.add('active');
    openedPopup();
})

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

const shadow = document.querySelector('.shadow');

shadow?.addEventListener("click", () => {
  filterAppsList.classList.remove("active");
  filterPriceList.classList.remove("active");
  filterSearchList.classList.remove("active");
  filterValList.classList.remove('active')

  burgerMenu.classList.remove("active");
  
  filterAppsListM.classList.remove('active')
  filterPriceMList.classList.remove('active')

  shadow.classList.remove("active");

  for(let i of document.querySelectorAll('.filter__search-inp')) i.value = ''

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


const filterApps = document.querySelector(".filter__apps-item");
const filterAppsList = document.querySelector(".filter__apps2");
const filterAppsInputs = document.querySelectorAll('.filter__apps2.none .filter__apps-item2 input');
let appsArr = ['Апартаменты'];

const filterPrice = document.querySelector('.filter__price.none .filter__price-item');
const filterPriceList = document.querySelector('.filter__price.none .filter__price2');
const filterPriceInputs = document.querySelectorAll('.filter__price2-item input');

const filterMoney = document.getElementsByName('number');

const filterVal = document.querySelector('.filter__price2-list .filter__price2-item.spec');
const filterValList = document.querySelector('.filter__price2 .filter__price3');
const filterValInputs = document.querySelectorAll('.filter__price3 .filter__price2-item input');

const filterSearchInput = document.querySelector(".filter__search-inp");
const filterSearchList = document.querySelector(".filter__search-list");
const filterSearchInputs = document.querySelectorAll('.filter__search-item input');
let searchArr = [];




filterApps.addEventListener("click", () => {
  filterAppsList.classList.toggle("active");
  shadow.classList.toggle("active");
});
for(let i = 0; i < filterAppsInputs.length; i++) filterAppsInputs[i].addEventListener('click', ()=>{
  
  let labelText = document.querySelectorAll('.filter__apps-item2 label')[i].textContent;

  
  if (appsArr.indexOf(labelText) !== -1) {
    appsArr.splice(appsArr.indexOf(labelText), 1);
  }
  else{
    appsArr.push(labelText);
  }

  if(appsArr.join(', ').length > 29) document.querySelector('.filter__apps-item f').textContent = appsArr.join(', ').substring(0, 29) + '...';
  else document.querySelector('.filter__apps-item f').textContent = appsArr.join(', ');

  let flag = false;
  for(let k of filterAppsInputs) if(k.checked) flag = true;
  console.log(filterAppsInputs)
  if(!flag){
    document.querySelector('.filter__apps-item f').textContent = 'Апартаменты';
    filterAppsInputs[0].checked = true;
  }
})


filterPrice.addEventListener("click", () => {
  filterPriceList.classList.toggle("active");
  shadow.classList.toggle("active");
});

filterVal.addEventListener('click', ()=>{
  filterValList.classList.toggle('active');
  shadow.classList.toggle('active')
})
for(let i = 0; i < filterValInputs.length; i++) filterValInputs[i].addEventListener('click', ()=>{
  for(let j of filterValInputs) j.checked = false;
  filterValInputs[i].checked = true;
  document.querySelector('.filter__price2-item.spec f').textContent = document.querySelectorAll('.filter__price2-item label')[i].textContent
})

for(let i of filterMoney) i.addEventListener('input', (e)=>{
  if(e.target.value){
    var m = e.target.value.match(/^(.*?)((?:[,.]\d+)?|)$/);
    if(e.target.value.includes(' ')){
      m = e.target.value.split(' ').join('').match(/^(.*?)((?:[,.]\d+)?|)$/);
    }

  
    i.value =  m[1].replace(/\B(?=(?:\d{3})*$)/g, ' ') + m[2]
  }
  i.value = i.value.replace(/[^0-9 ]/g, '')

  priceInsert()
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
  if(searchArr.join(', ').length > 46){
    document.querySelector('.filter__search-inp').placeholder = searchArr.join(', ').substring(0, 46) + '...';
    
  } 
  else document.querySelector('.filter__search-inp').placeholder = searchArr.join(', ');

  if(!document.querySelector('.filter__search-inp').placeholder) document.querySelector('.filter__search-inp').placeholder = 'Район, название проекта'
})


function priceInsert(){
  var stringPrice = ''
  for(let i of filterMoney){
    let moneyArr = i.value.split(' ')
    if(moneyArr[0] != ''){

      moneyArr.length = 1;
      if(i.value.split(' ').length == 2) moneyArr.push('тыс.')
      else if(i.value.split(' ').length == 3) moneyArr.push('млн.')
 
   
      stringPrice += moneyArr.join(' ');
      if(i.placeholder == 'от')     stringPrice += ' - ';
  
    } 
    document.querySelector('.filter__price.none .filter__price-item.spec f').textContent = stringPrice
    }
}

/*/ mobile /*/

const filterMoneyM = document.querySelectorAll('.filter__price.mobile .filter__price-item2 input');

const disctrictsSearchInput = document.querySelector(".filter__uls .filter__search-box");
let searchInput = document.querySelectorAll(".filter__search-box input")[document.querySelectorAll(".filter__search-box input").length - 1];
const filterDistrictsList =  document.querySelector(".filter__search-list.filter__choice.mobile")
const filterDistrictsInputs = document.querySelectorAll('.filter__search-list.mobile .filter__search-item input');
const filterDistrictsBtn1 = document.querySelector('.filter__search-list.mobile .filter__apps-btn1');
const filterDistrictsBtn2 = document.querySelector('.filter__search-list.mobile .filter__apps-btn2');
let districtsArr = []

const filterAppsM = document.querySelector(".filter__uls .filter__apps-item");
const filterAppsListM = document.querySelector(".filter__apps2.mobile");
const filterAppsMInputs = document.querySelectorAll(".filter__apps2.mobile .filter__apps-item2 input");
const filterAppsBtn1 = document.querySelector('.filter__apps2.mobile .filter__apps-btn1');
const filterAppsBtn2 = document.querySelector('.filter__apps2.mobile .filter__apps-btn2');
const filterAppsClose = document.querySelector('.filter__apps2.mobile svg');

const filterPriceM = document.querySelector('.filter__uls .filter__price2-list');
const filterPriceMList = document.querySelector('.filter__price3.mob');
const filterPriceMInputs = document.querySelectorAll('.filter__price3.mob .filter__price2-item input');
const filterPriceClose = document.querySelector('.filter__price3 svg');

for(let i of filterMoneyM) i.addEventListener('input', (e)=>{
  if(e.target.value){
    var m = e.target.value.match(/^(.*?)((?:[,.]\d+)?|)$/);
    if(e.target.value.includes(' ')){
      m = e.target.value.split(' ').join('').match(/^(.*?)((?:[,.]\d+)?|)$/);
    }

  
    i.value =  m[1].replace(/\B(?=(?:\d{3})*$)/g, ' ') + m[2]
  }
  i.value = i.value.replace(/[^0-9 ]/g, '')

})


disctrictsSearchInput.addEventListener("click", () => {
  filterDistrictsList.classList.add("active");

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
  filterDistrictsList.classList.remove("active");
  shadow.classList.remove('active')
  unblockScroll();
  for(let j of document.querySelectorAll('.filter__search-inp')){
    j.value = ''
  } 
});
filterDistrictsBtn1.addEventListener('click', ()=>{
  for(let i of filterDistrictsInputs) i.checked = false;

  for(let j of document.querySelectorAll('.filter__search-inp')){
    j.value = ''
    j.placeholder = 'Район, название проекта';
  } 

  districtsArr = []

})
filterDistrictsBtn2.addEventListener('click', ()=>{

  if(districtsArr.join(', ').length > 40) for(let i of document.querySelectorAll('.filter__search-inp')){
    i.placeholder = districtsArr.join(', ').substring(0, 40) + '...';
    i.value = ''
  }
  else for(let j of document.querySelectorAll('.filter__search-inp')){
    j.placeholder = districtsArr.join(', ');
    j.value = ''
  } 

  filterDistrictsList.classList.remove("active");
  shadow.classList.remove("active");
  unblockScroll();
})
for(let i = 0; i < filterDistrictsInputs.length; i++) filterDistrictsInputs[i].addEventListener('click', ()=>{
  
  let labelText = document.querySelectorAll('.filter__search-list.mobile .filter__search-item label')[i].textContent;

  if (districtsArr.indexOf(labelText) !== -1) {
    districtsArr.splice(districtsArr.indexOf(labelText), 1);
  }
  else{
    districtsArr.push(labelText);
  }


})

filterAppsM.addEventListener("click", () => {
  filterAppsListM.classList.add("active");
  shadow.classList.add("active");
  blockScroll();
});
filterAppsBtn1.addEventListener('click', ()=>{
  for(let i of filterAppsMInputs) i.checked = false;
  filterAppsMInputs[0].checked = true;
  for(let j of document.querySelectorAll('.filter__apps-item f')) j.textContent = 'Апартаменты';

  appsArr = ['Апартаменты']


})
filterAppsBtn2.addEventListener('click', ()=>{

  if(appsArr.join(', ').length > 35) for(let i of document.querySelectorAll('.filter__apps-item f')){
    i.textContent = appsArr.join(', ').substring(0, 35) + '...';
  }
  else for(let j of document.querySelectorAll('.filter__apps-item f')) j.textContent = appsArr.join(', ');

  filterAppsListM.classList.remove("active");
  shadow.classList.remove("active");
  unblockScroll();
})
for(let i = 0; i < filterAppsMInputs.length; i++) filterAppsMInputs[i].addEventListener('click', ()=>{
  
  let labelText = document.querySelectorAll('.filter__apps-item2 label')[i].textContent;

  if (appsArr.indexOf(labelText) !== -1) {
    appsArr.splice(appsArr.indexOf(labelText), 1);
  }
  else{
    appsArr.push(labelText);
  }


})
filterAppsClose.addEventListener("click", () => {
  filterAppsListM.classList.remove("active");
  shadow.classList.remove("active");
  unblockScroll();
});


filterPriceM.addEventListener('click', ()=>{
  filterPriceMList.classList.add("active");
  shadow.classList.add("active");
  blockScroll();
})
for(let i = 0; i < filterPriceMInputs.length; i++) filterPriceMInputs[i].addEventListener('click', ()=>{
  
  for(let j of filterPriceMInputs) j.checked = false;
  filterPriceMInputs[i].checked = true;

  let labelText = document.querySelectorAll('.filter__uls .filter__price2-item label')[i].textContent;
  document.querySelector('.filter__uls .filter__price2-item f').textContent = labelText;
 
})
filterPriceClose.addEventListener("click", () => {
  filterPriceMList.classList.remove("active");
  shadow.classList.remove("active");
  unblockScroll();
});