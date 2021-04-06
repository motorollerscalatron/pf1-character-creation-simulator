import React, { useState, FC, useCallback } from 'react';
import '../assets/tailwind.output.css';
import image01 from '../assets/01.png';
import birdCage, { IBird, IBirdCage } from '../misc/default';
import { setConstantValue, updateFunctionDeclaration } from 'typescript';
import { getBirds } from '../birds';

const DraftBoard: FC<{}> = ({}): JSX.Element => {
  const uuid = (): string => {
    return Math.random().toString(16).slice(2);
  };

  console.log(birdCage);

  const birdData: IBirdCage = birdCage;
  console.log(birdData);

  const addBird = useCallback(
    (image: string) => {
      const newBirdCage: IBirdCage = {
        ...birdData,
        birds: [
          ...birdData.birds,
          {
            id: uuid(),
            name: '',
            image,
            reservedBy: 2,
          },
        ],
      };
    },
    [birdData]
  );

  const handleAdd = async () => {
    const birdCode = prompt('Enter bird code');
    if (birdCode) {
      const imageUrl = await getBirds(birdCode);
      console.log('image url', imageUrl);
    }
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
