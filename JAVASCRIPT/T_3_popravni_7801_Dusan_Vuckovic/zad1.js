
let recepti = [
    { naziv: "kolac", sastojci: [“jaja”, “brasno”, “mleko”, “secer”] },
    { naziv: "kajgana", sastojci: [“jaja”, “so”] },
    { naziv: "pire",  sastojci: [“krompir”, “mleko”, “maslac”, “so”] },
    { naziv: "espreso", sastojci: [“kafa”, “mleko”] },
    { naziv: "kacamak", sastojci: [“palenta”, “so”, “mast”] }
  ];
//   Napisati program koji ispisuje sve recepte čiji naziv sadrži slovo “s”, a broj sastojaka je strogo veći od 2.

let recepti = (arr, slovo)=> {
for (let i =0; i< arr.length; i++){
    if(arr[i].naziv.includes(slovo) && arr[i].sastojci > 2){
        console.log(arr[i])
    }
}
recepti(arr,"s")

