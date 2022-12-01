import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, original, description }) => { return '<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a></div > ' }).join("");

galleryList.innerHTML = markup;

galleryList.addEventListener("click", onModalShow);

function onModalShow(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')){
        return
    };

    const instance = basicLightbox.create(`<img src="event.target.dataset.source" width="800" height="600">`, {onShow: (instance) => {window.addEventListener("keydown", onModalCloses)}, onClose: (instance) => {window.removeEventListener("keydown", onModalCloses) } });
    
    function onModalCloses(event) {
        if (event.code === 'Escape') {
            instance.close(); 
        } 
    }
    instance.show();
}

