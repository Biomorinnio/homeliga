const swiperBoxes = document.querySelectorAll('.swiper__card-box')
const swiperLikes = document.querySelectorAll(".swiper__card-list svg");
const swiperLikesBox = document.querySelectorAll(".swiper__like");

for (let i = 0; i < swiperLikes.length; i++) {
  swiperLikes[i]?.addEventListener("mouseover", () => {
    swiperLikesBox[i].classList.add("active");
  });
  swiperLikes[i]?.addEventListener("mouseout", () => {
    swiperLikesBox[i].classList.remove("active");
  });
  swiperLikes[i]?.addEventListener("click", () => {
    swiperBoxes[i].style.display = 'none';
  });
}

document.querySelector('.favorites__btn').addEventListener('click', ()=>{
    for(let i of swiperBoxes) i.style.display = 'none'
})
