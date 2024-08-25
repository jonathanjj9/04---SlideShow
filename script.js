'use strict';

const images = [
    {'id': '1', 'url':'./img/verde.jpg'},
    {'id': '2', 'url':'./img/azulVermelho.jpg'},
    {'id': '3', 'url':'./img/cinzaPreto.jpg'},
    {'id': '4', 'url':'./img/peixeAmarelo.jpg'},
    {'id': '5', 'url':'./img/roxoAmarelo.jpg'},
    {'id': '6', 'url':'./img/vermelho.jpg'},
]

const container = document.querySelector('#container-items');

const loadImages = (images, container) => {
 images.forEach (image => {

    container.innerHTML += `
    <div class = 'item'>
    <img src='${image.url}'
     </div>
    `
 })
}

loadImages(images, container);