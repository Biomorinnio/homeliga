const swiperContacts = new Swiper('.swiper-contacts', {

    pagination: {
      el: '.swiper-pagination.contacts',
    },
  
    navigation: {
      nextEl: '.swiper-button-next.contacts',
      prevEl: '.swiper-button-prev.contacts',
    },
  
  });

const contactsTabs = document.querySelectorAll('.contacts__btn')

for(let i of contactsTabs) i.addEventListener('click', ()=>{
    for(let j of contactsTabs) j.classList.remove('active')
    i.classList.add('active')
})

