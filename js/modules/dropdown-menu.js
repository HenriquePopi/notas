import outsideClick from './outsideclick.js';

export default class DropdownMenu{
  constructor(targetOpen,  targetMenu,  targetClose, events){
    this.targetMenu = document.querySelector(targetMenu)
    this.targetOpen = document.querySelectorAll(targetOpen);
    this.targetClose = document.querySelectorAll(targetClose)
    //define os eventos caso nao sejam passados na criação do objeto
    if(events === undefined) this.events =  ['touchstart', 'click']
    else this.events = events

    this.activetargetMenu = this.activetargetMenu.bind(this)
    this.desactivetargetMenu = this.desactivetargetMenu.bind(this)
  }

  //adiciona o aevento de dropdown aos elementos
  addEvent(){
    this.targetOpen.forEach(menu => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activetargetMenu);
      });
    });

    this.targetClose.forEach(menu => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.desactivetargetMenu);
      });
    });

  }

  //ativa o dropdown menu e adiciona a função que observa o click fora dele
  activetargetMenu(event) {
    event.preventDefault();
    this.targetMenu.classList.add('active');
  }
  desactivetargetMenu(evebt){
    event.preventDefault();
    this.targetMenu.classList.remove('active');
  }
  init(){
    console.log(this.targetOpen)
    if(this.targetOpen.length){
      
      this.addEvent()

    }
    return this
  }
}