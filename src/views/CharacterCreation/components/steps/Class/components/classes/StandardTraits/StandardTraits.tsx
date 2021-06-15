import * as React from 'react';

import { ICharacterGenerationState } from '../../../../../../characterCreation.types';

export interface IStandardTraitsProps {
  characterState: ICharacterGenerationState;
}

export default function StandardTraits(props: IStandardTraitsProps) {
  const { characterState } = props;
  const { characterClass } = characterState;

  return characterClass ? (
    <div>
      <h4>Standard Traits</h4>
      <div className="flex justify-between">
        <div className="w-1/3">
          <strong>Hit Points: </strong>
        </div>
        <div className="w-1/3">
          <strong>
            Melee Attack Bonus:{' '}
            {characterState.characterClassTraits?.bonusStats.offense.melee}
          </strong>
        </div>
        <div className="w-1/3">
          <strong>
            Ranged Attack Bonus:{' '}
            {characterState.characterClassTraits?.bonusStats.offense.ranged}
          </strong>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/3">
          <strong>
            Reflex:{' '}
            {characterState.characterClassTraits?.bonusStats.defense.reflex}
          </strong>
        </div>
        <div className="w-1/3">
          <strong>
            Fortitude:{' '}
            {characterState.characterClassTraits?.bonusStats.defense.fortitude}
          </strong>
        </div>
        <div className="w-1/3">
          <strong>
            Will: {characterState.characterClassTraits?.bonusStats.defense.will}
          </strong>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/3">
          <strong>
            Skill Points: {characterState.characterClassTraits?.skillPoints}
          </strong>
        </div>
        <div className="w-2/3">
          <strong>Class Skills:</strong>
        </div>
      </div>
    </div>
  ) : null;
}
