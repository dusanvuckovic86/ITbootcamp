class Film {
    constructor(n, r, gi,o) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = gi;
        this.ocene = o;
    }
set naslov (n){
this._naslov = n;
}
get naslov (){
    return this._naslov;
}

set reziser (r)
{
    this._reziser = r;
}
get reziser (){
    return this._reziser;
}

set godinaIzdanja (gi){
    if (gi > 1800){
        this._godinaIzdanja = gi;
    }
    else {
        this._godinaIzdanja = 1800
    }
}
get godinaIzdanja(){
    return this._godinaIzdanja
}
//ocene

set ocene (o){
    this._ocene = o;
}
get ocene (){
    return this._ocene
}

stampaj(){
    
    console.log(this)
}

// dodavanje jedne ocene

dodajOcenu(novaOcena){
    this._ocene.push(novaOcena);
}

prosek(){
    let suma =0;
    this.ocene.forEach(element => {
        suma += element
    });

    return suma/this.ocene.length
}

zaUProsek(){
    let suma =0;
    this.ocene.forEach(element => {
        suma += element
    });

    return suma
}

najmanjaOcena(){
    let najmanja = this.ocene[0]
    for (let i=0;i<this.ocene.length; i++){
        if (najmanja > this.ocene[i]){
            najmanja = this.ocene [i]
        }
    }
    return najmanja
}

}

export default Film