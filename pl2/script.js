console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastChild);

console.log(document.querySelector('.first').parentNode);
console.log(document.querySelector('.first').parentElement);

console.log(document.querySelector('[data-curent = "3"]').nextSibling);
console.log(document.querySelector('[data-curent = "3"]').previousSibling);
console.log(document.querySelector('[data-curent = "3"]').nextElementSibling);

if(document.querySelector('.first').previousSibling.nodeName == '#text') {
    console.log('Трапився звичайнісінький текст..');
}