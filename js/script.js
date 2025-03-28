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

console.log("----------------Esercizio 2----------------");
//Snack 2 -- Esercizio 2
//creare un array di oggetti squadre di calcio
const teams = [
    {
        name: "Milan",
        points: 0,
        fouls: 0
    },
    {
        name: "Juventus",
        points: 0,
        fouls: 0
    },
    {
        name: "Inter",
        points: 0,
        fouls: 0
    },
    {
        name: "Napoli",
        points: 0,
        fouls: 0
    },
    {
        name: "Roma",
        points: 0,
        fouls: 0
    },
    {
        name: "Atalanta",
        points: 0,
        fouls: 0
    },
    {
        name: "Lazio",
        points: 0,
        fouls: 0
    },
    {
        name: "Torino",
        points: 0,
        fouls: 0
    },
    {
        name: "Bologna",
        points: 0,
        fouls: 0
    },
    {
        name: "Cagliari",
        points: 0,
        fouls: 0
    },
    {
        name: "Verona",
        points: 0,
        fouls: 0
    },
    {
        name: "Monza",
        points: 0,
        fouls: 0
    },
    {
        name: "Empoli",
        points: 0,
        fouls: 0
    },
    {
        name: "Salernitana",
        points: 0,
        fouls: 0
    },
    {
        name: "Sampdoria",
        points: 0,
        fouls: 0
    },
    {
        name: "Udinese",
        points: 0,
        fouls: 0
    },
    {
        name: "Venezia",
        points: 0,
        fouls: 0
    }
]



const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100);
}

for (let i = 0; i < teams.length; i++) {
    teams[i].points = generateRandomNumber();
    teams[i].fouls = generateRandomNumber();
}

console.log(teams);
for (let i = 0; i < teams.length; i++) {
    console.log(`${teams[i].name} ha totalizzato ${teams[i].points} punti e ${teams[i].fouls} falli subiti`);
}

const onlyNameFouls =[];

for (let i = 0; i < teams.length; i++) {
    onlyNameFouls.push(`${teams[i].name} ha totalizzato ${teams[i].fouls} falli subiti`);
}

console.log(onlyNameFouls);


