'use strict';

const images = [
    {'id': '1', 'url':'./img/caramelo.jpg'},
    {'id': '2', 'url':'./img/doberman.jpg'},
    {'id': '3', 'url':'./img/luluDaPomerania.jpg'},
    {'id': '4', 'url':'./img/maltes.jpg'},
    {'id': '5', 'url':'./img/pug.jpg'},
    {'id': '6', 'url':'./img/são bernardo.jpg'},
]

const containerItems = document.querySelector('#container-items');


const loadImages = (images, container) => {
 images.forEach (image => {

    container.innerHTML += `
    <div class = 'item'>
    <img src='${image.url}'
     </div>
    `
 })
}


loadImages(images, containerItems);
let items = document.querySelectorAll('.item');

const previous = () =>{
    containerItems.appendChild(items [0]); // appendChild - Metodo que manda item para o final da fila
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length -1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}


document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
