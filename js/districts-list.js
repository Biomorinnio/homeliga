const disctrictsItems = document.querySelectorAll('.districts__item')
const disctrictsNames = document.querySelectorAll('.districts__title')
const disctrictsSearchInput = document.querySelector('.districts__list-input')

disctrictsSearchInput.addEventListener('input', (e)=>{
    for(let i = 0; i < disctrictsItems.length; i++){
        if(disctrictsNames[i].textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) == -1) disctrictsItems[i].style.display = 'none'
    }
    if(e.target.value == '') for(let i of disctrictsItems) i.style.display = 'block'
})