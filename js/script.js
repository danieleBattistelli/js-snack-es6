console.log("Snack 1")
// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

// Creazione dell'array di oggetti
const biciclette = [
    { nome: 'Bianchi Oltre XR4', peso: 7.2 },
    { nome: 'Specialized Tarmac', peso: 7.0 },
    { nome: 'Cannondale SuperSix EVO', peso: 6.8 },
    { nome: 'Trek Emonda', peso: 6.7 },
    { nome: 'Giant TCR Advanced', peso: 6.9 }
];

console.log(biciclette)

// Trovare la bici con il peso minore
let biciLeggera = biciclette[0];

for (let i = 1; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciLeggera.peso) {
        biciLeggera = biciclette[i];
    }
}

// Stampare a schermo o in console la bici con peso minore
console.log(`La bici con il peso minore è la ${biciLeggera.nome}, con un peso di ${biciLeggera.peso} kg.`);
console.log("-------------------------------------------------------------------")
console.log("Snack 2")