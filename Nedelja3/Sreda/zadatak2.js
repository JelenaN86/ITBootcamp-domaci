//Napisati funkciju koja izracunava cenu pice po kvadratnom centimetru
//(parametri funkcije su poluprecnik u cm, i cena pice)
function priceInCm(r, price){
    return price / (r ** 2 * Math.PI)
}

let x = priceInCm(16, 990)
console.log(x)