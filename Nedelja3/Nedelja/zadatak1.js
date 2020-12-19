//Написати функцију која исписује све елементе низа који су дељиви са 5

function divisibleByFive(arr){
    let tmp = []
    for(let el of arr){
        if(el % 5 == 0){
            tmp.push(el)
        }
    }
    console.log(tmp)
}
divisibleByFive([1,2,3,4,5,10,15,23,1,5]) // Исписује -> 5,10,15,5
