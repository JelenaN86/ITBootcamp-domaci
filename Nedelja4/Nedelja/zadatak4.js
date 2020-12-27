let pokemoni = [

    {
        ime: `Reshiram`,
        vrsta: `Dragon`,
        sposobnost: `Turboblaze`,
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
        karakteristike:{
            napad: 5,
            odbrana: 2,
            brzina: 5
        }
    }
]
//4. Направити функцију која прима низ покемона,
//  пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

function pobednik() {
   
    let najjaciPokemon = []
    pokemoni.sort((a,b) => b.karakterisitke.napad - a.karakterisitke.napad)

    pokemoni.forEach(pokemon => {
    najjaciPokemon.push(pokemon.karakterisitke.napad)
})
return najjaciPokemon[0]
}
console.log(pobednik())