// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.

const automobili = [

    {
        marca: 'audi',
        modello: 'a3',
        alimentazione: 'benzina'
    },
    {
        marca: 'audi',
        modello: 'a1',
        alimentazione: 'diesel'
    },
    {
        marca: 'bmw',
        modello: 'serie 1',
        alimentazione: 'diesel'
    },
    {
        marca: 'mercedes',
        modello: 'classe a',
        alimentazione: 'elettrico'
    },
    {
        marca: 'renault',
        modello: 'clio',
        alimentazione: 'gpl'
    },
    {
        marca: 'fiat',
        modello: 'punto',
        alimentazione: 'benzina'
    },
    {
        marca: 'bmw',
        modello: 'm8',
        alimentazione: 'elettrico'
    },
    {
        marca: 'mercedes',
        modello: 'classe  c',
        alimentazione: 'diesel'
    },
    {
        marca: 'audi',
        modello: 'a7',
        alimentazione: 'gpl'
    },
    {
        marca: 'audi',
        modello: 'a5',
        alimentazione: 'metano'
    },

]

const automobiliBenzina = automobili.filter((element) =>{
    if(element.alimentazione == 'benzina'){
        return true
    }
});
console.log(automobiliBenzina)

const automobiliDiesel = automobili.filter((element) =>{
    if(element.alimentazione == 'diesel'){
        return true
    }
});
console.log(automobiliDiesel)

const automobiliGenerali = automobili.filter((element) =>{
    if(element.alimentazione !== 'diesel' && element.alimentazione !== 'benzina'){
        return true
    }
});
console.log(automobiliGenerali)


