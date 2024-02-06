var swiperFeatures = new Swiper(".swiper-features", {
    slidesPerView: 1,
    allowTouchMove: true,
    spaceBetween: 20,
   
    pagination: {
      el: ".swiper-pagination.features",
      clickable: true,
    },
 
  });
  
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
    document.getElementById('openModal-welcome').classList.add('active');
    shadow.classList.add('active')
    openedPopup()
  })

  const paymentBtns = document.querySelectorAll('.payment__button')

  for(let i of paymentBtns) i.addEventListener('click', ()=>{
    document.getElementById('openModal').classList.add('active');
    shadow.classList.add('active')
    openedPopup()
  })
  
  shadow.addEventListener('click', ()=>{
    document.getElementById('openModal').classList.remove('active');
    shadow.classList.remove('active')
    closedPopup()
  })
  

  const tableScrollBtn = document.querySelector('.payment__btn');
  const tableWrapper = document.querySelector('.scrollable-table')

  tableScrollBtn.addEventListener('click', ()=>{
    tableWrapper.classList.toggle('active')
    if(!tableWrapper.classList.contains('active'))  tableScrollBtn.textContent = 'Развернуть'
    else tableScrollBtn.textContent = 'Свернуть'

  })