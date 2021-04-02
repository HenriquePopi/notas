// import moment from '../node_modules/moment/dist/moment.js';
import NotaClass from './modules/notaObg.js'
import Calendario from './modules/calendario.js'
import NovaNota from './modules/nova-nota.js'
import AbaNotas from './modules/aba-notas.js'

//JSON.stringfy(object) transforma o objeto numa string tipo json


let Notas 
fetch('./notas.json')
.then(r => r.text())
.then(jsonText => {
  Notas = new NovaNota("[data-nota='container']",JSON.parse(jsonText)); 
  Notas.init()
  Notas.addNotaAJanela()
    //document.querySelector("[data-nota='container']").appendChild(nota) 
  
});



Date.prototype.diasNoCorrenteMes = function() {
  var days = [30, 31],
  m = this.getMonth();

  if (m == 1) {
    return ( (this.getFullYear() % 4 == 0) && ( (this.getFullYear() % 100 != 0 ) || (this.getFullYear() % 400 == 0) ) ) ? 29 : 28;
  } else {
    return days[(m + (m < 7 ? 1 : 0)) % 2];
  }
} 

function qualDiaDaSemana(data, dia){
  //retorna o dia da semana referente a uma data passada 
  let dataString = data.toDateString() //converte a data em string
  dataString = dataString.replace(/\d{2}(?=\s)/, dia) // troca o dia do mes da entrada pelo dia selecionado
  const diaDaSemana =  new Date(dataString)// transforma em data de novo mas com o dia do mes trocado
  return diaDaSemana.getDay() // retorna o dia da semana da nova data
}


const mes = new Calendario("[data-calendario]")
mes.init()

const elementoNotas = new AbaNotas( )
elementoNotas.init()

