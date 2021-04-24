import * as React from 'react';
import { Updater } from 'use-immer';
import { ICharacterGenerationState } from '../../../characterCreation.types';

export interface IAbilitiesProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: Updater<ICharacterGenerationState>;
}

export default function Abilities(props: IAbilitiesProps) {
  const { characterState } = props;
  return (
    <div>
      <h1>Abilities</h1>
      <div>{JSON.stringify(characterState)}</div>
    </div>
  );
}
