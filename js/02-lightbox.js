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
   <a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" title=""/></a>`;
    })
    .join("");
}

function makeFullscreenPhoto(event) {
  blockHref(event);

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  let myGallery = new SimpleLightbox(".gallery a");
  myGallery.on("show.simplelightbox", function (e) {
    //console.log(galleryItems[currentFotoIndex].description);
    myGallery.options.captionsData = "alt";
    myGallery.options.captionDelay = 250;
  });
}

function blockHref(event) {
  event.preventDefault();
}
