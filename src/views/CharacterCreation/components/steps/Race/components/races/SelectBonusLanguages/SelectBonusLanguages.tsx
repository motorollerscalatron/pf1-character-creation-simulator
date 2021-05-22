import * as React from 'react';
// import { languages } from '../../../../../../config/languages';
import { languages } from '@/views/CharacterCreation/config/languages';
import {
  AbilityValue,
  ICharacterGenerationState,
  UpdateCharacterState,
} from '../../../../../../characterCreation.types';
export interface ISelectBonusLanguagesProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

type LanguageIntMap = Readonly<[number, number, number][]>;
const languageIntMap: LanguageIntMap = [
  [10, 13, 1],
  [13, 16, 2],
  [16, 20, 3],
];

const getLanguagesNum = (
  intelligence: AbilityValue,
  languageIntMap: LanguageIntMap
) => {
  const int = intelligence.value;
  for (const [min, max, num] of languageIntMap) {
    if (int >= min && int < max) {
      return num;
    }
  }

  return 0;
};

export default function SelectBonusLanguages(
  props: ISelectBonusLanguagesProps
) {
  const { characterState, updateCharacterState } = props;
  const { race, abilities } = characterState;
  const { intelligence } = abilities;

  const numLanguages = getLanguagesNum(intelligence, languageIntMap);

  return race && numLanguages ? (
    <div>
      <h4>Select bonus {numLanguages} languages.</h4>
      <div className="grid grid-cols-2 md:grid-cols-3">
        {languages[race].map((language) => {
          return (
            <div key={language}>
              <input
                type="checkbox"
                className="checked:bg-blue-600 checked:border-transparent"
              />
              {language}
            </div>
          );
        })}
      </div>
    </div>
  ) : null;
}
