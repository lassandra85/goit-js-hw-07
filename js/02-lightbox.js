import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, original, description }) => { return '<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a>' }).join("");

galleryList.innerHTML = markup;

galleryList = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
});














