//11.08.2023

"use strict";

// let bum = 4;
// const ken = 10;


// bum = ken;
// console.log(bum);

// let mass = ['persh', 'другий', 3, '4'];

//     for (let i = 0; i < 5; i++) {
//         console.log(mass[i]);
//     }

// const obj = {
//     'Kyrylo': 1000,
//     'Liudmyla': 1111
// };

// const obj2 = {
//     Kyrylo: 2000,
//     Liudmyla: 2111
// };

// console.log(obj2.Kyrylo);

// obj2.qunthunnan = 'superUser';

// console.log(obj2.qunthunnan);

// console.log(obj2['qunthunnan']);

//12.08.2023

// const catalog = 'head';
// let num  = 1;

// console.log(`https://www.udemy.com/course/${catalog}/ua`);

// console.log(num++);
// console.log(num);

let numberOfFilms = prompt('Скільки фільмів ви вже подивились?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies[prompt('Один з останніх переглядених фільмів:', '')] = prompt('Яку оцінку йому поставите?', '');
personalMovieDB.movies[prompt('Один з останніх переглядених фільмів:', '')] = prompt('Яку оцінку йому поставите?', '');

console.log(personalMovieDB);

const var1 = 5,
      var2 = 10;

if (var1 > var2) {
console.log('var1 > var2');
}
else {
console.log('var2 > var1');
}

(var1 > var2) ? console.log('var1 > var2') : console.log('var2 > var1');

switch (var1) {
    case 1:
        console.log('один');
        break;
    case 2:
        console.log('два');
        break;
    case 3:
        console.log('три');
        break;
    case var2:
        console.log('var2');
        break;
    default:
        console.log('нічого');
        break;
}