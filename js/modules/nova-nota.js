export default class NovaNota{
  constructor(notasContainerElement, listaDeNotas){
    this.notasContainerElement =  document.querySelector(notasContainerElement)
    //this.notasContainerElement =  document.querySelector("[data-novanota]")
    this.enviarexercicio = document.querySelector("[data-btn='exercicio']")
    
    this.listaDeNotas = listaDeNotas

    //elementos para nova nota
    this.novaNotaContainerElement =  document.querySelector("[data-novanota]")
    this.novaLinhaDiv = document.querySelector('[data-linha-div]')
    this.novaDataDiv = document.querySelector('[data-data-div]')

    this.addExercicio = this.addExercicio.bind(this)
    this.addDate = this.addDate.bind(this)
    this.salvarNota = this.salvarNovaNota.bind(this)
  }
  addEvent(){
    document.querySelector('.salvar-nota').addEventListener("click",this.salvarNota)
    document.querySelector("[data-btn='exercicios']").addEventListener("click", this.addExercicio)
    document.querySelector("[data-btn='data']").addEventListener("click", this.addDate)
    console.log(document.querySelector(".ok"))
  }

  //adicionando oo span com cada exercicio em cada inserção   
  addExercicio(event){
    // nota = { id: inteiro, titulo: string, date: [Date], color: "#fff" , text:[ 'agachamentos', 'flexoes', 'barras'] }
    event.preventDefault()
    const entradaExercicio = document.querySelector('[data-input="exercicios"]')
    if(entradaExercicio.value){
      this.novaLinhaDiv.innerHTML+= `<span class="nota-linha"> ${entradaExercicio.value}</span>`
      entradaExercicio.value = ""
    }
  }
  addDate(event){
    // nota = { id: inteiro, titulo: string, date: [Date], color: "#fff" , text:[ 'agachamentos', 'flexoes', 'barras'] }
    event.preventDefault()
    
    const entradaData = document.querySelector('[data-input="data"]')
    if(entradaData.value){
      this.novaDataDiv.innerHTML+= `<span class="nota-linha"> ${entradaData.value.slice(5,)}</span>`
      entradaData.value = ""
    }
  }
  // criando objeto nota a partir da nova nota 
  salvarNovaNota(){
    const notaCriada = {titulo: "", data: [], color:"#fff", text:[]}
    const notaName = document.querySelector("[data-input='titulo']")
    notaCriada.titulo = (notaName.value)? notaName.value: "Nota sem titulo"
    const exercicios = document.querySelectorAll("[data-linha-div] .nota-linha")
    exercicios.forEach(exercicio => notaCriada.text.push(exercicio.innerText))
    if(!notaCriada.text.length) return 0
    const datas = document.querySelectorAll("[data-data-div] .nota-linha")
    datas.forEach(data => notaCriada.text.push(data.innerText))

    
    //apagando nota da tela
    document.querySelector("[data-input='titulo']").value = ""
    this.novaLinhaDiv.innerHTML=""
    this.novaDataDiv.innerHTML=""

    //inserindo nova nota no vetor de notas
    this.listaDeNotas.push(notaCriada)
    localStorage.setItem("Notas", JSON.stringify(this.listaDeNotas))//atualizando o localStorage
    this.addNotaAJanela()//adicionando nova nota a janela
  }

  deletarNotas(){
    const primeiroFilho =document.querySelector('[data-nota="container"] .fechar')
    while(primeiroFilho.nextElementSibling){
      primeiroFilho.nextElementSibling.remove()
    }
  }

  addNotaAJanela(){
    this.deletarNotas()

    this.listaDeNotas.forEach(objetoNota =>{
      const nota = document.createElement("div")
        nota.classList.add("nota")
        nota.style.backgroundColor = objetoNota.color
        nota.innerHTML += `<p class= "nota-titulo">${objetoNota.titulo}</p>`
        objetoNota.text.forEach(textLine => {
          nota.innerHTML += `<span class="nota-linha"> ${textLine}</span>`
        });
        this.notasContainerElement.appendChild(nota)
    })
    return this
  }
  localStorage(){
    if (localStorage.hasOwnProperty("Notas")) {
      this.listaDeNotas = JSON.parse(localStorage.getItem("Notas"))
      return this
    }
    localStorage.setItem("Notas", JSON.stringify(this.listaDeNotas))
  }
  init(){
    this.addEvent()
    this.localStorage()
  }

}