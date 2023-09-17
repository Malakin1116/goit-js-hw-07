import { galleryItems } from './gallery-items.js';

const ulList = document.querySelector(".gallery");

const renderList = (arr, container) => { 
  const markup = arr.map((item) => `
    <li class="gallery_item" > 
      <a class="gallery_link" href="${item.original}">
        <img
          class="gallery_image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
          width="372px"
        />
      </a>
    </li>`).join("");
  
  container.insertAdjacentHTML("afterbegin", markup);
}