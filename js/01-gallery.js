import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

galleryList.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.nodeName === 'IMG') {
        const imageSrc = event.target.dataset.source;
        const instance = basicLightbox.create(`
      <img src="${imageSrc}" width="800" height="600">
    `);
        instance.show();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        instance.close();
    }
});


console.log(galleryItems);