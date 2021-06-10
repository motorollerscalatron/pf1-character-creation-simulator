import * as React from 'react';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
} from '../../../../../characterCreation.types';

export interface IRogueProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

export function Rogue(props: IRogueProps) {
  return (
    <div>
      <h2>Rogue</h2>
      <p>
        Rogues excel at moving about unseen and catching foes unaware. Their
        varied skills allow them to be highly versatile, with great variations
        in expertise existing between different rogues. Most, however, excel in
        overcoming hindrances, from unlocking doors and disarming traps to
        conning the dull-witted.
      </p>
    </div>
  );
}
