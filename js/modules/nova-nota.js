export default class NovaNota{
  constructor(notasContainerElement){
    this.notasContainerElement =  document.querySelector(notasContainerElement)
    //this.notasContainerElement =  document.querySelector("[data-novanota]")
    this.enviarexercicio = document.querySelector("[data-btn='exercicio']")
    
    //elementos para nova nota
    this.novaNotaContainerElement =  document.querySelector("[data-novanota]")
    this.novaNotaDiv = document.querySelector('[data-nota-div]')

    this.exercicioVector = []

    this.addExercicio = this.addExercicio.bind(this)
    this.salvarNota = this.salvarNovaNota.bind(this)
  }
  addEvent(){
    document.querySelector('.salvar-nota').addEventListener("click",this.salvarNota)
    document.querySelector(".ok").addEventListener("click", this.addExercicio)
    console.log(document.querySelector(".ok"))
  }

  //adicionando oo span com cada exercicio em cada inserção   
  addExercicio(event){
    // nota = { id: inteiro, titulo: string, date: [Date], color: "#fff" , text:[ 'agachamentos', 'flexoes', 'barras'] }
    event.preventDefault()
    const entradaExercicio = document.querySelector('[data-input="exercicios"]')
    if(entradaExercicio.value){
      this.exercicioVector.push(entradaExercicio.value)
      this.novaNotaDiv.innerHTML+= `<span class="nota-linha"> ${entradaExercicio.value}</span>`
      entradaExercicio.value = ""
    }
  }

  // criando objeto nota a partir da nova nota 
  salvarNovaNota(){
    const notaCriada = {titulo: "", data: undefined, color:"#fff", text:[]}
    const notaName = document.querySelector("[data-input='titulo']")
    notaCriada.titulo = notaName.value
    const exercicios = document.querySelectorAll("[data-nota-div] .nota-linha")
    exercicios.forEach(exercicio => notaCriada.text.push(exercicio.innerText))

    //apagando nota da tela
    document.querySelector("[data-input='titulo']").value = ""
    document.querySelector("[data-nota-div]").innerHTML=""
    
  }

  addNotaAJanela(objetoNota){
    const nota = document.createElement("div")
      nota.classList.add("nota")
      nota.style.backgroundColor = objetoNota.color
      nota.innerHTML += `<p class= "nota-titulo">${objetoNota.titulo}</p>`
      objetoNota.text.forEach(textLine => {
        nota.innerHTML += `<span class="nota-linha"> ${textLine}</span>`
      });
      this.notasContainerElement.appendChild(nota)
      return this
  }
  init(){
    this.addEvent()
  }

}