const disctrictsItems = document.querySelectorAll('.districts__item')
const disctrictsNames = document.querySelectorAll('.districts__title')
const disctrictsSearchInput = document.querySelector('.districts__list-input')

if(window.matchMedia('(min-width: 769px)').matches){
    disctrictsSearchInput.addEventListener('input', (e)=>{
        for(let i = 0; i < disctrictsItems.length; i++){
            if(disctrictsNames[i].textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) == -1) disctrictsItems[i].style.display = 'none'
        }
        if(e.target.value == '') for(let i of disctrictsItems) i.style.display = 'block'
    })
}
if(window.matchMedia('(max-width: 768px)').matches){
    let searchInput = document.querySelector('.filter__search-box input')
    disctrictsSearchInput.addEventListener('click', ()=>{
        document.querySelector('.filter__search-list.filter__choice.mobile').classList.add('active');
  
        searchInput.readOnly = false;
        disctrictsSearchInput.disabled = true;
    })
    searchInput.addEventListener('input', ()=>{
        document.querySelector('.filter__list-box2').classList.remove('unactive')
        document.querySelector('.filter__list-box').classList.add('unactive')

        if(searchInput.value.length == 0){
            document.querySelector('.filter__list-box2').classList.add('unactive')
            document.querySelector('.filter__list-box').classList.remove('unactive')
        }
    })
    document.querySelector('.filter__list-close').addEventListener('click', ()=>{
        searchInput.readOnly = true;
        disctrictsSearchInput.disabled = false;
    })
   
}
