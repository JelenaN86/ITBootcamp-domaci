////6. На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 2 дугмета за наручивање одмах

//i. Дугмићи за 'наручивање' повећавају бројач
//ii. Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ])
//  Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку

let count = 1
let time = new Date()

const spanValue = document.querySelector(`#value`)
const btns = document.querySelectorAll(`.btn`)

btns.forEach(function (btn) {
  btn.addEventListener(`click`, function (e) {

    spanValue.textContent = count
    const dugme = e.currentTarget.classList

    if (dugme.contains(`order1`)){
      count--
    } else if (dugme.contains(`order2`)){
      count++
    } else if(dugme.contains(`reset`)){
      console.log(`Narucili ste ${count} pica, ${new Date()} `)
    }
  })
  

})
