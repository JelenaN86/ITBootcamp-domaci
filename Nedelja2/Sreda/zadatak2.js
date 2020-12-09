// Zadatak 2.
//Направити променљиву која представља цену производа коју купац жели да купи
//Направити променљиву која представља количину новца коју купац има
//Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
//Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)

let cena = 1499
let kolNovca = 2000
let kusur = kolNovca - cena

if (kolNovca < cena) {
    console.log(`Nemate dovoljno novca`)
    console.log(cena, kolNovca)
}else{
    kolNovca >= cena
    console.log(`Uspesno ste kupili proizvod`)
    console.log(`Vac kusur je:`, kusur)
}