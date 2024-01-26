var swiperRewards = new Swiper(".swiper-rewards", {

    slidesPerView: 3,
    spaceBetween: 32,
    pagination: {
      el: ".swiper-pagination.rewards",
      clickable: true,
    },
  });

const devBtn = document.querySelector('.developers .developers__descr-btn');

devBtn.addEventListener('click', ()=>{
    document.querySelector('.developers__cards').classList.toggle('active');
    if(document.querySelector('.developers__cards').classList.contains('active'))  devBtn.textContent = 'Скрыть'
    else  devBtn.textContent = 'Показать еще 6 комплексов'
   
})

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


document.querySelector('.developer__item .developer__item-btn').addEventListener('click', ()=>{
  document.getElementById('openModal').classList.add('active');
  shadow.classList.add('active')
  openedPopup()
})

shadow.addEventListener('click', ()=>{
  document.getElementById('openModal').classList.remove('active');
  shadow.classList.remove('active')
  closedPopup()
})
