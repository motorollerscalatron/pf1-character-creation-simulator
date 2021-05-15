import * as React from 'react';
import {
  Ability,
  AbilityLower,
  UpdateCharacterState,
} from '../../../../../characterCreation.types';
import { AbilityPreview } from '../../../../CharacterStats/components/AbilityPreview';
import Abilities from '../../../Abilities/Abilities';
import { abilityStepValidator } from '../../../Abilities/abilityStepValidator';

export type AbilitiesMapItem = {
  label: Ability;
  ability: AbilityLower;
  bonus: number;
  mod: number;
};

const abilitiesMap: AbilitiesMapItem[] = [
  {
    label: 'Strength',
    ability: 'strength',
    bonus: 2,
    mod: 1,
  },
  {
    label: 'Dexterity',
    ability: 'dexterity',
    bonus: 2,
    mod: 1,
  },
  {
    label: 'Constitution',
    ability: 'constitution',
    bonus: 2,
    mod: 1,
  },
  {
    label: 'Intelligence',
    ability: 'intelligence',
    bonus: 2,
    mod: 1,
  },
  {
    label: 'Wisdom',
    ability: 'wisdom',
    bonus: 2,
    mod: 1,
  },
  {
    label: 'Charisma',
    ability: 'charisma',
    bonus: 2,
    mod: 1,
  },
];

export interface ISelectAbilityScoreProps {
  updateCharacterState: UpdateCharacterState;
}

export function SelectAbilityScore(props: ISelectAbilityScoreProps) {
  const { updateCharacterState } = props;
  const setBonusAbilityScore = (item: AbilitiesMapItem) => {
    const { ability, bonus, mod } = item;
    updateCharacterState((draft) => {
      draft.bonusAbilityScore = {
        ability,
        value: bonus,
        mod,
      };
    });
  };

  return (
    <div>
      <h4>Select an ability score.</h4>
      {abilitiesMap.map((item) => {
        const { label, ability, bonus } = item;
        return (
          <div key={label}>
            <label htmlFor={`select-${ability}`}>{label}</label>
            <input
              type="radio"
              name="abilityScore"
              id={`select-${ability}`}
              value={ability}
              onChange={(e) => setBonusAbilityScore(item)}
            />
          </div>
        );
      })}
    </div>
  );
}
