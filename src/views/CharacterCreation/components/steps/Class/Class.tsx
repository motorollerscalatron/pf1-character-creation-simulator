import * as React from 'react';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
  CharacterClass,
} from '../../../characterCreation.types';
import { CharacterClassMap } from './Class.types';
import * as characterClasses from './components/classes';
import { classes } from '../../../config/classes';

const characterClassMap: Omit<CharacterClassMap, ''> = {
  Fighter: characterClasses.Fighter,
  Rogue: characterClasses.Rogue,
  Paladin: characterClasses.Paladin,
  Cleric: characterClasses.Cleric,
  Sorcerer: characterClasses.Sorcerer,
  Wizard: characterClasses.Wizard,
};

export interface ICharacterClassProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

export default function CharacterClasses(props: ICharacterClassProps) {
  const { characterState, updateCharacterState } = props;
  const { characterClass, characterClassTraits } = characterState;

  type CharacterClassTraitsType = typeof characterClassTraits;
  // const setCharacterClassTraits = (
  //   characterClassTraits: CharacterClassTraitsType
  // ) => {
  //   updateCharacterState((draft) => {
  //     draft.characterClassTraits = characterClassTraits;
  //   });
  // };

  type CharacterClassType = typeof characterClass;
  //  type CharacterClassLowerType = typeof characterClass.toLowerCase;
  const setCharacterClassChoice = (characterClass: CharacterClassType) => {
    updateCharacterState((draft) => {
      draft.characterClass = characterClass;
      const lowerCharacterClass = characterClass.toLowerCase();
      //      const lowerCharacterClass = LowerCase<characterClass>;
      console.log('characterClass in setCharacterClassChoice', characterClass);
      console.log(
        'lowerCharacterClass in setCharacterClassChoice',
        lowerCharacterClass
      );

      draft.characterClassTraits = classes.fighter;
      draft.characterClassTraits = classes['fighter'];
      //      draft.characterClassTraits = characterClass ? classes. : null;
      //      draft.characterClassTraits = characterClass ? classes[lowerCharacterClass] : null;
    });
  };

  const SelectedClassContent = characterClass
    ? characterClassMap[characterClass]
    : null;

  return (
    <div>
      <div className="content">
        <h4>Select a class.</h4>
      </div>
      <div className="radio-toolbar select-race content">
        <div>
          <input
            type="radio"
            name="characterClass"
            id="select-character-class-fighter"
            value="Fighter"
            onChange={(e) => setCharacterClassChoice('Fighter')}
          />
          <label htmlFor="select-character-class-fighter">Fighter</label>
          <input
            type="radio"
            name="characterClass"
            id="select-character-class-rogue"
            value="Rogue"
            onChange={(e) => setCharacterClassChoice('Rogue')}
          />
          <label htmlFor="select-character-class-rogue">Rogue</label>
          <input
            type="radio"
            name="characterClass"
            id="select-character-class-paladin"
            value="Paladin"
            onChange={(e) => setCharacterClassChoice('Paladin')}
          />
          <label htmlFor="select-character-class-paladin">Paladin</label>
          <input
            type="radio"
            name="characterClass"
            id="select-character-class-cleric"
            value="Cleric"
            onChange={(e) => setCharacterClassChoice('Cleric')}
          />
          <label htmlFor="select-character-class-cleric">Cleric</label>
          <input
            type="radio"
            name="characterClass"
            id="select-character-class-sorcerer"
            value="Sorcerer"
            onChange={(e) => setCharacterClassChoice('Sorcerer')}
          />
          <label htmlFor="select-character-class-sorcerer">Sorcerer</label>
          <input
            type="radio"
            name="characterClass"
            id="select-character-class-wizard"
            value="Wizard"
            onChange={(e) => setCharacterClassChoice('Wizard')}
          />
          <label htmlFor="select-character-class-wizard">Wizard</label>
        </div>
      </div>
      {SelectedClassContent ? (
        <SelectedClassContent
          characterState={characterState}
          updateCharacterState={updateCharacterState}
        />
      ) : null}
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
      </div>
    </div>
  );
}
