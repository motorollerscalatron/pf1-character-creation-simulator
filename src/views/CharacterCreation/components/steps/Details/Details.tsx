import * as React from 'react';

import {
  ICharacterGenerationState,
  UpdateCharacterState,
} from '../../../characterCreation.types';

export interface ICharacterDetailsProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

export default function CharacterDetails(props: ICharacterDetailsProps) {
  const { characterState } = props;

  console.log('characterState', characterState);

  const saveToJson = () => {
    console.log('save');
    console.log(JSON.stringify(characterState));
    const characterStateJson = JSON.stringify(characterState, (key, value) => {
      if (key === 'bonusLanguage') {
        return Object.fromEntries(value);
      }
      return value;
    });
    console.log({ characterStateJson });
    const blob = new Blob([characterStateJson], { type: 'text/json' });
    console.log('blob', blob);
    const a = document.createElement('a');
    a.download = 'characterState.json';
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  return (
    <div>
      <h3>Details</h3>
      <div>
        <button onClick={() => saveToJson()}>save</button>
      </div>
    </div>
  );
}
