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
import ClassSpecificOptions from './components/classes/ClassSpecificOptions/ClassSpecificOptions';
import InputCard from '@/components/common/InputCard';

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

const allCharacterClasses: CharacterClass[] = [
  'Fighter',
  'Rogue',
  'Paladin',
  'Cleric',
  'Sorcerer',
  'Wizard',
];

export default function CharacterClasses(props: ICharacterClassProps) {
  const { characterState, updateCharacterState } = props;
  const { characterClass, characterClassTraits } = characterState;

  type CharacterClassTraitsType = typeof characterClassTraits;

  type CharacterClassType = typeof characterClass;
  const setCharacterClassChoice = (characterClass: CharacterClassType) => {
    updateCharacterState((draft) => {
      draft.characterClass = characterClass;
      const lowerCharacterClass =
        characterClass.toLowerCase() as Lowercase<CharacterClassType>;
      console.log('characterClass in setCharacterClassChoice', characterClass);
      console.log(
        'lowerCharacterClass in setCharacterClassChoice',
        lowerCharacterClass
      );

      draft.characterClassTraits = lowerCharacterClass
        ? {
            ...classes[lowerCharacterClass],
            classSkills: classes[lowerCharacterClass].classSkills.map(
              (skill) => ({ ...skill, isClassSkill: true })
            ),
          }
        : null;
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
        <div className="grid grid-cols-3 gap-4">
          {allCharacterClasses.map((characterClass) => {
            return (
              <InputCard
                key={characterClass}
                checked={characterState.characterClass === characterClass}
                onSelect={(e) => setCharacterClassChoice(characterClass)}
                label={characterClass}
                inputProps={{
                  type: 'radio',
                  name: 'characterClass',
                  id: characterClass,
                }}
                labelProps={{
                  htmlFor: 'select-character-class-fighter',
                }}
              />
            );
          })}

          {/*
          <div>
            <input
              className="radio-button hidden"
              type="radio"
              name="characterClass"
              id="select-character-class-fighter"
              value="Fighter"
              checked={characterState.characterClass === 'Fighter'}
              onChange={(e) => setCharacterClassChoice('Fighter')}
            />
            <label htmlFor="select-character-class-fighter">Fighter</label>
          </div>

          <div>
            <input
              className="radio-button hidden"
              type="radio"
              name="characterClass"
              id="select-character-class-rogue"
              value="Rogue"
              checked={characterState.characterClass === 'Rogue'}
              onChange={(e) => setCharacterClassChoice('Rogue')}
            />
            <label htmlFor="select-character-class-rogue">Rogue</label>
          </div>

          <div>
            <input
              className="radio-button hidden"
              type="radio"
              name="characterClass"
              id="select-character-class-paladin"
              value="Paladin"
              checked={characterState.characterClass === 'Paladin'}
              onChange={(e) => setCharacterClassChoice('Paladin')}
            />
            <label htmlFor="select-character-class-paladin">Paladin</label>
          </div>

          <div>
            <input
              className="radio-button hidden"
              type="radio"
              name="characterClass"
              id="select-character-class-cleric"
              value="Cleric"
              checked={characterState.characterClass === 'Cleric'}
              onChange={(e) => setCharacterClassChoice('Cleric')}
            />
            <label htmlFor="select-character-class-cleric">Cleric</label>
          </div>

          <div>
            <input
              className="radio-button hidden"
              type="radio"
              name="characterClass"
              id="select-character-class-sorcerer"
              value="Sorcerer"
              checked={characterState.characterClass === 'Sorcerer'}
              onChange={(e) => setCharacterClassChoice('Sorcerer')}
            />
            <label htmlFor="select-character-class-sorcerer">Sorcerer</label>
          </div>

          <div>
            <input
              className="radio-button hidden"
              type="radio"
              name="characterClass"
              id="select-character-class-wizard"
              value="Wizard"
              checked={characterState.characterClass === 'Wizard'}
              onChange={(e) => setCharacterClassChoice('Wizard')}
            />
            <label htmlFor="select-character-class-wizard">Wizard</label>
          </div>
                */}
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
      <div>
        <ClassSpecificOptions
          characterState={characterState}
          updateCharacterState={updateCharacterState}
        />
      </div>
    </div>
  );
}
