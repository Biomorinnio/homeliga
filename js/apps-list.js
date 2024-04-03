const appsFilterBtns = document.querySelectorAll(".apps__list-btn");
const colFilterBtns = document.querySelectorAll(".filter__col-item");

const shadow = document.querySelector(".shadow");

const filterApps = document.querySelector(".filter__apps-item");
const filterAppsList = document.querySelector(".filter__apps2");
const filterAppsInputs = document.querySelectorAll('.filter__apps2.one .filter__apps-item2 input');
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
  filterPriceMList.classList.remove("active");
  filterAreaList.classList.remove("active");
  filterTitleListM.classList.remove("active");
  filterRentList.classList.remove('active')
  filterAreaMList.classList.remove('active')

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

  let flag = false;
  for(let k of filterAppsInputs) if(k.checked) flag = true;
   
  if(!flag){
    document.querySelector('.filter__apps-item f').textContent = 'Апартаменты';
    filterAppsInputs[0].checked = true;
  }
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

const disctrictsSearchInput = document.querySelector(".mobile .filter__search-box");
let searchInput = document.querySelectorAll(".filter__search-box input")[document.querySelectorAll(".filter__search-box input").length - 1];
const filterDistrictsList =  document.querySelector(".filter__search-list.filter__choice.mobile")
const filterDistrictsInputs = document.querySelectorAll('.filter__search-list.mobile .filter__search-item input');
const filterDistrictsBtn1 = document.querySelector('.filter__search-list.mobile .filter__apps-btn1');
const filterDistrictsBtn2 = document.querySelector('.filter__search-list.mobile .filter__apps-btn2');
let districtsArr = []

const filterAppsM = document.querySelector(".mobile .filter__apps-item");
const filterAppsListM = document.querySelector(".filter__apps2.mobile");
const filterAppsMInputs = document.querySelectorAll(".filter__apps2.mobile .filter__apps-item2 input");
const filterAppsBtn1 = document.querySelector('.filter__apps2.mobile .filter__apps-btn1');
const filterAppsBtn2 = document.querySelector('.filter__apps2.mobile .filter__apps-btn2');
const filterAppsClose = document.querySelector('.filter__apps2.mobile svg');

const filterDevM =  document.querySelector(".apps__list-filters.mobile .filter__developers-item")
const filterDevListM =  document.querySelector(".filter__dev-list.mobile")
const filterDevMInputs = document.querySelectorAll('.filter__dev-list.mobile .filter__dev-item input');
const filterDevBtn1 = document.querySelector('.filter__dev-list.mobile .filter__apps-btn1');
const filterDevBtn2 = document.querySelector('.filter__dev-list.mobile .filter__apps-btn2');
const filterDevClose = document.querySelector('.filter__dev-list.mobile svg');
let devArrM = []


const filterPriceM = document.querySelector('.apps__list-filters.mobile .filter__price2-list');
const filterPriceMList = document.querySelector('.filter__price3.mobile');
const filterPriceMInputs = document.querySelectorAll('.filter__price3.mobile .filter__price2-item input');
const filterPriceClose = document.querySelector('.filter__price3 svg');

const filterDateM = document.querySelector('.mobile .filter__date');
const filterDateListM = document.querySelector('.filter__date2');
const filterDateInputs = document.querySelectorAll('.filter__date2 input');
const filterDateBtn1 = document.querySelector('.filter__date-btn1');
const filterDateBtn2 = document.querySelector('.filter__date-btn2');
let dateArr = [];
const filterDateClose = document.querySelector('.filter__date2 svg');

const filterRent = document.querySelector('.filter__rent-list');
const filterRentList = document.querySelector('.filter__rent2');
const filterRentInputs = document.querySelectorAll('.filter__rent-item2 input');
const filterRentClose = document.querySelector('.filter__rent2 svg');

const filterAreaM = document.querySelector('.filter__area2-list');
const filterAreaMList = document.querySelector('.filter__area2.mobile');
const filterAreaMInputs = document.querySelectorAll('.filter__area2.mobile .filter__area2-item input');
const filterAreaClose = document.querySelector('.filter__area2 svg');


const filterTitleM = document.querySelector('.filter__icon.mobile');
const filterTitleListM = document.querySelector('.apps__title-filter2.filter__choice.mobile');

const filterFromBtns = document.querySelectorAll('.filter__from-btn');

for(let i of filterFromBtns) i.addEventListener('click', ()=>{
  for(let j of filterFromBtns) j.classList.remove('active')
  i.classList.add('active')
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

  if(districtsArr.join(', ').length > 35) for(let i of document.querySelectorAll('.filter__search-inp')){
    i.placeholder = districtsArr.join(', ').substring(0, 35) + '...';
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

filterDevM.addEventListener("click", () => {
  filterDevListM.classList.add("active");
  blockScroll()
});
filterDevClose.addEventListener('click', ()=>{
  filterDevListM.classList.remove("active");
  unblockScroll()
})
for(let i = 0; i < filterDevMInputs.length; i++) filterDevMInputs[i].addEventListener('click', ()=>{
  
  let labelText = document.querySelectorAll('.filter__dev-item label')[i].textContent;
  if(labelText != 'Все застройщики'){
    filterDevMInputs[0].checked = false;

    if (devArrM.indexOf(labelText) !== -1) {
      devArrM.splice(devArrM.indexOf(labelText), 1);
    }
    else{
      devArrM.push(labelText);
    }
  }
  else{
    for(let i of filterDevMInputs) i.checked = false;
    filterDevMInputs[0].checked = true;
    devArrM = ['']
  }




})
filterDevBtn1.addEventListener('click', ()=>{
  for(let i of filterDevMInputs) i.checked = false;
  filterDevMInputs[0].checked = true;
  for(let j of document.querySelectorAll('.filter__developers-item f')) j.textContent = 'Все застройщики';

  devArrM = ['']


})
filterDevBtn2.addEventListener('click', ()=>{
  if(devArrM[0] == 'Все застройщики') devArrM.shift();
  if(devArrM[0] == '') devArrM[0] = ['Все застройщики'];

  if(devArrM.join(', ').length > 35) for(let i of document.querySelectorAll('.filter__developers-item f')){
    i.textContent = devArrM.join(', ').substring(0, 35) + '...';
  }
  else for(let j of document.querySelectorAll('.filter__developers-item f')) j.textContent = devArrM.join(', ');

  filterDevListM.classList.remove("active");
  unblockScroll();
})



filterDateM.addEventListener("click", () => {
  filterDateListM.classList.add("active");
  shadow.classList.add("active");
  blockScroll();
});
for(let i = 0; i < filterDateInputs.length; i++) filterDateInputs[i].addEventListener('click', ()=>{

  let labelText = document.querySelectorAll('.filter__date-item2 label')[i].textContent;
  if(labelText != 'Любая дата сдачи'){
    filterDateInputs[0].checked = false;

    if (dateArr.indexOf(labelText) !== -1) {
      dateArr.splice(dateArr.indexOf(labelText), 1);
    }
    else{
      dateArr.push(labelText);
    }
  
    let flag = false;
    for(let k of filterDateInputs) if(k.checked) flag = true;
     
    if(!flag){
      document.querySelector('.filter__date-item f').textContent = 'Любая дата сдачи';
      filterDateInputs[0].checked = true;
    }

  }
  else{
    for(let i of filterDateInputs) i.checked = false;
    filterDateInputs[0].checked = true;
    dateArr = ['Любая дата сдачи']
  }
  
 

})
filterDateBtn1.addEventListener('click', ()=>{
  for(let i of filterDateInputs) i.checked = false;
  filterDateInputs[0].checked = true;
  for(let j of document.querySelectorAll('.filter__date-item f')) j.textContent = 'Любая дата сдачи';

  dateArr = ['Любая дата сдачи']

})
filterDateBtn2.addEventListener('click', ()=>{
  if(dateArr[0] == 'Любая дата сдачи') dateArr.shift();
  if(!dateArr.length) dateArr[0] = ['Любая дата сдачи'];

  for(let i of document.querySelectorAll('.filter__date-item f')) i.textContent = dateArr.join(', ');
  
  filterDateListM.classList.remove("active");
  shadow.classList.remove("active");
  unblockScroll();
})
filterDateClose.addEventListener("click", () => {
  filterDateListM.classList.remove("active");
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

  let labelText = document.querySelectorAll('.apps__list-filters.mobile .filter__price2-item label')[i].textContent;
  document.querySelector('.apps__list-filters.mobile .filter__price2-item f').textContent = labelText;
 
})
filterPriceClose.addEventListener("click", () => {
  filterPriceMList.classList.remove("active");
  shadow.classList.remove("active");
  unblockScroll();
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
for(let i = 0; i < filterAreaMInputs.length; i++) filterAreaMInputs[i].addEventListener('click', ()=>{

  for(let j of filterAreaMInputs) j.checked = false;
  filterAreaMInputs[i].checked = true;

  let labelText = document.querySelectorAll('.filter__area2.mobile .filter__area2-item label')[i].textContent;
 
  document.querySelector('.filter__area2-item f').textContent = labelText;

})
filterAreaClose.addEventListener("click", () => {
  filterAreaMList.classList.remove("active");
  shadow.classList.remove("active");
  unblockScroll();
});

filterRent.addEventListener("click", () => {
  filterRentList.classList.add("active");
  shadow.classList.add("active");
  blockScroll();
});
for(let i = 0; i < filterRentInputs.length; i++) filterRentInputs[i].addEventListener('click', ()=>{

  for(let j of filterRentInputs) j.checked = false;
  filterRentInputs[i].checked = true;

  let labelText = document.querySelectorAll('.filter__rent-item2 label')[i].textContent;
 
  document.querySelector('.filter__rent-item f').textContent = labelText;

})
filterRentClose.addEventListener('click', ()=>{
  filterRentList.classList.remove("active");
  shadow.classList.remove("active");
  unblockScroll();
})

if (window.matchMedia("(max-width: 768px)").matches) {
  for(let i of appsFilterBtns){
    i.addEventListener('click', ()=>{
      if(i.textContent !== 'Новостройки'){
        for(let j of document.querySelectorAll('.filter__developers')) j.style.display = 'none';
        for(let j of document.querySelectorAll('.filter__date')) j.style.display = 'none';
        document.querySelector('.filter__from-btns').style.display = 'none';
        filterRent.style.display = 'none';
  
        if(i.textContent == 'Аренда') filterRent.style.display = 'block';
      }
      else{
        for(let j of document.querySelectorAll('.filter__developers')) j.style.display = 'block';
        for(let j of document.querySelectorAll('.filter__date')) j.style.display = 'block';
        document.querySelector('.filter__from-btns').style.display = 'block';
        filterRent.style.display = 'none';
      }
    })
  }
}




const openPopupBtn = document.querySelector('.favorites__btn');
const closePopup = document.querySelector('.modal-dialog .close')
const popup = document.querySelector('.modal');

openPopupBtn.addEventListener('click', ()=>{
    popup.classList.add('active');
    openedPopup();
})

closePopup.addEventListener('click', ()=>{
  popup.classList.remove('active');
  closedPopup();
})