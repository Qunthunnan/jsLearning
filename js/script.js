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
// function getTimeFromMinutes(minutes) {
//     if (minutes < 0 || Math.round(minutes) != minutes) {
//         return 'Ошибка, проверьте данные';
//     }
//     let n = Math.abs(Math.round(minutes / 60)) % 100;
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
    
//     return ('Это ' + Math.floor(minutes / 60) + ' ' + hours + ' и ' + minutes % 60 + ' минут');
// }

// // Место для второй задачи
// function findMaxNumber(a, b, c, d) {
//     let numbers = [a, b, c, d];
//     for (let i = 0; i < numbers.length; i++) {
//         if (typeof(numbers[i]) != typeof(1)) {
//             return 0;
//         }
//     }
//     let maxNumber = numbers[0];
    
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = 0; j <numbers.length; j++) {
//             if (numbers[i] > numbers[j] & numbers[i] > maxNumber) {
//                 maxNumber = numbers[i];
//             }
//         } 
//     }
//     return maxNumber;
// }

//20.08.2023

// function fib(n) {
//     let result = '',
//         previus = 1,
//         prePrevius = 0,
//         curent;
        
//     if (typeof(n) !== typeof(1) || Math.round(n) !== n) {
//         return result;
//     }
    
//     for (let i = 0; i < n; i++) {
//         if (i === 0) {
//             result += 0;
//         } else {
//             if (i === 1) {
//                 result += ' ' + 1;
//             } else {
//                 curent = previus + prePrevius;
//                 result += ' ' + curent;
//                 prePrevius = previus;
//                 previus = curent;
//             }
//         }
//     }
    
//     return result;
// }

// console.log(fib(-5));

//16.09.2023

// for(let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// function getCoupeNumber(seat) {
//     let seatsList = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20], [21, 22, 23, 24], [25, 26, 27, 28], [29, 30, 31, 32], [33, 34, 35, 36]];
//     if (typeof(seat) == typeof(1) && seat > 0 && Math.round(seat) == seat) {
//         console.log('Усі умови виконані');
//         for (let i = 0; i < seatsList.length; i++) {
//             for (let j = 0; j < seatsList[i].length; j++) {
//                 if (seatsList[i][j] == seat) {
//                     return i + 1;
//                 }
//             }
//         }
//     } else {
//         console.log('Не усі умови виконані');
//         if (seat === 0 || seat > 36) {
//             return 'Таких мест в вагоне не существует';
//         } else {
//             return 'Ошибка. Проверьте правильность введенного номера места';
//         }
//     }
// }

// console.log(getCoupeNumber(37));

// function fib(count) {
//     if (Math.round(count) == count && count > 0 && typeof(count) == typeof(1)) {
//         let previus = 0,
//             preprevius = 0,
//             curent = 0,
//             result = '';
//         for (let i = 0; i < count; i++) {
//             if (i == count - 1) {
//                 result += previus + preprevius;
//             } else {
//                 if (i === 0) {
//                 result += '0 ';
//                 } else {
//                     if (i === 1) {
//                         result += '1 ';
//                         previus = 1;
//                     } else {
//                         curent = previus + preprevius;
//                         result += curent + ' ';
//                         preprevius = previus;
//                         previus = curent;
//                     }
//                 }
//             }
//         }
//         return result;
//     } else {
//         return '';
//     }
// }

// console.log(fib(5));

//17.09.2023

// function testCallback(arg1, callback) {
//     console.log(`first operation with ${arg1}`);
//     callback();
// }

// testCallback('you', function() {
//     console.log('second operation callback');
// });

// let obj = {
//     height: 1000,
//     width: 500,
//     weight: 40,
//     hideObj: {
//         damage: 10,
//         deffence: 30
//     },

//     getHeight: function() {
//         return this.height;
//     },
//     setHeight: function(num) {
//         if(num > 0 && num < 999) {
//             this.height = num;
//         }
//     },
//     objLog: function() {
//         console.log('obj:\n');
//         for(let key in this) {
//             console.log(`${key} is ${obj[key]}`);
//         }
//     }
// };

// obj.objLog();
// console.log(obj.getHeight());
// obj.setHeight(30);
// obj.setHeight(-100);
// obj.objLog();

// console.log('obj:\n');
// for (let key in obj) {
//     console.log(`${key} is ${obj[key]}`);
// }

// console.log(Object.keys(obj).length);

// const {damage, deffence} = obj.hideObj;

// console.log(`hideObj is ${damage} і ${deffence}`);

// let arr = [1, 2, 3, 4];

// arr.push(5);
// arr.pop();
// arr.shift();
// arr.unshift(3);

// let stringToArray = 'Доброго дня як справи',
//     splitedArray = stringToArray.split(' '),
//     joinedString = splitedArray.join('---'),
//     sortedArray = splitedArray.sort();

// console.log(sortedArray);

// splitedArray.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} in ${arr}`);
//     arr[i] = i*10;
// });

// for (let i of splitedArray) {
//     if (i > 10) {
//         break;
//     }
//     console.log(i);
// }

//20.09.2023

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },

//     showAgeAndLangs: function(plan) {
//         return `Мне ${plan.age} и я владею языками: ${plan.skills.languages.join(' ').toUpperCase()}`;
//     }
// };

// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// function showProgrammingLangs(plan) {
//     let result = '';
//     for (let key in plan.skills.programmingLangs) {
//         result+= `Язык ${key} изучен на ${plan.skills.programmingLangs[key]}\n`;
//     }
//     if(result.length > 0) {
//         return result.slice(0, -1);
//     }
//     return result;
// }

// console.log(showProgrammingLangs(personalPlanPeter));

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if(arr.length > 0) {
//         return `Семья состоит из: ${arr.join(' ')}`;
//     } else {
//         return 'Семья пуста';
//     }
// }

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for(let key of arr) {
//         console.log(key.toLowerCase());
//     }
// }

// standardizeStrings(favoriteCities);

// const someString = 'This is some strange string';

// function reverse(str) {
//     if(typeof(str) == 'string') {
//         // let result = '';
//         // for (let i = str.length - 1; i >= 0; i--) {
//         //     result += str[i];
//         // }
//         return str.split('').reverse().join('');
//     } else {
//         return 'Ошибка!';
//     }
// }

// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     if(arr.length > 0) {
//         if(typeof(missingCurr) == 'undefined') {
//             return arr;
//         }
//         let result = [];
//         for (let key of arr) {
//             for (let value of missingCurr) {
//                 if (key != value) {
//                     result += key + '\n';
//                 }
//             }
//         }
//         return `Доступные валюты:\n${result}`;
//     }
//     return 'Нет доступных валют';
// } 


// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], ['CNY']));

//24.09.2023

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     if(arr.length > 0) {
//         if(typeof(missingCurr) == 'undefined') {
//             dubleCutter(arr);
//             return `Доступные валюты:\n${arr.join('\n')}\n`;
//         }
//         if (typeof(missingCurr) != 'object') {
//             dubleCutter(arr);
//             let result = [];
//             for (let key of arr) {
//                 if (key != missingCurr) {
//                     result += key + '\n';
//                 }
//             }
//             return `Доступные валюты:\n${result}`;
//         }
//         console.log(arr);
//         dubleCutter(arr);
//         console.log(missingCurr);
//         dubleCutter(missingCurr);
//         let result = [];
//         for (let key of arr) {
//             for (let value of missingCurr) {
//                 if (key != value) {
//                     result += key + '\n';
//                 }
//             }
//         }
//         return `Доступные валюты:\n${result}`;
//     }
//     return 'Нет доступных валют';
// }

// function dubleCutter (arr) {
//     if(arr.length > 1 && typeof(arr) == 'object') {
//         for (let i = 0; i < arr.length; i++) {
//             console.log(`for 1 i[${i}] = ${arr[i]}`);
//            start1: for (let k = 0; k < arr.length; k++) {
//                     console.log(`for 2 i[${i}] = ${arr[i]}`);
//                     console.log(`for 2 k[${k}] = ${arr[k]}`);
//                     if (i == k) {
//                         console.log('i === k skip');
//                         continue;
//                     }
//                     console.log(`i[${i}]=${arr[i]} ? k[${k}]=${arr[k]}`);
//                     if (arr[i] == arr[k]) {
//                         console.log(`i = k`);
//                         delete arr[k];
//                         console.log(arr);
//                         if (k < arr.length - 1) {
//                             for(let l = k; l < arr.length; l++)  {
//                                 console.log(` for 3 l[${l}] = ${arr[l]}`);
//                                 arr[l] = arr[l+1];
//                                 if (l == arr.length - 2) {
//                                     arr.pop();
//                                     console.log(arr);
//                                     l++;
//                                     continue start1;
//                                 }
//                             }
//                         } else {
//                             arr.pop();
//                         }
//                     }
//             }
//         }
//     }
// }

// let cur = 'USD';
// cur[0] = cur;
// console.log(cur + ` is ${typeof(cur)}`);

// let curency = ['USD','EUR', 'UAH', 'RUB', 'CNY'];
// console.log(typeof(curency[0]));
// console.log(curency);
// dubleCutter(curency);
// console.log('result = '+ curency);

// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], ['CNY']));

// let arr = [31, 'dgdgdgdg', 242424, 'dgojrogjrogjojgd'];
// console.dir(arr);

// const soldier = {
//     health: 100,
//     fatigue: 100,
//     showHealth : function () {
//         console.log(this.health);
//     }
// };

// const vehicleSoldier = {
//     health: 70,
// };
// Object.setPrototypeOf(vehicleSoldier, soldier);
// // vehicleSoldier.__proto__ = soldier;



// // const vehicleSoldier = Object.create(soldier);

// vehicleSoldier.showHealth();


// let personalMovieDB = {
//         count: 0,
//         movies: {},
//         actors: {},
//         genres: [],
//         privat: false,

//         nameAnswer: function() {
//             let movieGrade;
//             let movieNameAnswer;
//             first: do {
//                 movieNameAnswer = prompt('Який фільм ви подивились ?');
//                 if (movieNameAnswer == null) {
//                     movieNameAnswer = '';
//                     continue first;
//                 }
//                 console.log(movieNameAnswer);
//                 console.log(movieNameAnswer.length);
//             } while (movieNameAnswer.length == 0 || movieNameAnswer.length > 50);
            
//             do {
//                 movieGrade = +prompt('Скільки йому поставиш? (від 1 до 10)');
//                 console.log(typeof(movieGrade));
//                 console.log(movieGrade);
//             } while (movieGrade < 0 || movieGrade > 10 || isNaN(movieGrade));
//             this.movies[movieNameAnswer] = movieGrade;
//         },

//         filmsCount: function() {
//             let movieCount;
//             movieCount = +prompt('Скільки фільмів ви подивились?');
        
//             if (movieCount < 10) {
//                 console.log('Малувато подивились..');
//                 this.count = movieCount;
//             } else {
//                 if (movieCount < 30) {
//                     console.log('Справжній classic...');
//                     this.count = movieCount;
//                 } else {
//                     if (movieCount > 30) {
//                         console.log('Ви справжній MASTER');
//                         this.count = movieCount;
//                     } else {
//                         console.log('Сталася помилка!' + movieCount + typeof(movieCount));
//                     }
//                     }
//                 }
//         },

//         showMyDB: function() {
//             if (this.privat == false) {
//                 console.dir(this);
//             }
//         },

//         writeYourGenrses: function() {
//             for (let i = 0; i < 3; i++) {
//                 do {
//                     this.genres[i] = prompt(`Ваш улюблений жанр під номером: ${i + 1}`);
//                 } while (this.genres[i] == undefined || this.genres[i] == null || this.genres[i] == '');
//             }
//             this.genres.forEach(function (item, i, arr) {
//                 console.log(`Улюблений жанр №${i+1} - це ${item}`);
//             });
//         },

//         toggleVisibleMyDB: function() {
//             if(this.privat == true) {
//                 this.privat = false;
//             } else {
//                 this.privat = true;
//             }
//         }
//     };

//     personalMovieDB.writeYourGenrses();

//25.09.2023

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,

    areaOfAllShops: function () {
        let area = 0;
        for(let key of this.shops) {
            console.log(key);
            console.log(`key.width = ${key.width} * key.length = ${key.length} = ${key.width * key.length}`);
            area += key.width * key.length;
        }
        console.log(area);
        return area;
    },
    volumeOfHeating: function () {
        return this.areaOfAllShops() * this.height;
    }
};

const penis = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {

    if ("volumeOfHeating" in data === false) {
        Object.setPrototypeOf(data, shoppingMallData);
    } 

    if ("volumeOfHeating" in data === false) {
        console.log('якась хуйня');
    } else {
        if (data.volumeOfHeating() * data.moneyPer1m3 <= data.budget) {
            return 'Бюджета достаточно';
        } else {
            return 'Бюджета недостаточно';
        }
    }
}

isBudgetEnough(penis);


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Somebody'];

function sortStudentsByGroups(arr) {
    arr.sort();
    console.log (`sorted:\n${arr}`);
    let resultArr = [],
        remainder = 'Оставшиеся студенты: -',
        counter = 0;

    resultArr.push(remainder);
    for (let i = 0; i < arr.length; i++) {
        counter++;
        if(counter == 1) {
            resultArr[resultArr.length-1] = remainder.slice(0, -1);
        }

        if(i != arr.length - 1) {
            resultArr[resultArr.length-1] += `${arr[i]}, `;
        } else {
            resultArr[resultArr.length-1] += arr[i];
        }

        if(counter == 3) {
            counter = 0;
            if(i != arr.length - 1) {
                resultArr[resultArr.length - 1] = (resultArr[resultArr.length - 1].slice(21, -2).split(', '));
            } else {
                resultArr[resultArr.length - 1] = (resultArr[resultArr.length - 1].slice(21).split(', '));
            }
            resultArr.push(remainder);
        }
    }

    return resultArr;
}

console.log(sortStudentsByGroups(students));