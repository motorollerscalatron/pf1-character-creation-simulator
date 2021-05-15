import * as React from 'react';
import { UpdateCharacterState } from '../../../../../characterCreation.types';
import { SelectAbilityScore } from '../SelectAbilityScore/SelectAbilityScore';

export interface IHumanProps {
  updateCharacterState: UpdateCharacterState;
}

export function Human(props: IHumanProps) {
  const { updateCharacterState } = props;
  return (
    <div>
      <h2>Human</h2>
      <SelectAbilityScore updateCharacterState={updateCharacterState} />
    </div>
  );
}
