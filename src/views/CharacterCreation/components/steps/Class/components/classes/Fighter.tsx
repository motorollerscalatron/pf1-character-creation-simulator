import * as React from 'react';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
} from '../../../../../characterCreation.types';

export interface IFighterProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

export function Fighter(props: IFighterProps) {
  return (
    <div>
      <h2>Fighter</h2>
      <p>
        Fighters excel at combat—defeating their enemies, controlling the flow
        of battle, and surviving such sorties themselves. While their specific
        weapons and methods grant them a wide variety of tactics, few can match
        fighters for sheer battle prowess.
      </p>
    </div>
  );
}
