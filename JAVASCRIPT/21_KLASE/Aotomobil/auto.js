class Auto {
    constructor(m, b, ik, bv = 5) {   //broj argumenata je proizvoljan, imena proizvoljna, =5 je default vrednost ako se ne unese nesto kao cetvrti parametar


        ///PRAKSA JE DA GETERI I SETERI PRISTUPAJU POLJIMA OSTALE METODE KAO I OBJEKTI VAN KLASE PRISTUPAJU SETERIMA I GETEREIMA

        // let m1 = m.trim();// kod stringa ukloni razmake
        // if (m1.length > 0) {
        //     this._marka = m1;
        // }
        // else {
        //     this._marka = "Auto"
        // }

        // this._marka = m; zamenjeno sa if i else



        // this.postaviMarku(m); // poziva metodu


        this.marka = m; // poziva seter marka
        // this._boja = b;
        this.boja = b; //poziva seter boja
        // this._imaKrov = ik;
        this.imaKrov = ik; //poziva seter imaKrov
        // this._brojVrata = bv;
        this.brojVrata = bv;//poziva seter brojVrata
    }

    sviraj() {
        console.log("Beep! Beep!")
    }
    vozi(x) {
        // let m = this._marka
        let m = this.marka //geter
        console.log(`Auto ${m} vozi ${x} kilometara`)
    }
    stampaj() {
        console.log(`Auto marke: ${this.marka}, boje: ${this.boja}, ima krov: ${this.imaKrov}`)
    }


    // // seter-geter metoda koja posatavlja vrednost polja _marka


    set marka(m) {
        let m1 = m.trim();
        if (m1.length > 0) {
            this._marka = m1;
        }
        else {
            this._marka = "Auto"
        }
    }
    get marka() {
        return this._marka;
    }

    // // seter-geter metoda koja posatavlja vrednost polja _boja
    set boja(b) {
        this._boja = b;
    }
    get boja() {
        return this._boja
    }
    // // seter-geter metoda koja posatavlja vrednost polja _imaKrov

    set imaKrov(ik) {
        if (ik === true || ik === false) {
            this._imaKrov = ik;
        }
        else {
            this._imaKrov = false;
        }
    }
    get imaKrov() {
        return this._imaKrov;
    }

    // // seter-geter metoda koja posatavlja vrednost polja _brojVrata

    set brojVrata(bv) {
        if (bv > 0) {
            this._brojVrata = bv;
        }
        else {
            this._brojVrata = 1;
        }
    }

    get brojVrata() {
        return this._brojVrata
    }

    // postaviMarku(m){
    //       let m1 = m.trim();
    //     if (m1.length > 0) {
    //         this._marka = m1;
    //     }
    //     else {
    //         this._marka = "Auto"
    //     }
    // }

    // //metoda koja cita vrednost polja
    // dohvatiMarku(){
    //     return this._marka
    // }


    ///seter i geter za polje_marka
}

export default Auto;