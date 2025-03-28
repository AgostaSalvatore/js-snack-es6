//Snack 1 -- Esercizio 1
//creare un array di oggetti bici
const bikes = [
    {
        name: "Bici-1",
        weight: 40
    },
    {
        name: "Bici-2",
        weight: 10
    },
    {
        name: "Bici-3",
        weight: 30
    }
]

let minWeight;

for (let i = 0; i < bikes.length; i++) {
    if (bikes[i].weight < bikes[0].weight) {
        bikes[0] = bikes[i];
    }
}

console.log(bikes[0]);
