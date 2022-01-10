let visine = [
    { ime: "Pera", visina: 189, pol: "M" },
    { ime: "Laza", visina: 192, pol: "M" }, 
    { ime: "Milka", visina: 164, pol: "Z" },
    { ime: "Mika", visina: 176, pol: "M" },
    { ime: "Sonja", visina: 178, pol: "Z" },
    { ime: "Milica", visina: 166, pol: "Z" }
];
	//Napisati funkciju koja ispituje da li je prosečna visina mušakaraca veća od prosečne visine žena
    let muskarciSr = arr => {
        let suma =0;
        let brojac =0;
        for(let i=0; i<arr.length; i++){
            if (arr[i].pol == "M"){
                suma += arr[i].visina
            brojac += arr[i].length
            }
        }
        return suma/brojac
    }
    let zeneSr = arr => {
        let suma =0;
        let brojac =0;
        for(let i=0; i<arr.length; i++){
            if (arr[i].pol == "Z"){
                suma += arr[i].visina
            brojac += arr[i].length
            }
        }
        return suma/brojac
    }

    let prosecnaV = arr => {
        if (muskarciSr(arr)> zeneSr(arr)){
            return true
        }
        else{
            return false
        }
    }

    console.log(prosecnaV(visine))