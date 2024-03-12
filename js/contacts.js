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

    if(contactsTitle.textContent == 'Центральный офис в Москве') document.querySelector('.contacts iframe').src = "https://yandex.ru/map-widget/v1/?um=constructor%3A713b919f3adc806843eef678c6f1887e3b787829e62741dee0f9e6c389dc363c&amp;source=constructor"
    if(contactsTitle.textContent == 'Центральный офис в Дубае') document.querySelector('.contacts iframe').src = "https://yandex.ru/map-widget/v1/?um=constructor%3Aa8b88211b67b2f798644cd7625a9fba61cec79fa2bec939943171680a41a883d&amp;source=constructor"
})

