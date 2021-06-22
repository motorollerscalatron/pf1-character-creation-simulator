import * as React from 'react';
import { ICharacterGenerationState } from '../../../../../../characterCreation.types';

export interface IStandardTraitsProps {
  characterState: ICharacterGenerationState;
}

export default function StandardTraits(props: IStandardTraitsProps) {
  const { characterState } = props;
  const { characterClass } = characterState;

  const { classTraits = [], classSkills = [] } =
    characterState.characterClassTraits || {};

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
            {characterState.characterClassTraits?.bonusStats.offense.melee || 0}
          </strong>
        </div>
        <div className="w-1/3">
          <strong>
            Ranged Attack Bonus:{' '}
            {characterState.characterClassTraits?.bonusStats.offense.ranged ||
              0}
          </strong>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/3">
          <strong>
            Reflex:{' '}
            {characterState.characterClassTraits?.bonusStats.defense.reflex ||
              0}
          </strong>
        </div>
        <div className="w-1/3">
          <strong>
            Fortitude:{' '}
            {characterState.characterClassTraits?.bonusStats.defense
              .fortitude || 0}
          </strong>
        </div>
        <div className="w-1/3">
          <strong>
            Will:{' '}
            {characterState.characterClassTraits?.bonusStats.defense.will || 0}
          </strong>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/3">
          <strong>
            Skill Points:{' '}
            {characterState.characterClassTraits?.skillPoints || 0}
          </strong>
        </div>
        <div className="w-2/3">
          <strong>Class Skills:</strong>{' '}
          {classSkills.map(({ label }, index) => {
            return (
              <span key={label}>
                {label}
                {index < classSkills.length - 1 ? ', ' : ''}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  ) : null;
}
