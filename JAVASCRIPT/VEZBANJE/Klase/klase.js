

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


    set intenzitet(i) {
        this._intenzitet = i;
    }
    get intenzitet() {
        return this._intenzitet
    }
}





/////////DATUM

class Datum {
    constructor(d, m, g) {
        this.dan = d;
        this.mesec = m;
        this.godina = g;
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
    constructor(i, p) {
        this.ime = i;
        this.plata = p;
    }
    set ime(i) {
        this._ime = i;
    }
    get ime() {
        return this._ime
    }

    set plata(p) {
        this._plata = p;
    }
    get plata() {
        return this._plata
    }


    stampaj() {
        console.log(this)
    }
}

//Autobus

class Autobus {
    constructor(rb, bs) {
        this.registarskiBroj = rb;
        this.brojSedista = bs;
    }

    set registarskiBroj(rb) {
        this._registarskiBroj = rb;
    }
    get registarskiBroj() {
        return this._registarskiBroj
    }

    set brojSedista(bs) {
        this._brojSedista = bs;
    }
    get brojSedista() {
        return this._brojSedista
    }

    stampaj() {
        console.log(this)
    }
}



///////////////////////////////////////////

//Radio

class Radio {
    constructor(s, f, jt) {
        this.stanica = st;
        this.frekfencija = fr;
        this.jacinaTona = jt;
    }
    set stanica(s) {
        this._stanica = s;
    }
    get stanica() {
        return this._stanica
    }

    set frekfencija(f) {
        if (f >= 85.5 && f <= 108) {
            this._frekfencija = f;
        }
        else {
            this._frekfencija = 90;
        }
    }
    get frekfencija() {
        return this._frekfencija
    }


    set jacinaTona(jt) {
        if ( jt >=0 && jt<=20){
            this._jacinaTona = jt;
        }
        else {
            this._jacinaTona = 10;
        }
    }
    get jacinaTona() {
        return this._jacinaTona
    }

    promeniZvuk(){
        
    }
}



export { Boja, Datum, Radnik, Autobus, Radio };