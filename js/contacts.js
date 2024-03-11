const swiperContacts = new Swiper('.swiper-contacts', {

  spaceBetween: 20,
  loop: true,

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
const contactsTitle = document.querySelector('.contacts__descr-title')

for(let i of contactsTabs) i.addEventListener('click', ()=>{
    for(let j of contactsTabs) j.classList.remove('active')
    i.classList.add('active')

    let arrText = contactsTitle.textContent.split(' ')
    arrText.splice(3, 1)
    arrText.push(i.textContent.split(' ')[i.textContent.split(' ').length-1])
    contactsTitle.textContent =  arrText.join(' ')
  
})

