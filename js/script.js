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
//         console.log(this.fatigue);
//     }
// };

// const vehicleSoldier = {
// };
// Object.setPrototypeOf(vehicleSoldier, soldier);
// const vehicleSoldier = Object.create(soldier);
// vehicleSoldier.health=30;
// vehicleSoldier.fatigue=10;
// vehicleSoldier.showHealth();
// soldier.showHealth();
// vehicleSoldier.__proto__ = soldier;



// const vehicleSoldier = Object.create(soldier);

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

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000,

//     areaOfAllShops: function () {
//         let area = 0;
//         for(let key of this.shops) {
//             console.log(key);
//             console.log(`key.width = ${key.width} * key.length = ${key.length} = ${key.width * key.length}`);
//             area += key.width * key.length;
//         }
//         console.log(area);
//         return area;
//     },
//     volumeOfHeating: function () {
//         return this.areaOfAllShops() * this.height;
//     }
// };

// const penis = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {

//     if ("volumeOfHeating" in data === false) {
//         Object.setPrototypeOf(data, shoppingMallData);
//     } 

//     if ("volumeOfHeating" in data === false) {
//         console.log('якась хуйня');
//     } else {
//         if (data.volumeOfHeating() * data.moneyPer1m3 <= data.budget) {
//             return 'Бюджета достаточно';
//         } else {
//             return 'Бюджета недостаточно';
//         }
//     }
// }

// isBudgetEnough(penis);


// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Somebody'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     console.log (`sorted:\n${arr}`);
//     let resultArr = [],
//         remainder = 'Оставшиеся студенты: -',
//         counter = 0;

//     resultArr.push(remainder);
//     for (let i = 0; i < arr.length; i++) {
//         counter++;
//         if(counter == 1) {
//             resultArr[resultArr.length-1] = remainder.slice(0, -1);
//         }

//         if(i != arr.length - 1) {
//             resultArr[resultArr.length-1] += `${arr[i]}, `;
//         } else {
//             resultArr[resultArr.length-1] += arr[i];
//         }

//         if(counter == 3) {
//             counter = 0;
//             if(i != arr.length - 1) {
//                 resultArr[resultArr.length - 1] = (resultArr[resultArr.length - 1].slice(21, -2).split(', '));
//             } else {
//                 resultArr[resultArr.length - 1] = (resultArr[resultArr.length - 1].slice(21).split(', '));
//             }
//             resultArr.push(remainder);
//         }
//     }

//     return resultArr;
// }

// console.log(sortStudentsByGroups(students));

//28.09.2023

// console.log(typeof(NaN));

// let a = 0,
//     b = 1;

// console.log(a && b);
// console.log(!!(a && b));

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true,

//     createNewRestoran: function () {
//         return {
//             menu: [],
//             waitors: [],
//             averageLunchPrice: '',
//             openNow: false
//         };
//     }
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) { 
//     const copy = data.createNewRestoran();

//     copy.waitors.unshift({name: 'Mike', age: 32});
//     return copy;
// }

// console.log(transferWaitors(restorantData));

// console.log(restorantData.waitors);

// const box = document.getElementById('box');
// console.log(box);
// const buttons = document.getElementsByTagName('button');
// console.log(buttons);
// const hearts = document.getElementsByClassName('heart');
// console.log(hearts);

// const box = document.querySelector('#box');
// console.log(box);
// const heartsWrapper = document.querySelector('.wrapper'),
//       hearts = heartsWrapper.querySelectorAll('.heart');

// hearts.forEach(item => {
//     console.log(item);
// });
// const hearts = document.querySelectorAll('.heart');
// console.dir(hearts[0]);

// hearts.forEach( item => {
//     item.style.display = 'block';
//     item.style.background = 'green';
// });
// heartsWrapper.style.display = 'flex';
// heartsWrapper.style.justifyContent = 'space-between';

// hearts.forEach( item => {
//     item.style.cssText = 'display: block; background: green; height: 300px; width: 500px;';
// });
// heartsWrapper.style.cssText = 'display: flex; justify-content: space-between;';

// const blackBox = document.createElement('div');
// blackBox.classList.add('black');
// blackBox.style.cssText = 'width: auto; height: auto;';
// document.body.append(blackBox);

// document.querySelector('.wrapper').append(blackBox);
// document.querySelector('.wrapper').prepend(blackBox);
// document.querySelector('.wrapper').before(blackBox);
// document.querySelector('.wrapper').after(blackBox);
// hearts[0].remove();
// hearts[1].replaceWith(document.querySelectorAll('.circle')[0]);

// heartsWrapper.appendChild(blackBox);

// blackBox.innerHTML = '<h1>БАВОВНА</h1>';
// blackBox.innerText = 'казати бавовна - це крінж у 2023 році, так кажуть тільки якійсь зашкварні чєли, які слухають байрактарні пісні та прославляють шароварщину';
// blackBox.insertAdjacentHTML('afterbegin', '<h2>БАВОВНА</h2>');
// heartsWrapper.insertBefore(blackBox, hearts[1]);
// heartsWrapper.removeChild(hearts[2]);
// heartsWrapper.replaceChild(document.getElementsByClassName('circle')[0], hearts[0]);

// console.log(hearts);
// console.log(hearts[1]);

// const btns = document.querySelectorAll('button');
// btns[1].addEventListener('click', () => {
//     alert('БЕМ');
// });

// btns[1].addEventListener('click', (e) => {
//     e.target.style.backgroundColor = 'gray';
// });
// let i = 0;
// const colorBtn = function (e) {
//     e.target.style.backgroundColor = 'gray';
//     e.target.innerText = `${i+2}`;
//     i++;
//     if (i == 5) {
//         e.target.style.backgroundColor = 'black';
//         e.target.removeEventListener('click', colorBtn);
//     }
// };
// btns[0].addEventListener('click', colorBtn);

// let i = 0;
// const colorBtn = function (e) {
//         e.target.innerText = `${i+2}`;
//         console.log(e.currentTarget);
//         console.log(e.type);
//         i++;
//     };
// btns[0].addEventListener('click', colorBtn);
// document.querySelector('.button-wrapper').addEventListener('click', colorBtn);

// const link = document.querySelector('.udemi-link');
// link.addEventListener('click', e => {
//     e.preventDefault();
//     console.log('ПОПАВСЯ ЖУК, А ТИ МАЄШ ФАЙНИЙ АРОМАТ!!');
// });

// link.addEventListener('click', actionWithLink, {once: true});

//02.10.2023
// function pow (x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x *= pow(x, n - 1);
//     }
// }
// console.log(pow(2,5));

// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }],

//         semi: {
//             students: [{
//                 name: 'Liudmyla',
//                 progress: 30
//             }, {
//                 name: 'Kyrylo',
//                 progress: 29
//             }]
//         }
//     },

//     averageProgressIteration: function () {
//         let students = 0,
//             totalResult = 0;
        
//         for (let course of Object.values(this)) {
//             if (Array.isArray(course)) {
//                 for (let i = 0; i < course.length; i++) {
//                     students++;
//                     totalResult+=course[i].progress;
//                 }
//             } else {
//                 for (let subcourse in course) {
//                     Object.keys(course).length;
//                     for (let i = 0; i < Object.keys(course[subcourse]).length; i++) {
//                         students++;
//                         totalResult+=course[subcourse][i].progress;
//                     }
//                 }
//             }
//         }
        
//         if(students === 0) {
//             return 0;
//         }
//         return totalResult / students;
//     },
// };

// function averageProgressRecursion (data) {debugger;
//     if(Array.isArray(data)) {
//         let students = 0,
//             totalResult = 0;

//         for(let i = 0; i < data.length; i++) {
//             students++;
//             totalResult+= data[i].progress;
//         }

//         return [totalResult, students];
//     } else {
//         let result = [0, 0],
//             test;
//         for(let item of Object.values(data)) {
//             test = averageProgressRecursion(item);
//             result[0] += test[0];
//             result[1] += test[1];
//         }
//         if(result[1] > 0) {
//             return result[0] / result[1];
//         }
//         return 0
//     }
// }
// console.log(students.averageProgressIteration());

// console.log(`result: ${averageProgressRecursion(students)}`);

// let score;

// console.log(score ?? 13);
//Nulish оператор дозволяє перевіряти значення на null або undefined

// let test = {
//     height: 100,
//     width: 20
// }

// console.log(test.width.left?.array);
//?. - оператор опціонального ланцюга - перевіряє значення зліва, якщо null або undefined, то замість помилки, він поверне undefined, корисно, якщо нема впевненості на 100%, що у об'єкті буде саме те значення, яке нам потрібно

// const hearts = document.querySelectorAll('.heart');

// hearts.forEach((heart)=>{
//     if(heart.matches('[data-special="special"]'))
//         console.log('match!');
// }); //matches дозволяє перевірити елемент на конкретні селектори, як приклад на дата атрибут, чи можна за id

// const proArt = document.querySelector('.pro-art');
// console.log(proArt.closest('.heart')); // closest Дозволяє визначити батьківський елемент за селектором рекурсивно


// const user = {
//     name: 'Mycola',
//     age: 22,
//     [Symbol('id')]: 1,
//     [Symbol('login')]: 'qunt',
//     [Symbol('id')]: 1,
// }
// user[Object.getOwnPropertySymbols(user)[2]] = 3;
// console.log(user[Object.getOwnPropertySymbols(user)[2]]);
//Завдяки Symbol можна створити такі властивості, значення який не можна буде змінити. Завдяки Object.getOwnPropertySymbols() - можна отримати масив з символів об'єкта та отримати доступ до значення символу

// const user = {
//     name: 'Mycola',
//     age: 22,
//     id: 1,
//     rules: 'none',
//     invitedBy: 314 
// }



// Object.defineProperty(user, 'id', {writable: false}); 
// Object.defineProperty(user, 'date', {value: new Date(), writable: false, enumerable: false, configurable: true});
// Object.defineProperties(user, {
//     rules: {writable: false, configurable: false},
//     invitedBy: {writable: false, configurable: false}
// });
// try {
//     Object.defineProperties(user, {
//         rules: {writable: true},
//         invitedBy: {writable: true, configurable: true}
//     });
// } catch (error) {
//     console.log(error);
// }
// видасть помилку, бо у user.rules та user.invitedBy - флаги configurable: false
//Завдяки Object.defineProperty() можемо зазначити флаги властивості. Зробити її writable (доступною(або не) до перезапису)), enumerable - чи буде властивість відображатись, якщо перерахувати властивості у циклі, configurable - чи можна буде у подальшому змінити флаги властивості. Також працює для методів
//Завдяки Object.defineProperties() - можна одразу визначити флаги до кількох властивостей або методів
// try {
//     user.id = 2;
// } catch (error) {
//     console.log(error); 
// }
// видасть помилку, бо user.id тепер writable = false
// for(let i in user) {
//     console.log(`user.${i}:${user[i]}`); 
// }
// не відобразить user.date, бо воно enumerable = false
// console.log(Object.getOwnPropertyDescriptors(user)); 
// Завдяки Object.getOwnPropertyDescriptors() - можна відобразити влаги усіх властивостей, Object.getOwnPropertyDescriptor() - відобразить флаги конкретної властивості
// console.log(Object.keys(user)); 
// Object.keys() - повертає масив з ключів об'єкта
// console.log(Object.values(user)); 
// Object.values() - повертає масив з значень об'єкта
// console.log(Object.entries(user)); 
// Object.entries() - повертає масив з масивів (матрицю), які складаються з ключів та їх значень об'єкта
//Object.keys(), Object.values(), Object.entries() - відображають тільки enumerable = true властивості
// Object.preventExtensions(user); 
// Забороняємо "розширення" об'єкта, додавання нових властивостей, методів. Все ще можна видаляти, змінювати поточні об'єкти
// Object.seal(user); 
// Забороняємо розширення, або видалення властивостей, забороняємо конфігурацію флагів властивостей, але залишається дозвіл на зміну значень у поточних властивостей
// Object.freeze(user); 
// Забороняємо будь яку подальшу зміну об'єкту - додавання, видалення, зміну властивостей та методів


//Про ітеровані об'єкти
// let salaries = {
//     kyrylo: 500,
//     liudmyla: 1000,
//     mycola: 2000,
//     sergiy: 3000,
// }
// за умовчки, створений об'єкт не є ітерованим
// const refference = 'refference';
// Об'єкт строка, масив, або DOM colection - є ітерованим об'єктом
// for(let i in salaries) {
//     console.log(i);
// } 
// цикл for in працює з ключами об'єктів, а тому не забезпечує гарантовану послідовність виводу
// for(let i of refference) {
//     console.log(i);
// }
// цикл for of працює саме зі значеннями об'єктів, а тому забезпечує гарантовану послідовність
// try {
//     for(let i of salaries) {
//         console.log(i);
//     }
// } catch (error) {
//     console.log(error);
// }
// Але for of через це не працює з не ітерованими об'єктами
// salaries[Symbol.iterator] = function () {
//     return {
//         current: Object.values(this)[0],
//         last: Object.values(this)[Object.values(this).length-1],
//         values: Object.values(this),
//         next() {
//             for(let i in this.values) {
//                 if(this.current == this.values[i] && this.current != this.last){
//                     this.current = this.values[(parseInt(i)+1).toString()];
//                     return {done: false, value: this.values[i]};
//                 } else {
//                     if(this.current == this.last) {
//                         return {done: true};
//                     }
//                 }
//             }
//         }
//     }
// }
// Щоби забезпечити ітерованість об'єкту, треба визначити у ньому символ-ітератор [Symbol.iterator] - це функція, яка повератає об'єкт з інформацією про теперешнє та останнє значення ітерації, та метод next, який повертає об'єкт зі станом ітерації done: false чи done: true (закінчився перебір, чи ні), та значення на даному значення на теперішньому етапі ітерації. Можна визначити логіку, за якою повертатимуться значення
// for(let i of salaries) {
//     console.log(i);
// }
// тут ми забезпечили ітерованість об'єкту salaries, тепер його значення виводяться послідовно

// let map = new Map([
//     [{name: 'Roman', surname: 'Savranskyi', position: 'Full-stack'}, {salary: 0, reputation: 2000}],
//     [{name: 'France', surname: 'DeLaZhop', position: 'Mega-stack'}, {salary: 100000, reputation: 200}]
// ]);
//Map - це така структура, яка навідмінно від об'єктів, як ключ може мати будь який тип даних, у тому чилі і масив і об'єкт та числа, і відповідні значення. Але по факту, треба розуміти, що всередині - це масиви у масиві, просто обгорнуті у зручну структуру з зручними методами, те що, це так, можна зрозуміти по тому, як можна задалегіть додати стартові елементи до мапи.
// map.set({name: 'Liudmyla', surname: 'Yakimova', position: 'Designer'}, {salary: 400, reputation: 1200})
//    .set({name: 'Kyrylo', surname: 'Bashkan', position: 'Front-end'}, {salary: 400, reputation: 900});
//Завдяки методу .set() - можна записати у мапу нову пару - ключ: значення, метод повертає нову Map з доданими ключом та значенням
// for(let [person, kpi] of map) {
//     console.log(person, ' ', kpi);
//     console.log(map.get(person));
//     console.log(map.has(person));
// }
//Тут можна зрозуміти кілька моментів: 1. Map - це ітерований об'єкт, який забезпечує послідовність при виводі та запису, його можна перебрати через for of. 2. При переборі через for of можна провести деструктурізацію, щоби розділити ключ: значення та звертатись до них по окремості. 3. метод .get дозволяє отримати значення, якщо вказати відповідний ключ, повертає його значення у Map 4.Метод .has дозволяє перевірити, чи існує такий ключ у Map, повертає true, або false
// map.size
//Повертає кількість елементів у мапі
// map.keys();
// map.values();
// map.entries();
//По аналогії з методами, як у Object - keys - повертає масив ключей у мапи, values - повертає масив зі значень мапи, entries - повертає масив з масивів, в яких перший елемент - ключ, другий - значення (по факту, повертає реальний вигляд мапи)
// map.delete({name: 'Kyrylo', surname: 'Bashkan', position: 'Front-end'});
//По вказаному ключу, дозволяє видалити відповідний елемент мапи
// map.clear();
//Повністю видаляє усі елементи мапи

//у WeakMap ключами можуть бути тільки об'єкти, якщо цей об'єкт перестає бути доступним у глобальній області бачення, то він видаляється з мапи. У WeakMap немає методів keys, values, entries. Не можна перебирати елементи через for of. Доступні: set, has, get, delete

// let mass = [1, 2, 7, 7, 3, 3, 4, 7, 4, 2, 3, 'прийом', 'алерт', 'прийом'];
// let set = new Set(mass);
// set.add(3);
// set.delete(1);
// set.has('прийом');
// set.size;
// set.clear();
//Set - це ітерований об'єкт, який може мати тільки не повторювальні дані. Дуже зручно, коли стоїть задача - створити список не повторювальних даних з потенційно повторювальних даних. По аналогії з Map має багато спільних та зручних методів

// Weak Set - Може мати тільки у значеннях тільки об'єкти, також видаляє елементи, якщо вони перестають бути доступними (на них нема посилання, їх видалили). Доступні методи: add has delete

// let bigNum = BigInt(2284682746287462874628746287462874628746824628746387648273469283746289734);
// let bigNum2 = 2894820768375628974950393589587439573984759387459834587364597863458976345353543534534534539475098743530985738756n;

// console.log(bigNum2, bigNum, bigNum2/bigNum);
// Для роботи з великими числами, які більше за 9007199254740991 (це 2^53-1) Потрібно ковертувати значення у BigInt. Або завдяки функції BigInt(), або через додавання n наприкінці числа. Використовувати в одній операції одночасно  BigInt та Number - неможливо, для цього Number треба конвертувати у BigInt. BigInt можна конвертувати у number через Number(), але якщо число більше за 9007199254740991, то уся та частина, що перебільшує максимальне значення number, буде відкинута. BigInt також не можна використовувати у бібліотеці Math для розрахунків, але можна проводити розрахунки завдяки + - * /(ділення BigInt завжди повертає округлений результат) % **

// function amountOfPages(summary){
//     let count = 0,
//     pages = '';
//     while (pages.length < summary) {
//         count++
//         pages += count + 1;
//     }
//     return count;
// }

// console.log(amountOfPages(5));
// console.log(amountOfPages(25));
// console.log(amountOfPages(1095));
// console.log(amountOfPages(185));

// function test (string) {
//     if(new Set(string.split(' ').join('').split('.').join('').split(',').join('').toLowerCase()).size === 26) {
//         return true;
//     } else {
//         return new Set(string.split(' ').join('').split('.').join('').split(',').join('').toLowerCase());
//     }
// }
// console.log(test('The quick brown fox jumps over the lazy dog'));
// console.log(test('Mr. Jock, TV quiz PhD., bags few lynx.'));
// console.log(test('Two driven jocks help fax my big quiz.'));


// function deepCount(a){
//     let count = 0;
//     for(let i = 0; i < a.length; i++) {
//         if(Array.isArray(a[i])) {
//             count += deepCount(a[i]);
//         }
//         count++;
//     }
//     return count;
// }

// const buttons = document.querySelectorAll('button'),
//       wrapper = document.querySelector('.wrapper');

// wrapper.addEventListener('click', (e)=> {
//     if(e.target && e.target.matches('button')) {
//         e.target.style.background = 'green';
//     }
// });
//Делегування події - коли в нас є кілька елементів, в одному спільному батьківському елементі, подія яких повинна виконувати одну і ту саму дію, як приклад, кілька кнопок у одному елементі, які повинні робити одну і ту саму дію. То замість того, щоб вішати прослуховувач на кожну, краще повісити EventListener на їх батьківський елемент і перевіряти, чи виконана подія пов'язана саме с подрібними елементами.

// const box = document.querySelector('.box'),
//       boxProps = {
//         cWidth: box.clientWidth, 
//         cHeight: box.clientHeight,
//         oWidth: box.offsetWidth,
//         oHeight: box.offsetHeight,
//         sWidth: box.scrollWidth,
//         sHeight: box.scrollHeight,
//         coords: box.getBoundingClientRect(),
//         styles: getComputedStyle(box),
//       }
//Ді властивості та методи дозволяють отримати різні характеристики DOM елемента. clientWidth - не буде враховувати системні елементи, такі як системний скролл бар, а також не враховуватиме padding. offsetWidth - виведе саме те значення, яке вказане у css. scrollWidth - виведе повний розмір елементу, включно з усім контентом, який вкладається у overflow: scroll. 
//getBoundingClientRect - метод дозволяє отримати координати елементу у document, усі координати орієнтуються відносно лівого верхнього кута, навіть bottom та right
//getComputedStyle функція повертає об'єкт з усіма стилями елемента
// const viewPosition = document.documentElement.scrollTop;
//document.documentElement.scrollTop - таким чином можна отримати позицію прокрутки сторінки користувачем. Також, якщо задати це значення, то можна маніпулювати позицією перегляду клієта
// window.scrollBy(0, 400);
// window.scrollTo(0, 400);
//Можна також прокручувати сторінку у користувача

// const element = document.querySelector('.element')
// const observer = new MutationObserver(mutationRecords => {
//     console.log('action');
// });
// observer.observe(element, {
//     childList: true
// });
//MutationObserver може спостерігати за змінами у елементі. У цьому випадку ми відслідковуємо та обробляємо додавання, або видалення чайлд ноди (тексту або елементу), також є ResizeObserver та intersectionObserver

class User {
    constructor(id, name, rules) {
        this.id = id;
        this.name = name;
        this.rules = rules;
    }

    getName () {
        return this.name;
    }

    setRules (rules) {
        this.rules = rules;
    }

    showUser () {
        console.log(this);
    }
}

class SuperUser extends User{
    constructor (id, name, rules, sword) {
        super(id, name, rules);

        this.sword = sword;
    }

    killUser(user) {
        try {
            user.getName();
            console.log(`God ${this.name} killed ${user.name} by ${this.sword} !!!`);
            user.name = null;
            user.id = null;
            user.rules = null;
            user = null;
        } catch (error) {
            console.error(error);
        }
    }
}

let kyrylo = new User (1, 'Kyrylo', 'god');
let liudmyla = new SuperUser(1, 'Liudmyla', 'megatron', 'penis');
console.log(kyrylo.getName());
kyrylo.setRules('supergod');
kyrylo.showUser();
liudmyla.killUser(kyrylo);
console.log(kyrylo);
//Після впровадження стандарту ES6 функції-конструктори тепер можуть бути написані у вигляді класів. Це по суті ситаксичний цукор, бо всередині вони все одно працюють, як функції-конструктори, але працювати з класами зручніше. Також можна наслідувати класи, наслідування відбувається завдяки extends і у конструкторі класу викликається функція super(), у яку передаються аргументи для конструктора класу, який наслідується. super() якщо потрібен, обов'язково викликається в першій строчці конструктора

//Конекст виклику this
//1.Якщо викликати this у звичайній функції, то конекст виклику буде window (глобальний загальний об'єкт DOM), або якщо увімкнений "use strict", то undefined, бо у функції нема контексту виклику  
//2.this у об'єкті поверне сам об'єкт, також this у методі об'єкта також поверне об'єкт цього методу, але this у функції, яка всередині методу о'єкта поверне, як і звичайна функція Window або undefined, АЛЕ якщо функцію у методі викликати саме як АНОНІМНУ функцію, то this у цій функції поверне як раз об'єкт, тому що анонімні функції не мають свого контексту виклику і вони беруть його саме з того місця, де були викликані, а саме з методу, чий контекст виклику саме об'єкт цього методу
//3.this у консрукторах повертає новий екземляр об'єкту
//5.У addEventListener якщо передати функцію у класичному записі з function element.addEventListener('click', function (e) {return this}); - то this у такому випадку поверне елемент, на якому спрацювала подія, тобто e.target, але якщо передати анонімну функцію, то вона нічого не поверне Window або undefined, бо у анонімної функції нема свого контексту виклику

// Також функції можна присвоїти контекст виклику
function testThis (test, test2) {
    console.log(test, test2, this.context);
}
const testObj = {
    context: 'what?'
}
//call та apply роблять однакові речі, просто якщо річ заходить про кількість аргументів > 1, то ці два методи по різному приймають ці аргументи
testThis.call(testObj, 'puk: ', '232'); 
testThis.apply(testObj, ['pin: ', '2480']);
//також можна створити нову функцію на основі іншої функції, присвоївши їх новий контекст виклику
const actions = {
    action1: 'п\'є пиво'
}
function batya () {
    console.log(`Батя ${this.action1}`);
}

const newBatya = batya.bind(actions);
newBatya();