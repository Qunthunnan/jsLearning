//11.08.2023

"use strict";

let bum = 4;
const ken = 10;


bum = ken;
console.log(bum);

let mass = ['persh', 'другий', 3, '4'];

    for (let i = 0; i < 5; i++) {
        console.log(mass[i]);
    }

const obj = {
    'Kyrylo': 1000,
    'Liudmyla': 1111
};

const obj2 = {
    Kyrylo: 2000,
    Liudmyla: 2111
};

console.log(obj2.Kyrylo);

obj2.qunthunnan = 'superUser';

console.log(obj2.qunthunnan);

console.log(obj2['qunthunnan']);