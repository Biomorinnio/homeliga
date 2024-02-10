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

  var imageUrls = [
    'url("img/preview-1.png")',
    'url("img/preview-2.jpg")',
    'url("img/preview-3.jpg")'
  ];

  function imagePop(id, number) {

    let slidesUrl = []
    if(number == 1){
      slidesUrl = [
        "img/preview-1.png",
        "img/preview-2.jpg",
        "img/preview-3.jpg"
      ];
      imageUrls = [
        'url("img/preview-1.png")',
        'url("img/preview-2.jpg")',
        'url("img/preview-3.jpg")'
      ];
    }
    else if(number == 2){
      imageUrls = [
        'url("img/preview-2.jpg")',
        'url("img/preview-1.png")',
        'url("img/preview-3.jpg")'
      ];
      slidesUrl = [
        "img/preview-2.jpg",
        "img/preview-1.png",
        "img/preview-3.jpg"
      ];
    }
    else{
      imageUrls = [
        'url("img/preview-3.jpg")',
        'url("img/preview-2.jpg")',
        'url("img/preview-1.png")'
      ];
      slidesUrl = [
        "img/preview-3.jpg",
        "img/preview-2.jpg",
        "img/preview-1.png"
      ];
    } 
     
    let slidesImg = document.querySelectorAll('.swiper-slide__img')
    let slidesBackImgs = document.querySelectorAll('.mySwiper7 .swiper-slide')
   
    for(let i = 0; i < slidesImg.length; i++ ){
      slidesImg[i].src = slidesUrl[i] 
      
      slidesBackImgs[i].style.backgroundImage = imageUrls[i];
      document.getElementById('imageContainId').style.backgroundImage = imageUrls[0]
      console.log(slidesBackImgs[i].style.backgroundImage)
    }
  

    document.getElementById("imagePopId").style.display = "block";
  
    var imageName = document.getElementById(id + "-image").style.backgroundImage;

  
    var imageIndex = 0;
  
    imageIndex = imageUrls.indexOf(imageName);
    console.log(imageIndex)

    
  
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
  