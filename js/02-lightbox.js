
import { galleryItems } from './gallery-items.js';

// Change code below this line

const ulList = document.querySelector(".gallery");

const renderList = (arr, container) =>{ 
    const markup = arr.map((item) => `
    <li class="gallery_item" > 
      <a class="gallery_link" href="${item.original}">
        <img
          class="gallery_image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
          width="330px"
        />
      </a>
    </li>`).join("");
    
    container.insertAdjacentHTML("afterbegin", markup);
}

renderList(galleryItems, ulList);
 
const gallery = new SimpleLightbox('.gallery a', {
        captions: true,
        captionType: 'attr', 
        captionsData: 'alt', 
        animationSpeed: 250,
});
