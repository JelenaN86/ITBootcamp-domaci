////6. На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 2 дугмета за наручивање одмах

//i. Дугмићи за 'наручивање' повећавају бројач
//ii. Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ])
//  Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку

let count = 0

const btnNaruci1 = document.querySelector(`.btn order1`)
const btnNaruci2 = document.querySelector(`.btn order2`)
const btnReset3 = document.querySelector(`.btn reset3`)
const btnReset4 = document.querySelector(`.btn reset4`)

btnNaruci1.addEventListener(`click`, naruci)
btnNaruci2.addEventListener(`click`, naruci)
btnReset3.addEventListener(`click`, naruciOdmah)
btnReset4.addEventListener(`click`, naruciOdmah)

const naruci = () => {
  count++
  console.log(count)
}
const naruciOdmah = () => {
  if(count == 0){
    console.log(`GRESKA`)
  }else{
    console.log(`Narucili ste ${count} pica`)
    count = 0
  }
}

