import * as React from 'react';
import { ICharacterGenerationState } from '../../../../../../characterCreation.types';

export interface IRacialTraitsProps {
  characterState: ICharacterGenerationState;
}

export default function RacialTraits(props: IRacialTraitsProps) {
  const { characterState } = props;
  const { race } = characterState;

  return race ? (
    <div>
      <h4 className="text-left">Standard Traits</h4>
      <div>
        <p className="text-left">
          <strong>Ability Scores:</strong>{' '}
          {characterState.characterRaceTraits?.standardTraits.abilityScores
            .description || ''}
        </p>
        <p className="text-left">
          <strong>Size:</strong>
          {characterState.characterRaceTraits?.standardTraits.size || ''}
        </p>
        <p className="text-left">
          <strong>Speed:</strong>
          {characterState.characterRaceTraits?.standardTraits.speed || 0} ft
        </p>
        <p className="text-left">
          <strong>Languages:</strong>
        </p>
      </div>
      <h4 className="text-left">Racial Traits</h4>
      <div>
        {characterState.characterRaceTraits?.racialTraits.map((racialTrait) => {
          return (
            <p className="text-left">
              <strong>{racialTrait.label}</strong>:{racialTrait.description}
            </p>
          );
        })}
      </div>
    </div>
  ) : null;
}
