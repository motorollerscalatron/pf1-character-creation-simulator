import React, { FC } from 'react';
// import '../assets/tailwind.output.css';
import './FormationBoard.css';

import image01 from '../assets/01.png';
import image02 from '../assets/02.png';
import image03 from '../assets/03.png';
import image04 from '../assets/04.png';
import Draggable from 'react-draggable';

const FormationBoard: FC<{}> = ({}): JSX.Element => {
  return (
    <div className="w-full grid grid-flow-col grid-cols-4">
      <Draggable axis="x">
        <div className="drag-box">
          <img className="max-h-96" src={image01} />
        </div>
      </Draggable>
      <Draggable axis="x">
        <div className="drag-box">
          <img className="max-h-96" src={image02} />
        </div>
      </Draggable>
      <Draggable axis="x">
        <div className="drag-box">
          <img className="max-h-96" src={image03} />
        </div>
      </Draggable>
      <Draggable axis="x">
        <div className="drag-box">
          <img className="max-h-96" src={image04} />
        </div>
      </Draggable>
    </div>
  );
};

export default FormationBoard;
