/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// document.querySelector('.promo__adv').remove();

// const promoMenu = document.querySelector('.promo__content');

// promoMenu.style.cssText = 'width: calc(100% - 300px);';

const adds = document.querySelectorAll('.promo__adv img');
adds.forEach(item => {
    item.remove();
});

document.querySelector('.promo__genre').innerText = 'Драма';

document.querySelector('.promo__bg').style.cssText = 'background: url(img/bg.jpg) center center/cover no-repeat; background-position: top;';

const filmsList = document.querySelectorAll('.promo__interactive-item');
movieDB.movies.sort();
console.log(movieDB.movies);
filmsList.forEach( (item, i) => {
    item.innerHTML = `<div class="promo__interactive-item-numer" style="position: absolute; top: 0px; left: -18px;">${i+1}.</div>\n${movieDB.movies[i]}\n<div class="delete"></div>`;
});
