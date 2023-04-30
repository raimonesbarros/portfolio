export class Project{
  constructor(){
    this.list = [
      {
        name  : 'p1',
        img   : 'img/p1.jpg',
        deploy: 'https://raimonesbarros.github.io/mascote-android/',
        gitHub: 'https://github.com/raimonesbarros/mascote-android'
      },
      {
        name  : 'p2',
        img   : 'img/p2.jpg',
        deploy: 'https://raimonesbarros.github.io/Cordel/',
        gitHub: 'https://github.com/raimonesbarros/Cordel'
      },
      {
        name  : 'p3',
        img   : 'img/p3.jpg',
        deploy: 'https://igloosorveteria.netlify.app/',
        gitHub: 'https://github.com/raimonesbarros/igloo'
      },
      {
        name  : 'p4',
        img   : 'img/p4.jpg',
        deploy: 'https://raimonesbarros.github.io/Jogo-da-velha/',
        gitHub: 'https://github.com/raimonesbarros/Jogo-da-velha'
      },
      {
        name  : 'p5',
        img   : 'img/p5.jpg',
        deploy: 'https://raimonesbarros.github.io/Calculadora/',
        gitHub: 'https://github.com/raimonesbarros/Calculadora'
      },
      {
        name  : 'p6',
        img   : 'img/p6.jpg',
        deploy: 'https://raimonesbarros.github.io/Calculadora-de-IMC/',
        gitHub: 'https://github.com/raimonesbarros/Calculadora-de-IMC'
      },
      {
        name  : 'p7',
        img   : 'img/p7.jpg',
        deploy: 'https://raimonesbarros.github.io/dev-fora-da-caixa/',
        gitHub: 'https://github.com/raimonesbarros/dev-fora-da-caixa'
      },
      {
        name  : 'p8',
        img   : 'img/p8.jpg',
        deploy: 'https://raimonesbarros.github.io/abrigo-amigo/',
        gitHub: 'https://github.com/raimonesbarros/abrigo-amigo'
      },
      {
        name  : 'p9',
        img   : 'img/p9.jpg',
        deploy: '',
        gitHub: 'https://github.com/raimonesbarros/portfolio'
      },
      {
        name  : 'p10',
        img   : 'img/p10.jpg',
        deploy: 'https://raimonesbarros.github.io/aprenda-teclado-musical/',
        gitHub: 'https://github.com/raimonesbarros/aprenda-teclado-musical'
      },
      {
        name  : 'p11',
        img   : 'img/p11.jpg',
        deploy: 'https://raimonesbarros.github.io/igloo-sorveteria/',
        gitHub: 'https://github.com/raimonesbarros/igloo-sorveteria'
      },
    ]

    this.show    = document.querySelector('.show img')
    this.deploy  = document.querySelector('.dep')
    this.project = document.querySelector('.proj')
    // this.navigation = document.querySelectorAll('.navigation')
    this.miniCard = document.querySelectorAll('.mini .card')
  }

  init(){
    const current = document.querySelector('.current')
    this.select(current.id)
  }

  select(projeto){
    this.list.map(el=>{
      if(el.name == projeto){
        this.show.setAttribute('src', el.img)
        this.show.parentNode.classList.add('open-project')
        this.deploy.setAttribute('href', el.deploy)
        this.project.setAttribute('href', el.gitHub)
        setTimeout(()=>{
          this.show.parentNode.classList.remove('open-project')
        }, 600)
      }
    })
  }
}
