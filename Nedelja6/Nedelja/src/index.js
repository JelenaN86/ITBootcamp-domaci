import {Kupac,Proizvod,Prehrambeni,BelaTehnika} from './class.js'
import f from './funkcije.js'


export let registrovaniKupci = [
    new Kupac('Ana','012'),
    new Kupac(`Milan`,`345`),
    new Kupac(`Jovana`,`678`)]
//console.log(registrovaniKupci)
let proizvodi = [
    new Prehrambeni(`Cokolada`, `109`, `10`, `12/2021`),
    new Prehrambeni(`Hleb`, `69`, `20`,`02/2021`),
    new BelaTehnika(`Laptop`, `59999`, `1`,`2`)
]

const forma = document.querySelector('#forma')
const inputName = document.querySelector('#username')
const inputPass = document.querySelector('#password')
const divKorpa = document.querySelector('.korpa')
const divProizvodi = document.querySelector(`.proizvodi`)

forma.addEventListener('submit', (e) => {
    e.preventDefault()

    let k = new Kupac(inputName.value, inputPass.value)
  
   if (f.isValidKupac(k)) {
        let korpa = document.createElement('div')
        let h3 = document.createElement('h3')
        h3.innerHTML = `Vasa korpa : ${k.username}`
        korpa.append(h3)
        divKorpa.append(korpa)
    } else {
        console.log(`Niste registrovani`)
    }
  //  console.log(k)
})


const addToDOM = (proi)=>{

}

