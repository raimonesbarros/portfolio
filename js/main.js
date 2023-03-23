import { Project } from "./app/projects.js";

const project = new Project()

project.init()
const cards = document.querySelectorAll('.mini .card')

cards.forEach(el=>{
  el.addEventListener('click', evt=>{
    let event = evt.target.parentNode
    if(event.classList.contains('card')){
      cards.forEach(el=>{
        el.classList.remove('current')
      })
      event.classList.add('current')
      project.select(event.id)
    }
  })
})
