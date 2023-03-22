let theme = localStorage.getItem('modeTheme');
theme? '' : localStorage.setItem('modeTheme', 'dark')
let currentMode = 'light';

const mode    = document.querySelectorAll('.mode');
const dark    = document.querySelector('.dark')
const light   = document.querySelector('.light')
const body    = document.querySelector('body')
const html    = document.querySelector('html')
const header  = document.querySelector('header')
const navLists= document.querySelector('.nav-list')
const span    = document.querySelectorAll('.span')
const p       = document.querySelectorAll('p')
const bgImg   = document.querySelector('.bg-img')
const section = document.querySelectorAll('section')
const textSha = document.querySelector('.about p')

theme!=currentMode? darkMode():''

mode.forEach(el=>{
  el.addEventListener('click', ()=> darkMode())
})

function darkMode(){
  currentMode=='light'? currentMode = 'dark': currentMode = 'light'
  dark.classList.toggle('disable')
  light.classList.toggle('disable')
  html.classList.toggle('bgDark')
  body.classList.toggle('bgDark')
  header.classList.toggle('bgDark')
  navLists.classList.toggle('bgDark')
  textSha.classList.toggle('text-shadow')
  bgImg.classList.toggle('showcaseOpacity')
  section.forEach(el=>{
    el.classList.toggle('box-shadow')
  })
  span.forEach(el=>{
    el.classList.toggle('letterLight')
  })
  p.forEach(el=>{
    el.classList.toggle('letterLight2')
  })
  localStorage.removeItem('modeTheme')
  localStorage.setItem('modeTheme', currentMode)
}
