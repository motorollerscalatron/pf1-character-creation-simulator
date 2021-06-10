import * as React from 'react';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
} from '../../../../../characterCreation.types';

export interface IPaladinProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

export function Paladin(props: IPaladinProps) {
  return (
    <div>
      <h2>Paladin</h2>
      <p>
        Paladins serve as beacons for their allies within the chaos of battle.
        While deadly opponents of evil, they can also empower goodly souls to
        aid in their crusades. Their magic and martial skills also make them
        well suited to defending others and blessing the fallen with the
        strength to continue fighting.
      </p>
    </div>
  );
}
