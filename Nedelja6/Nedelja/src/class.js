export class Kupac{
    username
    password
    korpa
    constructor(username,password){
        this.username = username
        this.password = password
        this.korpa = []
    }
    //addKorpa()
    //deleteKorpa()
}
export class Proizvod{
    naziv
    cena
    kolicina
    constructor(naziv, cena, kolicina){
        this.naziv = naziv
        this.cena = cena
        this.kolicina = kolicina
    }
}
export class Prehrambeni extends Proizvod{
    rokTrajanja
    constructor(naziv,cena,kolicina,rokTrajanja){
        super(naziv,cena,kolicina)
        this.rokTrajanja = rokTrajanja
    }
}
export class BelaTehnika extends Proizvod{
    garancija
    constructor(naziv,cena,kolicina,garancija){
        super(naziv,cena,kolicina)
        this.garancija = garancija
    }
}
