
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

const openPopupBtn = document.querySelector('.complexes__inner-link');
const popup = document.querySelector('.modal')

openPopupBtn.addEventListener('click', ()=>{
    popup.classList.add('active');
    openedPopup();
})