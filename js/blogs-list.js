
const blogFilterBtns = document.querySelectorAll('.blogs__list-button');

for(let i of blogFilterBtns) i.addEventListener('click', ()=>{
    for(let j of blogFilterBtns) j.classList.remove('active')
    i.classList.add('active')
})