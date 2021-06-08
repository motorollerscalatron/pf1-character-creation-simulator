import * as React from 'react';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
  CharacterClass,
} from '../../../characterCreation.types';
import * as characterClasses from './components/classes';

const characterClassMap = {
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
  const { characterClass } = characterState;
  type CharacterClassType = typeof characterClass;
  const setCharacterClassChoice = (characterClass: CharacterClassType) => {
    updateCharacterState((draft) => {
      draft.characterClass = characterClass;
    });
  };

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
    </div>
  );
}
