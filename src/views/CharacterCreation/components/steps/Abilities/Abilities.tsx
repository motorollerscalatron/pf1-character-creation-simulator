import React, { useState } from 'react';
import { Updater } from 'use-immer';
import { ICharacterGenerationState } from '../../../characterCreation.types';
import StrengthDescription from './components/descriptions/StrengthDescription';
import DexterityDescription from './components/descriptions/DexterityDescription';
import ConstitutionDescription from './components/descriptions/ConstitutionDescription';
import IntelligenceDescription from './components/descriptions/IntelligenceDescription';
import WisdomDescription from './components/descriptions/WisdomDescription';
import CharismaDescription from './components/descriptions/CharismaDescription';
import AbilityControlBar from './components/controlBar/AbilityControlBar';
import { Abilities as AbilityType } from '../../../characterCreation.types';

export interface IAbilitiesProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: Updater<ICharacterGenerationState>;
}

export default function Abilities(props: IAbilitiesProps) {
  const { characterState, updateCharacterState } = props;
  const { abilities } = characterState;
  const [pointsSpent, setPointsSpent] = useState(0);

  const incrementAbility = (
    ability: Lowercase<AbilityType>,
    costDifference: number
  ) => {
    updateCharacterState((draft) => {
      draft.abilities[ability]++;
    });
    setPointsSpent((num) => num + costDifference);
  };

  const decrementAbility = (
    ability: Lowercase<AbilityType>,
    costDifference: number
  ) => {
    updateCharacterState((draft) => {
      draft.abilities[ability]--;
    });
    setPointsSpent((num) => num + costDifference);
  };

  return (
    <div>
      <h1>Abilities</h1>
      <div className="text-center">Points Spent {pointsSpent} / 15</div>
      <div className="shadow">
        <div className="grid grid-cols-2 gap-4">
          <table className="ability-controls">
            <thead>
              <tr>
                <th>Ability</th>
                <th>Score</th>
                <th>Mod</th>
                <th>Cost</th>
              </tr>
            </thead>

            <tbody>
              <AbilityControlBar
                ability="Strength"
                value={abilities.strength}
                incrementAbility={incrementAbility}
                decrementAbility={decrementAbility}
              />
              <AbilityControlBar
                ability="Dexterity"
                value={abilities.dexterity}
                incrementAbility={incrementAbility}
                decrementAbility={decrementAbility}
              />
              <AbilityControlBar
                ability="Constitution"
                value={abilities.constitution}
                incrementAbility={incrementAbility}
                decrementAbility={decrementAbility}
              />
              <AbilityControlBar
                ability="Intelligence"
                value={abilities.intelligence}
                incrementAbility={incrementAbility}
                decrementAbility={decrementAbility}
              />
              <AbilityControlBar
                ability="Wisdom"
                value={abilities.wisdom}
                incrementAbility={incrementAbility}
                decrementAbility={decrementAbility}
              />
              <AbilityControlBar
                ability="Charisma"
                value={abilities.charisma}
                incrementAbility={incrementAbility}
                decrementAbility={decrementAbility}
              />
              {/*
                <h4>strength</h4>
                <div className="ability-control__bar"></div>
                <td>10</td>
                <td>0</td>
                <td>0</td>
                <td>
                  <button>-</button>
                  <button>+</button>
                </td>
                */}
            </tbody>
          </table>
          <div className="ability-descriptions">
            <StrengthDescription />
            <DexterityDescription />
            <ConstitutionDescription />
            <IntelligenceDescription />
            <WisdomDescription />
            <CharismaDescription />
          </div>
        </div>
      </div>
    </div>
  );
}
