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

