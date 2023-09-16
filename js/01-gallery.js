import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulGallery = document.querySelector(".gallery");

const renderList = (arr) => arr.map(item=>`<li class="gallery__item">
  <a class="gallery__link">
  <img src="${item.preview}" alt="${item.description}" class="gallery__image"/>
  </a>
</li>
`).join("");

ulGallery.insertAdjacentHTML("beforeend",renderList(galleryItems));

////////////////////////////////////////

const handleListClick = (e) => {
  if (e.currentTarget === e.target) {
    return;
  }
  const modalInstance = basicLightbox.create(`
  <div class="modal">
    <a class="gallery__link">
      <img src="${item.original}" alt="${item.description}" class="gallery__image"/>
    </a>
  </div>
`
  )
  modalInstance.show();
};


ulGallery.addEventListener("click", handleListClick);



// // Создаем функцию для открытия модального окна с изображением
// function openModal(event) {
//   event.preventDefault();

//   if (event.target.nodeName === "IMG") {
//     const originalImageSrc = event.target.dataset.source; // Получаем URL большого изображения из data-атрибута
//     const imageDescription = event.target.alt;

//     const modalHtml = `
//       <div class="modal">
//         <img src="${originalImageSrc}" alt="${imageDescription}">
//         <p>${imageDescription}</p>
//       </div>
//     `;

//     // Добавляем модальное окно в тело документа
//     document.body.insertAdjacentHTML("beforeend", modalHtml);

//     // Добавляем обработчик клика для закрытия модального окна
//     document.body.addEventListener("click", closeModal);
//   }
// }

// // Создаем функцию для закрытия модального окна
// function closeModal(event) {
//   if (event.target.classList.contains("modal")) {
//     document.querySelector(".modal").remove();
//     // Удаляем обработчик клика после закрытия модального окна
//     document.body.removeEventListener("click", closeModal);
//   }
// }