//1.Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)
//2.Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона
//3.Сортирати покемоне по брзини, растуће.

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
//2.Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона
{
   function sveSposobnosti(pokemoni){
       let tmp = []
       pokemoni.forEach(pokemon => pokemon.sposobnost)

       for(let el of pokemoni)
       tmp.push(el.sposobnost)

       return tmp
   }  
   console.log(sveSposobnosti(pokemoni))

}
  
//3.Сортирати покемоне по брзини, растуће
{
    console.log(pokemoni.sort((a,b) => a.karakteristike.brzina - b.karakteristike.brzina))
}

