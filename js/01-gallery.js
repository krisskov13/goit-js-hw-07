import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createGalleryItem(item) {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery-item');
    
    const galleryLink = document.createElement('a');
    galleryLink.href = item.original;

    const galleryImage = document.createElement('img');
    galleryImage.classList.add("gallery-image");
    galleryImage.scr = item.preview;
    galleryImage.alt = item.description;

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);

    return galleryItem;
}

function renderGallery(items) {
    const galleryList = document.querySelector('.gallery');
    const galleryItems = items.map(item => createGalleryItem(item));
    galleryList.append(...galleryItems);
}

renderGallery(galleryItems);

document.querySelector('.gallery').addEventListener('click', event => {
    event.preventDefault();
    if (event.target.tagName === 'IMG') {
        const imageUrl = event.target.src;

        const instance = basicLightbox.create(
            `<img src = "${imageUrl}">`
        );
        instance.show();
    }
});