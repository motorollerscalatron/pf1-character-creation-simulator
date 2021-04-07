export interface IBird {
  id: string;
  name: string;
  image: string;
  reservedBy: number;
}

export interface IBirdCage {
  birds: IBird[];
}

const birdCage: IBirdCage = {
  birds: [
    {
      id: 'kaki1',
      name: 'kaki kukeko',
      image: '01.png',
      reservedBy: 5,
    },
    {
      id: 'mikan2',
      name: 'kan kitsu',
      image: '02.png',
      reservedBy: 2,
    },
    {
      id: 'kuri3',
      name: 'kukkuri17',
      image: '03.png',
      reservedBy: 1,
    },
  ],
};
export default birdCage;
// [
//   {
//     "id": "kaki1",
//     "image": "01.png",
//     "reservedBy": 5
//   },
//   {
//     "id": "mikan2",
//     "image": "02.png",
//     "reservedBy": 2
//   },
//   {
//     "id": "kuri3",
//     "image": "03.png",
//     "reservedBy": 1
//   }
// ]
