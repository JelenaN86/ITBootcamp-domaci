//Napisati funkciju koja za parametar prima broj sati(0-24)
//i u zavisnosti od doba dana ispisuje poruke:
//Dobro jutro, Dobar dan, Dobro vece
function dayTime(hours){
    if(hours <0 || hours > 24){
        console.log(`Sati moraju biti izmedju 0 i 24`)
    }else if(hours > 0 && hours <= 9){
        console.log(`Dobro jutro`)
    }else if(hours > 9 && hours <= 18){
        console.log(`Dobar dan`)
    }else{
        console.log(`Dobro vece`)
    }
}
dayTime(22)