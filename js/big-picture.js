import { generateRandomPhotos } from './generate-mock-data.js';
import { renderPreviews } from './render-previews.js';

const photos = generateRandomPhotos();
// console.log(photos);

// for (let i = 0; i < photos.length; i++) {
//   console.log(photos[i].tag);
//   if (photos[i].tag === pictureTag) {
//     const selectedPreview = photos[i].tag;
//   }
// }

renderPreviews(photos);

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
// const bigPictureLikes = bigPicture.querySelector('.likes-count');
const picturesWrapper = document.querySelector('.pictures');
const modalCloseButton = document.querySelector('.big-picture__cancel');


const onPictureClick = (evt) => {
  // console.log(evt);
  // console.log(evt.path[1].childNodes[3]);

  // console.log(bigPictureLikes.textContent);

  // bigPictureImg.src = evt.target.src;

  const onModalEscPress = (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }

    picturesWrapper.addEventListener('click', onPictureClick);
  };

  const closeModal = ()=> {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    bigPicture.querySelector('.social__comment-count').classList.remove('hidden');
    bigPicture.querySelector('.social__comments-loader').classList.remove('hidden');

    document.removeEventListener('keydown', onModalEscPress);
    modalCloseButton.removeEventListener('click', closeModal);
    picturesWrapper.addEventListener('click', onPictureClick);
  };


  const openModal = (photo) => {
    bigPicture.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.social__comments-loader').classList.add('hidden');
    // console.log(photo);
    bigPictureImg.src = photo.url;

    document.addEventListener('keydown', onModalEscPress);
    modalCloseButton.addEventListener('click', closeModal);
    picturesWrapper.removeEventListener('click', onPictureClick);
  };


  if(evt.target.classList.contains('picture__img')) {
    evt.preventDefault();
    const pictureTag = evt.target.dataset.tag;

    // console.log(pictureTag);

    // for (let i = 0; i < photos.length; i++) {
    //   // console.log(photos[i].tag);
    //   if (photos[i].tag === pictureTag) {
    //     console.log(photos[i].tag)
    //     // const selectedPreview = photos[i].tag;
    //     // console.log(selectedPreview)
    //     }
    // }
    openModal( photos[pictureTag]);
  }
};

picturesWrapper.addEventListener('click', onPictureClick);
