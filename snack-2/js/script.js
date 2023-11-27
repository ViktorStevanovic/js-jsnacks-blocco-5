// Crea un array di oggetti che rappresentino delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const users = [

    {
        firstName: 'silvia',
        lastName: 'bordignon',
        age: 21
    },
    {
        firstName: 'mirko',
        lastName: 'caron',
        age: 16
    },
    {
        firstName: 'fabio',
        lastName: 'rossi',
        age: 30
    },
    {
        firstName: 'marco',
        lastName: 'pirrone',
        age: 8
    },
    {
        firstName: 'laura',
        lastName: 'battistello',
        age: 55
    },
    {
        firstName: 'diego',
        lastName: 'xamin',
        age: 19
    },
]


const canUserDrive = users.map((element) => {
    if(element.age >= 18){
        return `${element.firstName} ${element.lastName} can drive because she/he has ${element.age} years`
    }
    else {
        return `${element.firstName} ${element.lastName} can't drive because she/he has ${element.age} years`
    }
});
console.log(canUserDrive)