

///BOJA

class Boja {
    constructor(td, z, i) {
        this.talasnaDuzina = td;
        this.zasicenje = z;
        this.intenzitet = i;
    }
    set talasnaDuzina(td) {
        this._talasnaDuzina = td;
    }
    get talasnaDuzina() {
        return this._talasnaDuzina
    }

    set zasicenje(z) {
        this._zasicenje = z;
    }
    get zasicenje() {
        return this._zasicenje
    }


    set intenzitet (i) {
        this._intenzitet = i;
    }
    get intenzitet(){
        return this._intenzitet
    }
}





/////////DATUM

class Datum {
    constructor(d,m,g){
        this.dan=d;
        this.mesec=m;
        this.godina=g;
    }
    
    set dan(d) {
        this._dan = d;
    }
    get dan() {
        return this._dan
    }

    set mesec(m) {
        this._mesec = m;
    }
    get mesec() {
        return this._mesec
    }

    set godina(g) {
        this._godina = g;
    }
    get godina() {
        return this._godina
    }




}


//radnik
class Radnik {
    constructor()
}

export {Boja, Datum, Radnik};