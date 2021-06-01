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
import { Ability } from '../../../characterCreation.types';
import styles from './Abilities.module.css';

export interface IAbilitiesProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: Updater<ICharacterGenerationState>;
}

export default function Abilities(props: IAbilitiesProps) {
  const { characterState, updateCharacterState } = props;
  const { abilities } = characterState;
  const [pointsSpent, setPointsSpent] = useState(0);

  const updateAbility = (
    ability: Lowercase<Ability>,
    value: number,
    mod: number,
    costDifference: number
  ) => {
    updateCharacterState((draft) => {
      draft.abilities[ability] = {
        value,
        mod,
      };
    });
    setPointsSpent((num) => num + costDifference);
  };

  // TODO: add a graphical bar
  // TODO: apply a plus sign on mod
  // TODO: show information on ability the cursor points to

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
                value={abilities.strength.value}
                updateAbility={updateAbility}
              />
              <AbilityControlBar
                ability="Dexterity"
                value={abilities.dexterity.value}
                updateAbility={updateAbility}
              />
              <AbilityControlBar
                ability="Constitution"
                value={abilities.constitution.value}
                updateAbility={updateAbility}
              />
              <AbilityControlBar
                ability="Intelligence"
                value={abilities.intelligence.value}
                updateAbility={updateAbility}
              />
              <AbilityControlBar
                ability="Wisdom"
                value={abilities.wisdom.value}
                updateAbility={updateAbility}
              />
              <AbilityControlBar
                ability="Charisma"
                value={abilities.charisma.value}
                updateAbility={updateAbility}
              />
            </tbody>
          </table>
          <div className={styles.abilityDescriptions}>
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
