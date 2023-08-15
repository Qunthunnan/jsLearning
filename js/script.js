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

// let movieNameAnswer;
// let movieGrade;
// let movieCount;
// first: do {
//     movieNameAnswer = prompt('Який фільм ви подивились ?');
//     if (movieNameAnswer == null) {
//         movieNameAnswer = '';
//         continue first;
//     }
//     console.log(movieNameAnswer);
//     console.log(movieNameAnswer.length);
// } while (movieNameAnswer.length == 0 || movieNameAnswer.length > 50);

// do {
//     movieGrade = +prompt('Скільки йому поставиш? (від 1 до 10)');
// } while (movieGrade < 0 || movieGrade > 10); 
// personalMovieDB.movies[movieNameAnswer] = movieGrade;

// movieCount = +prompt('Скільки фільмів ви подивились?');

// if (movieCount < 10) {
//     console.log('Малувато подивились..');
//     personalMovieDB.count = movieCount;
// } else {
//     if (movieCount < 30) {
//         console.log('Справжній classic...');
//         personalMovieDB.count = movieCount;
//     } else {
//         if (movieCount > 30) {
//             console.log('Ви справжній MASTER');
//             personalMovieDB.count = movieCount;
//         } else {
//             console.log('Сталася помилка!' + movieCount + typeof(movieCount));
//         }
//     }
// }
// console.log(personalMovieDB);

//14.08.2023 

// function returnNeighboringNumbers(num) {
//     return [++num, --num, --num];
// }

// console.log(returnNeighboringNumbers(5));

//15.08.2023

// let personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function nameAnswer() {
//     let movieGrade;
//     let movieNameAnswer;
//     first: do {
//         movieNameAnswer = prompt('Який фільм ви подивились ?');
//         if (movieNameAnswer == null) {
//             movieNameAnswer = '';
//             continue first;
//         }
//         console.log(movieNameAnswer);
//         console.log(movieNameAnswer.length);
//     } while (movieNameAnswer.length == 0 || movieNameAnswer.length > 50);
    
//     do {
//         movieGrade = +prompt('Скільки йому поставиш? (від 1 до 10)');
//         console.log(typeof(movieGrade));
//         console.log(movieGrade);
//     } while (movieGrade < 0 || movieGrade > 10 || isNaN(movieGrade));
//     personalMovieDB.movies[movieNameAnswer] = movieGrade;
// }

// function filmsCount() {
//     let movieCount;
//     movieCount = +prompt('Скільки фільмів ви подивились?');

// if (movieCount < 10) {
//     console.log('Малувато подивились..');
//     personalMovieDB.count = movieCount;
// } else {
//     if (movieCount < 30) {
//         console.log('Справжній classic...');
//         personalMovieDB.count = movieCount;
//     } else {
//         if (movieCount > 30) {
//             console.log('Ви справжній MASTER');
//             personalMovieDB.count = movieCount;
//         } else {
//             console.log('Сталася помилка!' + movieCount + typeof(movieCount));
//         }
//     }
// }
// }

// function filmsPrivateCheck() {
//     if (personalMovieDB.privat == false) {
//         console.dir(personalMovieDB);
//     }
// }

// function writeYourGenrses() {
//     for (let i = 0; i < 3; i++) {
//         do {
//             personalMovieDB.genres[i] = prompt(`Ваш улюблений жанр під номером: ${i + 1}`);
//         } while (personalMovieDB.genres[i] == undefined || personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '');
//     }
// }

// nameAnswer();
// filmsCount();
// filmsPrivateCheck();
// writeYourGenrses();

// console.log(personalMovieDB);

// Место для первой задачи
// function calculateVolumeAndArea(cubeEdge) {
//     if(Math.round(cubeEdge) !== cubeEdge || typeof(cubeEdge) == typeof('') || cubeEdge <= 0) {
//         console.log('При вычислении произошла ошибка');
//     } else {
//         console.log('Объем куба: ' + cubeEdge * cubeEdge * cubeEdge + ', площадь всей поверхности: ' + cubeEdge * cubeEdge * 6);
//     }
// }

// // Место для второй задачи
// function getCoupeNumber(seatNumber) {
//     console.log(seatNumber + ' level0');
//     if (typeof(seatNumber) == typeof(1) & seatNumber >= 0 & Math.round(seatNumber) == seatNumber) {
//         console.log(seatNumber + ' level1');
//         if (seatNumber !== 0 & seatNumber <= 36) {
//             console.log(seatNumber + ' level2');
//         let train = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12],
//                     [13, 14, 15, 16], [17, 18, 19, 20], [21, 22, 23, 24],
//                     [25, 26, 27, 28], [29, 30, 31, 32], [33, 34, 35, 36]];
            
//             for (let i = 0; i < train.length; i++) {
//                 for (let j = 0; j < train[i].length; j++) {
//                     if (train[i][j] == seatNumber) {
//                         console.log(i + 1);
//                     }
//                 }
//             }
//         } else {
//             console.log('Таких мест в вагоне не существует');
//         }
//     } else {
//         console.log('Ошибка. Проверьте правильность введенного номера места');
//     }
// }

// calculateVolumeAndArea(5);
// calculateVolumeAndArea(15);
// calculateVolumeAndArea(15.5);
// calculateVolumeAndArea('15');
// calculateVolumeAndArea(-15);

// getCoupeNumber(33);
// getCoupeNumber(7);
// getCoupeNumber(300);
// getCoupeNumber(0);
// getCoupeNumber(7.7);
// getCoupeNumber(-10);
// getCoupeNumber('Hello');

// console.log(Math.floor(650 / 60) + ' ' + 650 % 60);

// for (let i = 0; i < 1000; i++) {
//     let n = Math.abs(i) % 100;
//     let n1 = n % 10;
//     let hours;
//     if (n > 10 && n < 20) {
//         hours = 'часов';
//     } else {
//         if (n1 > 1 && n1 < 5) {
//             hours = 'часа';
//         }
//         else {
//             if (n1 == 1) {
//                 hours = 'час';
//             }
//             else {
//                 hours = 'часов';
//             }
//         }
//     }
//     console.log(i + hours);
// }

// Место для первой задачи
function getTimeFromMinutes(minutes) {
    if (minutes < 0 || Math.round(minutes) != minutes) {
        return 'Ошибка, проверьте данные';
    }
    let n = Math.abs(Math.round(minutes / 60)) % 100;
    let n1 = n % 10;
    let hours;
    if (n > 10 && n < 20) {
        hours = 'часов';
    } else {
        if (n1 > 1 && n1 < 5) {
            hours = 'часа';
        }
        else {
            if (n1 == 1) {
                hours = 'час';
            }
            else {
                hours = 'часов';
            }
        }
    }
    
    return ('Это ' + Math.floor(minutes / 60) + ' ' + hours + ' и ' + minutes % 60 + ' минут');
}

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    let numbers = [a, b, c, d];
    for (let i = 0; i < numbers.length; i++) {
        if (typeof(numbers[i]) != typeof(1)) {
            return 0;
        }
    }
    let maxNumber = numbers[0];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j <numbers.length; j++) {
            if (numbers[i] > numbers[j] & numbers[i] > maxNumber) {
                maxNumber = numbers[i];
            }
        } 
    }
    return maxNumber;
}

