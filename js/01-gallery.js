import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href = ${original}>
    <img
      class = "gallery__image"
      src = ${preview}
      data-source = ${original}
      alt = ${description}
    />
  </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", itemShow);

function itemShow(evt) {
  evt.preventDefault();

  const itemUrl = evt.target.dataset.source;
  const itemAlt = evt.target.alt;

  const modal = basicLightbox.create(
    `<div class="modal">
        <img class = "gallery__image"
            src = ${itemUrl}
            alt = ${itemAlt}
        />
    </div>
    `,
    {
      onShow: () => document.addEventListener("keydown", onEscapeKeyPress),
      onClose: () => document.removeEventListener("keydown", onEscapeKeyPress),
    }
  );
  modal.show();

  function onEscapeKeyPress(evt) {
    if (evt.code === "Escape") {
      modal.close();
    }
  }
  /* console.log(instance); */
  /* console.dir(itemAlt); */
}
