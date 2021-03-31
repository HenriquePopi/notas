import DropdownMenu from './dropdown-menu.js'
export default class AbaNota{
  constructor( ){
    this.elementoNotas = new DropdownMenu("[data-calendario] ul li", '[data-nota="container"]',"[data-nota='container'] .fechar")
  }
  init(){
    this.elementoNotas.init()
    return this
  }
}
