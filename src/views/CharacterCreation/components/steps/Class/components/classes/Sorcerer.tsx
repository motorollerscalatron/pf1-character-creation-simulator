import * as React from 'react';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
} from '../../../../../characterCreation.types';

export interface ISorcererProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

export function Sorcerer(props: ISorcererProps) {
  return (
    <div>
      <h2>Sorcerer</h2>
      <p>
        Sorcerers excel at casting a selection of favored spells frequently,
        making them powerful battle mages. As they become familiar with a
        specific and ever-widening set of spells, sorcerers often discover new
        and versatile ways of making use of magics other spellcasters might
        overlook. Their bloodlines also grant them additional abilities,
        assuring that no two sorcerers are ever quite alike.
      </p>
    </div>
  );
}
