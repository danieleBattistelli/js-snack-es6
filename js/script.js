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

// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Funzione per generare un numero casuale tra min e max
function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max-min+1) ) +min;
}

// Creazione dell'array di oggetti squadre di calcio
const squadre = [
    { nome: 'Juventus', punti: 0, falli: 0 },
    { nome: 'Milan', punti: 0, falli: 0 },
    { nome: 'Inter', punti: 0, falli: 0 },
    { nome: 'Roma', punti: 0, falli: 0 },
    { nome: 'Napoli', punti: 0, falli: 0 }
];

// Generare numeri random per punti e falli
for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = getRandomNumber(0, 100);
    squadre[i].falli = getRandomNumber(0, 50);
}

// Creazione del nuovo array con solo nomi e falli subiti
const nuovoArray = [];
for (let i= 0; i < squadre.length; i++){
    nuovoArray.push({
        nome:squadre[i].nome,
        falli:squadre[i].falli
    });
}

// Stampare tutto in console
console.log('Array originale:');
console.log(squadre);

console.log('Nuovo array con nomi e falli subiti:');
console.log(nuovoArray);
console.log("-------------------------------------------------------------------")

console.log("Snack 3")

// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS

function estraiValori(Array, a, b){
    
    let nuovoArray =[];
    
    for (let i=a ; i<=b; i++){
        nuovoArray.push(Array[i]);
    }
    return nuovoArray;
}

//Esempio
const arrayOriginale = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; 
const a = 2; 
const b = 5; 
const nuovoArray2 = estraiValori(arrayOriginale, a, b); 
console.log(arrayOriginale)
console.log(a,b)
console.log(nuovoArray2)





