const swiperContacts = new Swiper('.swiper-contacts', {

  spaceBetween: 20,

    pagination: {
      el: '.swiper-pagination.contacts',
    },
  
    navigation: {
      nextEl: '.swiper-button-next.contacts',
      prevEl: '.swiper-button-prev.contacts',
    },
    breakpoints: {
    1181: {
      spaceBetween: 0,
  }
  }
  
  });

const contactsTabs = document.querySelectorAll('.contacts__btn')

for(let i of contactsTabs) i.addEventListener('click', ()=>{
    for(let j of contactsTabs) j.classList.remove('active')
    i.classList.add('active')
})

