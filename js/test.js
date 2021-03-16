import { generateRandomPhotos } from './generate-mock-data.js';

const ages = [3, 10, 18, 20];

const checkAdult = (age) => {
  return age >= 3;
};

const result = ages.find(checkAdult);
console.log(result);

const testPhotos = [
  {
    comments: 2,
    description: 'Отличный день на природе',
    id: 1,
    likes: 139,
    tag: 11,
    url: 'photos/1.jpg',
  },
  {
    comments: 3,
    description: 'Стандартные офисные будни',
    id: 16,
    likes: 139,
    tag: 23,
    url: 'photos/2.jpg',
  },
  {
    comments: 3,
    description: 'Жаркий день летом на даче',
    id: 16,
    likes: 139,
    tag: 35,
    url: 'photos/3.jpg',
  },
];

console.log(testPhotos[0].tag);

const getSelected = (photo) => {
  return photo.tag === 35;
}

// const result2 = testPhotos.find(getSelected);
const result2 = testPhotos.find((photo) => photo.tag === 23 );

console.log(result2);

const testString = '2';
console.log(typeof(testString));
const toNumber = Number(testString);
console.log(typeof(toNumber));
