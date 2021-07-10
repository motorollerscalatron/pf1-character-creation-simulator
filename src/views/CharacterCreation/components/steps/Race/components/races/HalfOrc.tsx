import * as React from 'react';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
} from '../../../../../characterCreation.types';
import { SelectAbilityScore } from '../SelectAbilityScore/SelectAbilityScore';

export interface IHalfOrcProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

export function HalfOrc(props: IHalfOrcProps) {
  const { characterState, updateCharacterState } = props;
  return (
    <div>
      <h2 className="text-left">Half-Orc</h2>
      <p className="text-left">
        Half-orcs are the inevitable result when orcs clash with other humanoid
        races. Several orc tribes actively work toward breeding half-orc
        children for their greater mental capabilities.
      </p>
      <SelectAbilityScore
        characterState={characterState}
        updateCharacterState={updateCharacterState}
      />
    </div>
  );
}
