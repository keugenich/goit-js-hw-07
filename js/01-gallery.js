import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
let instance = null;

galleryList.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.nodeName === 'IMG') {
        const imageSrc = event.target.dataset.source;
        instance = basicLightbox.create(`
          <img src="${imageSrc}" width="800" height="600">
        `);
        instance.show();

        document.addEventListener('keydown', onKeyDown);
    }
});

function onKeyDown(event) {
    if (event.key === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', onKeyDown);
    }
}


console.log(galleryItems);