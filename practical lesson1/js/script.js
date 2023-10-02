/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
debugger;
let filmsList = document.querySelector('.promo__interactive-list'),
    deleters = document.querySelectorAll('.delete');
const addForm = document.querySelector('.add'),
      formInput = addForm.querySelector('.adding__input');
let checkbox = addForm.querySelector('input[type="checkbox"]');

const deleteFoo = function (index) {
    
}

function createMovieList () {debugger;
    filmsList = document.querySelector('.promo__interactive-list');
    filmsList.innerHTML = '';
    movieDB.movies.sort();
    movieDB.movies.forEach( (item, i) => {
        filmsList.innerHTML += `
        <li class="promo__interactive-item">${i+1}.${item}
            <div class="delete"></div>
        </li>
        `;
    });

    deleters = document.querySelectorAll('.delete');
    deleters.forEach((item, i) => {
        item.addEventListener('click', () => {
            movieDB.movies.splice(i, 1);
            createMovieList();
        });
    });
}

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "ААааа"
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

addForm.addEventListener('submit', e => {
    e.preventDefault();
    if(formInput.value.length > 21) {
        movieDB.movies.push(formInput.value.slice(0, 21) + '...');
    } else {
        movieDB.movies.push(formInput.value);
    }

    if(checkbox.checked) {
        console.log('Додаємо ваш улюблений фільм!)');
    }

    e.target.reset();
    
    createMovieList();
});

createMovieList();



