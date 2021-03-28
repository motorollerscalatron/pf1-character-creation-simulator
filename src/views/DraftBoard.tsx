import React, { FC } from 'react';
import '../assets/tailwind.output.css';
import image01 from '../assets/01.png';
import birdCage, { IBird, IBirdCage } from '../misc/default';

const DraftBoard: FC<{}> = ({}): JSX.Element => {
  console.log(birdCage);

  return (
    <div>
      <img className="max-h-96" src={image01} />
    </div>
  );
};

export default DraftBoard;
