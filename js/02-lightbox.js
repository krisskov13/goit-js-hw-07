import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function createGalleryItem(item) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.setAttribute("data-source", item.original);

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

function renderGallery(items) {
  const galleryList = document.querySelector(".gallery");
  const galleryItems = items.map((item) => createGalleryItem(item));
  galleryList.append(...galleryItems);
}

renderGallery(galleryItems);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
