import * as React from 'react';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
} from '../../../../../characterCreation.types';
import { SelectAbilityScore } from '../SelectAbilityScore/SelectAbilityScore';

export interface IHumanProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

export function Human(props: IHumanProps) {
  const { characterState, updateCharacterState } = props;
  return (
    <div>
      <h2>Human</h2>
      <SelectAbilityScore
        characterState={characterState}
        updateCharacterState={updateCharacterState}
      />
    </div>
  );
}
