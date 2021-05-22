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
  const { race } = characterState;
  return (
    <div>
      <h2>Human</h2>
      <p>
        Humans are perhaps the most diverse of all the common races, with a
        capacity for both great evil and boundless good. Some humans assemble
        into vast barbaric hordes, while others build sprawling cities that
        cover miles. Humans possess exceptional drive and a great capacity to
        endure and expand, and as such are currently the dominant race in the
        world. Their empires and nations are vast, sprawling things. In general,
        humans are known for their flexibility, ingenuity, and ambition. Other
        races sometimes envy humans their seemingly limitless adaptability, not
        so much biologically speaking but in their willingness to step beyond
        the known and press on to whatever might await them.
      </p>
      <SelectAbilityScore
        characterState={characterState}
        updateCharacterState={updateCharacterState}
      />
    </div>
  );
}
