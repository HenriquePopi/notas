export default class Calendario{
  constructor(mesSection, data){
    this.mesSection = document.querySelector(mesSection)
    this.data = data ? data: new Date()
  }

  qualDiaDaSemana(data, dia){
    //retorna o dia da semana referente a uma data passada 
    let dataString = data.toDateString() //converte a data em string
    dataString = dataString.replace(/\d{2}(?=\s)/, dia) // troca o dia do mes da entrada pelo dia selecionado
    const diaDaSemana =  new Date(dataString)// transforma em data de novo mas com o dia do mes trocado
    return diaDaSemana.getDay() // retorna o dia da semana da nova data
  }

  createMonth(){ //es é um obdeto Data
    const mes = this.data
    const diasNoMes = mes.diasNoCorrenteMes() // acha a quantidade de dias no mes presente nessa data
    const mesElement = document.createElement('ul')// cria a lista de dias
    mesElement.classList.add('mes')
    mesElement.innerHTML += `<li class="dia" style='margin-left:${this.qualDiaDaSemana(mes,1)*70 +10}px' >1</li>`//adiciona espaço a margem esquerda do dia 1 para psiciona-lo corrtamente
    for (let index = 2; index <=diasNoMes; index++) {//adiciona os elementos da lista (dias)
        mesElement.innerHTML += `<li class="dia">${index}</li>`
    }
    this.mesElement = mesElement
  }
  init(){
    if(this.mesSection){
      this.createMonth()
      this.mesSection.appendChild(this.mesElement) 
    }
  }
}