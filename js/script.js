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

// let numberOfFilms = prompt('Скільки фільмів ви вже подивились?', '');

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// personalMovieDB.movies[prompt('Один з останніх переглядених фільмів:', '')] = prompt('Яку оцінку йому поставите?', '');
// personalMovieDB.movies[prompt('Один з останніх переглядених фільмів:', '')] = prompt('Яку оцінку йому поставите?', '');

// console.log(personalMovieDB);

// const var1 = 5,
//       var2 = 10;

// if (var1 > var2) {
// console.log('var1 > var2');
// }
// else {
// console.log('var2 > var1');
// }

// (var1 > var2) ? console.log('var1 > var2') : console.log('var2 > var1');

// switch (var1) {
//     case 1:
//         console.log('один');
//         break;
//     case 2:
//         console.log('два');
//         break;
//     case 3:
//         console.log('три');
//         break;
//     case var2:
//         console.log('var2');
//         break;
//     default:
//         console.log('нічого');
//         break;
// }

//13.08.2023

// console.log( NaN || 2 || undefined );


// console.log( NaN && 2 && undefined );


// console.log( 1 && 2 && 3 );


// console.log( !1 && 2 || !3 );


// console.log( 25 || null && !3 );


// console.log( NaN || null || !3 || undefined || 5);


// console.log( NaN || null && !3 && undefined || 5);


// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }

// start: for(let i = 0; i < 10; i++) {
//     for(let j = 0; j < 5; j++) {
//         for(let k = 0; k < 3; k++) {
//             if (k == 2) {
//                 continue start;
//             }
//             console.log(i + '' + k + '' + j);
//         }
//     }
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// let j = 0;

// console.log(data.length - 1);
// // Пишем решение вот тут
// for (let i = data.length - 1; i >= 0; i--) {
//     console.log(i);
//     result[j] = data[i];
//     j++;
// }
// console.log(result);
   

// const lines = 50;
// let symbols = 50;
// let spaces = 49;
// let result = '';
// // Проверяется именно переменная result, формируйте строку в ней
// for (let i = 0; i < lines; i++) {
//     for (let j = 0; j < symbols; j++) {
//         if(j < spaces) {
//             result += ' ';
//         }else {
//             result += '*';
//         }
//     }
//     symbols++;
//     spaces--;
//     result += '\n';
// }

// console.log(result);



// let personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

let movieNameAnswer;
let movieGrade;
let movieCount;
first: do {
    movieNameAnswer = prompt('Який фільм ви подивились ?');
    if (movieNameAnswer == null) {
        movieNameAnswer = '';
        continue first;
    }
    console.log(movieNameAnswer);
    console.log(movieNameAnswer.length);
} while (movieNameAnswer.length == 0 || movieNameAnswer.length > 50);

do {
    movieGrade = +prompt('Скільки йому поставиш? (від 1 до 10)');
} while (movieGrade < 0 || movieGrade > 10); 
personalMovieDB.movies[movieNameAnswer] = movieGrade;

movieCount = +prompt('Скільки фільмів ви подивились?');

if (movieCount < 10) {
    console.log('Малувато подивились..');
    personalMovieDB.count = movieCount;
} else {
    if (movieCount < 30) {
        console.log('Справжній classic...');
        personalMovieDB.count = movieCount;
    } else {
        if (movieCount > 30) {
            console.log('Ви справжній MASTER');
            personalMovieDB.count = movieCount;
        } else {
            console.log('Сталася помилка!' + movieCount + typeof(movieCount));
        }
    }
}
console.log(personalMovieDB);
