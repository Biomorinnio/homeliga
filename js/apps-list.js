const appsFilterBtns = document.querySelectorAll(".apps__list-btn");
const colFilterBtns = document.querySelectorAll(".filter__col-item");

const shadow = document.querySelector(".shadow");

const filterApps = document.querySelector(".filter__apps-item");
const filterAppsList = document.querySelector(".filter__apps2");
const filterSearchInput = document.querySelector(".filter__search-inp");
const filterSearchList = document.querySelector(".filter__search-list");
const filterFrom = document.querySelector(".filter__from");
const filterFromList = document.querySelector(".filter__from2");
const filterDev = document.querySelector(".filter__developers");
const filterDevList = document.querySelector(".filter__developers2");
const filterAdd = document.querySelector(".filter__add");
const filterAddList = document.querySelector(".filter__add2");
const filterTitle = document.querySelector(".apps__title-filter");
const filterTitleList = document.querySelector(".apps__title-filter2");

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

filterSearchInput.addEventListener("input", (e) => {
  filterSearchList.classList.add("active");
  shadow.classList.add("active");
  if (!e.target.value) filterSearchList.classList.remove("active");
});

filterFrom.addEventListener("click", () => {
  filterFromList.classList.add("active");
  shadow.classList.add("active");
});

filterDev.addEventListener("click", () => {
  filterDevList.classList.add("active");
  shadow.classList.add("active");
});
filterAdd.addEventListener("click", () => {
  filterAddList.classList.add("active");
  shadow.classList.add("active");
});
filterTitle.addEventListener("click", () => {
  filterTitleList.classList.add("active");
  shadow.classList.add("active");
});

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

const filterPrice = document.querySelector('.filter__price2-list');
const filterPriceList = document.querySelector('.filter__price3');

const filterArea = document.querySelector('.filter__area2-list');
const filterAreaList = document.querySelector('.filter__area2');

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
filterPrice.addEventListener("click", () => {
  filterPriceList.classList.add("active");
  shadow.classList.add("active");
  blockScroll();
});
filterArea.addEventListener("click", () => {
  filterAreaList.classList.add("active");
  shadow.classList.add("active");
  blockScroll();
});
filterTitleM.addEventListener("click", () => {
  filterTitleListM.classList.add("active");
  shadow.classList.add("active");
  blockScroll();
});

