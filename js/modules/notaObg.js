export default class NotasObg{
  constructor(notas){
    this.notas = notas
    // nota = { id: inteiro, titulo: string, date: [Date], color: "#fff" , text:[ 'agachamentos', 'flexoes', 'barras'], }
  }
  getNoteByKeyValue(key,value){
    const result=[]
    this.notas.forEach(nota => {
      if(nota[key] == value) result.push(nota)
    });
  }
  getNoteByPosition(position){
    return this.notas[position]
  }
  getAllNotes(){
    return this.notas
  }
}
 