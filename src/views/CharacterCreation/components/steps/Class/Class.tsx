import * as React from 'react';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
  CharacterClass,
} from '../../../characterCreation.types';
import { CharacterClassMap } from './Class.types';
import * as characterClasses from './components/classes';
import { classes } from '../../../config/classes';
import StandardTraits from './components/classes/StandardTraits/StandardTraits';

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
      const lowerCharacterClass =
        characterClass.toLowerCase() as Lowercase<CharacterClassType>;
      //      const lowerCharacterClass = LowerCase<characterClass>;
      console.log('characterClass in setCharacterClassChoice', characterClass);
      console.log(
        'lowerCharacterClass in setCharacterClassChoice',
        lowerCharacterClass
      );

      draft.characterClassTraits = lowerCharacterClass
        ? classes[lowerCharacterClass]
        : null;
      // draft.characterClassTraits = classes['fighter'];
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
            checked={characterState.characterClass === 'Fighter'}
            onChange={(e) => setCharacterClassChoice('Fighter')}
          />
          <label htmlFor="select-character-class-fighter">Fighter</label>
          <input
            type="radio"
            name="characterClass"
            id="select-character-class-rogue"
            value="Rogue"
            checked={characterState.characterClass === 'Rogue'}
            onChange={(e) => setCharacterClassChoice('Rogue')}
          />
          <label htmlFor="select-character-class-rogue">Rogue</label>
          <input
            type="radio"
            name="characterClass"
            id="select-character-class-paladin"
            value="Paladin"
            checked={characterState.characterClass === 'Paladin'}
            onChange={(e) => setCharacterClassChoice('Paladin')}
          />
          <label htmlFor="select-character-class-paladin">Paladin</label>
          <input
            type="radio"
            name="characterClass"
            id="select-character-class-cleric"
            value="Cleric"
            checked={characterState.characterClass === 'Cleric'}
            onChange={(e) => setCharacterClassChoice('Cleric')}
          />
          <label htmlFor="select-character-class-cleric">Cleric</label>
          <input
            type="radio"
            name="characterClass"
            id="select-character-class-sorcerer"
            value="Sorcerer"
            checked={characterState.characterClass === 'Sorcerer'}
            onChange={(e) => setCharacterClassChoice('Sorcerer')}
          />
          <label htmlFor="select-character-class-sorcerer">Sorcerer</label>
          <input
            type="radio"
            name="characterClass"
            id="select-character-class-wizard"
            value="Wizard"
            checked={characterState.characterClass === 'Wizard'}
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
        <StandardTraits characterState={characterState} />
      </div>
    </div>
  );
}
