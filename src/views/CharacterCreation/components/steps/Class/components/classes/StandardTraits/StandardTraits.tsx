import * as React from 'react';
import { ICharacterGenerationState } from '../../../../../../characterCreation.types';

export interface IStandardTraitsProps {
  characterState: ICharacterGenerationState;
}

export default function StandardTraits(props: IStandardTraitsProps) {
  const { characterState } = props;
  const { characterClass } = characterState;

  const {
    classTraits = [],
    classSkills = [],
    wealth = 0,
  } = characterState.characterClassTraits || {};

  return characterClass ? (
    <div>
      <h4>Standard Traits</h4>
      <div className="flex justify-between">
        <div className="w-1/3 text-left">
          <strong>Hit Points: </strong>
        </div>
        <div className="w-1/3 text-left">
          <strong>
            Melee Attack Bonus:{' '}
            {characterState.characterClassTraits?.bonusStats.offense.melee || 0}
          </strong>
        </div>
        <div className="w-1/3 text-left">
          <strong>
            Ranged Attack Bonus:{' '}
            {characterState.characterClassTraits?.bonusStats.offense.ranged ||
              0}
          </strong>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/3 text-left">
          <strong>
            Reflex:{' '}
            {characterState.characterClassTraits?.bonusStats.defense.reflex ||
              0}
          </strong>
        </div>
        <div className="w-1/3 text-left">
          <strong>
            Fortitude:{' '}
            {characterState.characterClassTraits?.bonusStats.defense
              .fortitude || 0}
          </strong>
        </div>
        <div className="w-1/3 text-left">
          <strong>
            Will:{' '}
            {characterState.characterClassTraits?.bonusStats.defense.will || 0}
          </strong>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-1/3 text-left">
          <strong>
            Skill Points:{' '}
            {characterState.characterClassTraits?.skillPoints || 0}
          </strong>
        </div>
        <div className="w-2/3 text-left">
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
      <div className="w-1/3 text-left">
        <strong>Starting Wealth: {wealth} gold pieces</strong>
      </div>
    </div>
  ) : null;
}
