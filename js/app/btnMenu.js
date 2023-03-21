const btnMenu   = document.querySelector('.btn-menu')
const sandwich1 = document.querySelector('.sandwich1')
const sandwich2 = document.querySelector('.sandwich2')
const navList   = document.querySelector('.nav-list')
const navItem   = document.querySelector('.nav-item')



window.addEventListener('click', evt=>{
  let event = evt.target.classList
  if(event.contains('s')
  || event.contains('btn-menu')
  || event.contains('sand')){
    sandwich1.classList.toggle('disable')
    sandwich2.classList.toggle('disable')
    navList.classList.toggle('disable')
  } else if( event.contains('nav-list')){
    return ''
  } else {
    sandwich1.classList.remove('disable')
    sandwich2.classList.add('disable')
    navList.classList.add('disable')
  }
})

