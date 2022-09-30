import { galleryItems } from "./gallery-items.js";

// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const galleryMarckup = createGalleryElement(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarckup);

gallery.addEventListener("click", makeFullscreenPhoto);

function createGalleryElement(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a href="${original}" class="gallery__link">
      <img src="${preview}" data-source="${original}" alt="${description}" class="gallery__image" />
    </a>
  </div>`;
    })
    .join("");
}

function makeFullscreenPhoto(event) {
  blockHref(event);

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  // const currenActivePhoto = document.querySelector(".gallery__item.modal");

  // if (currenActivePhoto) {
  //   currenActivePhoto.classList.remove("modal");
  // }

  // const parrentPhoto = event.target.closest(".gallery__item");
  // parrentPhoto.classList.add("modal");

  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show();

  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

function blockHref(event) {
  event.preventDefault();
}
