// Creare un array di oggetti di squadre di volley.
// Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
// Generare numeri random al posto delle nelle proprietà:
// punti fatti e falli subiti

const volleyTeam = [
    {
        name: 'gino',
        punti: 0,
        falli: 0,
    },
    {
        name: 'ginaa',
        punti: 0,
        falli: 0,
    },
    {
        name: 'ginottolo',
        punti: 0,
        falli: 0,
    }
]



volleyTeam.forEach((element) =>{
    element.punti = getRandomNumber(1,30);
    element.falli = getRandomNumber(1,30);
})

console.log(volleyTeam)

function getRandomNumber(minNumber, maxNumber){
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    }
