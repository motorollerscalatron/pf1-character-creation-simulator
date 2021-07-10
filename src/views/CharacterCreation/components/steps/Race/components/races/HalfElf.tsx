import * as React from 'react';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
} from '../../../../../characterCreation.types';
import { SelectAbilityScore } from '../SelectAbilityScore/SelectAbilityScore';

export interface IHalfElfProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

export function HalfElf(props: IHalfElfProps) {
  const { characterState, updateCharacterState } = props;
  return (
    <div>
      <h2 className="text-left">Half-Elf</h2>
      <p className="text-left">
        Half-elves originally were the results of interracial human-elf
        relationships but have developed into a true-breeding race since then.
      </p>
      <SelectAbilityScore
        characterState={characterState}
        updateCharacterState={updateCharacterState}
      />
    </div>
  );
}
