import * as React from 'react';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
  Race,
} from '../../../characterCreation.types';
import * as races from './components/races';
import { AbilitiesMapItem } from './components/SelectAbilityScore/SelectAbilityScore';
import SelectBonusLanguages from './components/races/SelectBonusLanguages/SelectBonusLanguages';
import {
  RaceMap,
  BonusAbilityMap,
  RaceWithFixedBonusAbilities,
} from './Race.types';

const raceMap: Omit<RaceMap, ''> = {
  Human: races.Human,
  Elf: races.Elf,
  Halfling: races.Halfling,
  Dwarf: races.Dwarf,
  'Half-Elf': races.HalfElf,
  'Half-Orc': races.HalfOrc,
};

const bonusAbilityMap: BonusAbilityMap = {
  Elf: [
    ['dexterity', 2, 1],
    ['intelligence', 2, 1],
    ['constitution', -2, -1],
  ],
  Dwarf: [
    ['constitution', 2, 1],
    ['wisdom', 2, 1],
    ['charisma', -2, -1],
  ],
  Halfling: [
    ['dexterity', 2, 1],
    ['charisma', 2, 1],
    ['strength', -2, -1],
  ],
};

export interface ICharacterRaceProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

export default function CharacterRace(props: ICharacterRaceProps) {
  const { characterState, updateCharacterState } = props;
  const { race } = characterState;
  type RaceType = typeof race;
  const setRaceChoice = (race: RaceType) => {
    updateCharacterState((draft) => {
      draft.race = race;
      draft.bonusLanguage.clear();
      if (race in bonusAbilityMap) {
        const bonusAbilityScore = bonusAbilityMap[
          race as RaceWithFixedBonusAbilities
        ].map(([ability, value, mod]) => {
          return {
            ability,
            value,
            mod,
          };
        });
        draft.bonusAbilityScore = bonusAbilityScore;
      } else {
        draft.bonusAbilityScore = [];
      }
    });
  };

  const SelectedRaceContent = race ? raceMap[race] : null;

  return (
    <div>
      <div className="content">
        <h4>Select a Race.</h4>
      </div>
      <div className="radio-toolbar select-race content">
        <div>
          <input
            type="radio"
            name="race"
            id="select-race-human"
            value="Human"
            checked={characterState.race === 'Human'}
            onChange={(e) => setRaceChoice('Human')}
          />
          <label htmlFor="select-race-human">Human</label>
          <input
            type="radio"
            name="race"
            id="select-race-half-elf"
            value="Half-Elf"
            checked={characterState.race === 'Half-Elf'}
            onChange={(e) => setRaceChoice('Half-Elf')}
          />
          <label htmlFor="select-race-half-elf">Half-elf</label>
          <input
            type="radio"
            name="race"
            id="select-race-elf"
            value="Elf"
            checked={characterState.race === 'Elf'}
            onChange={(e) => setRaceChoice('Elf')}
          />
          <label htmlFor="select-race-elf">Elf</label>
          <input
            type="radio"
            name="race"
            id="select-half-orc"
            value="Half-Orc"
            checked={characterState.race === 'Half-Orc'}
            onChange={(e) => setRaceChoice('Half-Orc')}
          />
          <label htmlFor="select-race-half-orc">Half-orc</label>
          <input
            type="radio"
            name="race"
            id="select-race-dwarf"
            value="Dwarf"
            checked={characterState.race === 'Dwarf'}
            onChange={(e) => setRaceChoice('Dwarf')}
          />
          <label htmlFor="select-race-dwarf">Dwarf</label>
          <input
            type="radio"
            name="race"
            id="select-race-halfling"
            value="Halfling"
            checked={characterState.race === 'Halfling'}
            onChange={(e) => setRaceChoice('Halfling')}
          />
          <label htmlFor="select-race-halfling">Halfling</label>
        </div>
      </div>
      {SelectedRaceContent ? (
        <SelectedRaceContent
          characterState={characterState}
          updateCharacterState={updateCharacterState}
        />
      ) : null}
      <SelectBonusLanguages
        characterState={characterState}
        updateCharacterState={updateCharacterState}
      />
    </div>
  );
}
