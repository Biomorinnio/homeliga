const favBoxes = document.querySelectorAll('.swiper__card-box')
const favlikes = document.querySelectorAll(".swiper__card-list svg");
const favlikesBox = document.querySelectorAll(".swiper__like");

for (let i = 0; i < favlikes.length; i++) {
  favlikes[i]?.addEventListener("mouseover", () => {
    favlikesBox[i].classList.add("active");
  });
  favlikes[i]?.addEventListener("mouseout", () => {
    favlikesBox[i].classList.remove("active");
  });
  favlikes[i]?.addEventListener("click", () => {
    favBoxes[i].classList.add('hiding');
    setTimeout(()=>{
      favBoxes[i].style.display = 'none'
    }, 300)
  });
}

document.querySelector('.favorites__btn').addEventListener('click', ()=>{
    for(let i of favBoxes){
      i.classList.add('hiding');
      setTimeout(()=>{
        i.style.display = 'none'
      }, 300)
    } 
})
