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

const imgGalleryOnClick = (e) => { 
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const clickedImg = e.target;
  const chosenImgSource = clickedImg.getAttribute("data-source");

  const galleryItem = galleryItems.find(item => item.original === chosenImgSource);

  if (galleryItem) {
    console.log(galleryItem.original); 
  }

  const modalInstance = basicLightbox.create(`
    <div class="modal"> 
      <li class="gallery_item">
        <img 
          src="${galleryItem.original}" 
          class="gallery_image"
          data-source="${galleryItem.original}"
          alt="${galleryItem.description}"
        />
      </li>
    </div>
  `);
  
  modalInstance.show();

  const handlerEsc = (event) => {
    if (event.code === "Escape") {
      modalInstance.close();
      document.removeEventListener("keydown", handlerEsc);
    }
  };

  document.addEventListener("keydown", handlerEsc);

  const containerModal = document.querySelector(".modal");
  containerModal.style.width = `80%`;   
};

renderList(galleryItems, ulList);
ulList.addEventListener("click", imgGalleryOnClick);

