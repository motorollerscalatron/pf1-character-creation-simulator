import * as React from 'react';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
  Race,
} from '../../../characterCreation.types';
import * as raceChoices from './components/races';
import { races } from '../../../config/races';
import { AbilitiesMapItem } from './components/SelectAbilityScore/SelectAbilityScore';
import SelectBonusLanguages from './components/races/SelectBonusLanguages/SelectBonusLanguages';
import {
  RaceMap,
  BonusAbilityMap,
  RaceWithFixedBonusAbilities,
} from './Race.types';
import RacialTraits from './components/races/RacialTraits/RacialTraits';

const raceMap: Omit<RaceMap, ''> = {
  Human: raceChoices.Human,
  Elf: raceChoices.Elf,
  Halfling: raceChoices.Halfling,
  Dwarf: raceChoices.Dwarf,
  'Half-Elf': raceChoices.HalfElf,
  'Half-Orc': raceChoices.HalfOrc,
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
      const lowerCaseRace = race.toLowerCase() as Lowercase<RaceType>;
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
      draft.characterRaceTraits = lowerCaseRace ? races[lowerCaseRace] : null;
    });
  };

  const SelectedRaceContent = race ? raceMap[race] : null;

  return (
    <div className="px-12">
      <div className="shadow rounded-sm">
        <div className="content">
          <h4>Select a Race.</h4>
        </div>
        <div className="radio-toolbar select-race content">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <input
                className="radio-button hidden"
                type="radio"
                name="race"
                id="select-race-human"
                value="Human"
                checked={characterState.race === 'Human'}
                onChange={(e) => setRaceChoice('Human')}
              />
              <label htmlFor="select-race-human">Human</label>
            </div>

            <div>
              <input
                className="radio-button hidden"
                type="radio"
                name="race"
                id="select-race-half-elf"
                value="Half-Elf"
                checked={characterState.race === 'Half-Elf'}
                onChange={(e) => setRaceChoice('Half-Elf')}
              />
              <label htmlFor="select-race-half-elf">Half-Elf</label>
            </div>

            <div>
              <input
                className="radio-button hidden"
                type="radio"
                name="race"
                id="select-race-elf"
                value="Elf"
                checked={characterState.race === 'Elf'}
                onChange={(e) => setRaceChoice('Elf')}
              />
              <label htmlFor="select-race-elf">Elf</label>
            </div>

            <div>
              <input
                className="radio-button hidden"
                type="radio"
                name="race"
                id="select-race-half-orc"
                value="Half-Orc"
                checked={characterState.race === 'Half-Orc'}
                onChange={(e) => setRaceChoice('Half-Orc')}
              />
              <label htmlFor="select-race-half-orc">Half-orc</label>
            </div>

            <div>
              <input
                className="radio-button hidden"
                type="radio"
                name="race"
                id="select-race-dwarf"
                value="Dwarf"
                checked={characterState.race === 'Dwarf'}
                onChange={(e) => setRaceChoice('Dwarf')}
              />
              <label htmlFor="select-race-dwarf">Dwarf</label>
            </div>

            <div>
              <input
                className="radio-button hidden"
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
      <div>
        <RacialTraits characterState={characterState} />
      </div>
    </div>
  );
}
