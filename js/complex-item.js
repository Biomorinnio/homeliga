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
    document.getElementById('openModal').classList.add('active');
    shadow.classList.add('active')
    openedPopup()
  })

  const paymentBtns = document.querySelectorAll('.payment__button')

  for(let i of paymentBtns) i.addEventListener('click', ()=>{
    document.getElementById('openModal-plan').classList.add('active');
    shadow.classList.add('active')
    openedPopup()
  })

  const closeBtns = document.querySelectorAll('.modal .close')
  
  for(let i of closeBtns) i.addEventListener('click', ()=>{
    for(let i of  document.querySelectorAll(".modal")) i.classList.remove("active");
    shadow.classList.remove('active')
    closedPopup()
  })

  shadow.addEventListener('click', ()=>{
    document.getElementById('openModal').classList.remove('active');
    document.getElementById('openModal-plan').classList.remove('active');
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