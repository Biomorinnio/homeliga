var swiperFeatures = new Swiper(".swiper-features", {
    slidesPerView: 1,
    allowTouchMove: true,
    spaceBetween: 20,
   
    pagination: {
      el: ".swiper-pagination.features",
      clickable: true,
    },
 
  });
  

  const tableScrollBtn = document.querySelector('.payment__btn');
  const tableWrapper = document.querySelector('.scrollable-table')

  tableScrollBtn.addEventListener('click', ()=>{
    tableWrapper.classList.toggle('active')
    if(!tableWrapper.classList.contains('active'))  tableScrollBtn.textContent = 'Развернуть'
    else tableScrollBtn.textContent = 'Свернуть'

  })