class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;

    }

    set ime(i) {
        this._ime = i;
    }
    get ime() {
        return this._ime
    }



    set visina(v) {
        if (v < 0 && v > 2.50) {
            this._visina = 1.80
        }
        else {
            this._visina = v;
        }
    }

    get visina() {
        return this._visina
    }


    set tezina(t) {

        if (t < 0 && t > 550) {
            this._tezina = 80;
        }
        else {
            this._tezina = t;
        }

    }
    get tezina() {
        return this._tezina
    }

    stampaj() {
        console.log(this) // da otstampa ceo objekat
    }
    stampajListu(){
        let htmlLista = `
        <ul>
        <li>Ime: ${this.ime}</li>
        <li>Visina: ${this.visina}</li>
        <li>Tezina: ${this.tezina}</li>
        </u>`;

        return htmlLista
    }

    bmi() {

        let bmi = this.tezina / (this.visina * this.visina);
        return bmi
    }

    kritican() {
        if (this.bmi() < 15 || this.bmi() > 40) {
            return true
        }
        else {
            return false
        }
    }

}

export default Pacijent