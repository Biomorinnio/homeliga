var swiper = new Swiper(".mySwiper1.mobile", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  allowTouchMove: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
    },
    1180: {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      allowTouchMove: false,
    },
  },
});

var swiperFirst = new Swiper(".mySwiper1.none", {
  loop: true,

  allowTouchMove: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
    },
    1180: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// swiperFirst.on("slideChange", function () {
//   var slides = swiperFirst.slides;
//   var activeIndex = swiperFirst.activeIndex;
//   for (let i of slides) i.classList.remove("visible");
//   console.log(activeIndex);
//   if (activeIndex >= 0 && activeIndex < slides.length - 2) {
//     slides[activeIndex].classList.add("visible");
//     slides[activeIndex + 1].classList.add("visible");
//     slides[activeIndex + 2].classList.add("visible");
//   }
// });

var swiper2 = new Swiper(".mySwiper2.mobile", {
  loop: true,
  allowTouchMove: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
    },
    1180: {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,

      allowTouchMove: false,
    },
  },
});
var swiperSecond = new Swiper(".mySwiper2.none", {
  loop: true,
  slidesPerView: 1,
  allowTouchMove: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
    },
    1180: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// swiperSecond.on("slideChange", function () {
//   var slides = swiperSecond.slides;
//   var activeIndex = swiperSecond.activeIndex;
//   for (let i of slides) i.classList.remove("visible");
//   if (activeIndex >= 0 && activeIndex < slides.length - 2) {
//     slides[activeIndex].classList.add("visible");
//     slides[activeIndex + 1].classList.add("visible");
//     slides[activeIndex + 2].classList.add("visible");
//   }
// });

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  breakpoints: {
    1180: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

var swiper1 = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.8,
    },
  },
});
var swiper5 = new Swiper(".mySwiper5", {
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next5",
    prevEl: ".swiper-button-prev5",
  },
  pagination: {
    el: ".swiper-pagination5",
    clickable: true,
  },

  breakpoints: {
    1180: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

var swiper6 = new Swiper(".mySwiper6", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination6",
    clickable: true,
  },
});

var swiper7 = new Swiper(".mySwiper7", {
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination7",
    clickable: true,
  },
});

var swiperPreview = new Swiper(".swiper-preview", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination__preview",
    clickable: true,
  },
})

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

const burgerOpen = document.querySelectorAll(".header__burger");
const burgerClose = document.querySelector(".burger__menu-close");
const burgerMenu = document.querySelector(".burger__menu");
const burgerLinks = document.querySelectorAll('.header__top-link');

for(let i of burgerLinks){
  i.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active');
    shadow.classList.remove('active')
    closedPopup()
  })
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

const shadow = document.querySelector(".shadow");

const switchLang = document.querySelectorAll(".header__switch-item");
const switchList = document.querySelectorAll(".header__top-switch2");

const filterBtns = document.querySelectorAll(".filter__btn");

const filterApps = document.querySelector(".filter__apps-item");
const filterAppsList = document.querySelectorAll(".filter__apps2")[0];
const filterAppsListM = document.querySelectorAll(".filter__apps2")[1];

const filterBed = document.querySelector(".filter__bed-item");
const filterBedList = document.querySelector(".filter__bed2");

const filterPrice = document.querySelector(".filter__price-item");
const filterPriceList = document.querySelectorAll(".filter__price2")[2];
const filterPriceListM = document.querySelectorAll(".filter__price2")[1];

const filterVal = document.querySelectorAll(".filter__price2-item")[5];
const filterValM = document.querySelectorAll(".filter__price2-item")[0];
const filterValList = document.querySelectorAll(".filter__price3")[1];
const filterValListM = document.querySelectorAll(".filter__price3")[0];

const filterSearch = document.querySelectorAll(".filter__search-inp");
const filterSearchList = document.querySelector(".filter__search-list");

for (let i = 0; i < switchLang.length; i++) {
  switchLang[i].addEventListener("click", () => {
    switchList[i].classList.toggle("active");
  });
}

shadow?.addEventListener("click", () => {
  switchList[0].classList.remove("active");
  switchList[1]?.classList.remove("active");
  filterAppsList.classList.remove("active");
  filterBedList.classList.remove("active");
  filterPriceList.classList.remove("active");
  burgerMenu.classList.remove("active");
  filterSearchList.classList.remove("active");
  filterValList.classList.remove("active");
  filterValListM.classList.remove("active");
  shadow.classList.remove("active");
  document
    .querySelectorAll(".filter__price3.filter__choice")[0]
    .classList.remove("active");
  document
    .querySelector(".filter__apps2.filter__choice.mobile")
    .classList.remove("active");
  document
    .querySelector(".filter__search-list.filter__choice.mobile")
    .classList.remove("active");
  document
    .querySelector(".filter__search-list .filter__search-list.filter__choice")
    .classList.remove("active");

  closedPopup();

  document.querySelector('.filter__apps-item svg').classList.remove('active');
  document.querySelector('.filter__bed-item svg').classList.remove('active')
  document.querySelector('.filter__price-item.spec svg').classList.remove('active')
  document.querySelector('.filter__price2-list .filter__price2-item.spec svg').classList.remove('active')
  document.querySelector('.filter__price2-item.l svg').classList.remove('active')

  if (window.matchMedia("(max-width: 1180px)").matches) {
    document.querySelector(".shadow").style.background = "rgba(34,33,30,.7)";
  }
});

for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", () => {
    for (let i of filterBtns) {
      i.classList.remove("active");
    }
    filterBtns[i].classList.add("active");
  });
}

filterApps?.addEventListener("click", () => {
  document.querySelector('.filter__apps-item svg').classList.toggle('active')
  document.querySelector('.filter__bed-item svg').classList.remove('active')
  document.querySelector('.filter__price-item.spec svg').classList.remove('active')
  document.querySelector('.filter__price2-list .filter__price2-item.spec svg').classList.remove('active')

  filterBedList.classList.remove("active");
  filterPriceList.classList.remove("active");
  shadow.classList.toggle("active");
  filterAppsList.classList.toggle("active");
  filterAppsListM.classList.add("active");
  document
    .querySelector(".filter__search-list .filter__search-list.filter__choice")
    .classList.remove("active");

  if (window.matchMedia("(max-width: 1180px)").matches) {
    openedPopup();
  }
});

filterBed?.addEventListener("click", () => {
  filterAppsList.classList.remove("active");
  filterPriceList.classList.remove("active");
  shadow.classList.toggle("active");
  filterBedList.classList.toggle("active");

  document.querySelector('.filter__bed-item svg').classList.toggle('active')
  document.querySelector('.filter__apps-item svg').classList.remove('active')
  document.querySelector('.filter__price-item.spec svg').classList.remove('active')
  document.querySelector('.filter__price2-list .filter__price2-item.spec svg').classList.remove('active')

  document
    .querySelector(".filter__search-list .filter__search-list.filter__choice")
    .classList.remove("active");
});

filterPrice?.addEventListener("click", () => {
  filterAppsList.classList.remove("active");
  filterBedList.classList.remove("active");
  filterValList.classList.remove("active");

  document.querySelector('.filter__apps-item svg').classList.remove('active')
  document.querySelector('.filter__bed-item svg').classList.remove('active')
  document.querySelector('.filter__price2-list .filter__price2-item.spec svg').classList.remove('active')
  document.querySelector('.filter__price-item.spec svg').classList.toggle('active')

  shadow.classList.toggle("active");
  document
    .querySelector(".filter__search-list .filter__search-list.filter__choice")
    .classList.remove("active");

  filterPriceList.classList.toggle("active");
});
filterVal?.addEventListener("click", () => {
  filterValList.classList.toggle("active");
  document.querySelector('.filter__price2-list .filter__price2-item.spec svg').classList.toggle('active')

  if (window.matchMedia("(max-width: 830px)").matches) {
    filterValListM.classList.toggle("active");
  }
});

filterValM?.addEventListener("click", () => {
  filterValListM.classList.toggle("active");
  shadow.classList.add("active");

  document.querySelector('.filter__price2-item.l svg').classList.add('active')

  openedPopup();
});
for (let i = 0; i < filterSearch.length; i++) {
  filterSearch[i]?.addEventListener("input", () => {
    if (i == 0) filterSearch[i + 1].value = filterSearch[i].value;
    else filterSearch[i - 1].value = filterSearch[i].value;
    if (window.matchMedia("(min-width: 1181px)").matches) {
      document
        .querySelector(
          ".filter__search-list .filter__search-list.filter__choice"
        )
        .classList.add("active");
      if (!shadow.classList.contains("active")) {
        shadow.classList.add("active");
      }
      filterSearchList.classList.add("active");
    }
    if (window.matchMedia("(max-width: 1180px)").matches) {
      document
        .querySelector(
          ".filter__search-list.filter__choice.mobile .filter__list-box"
        )
        .classList.add("unactive");
      document
        .querySelector(
          ".filter__search-list.filter__choice.mobile .filter__list-box2"
        )
        .classList.remove("unactive");
     
    }

    filterAppsList.classList.remove("active");
    filterPriceList.classList.remove("active");
    filterBedList.classList.remove("active");

    document.querySelector('.filter__apps-item svg').classList.remove('active')
    document.querySelector('.filter__bed-item svg').classList.remove('active')
    document.querySelector('.filter__price-item.spec svg').classList.remove('active')
  });
}

document.querySelector('.filter__search-box')?.addEventListener('click', ()=>{
  filterAppsList.classList.remove("active");
  filterPriceList.classList.remove("active");
  filterBedList.classList.remove("active");
  document.querySelector('.filter__apps-item svg').classList.remove('active')
  document.querySelector('.filter__bed-item svg').classList.remove('active')
  document.querySelector('.filter__price-item.spec svg').classList.remove('active')
})

document.querySelector(".close")?.addEventListener("click", function (e) {
  document.querySelector(".modal").classList.remove("active");
});
document.querySelector(".modal-btn")?.addEventListener("click", function (e) {
  document.querySelector(".modal").classList.remove("active");
});

const swiperLikes = document.querySelectorAll(
  ".apartaments .swiper__card-list svg"
);
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

const bedMobile = document.querySelectorAll(".filter__bed1-item");

for (let i = 0; i < bedMobile.length; i++) {
  bedMobile[i]?.addEventListener("click", () => {
    bedMobile[i].classList.toggle("active");
  });
}

document.querySelector(".filter__price3 svg")?.addEventListener("click", () => {
  filterValListM.classList.remove("active");
  shadow.classList.remove("active");

  document.querySelector('.filter__price2-item.l svg').classList.remove('active')

  closedPopup();
});
document.querySelector(".filter__apps2 svg")?.addEventListener("click", () => {
  filterAppsListM.classList.remove("active");
  shadow.classList.remove("active");

  document.querySelector('.filter__apps-item svg').classList.remove('active')

  closedPopup();
});
document.querySelector(".filter__apps-btn2")?.addEventListener("click", () => {
  filterAppsListM.classList.remove("active");
  shadow.classList.remove("active");

  document.querySelector('.filter__apps-item svg').classList.remove('active')


  closedPopup();
});

document
  .querySelectorAll(".filter__apps-btn2")[1]
  ?.addEventListener("click", () => {
    document.querySelector("body").classList.remove("active");
    document
      .querySelector(".filter__search-list.filter__choice.mobile")
      .classList.remove("active");
    shadow.classList.remove("active");

    closedPopup();
    filterSearch[0].disabled = false
  });

var imageUrls = [
  'url("img/about__swiper-2.png")',
  'url("img/about__swiper-1.png")',
  'url("img/about__swiper-2.png")',
  'url("img/about__swiper-1.png")',

  'url("img/about__swiper-2.png")',
];

var imageNumber = imageUrls.length;

function imagePop(id) {
  document.getElementById("imagePopId").style.display = "block";

  var imageName = document.getElementById(id + "-image").style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex == -1) {
    document.getElementsByClassName("imageContain")[0].style.backgroundImage =
      imageUrls[0];
  } else {
    document.getElementsByClassName("imageContain")[0].style.backgroundImage =
      imageUrls[imageIndex];
  }

  openedPopup();
}

function imageChange(id) {
  var imageName = document.getElementById(id).style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex >= imageNumber - 1) imageIndex = 0;
  else imageIndex++;

  document.getElementById(id).style.backgroundImage = imageUrls[imageIndex];
}

function imageMoveLeft() {
  var imageName =
    document.getElementById("imageContainId").style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex <= 0) imageIndex = imageNumber - 1;
  else imageIndex--;

  document.getElementById("imageContainId").style.backgroundImage =
    imageUrls[imageIndex];
}

function imageMoveRight() {
  var imageName =
    document.getElementById("imageContainId").style.backgroundImage;

  var imageIndex = 0;

  imageIndex = imageUrls.indexOf(imageName);

  if (imageIndex >= imageNumber - 1) imageIndex = 0;
  else imageIndex++;

  document.getElementById("imageContainId").style.backgroundImage =
    imageUrls[imageIndex];
}

function imagePopNone() {
  document.getElementsByClassName("imagePop")[0].style.display = "none";

  closedPopup();
}

window?.addEventListener("scroll", function () {
  if (pageYOffset >= 500) {
    this.document.querySelector(".header.fixed")?.classList.add("active");
  } else {
    this.document.querySelector(".header.fixed")?.classList.remove("active");
  }
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink?.addEventListener("click", function (e) {
    e.preventDefault();

    const id = smoothLink.getAttribute("href");
    let yOffset;
    if (!document.querySelector(".header").classList.contains("fixed"))
      yOffset = -240;
    else yOffset = -140;

    const y =
      document.getElementById(id.split("#").join(""))?.getBoundingClientRect()
        .top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  });
}





document.querySelector(".widget__img")?.addEventListener("click", (e) => {
  console.log(e.target)
  if (e.target == document.querySelector(".widget__speech-close") || e.target == document.querySelector(".speech-bubble__close")) {
    document.querySelector(".speech-bubble").classList.remove("appear");
  } else {
    document.querySelector(".widget__img").classList.remove("active");
    document.querySelector(".widget__form").classList.add("active");
  }
});

document.querySelector(".widget__close")?.addEventListener("click", () => {
  document.querySelector(".widget__img").classList.add("active");
  document.querySelector(".widget__form").classList.remove("active");
});


const radioBtns = document.querySelectorAll(".filter__price3.dekstop input");
const radioBtnsMobile = document.querySelectorAll(".filter__price3.mob input");

for (let i of radioBtns) {
  i?.addEventListener("click", () => {
    for (let i = 0; i < radioBtns.length; i++) radioBtns[i].checked = false;
    i.checked = true;
  });
}

for (let i of radioBtnsMobile) {
  i?.addEventListener("click", () => {
    for (let i = 0; i < radioBtnsMobile.length; i++)
      radioBtnsMobile[i].checked = false;
    i.checked = true;
  });
}

const openPriceIpad = document.querySelectorAll(".filter__price2-item.l")[1];

openPriceIpad?.addEventListener("click", () => {
  document
    .querySelectorAll(".filter__price3.filter__choice")[0]
    .classList.add("active");
  shadow.classList.add("active");



  scrollY = window.scrollY;
  document.body.style.top = `-${window.scrollY}px`;
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
});

document.querySelector(".filter__list-close")?.addEventListener("click", () => {
  document.querySelector("body").classList.remove("active");
  filterSearch[0].disabled = false
  document
    .querySelector(".filter__search-list.filter__choice.mobile")
    .classList.remove("active");
  shadow.classList.remove("active");

  closedPopup();
});

document.querySelector('.filter__apps-item2.l .filter__apps-btn1')?.addEventListener('click', ()=>{
  for(let i of  document.querySelectorAll('.filter__apps2.filter__choice.mobile li input')) i.checked = false
 
})

document
  .querySelectorAll(
    ".filter__search-list.filter__choice .filter__apps-item2.l button"
  )[0]
  ?.addEventListener("click", () => {
    for(let i of document.querySelectorAll(".filter__list-box .custom-checkbox")) i.checked = false;
    for(let i of document.querySelectorAll(".filter__list-box2 .custom-checkbox")) i.checked = false;
    // document.querySelector(".filter__list-box").classList.remove("unactive");
    // document.querySelector(".filter__list-box2").classList.add("unactive");
    // for (let i of filterSearch) i.value = "";
  });

const phoneMask = document.getElementsByName("phone");
const sumbitBtn = document.querySelectorAll(".catalog__form-btn");
let number;

const phoneInputs = document.querySelectorAll(
  ".phone__box .catalog__form-input"
);



var maskOptions = {
  mask: "+{0}(000)000-00-00",
  lazy: false,
};
var mask = new IMask(phoneMask[0], maskOptions);
var mask = new IMask(phoneMask[1], maskOptions);

for (let i = 0; i < phoneMask.length; i++) {
  phoneMask[i]?.addEventListener("input", (e) => {
    if (phoneMask[i].value.length > 0) phoneInputs[i].classList.add("active");
    else phoneInputs[i].classList.remove("active");
  });
}

document.querySelector('.preview__top-btn').addEventListener('click', ()=>{
  document.querySelector('.preview__top-btn').classList.toggle('clicked')
})

for (let j = 0; j < sumbitBtn.length; j++) {
  sumbitBtn[j]?.addEventListener("click", () => {
    document.querySelector(".modal").classList.add("active");

    if (
      phoneMask[j].value
        .split("+")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .split(" ")
        .join("")
        .split("-")
        .join("") == "70000000000"
    ) {
      document
        .querySelectorAll(".catalog__form-error")
        [j].classList.add("error");
      phoneMask[j].classList.add("error");
    } else if (
      phoneMask[j].value
        .split("+")
        .join("")
        .split("(")
        .join("")
        .split(")")
        .join("")
        .split(" ")
        .join("")
        .split("-")
        .join("").length != 11
    ) {
      document
        .querySelectorAll(".catalog__form-error")
        [j].classList.add("error");
      phoneMask[j].classList.add("error");
    } else {
      document
        .querySelectorAll(".catalog__form-error")
        [j].classList.remove("error");
      phoneMask[j].classList.remove("error");
    }
  });
}

setTimeout(() => {
  document.querySelector(".speech-bubble")?.classList.add("appear");
}, 20000);


if (window.matchMedia("(max-width: 1180px)").matches) {
  // filterSearch[0].disabled = true
  filterSearch[0].readOnly = true
  document.querySelector(".filter__search-box")?.addEventListener("click", () => {
  document.querySelector(".filter__search-list.filter__choice.mobile").classList.add("active");

  openedPopup();


  console.log(filterSearch[0])
  
  document.querySelector("body").classList.add("active");
  });
}