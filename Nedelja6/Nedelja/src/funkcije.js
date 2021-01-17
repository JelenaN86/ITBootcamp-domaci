import {registrovaniKupci} from './index.js'

const isValidKupac = kupac => {
    valid = false
    registrovaniKupci.forEach(k =>{
        if(k.username == kupac.username && k.password == kupac.password){
            valid = true
        }
    })
    return valid
}


export default{
    isValidKupac,

}
