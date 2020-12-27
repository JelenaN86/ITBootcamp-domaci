//5. За дати html направити скрипту која:

//     <div class="wrapper">
// 		<button id="prikaz">PRIKAZI POKEMONE</button>
// 		<button id="pobednik">PRIKAZI NAJJACEG POKEMONA</button>
// 	</div>

// *На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :
//     <div>
//         <p>Opis pokemona</p>
//         <img src="slika odgovarajućeg pokemona">
//     </div>

// *На клик на дугме прикажи најјачег покемона приказује покемона који има најјачи напад
//  (користити већ написану функцију иѕ 4. задатка) по истом формату.
let pokemoni = [

    {
        ime: `Reshiram`,
        vrsta: `Dragon`,
        sposobnost: `Turboblaze`,
        img: "https://images.app.goo.gl/Kk7TLuzMxyAwguA1A",
        karakteristike:{
            napad: 5,
            odbrana: 5,
            brzina: 4
        }
    },
    {
        ime: `Dialga`,
        vrsta: `Dragon`,
        sposobnost: [`Pressure`,`Telepathy`],
        img: "https://images.app.goo.gl/dnCN9eEVdJLf47n1A",
        karakteristike:{
            napad: 5,
            odbrana: 5,
            brzina: 3
        }
    },
    {
        ime: `Raikou`,
        vrsta: `Electric`,
        sposobnost: [`Pressure`,`Inner focus`],
        img: "https://images.app.goo.gl/JirqNHAx8gPgqn198",
        karakteristike:{
            napad: 4,
            odbrana: 3,
            brzina: 4
        }
    },
    {
        ime: `Giratina`,
        vrsta: `Ghost`,
        sposobnost: [`Pressure`,`Telepathy`,`Levitate`],
        img: "https://images.app.goo.gl/ueNnh4ZKABLpCUVk9",
        karakteristike:{
            napad: 3,
            odbrana: 5,
            brzina: 3
        }
    },
    {
        ime: `Deoxys`,
        vrsta: `Psychic`,
        sposobnost: `Pressure`,
        img: "https://images.app.goo.gl/jDPsvFsUdGdVtZxN7",
        karakteristike:{
            napad: 5,
            odbrana: 2,
            brzina: 5
        }
    }
]
const divWrapper = document.querySelector(`.wrapper`)
const btnPrikaz = document.querySelector(`#prikaz`)
btnPrikaz.addEventListener(`click`, () => {
    pokemoni.forEach(pokemon =>{
        const divPrikaz = document.createElement(`div`)
        divWrapper.appendChild(divPrikaz)
        divPrikaz.innerHTML = `
        <div>
           <p>${pokemon.ime}</p>
           <img src="${pokemon.img}" alt="Slika ${pokemon.ime}">
        </div>    
        `
    })
})
function pobednik() {
   
    let najjaciPokemon = []
    pokemoni.sort((a,b) => b.karakterisitke.napad - a.karakterisitke.napad)

    pokemoni.forEach(pokemon => {
    najjaciPokemon.push(pokemon.karakterisitke.napad)
})
return najjaciPokemon[0]
}
const btnPobednik = document.querySelector(`#pobednik`)
btnPobednik.addEventListener(`click`, () =>{
    pokemoni.forEach(pokemon => {
        const divPobednik = document.createElement(`div`)
        divWrapper.appendChild(divPobednik)
        divPobednik.innerHTML = `
        <div>
            <p>${pobednik().ime}</p>
            <img src="${pobednik().img}">
        </div> `
    })
})