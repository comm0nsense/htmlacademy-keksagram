import { getRandomInt, getRandomArrayElement, getUniqueRandomNumbers} from './util.js';
// const MAX_LENGTH = 140;
const Comments = {
  NUMBER: 15,
  ID_MIN: 1,
  ID_MAX: 35,
};

const CommentMessage = {
  MIN_LENGTH: 1,
  MAX_LENGTH: 2,
  NUMBER: 5,
};

const AvatarPhotoNumber = {
  MIN: 1,
  MAX: 6,
};

const Photos = {
  NUMBER: 25,
  ID_MIN: 1,
  ID_MAX:25,
};

const Likes = {
  MIN: 15,
  MAX: 200,
}

const tempMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const tempDescriptionss = [
  'Мы в походе в горы',
  'Отличный день на природе',
  'Стандартные офисные будни',
  'День рождение моей дочери',
  'Рядовой обход в больнице',
]

const names = ['Вася', 'Nik', 'Stella', 'Мария', 'Александр']

const CommentMessageLength = getRandomInt(CommentMessage.MIN_LENGTH, CommentMessage.MAX_LENGTH);

//Создает объекты с комментариями и помещает в массив
const generateRandomComments = () => {
  /**
   * @param {array} array Массив из предложенний
   * @param {number} length Сколько предложений будет в комментарии
   * @returns {ыекштп} возвращает строку из заданного количества предложений
   */
  const getRandomMessages = (array, length) => {
    let messages = [];

    for (let i = 0; i < length; i++) {
      messages.push(getRandomArrayElement(array));
    }

    return messages.join(' ');
  };

  const ids = getUniqueRandomNumbers(Comments.NUMBER, Comments.ID_MIN, Comments.ID_MAX);
  let comments = [];

  for (let i = 0; i < CommentMessage.NUMBER; i++) {
    comments.push({
      id: ids[i],
      avatar: `img/avatar${getRandomInt(AvatarPhotoNumber.MIN, AvatarPhotoNumber.MAX)}.svg`,
      message: getRandomMessages(tempMessages, CommentMessageLength),
      name: getRandomArrayElement(names),
    });
  }

  return comments;
};


// Создает объекты с фото и помещает их в массив
let generateRandomPhotos = () => {
  let photos = [];
  const ids = getUniqueRandomNumbers(Photos.NUMBER, Photos.ID_MIN, Photos.ID_MAX);

  for (let i = 0; i < Photos.NUMBER; i++) {
    photos.push({
      id: ids[i],
      url: `photos/'${ids[i]}.jpg'`,
      description: getRandomArrayElement(tempDescriptionss),
      likes: getRandomInt(Likes.MIN, Likes.MAX),
      comments: generateRandomComments(),
    });
  }

  return photos;
};

export { generateRandomPhotos };

