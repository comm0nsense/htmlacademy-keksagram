import {generateRandomPhotos} from './mock-data.js'

const photoTemplate = document.querySelector('#picture').content;
// console.log(photoTemplate);
const photoContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const photos = generateRandomPhotos();
// console.log(photos);

photos.forEach((photo) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  fragment.appendChild(photoElement);
});

photoContainer.appendChild(fragment);

