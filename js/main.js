'use strict';

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

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};


const checkStringLength = (string, length) => string.length <= length;
checkStringLength;// for ESLint Validation

//Создает массив из уникальных чисел в указанном диапазоне указанной длины
const getUniqueRandomNumbers = (length, min, max) => {
  let arr = [];
  while (arr.length < length) {
    const number = getRandomInt(min, max);
    if (arr.indexOf(number) === -1) arr.push(number);
  }
  return arr;
}

// Функция возвращающает случайное значение из массива
const getRandomArrayElement = (array) => {
  const randomNumber = Math.floor(Math.random() * array.length);
  return array[randomNumber];
};

const CommentMessageLength = getRandomInt(CommentMessage.MIN_LENGTH, CommentMessage.MAX_LENGTH);

const getRandomMessages = (array, length) => {
  let messages = [];
  for (let i = 0; i < length; i++) {
    messages.push(getRandomArrayElement(array));
  }
  return messages.join(' ');
}

const generateRandomComments = () => {
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
}


// функция создает объекты с фото и помещает их в массив
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
}
const result = generateRandomPhotos();
result; // for ESLint Validation
