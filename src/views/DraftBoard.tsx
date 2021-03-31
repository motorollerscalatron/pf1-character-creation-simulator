import React, { FC } from 'react';
import '../assets/tailwind.output.css';
import image01 from '../assets/01.png';
import birdCage, { IBird, IBirdCage } from '../misc/default';

const DraftBoard: FC<{}> = ({}): JSX.Element => {
  console.log(birdCage);

  const birdData: IBirdCage = birdCage;
  console.log(birdData);

  const handleAdd = async () => {
    const isbn = prompt('ENter ISBN number');
  };

  const handleReset = () => {};

  return (
    <div>
      <div className="font-extrabold text-7xl">YOUR BIRD CAGE</div>
      <div className="max-h-96">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-row">
        <div>
          {birdData.birds.map((bird, index) => {
            const logo = require(`../assets/${bird.image}`);
            console.log(logo);
            return (
              <div className="flex item-center mb-2 font-bold" key={index}>
                <p>name: {bird.name}</p>
                <img className="max-h-96" src={logo.default} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DraftBoard;
