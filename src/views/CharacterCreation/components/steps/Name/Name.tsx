import * as React from 'react';
import { Updater } from 'use-immer';
import { ICharacterGenerationState } from '../../../characterCreation.types';

export interface ICharacterNameProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: Updater<ICharacterGenerationState>;
}

type Gender = 'Male' | 'Female' | 'Other';
type Name = '';

export default function CharacterName(props: ICharacterNameProps) {
  const { characterState, updateCharacterState } = props;

  const onChange = (field: 'gender' | 'name') => (e: React.SyntheticEvent) => {
    const value = (e.target as HTMLInputElement).value as Gender | Name;
    console.log({ field, e, value });
    updateCharacterState((draft) => {
      draft[field] = value;
    });
  };

  return (
    <div>
      <div className="text-2xl mb-6 font-bold text-red-900">Character Name</div>
      <div>
        What is your character's gender?
        <div className="flex divide-x justify-center my-4">
          <div className="px-4 space-x-2">
            <label htmlFor="select-gender-male">Male</label>
            <input
              type="radio"
              name="gender"
              id="select-gender-male"
              value="Male"
              checked={characterState.gender == 'Male'}
              onChange={onChange('gender')}
            />
          </div>

          <div className="px-4 space-x-2">
            <label htmlFor="select-gender-female">Female</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              id="select-gender-female"
              checked={characterState.gender == 'Female'}
              onChange={onChange('gender')}
            />
          </div>
          <div className="px-4 space-x-2">
            <label htmlFor="select-gender-other">Other</label>
            <input
              type="radio"
              name="gender"
              value="Other"
              id="select-gender-other"
              checked={characterState.gender == 'Other'}
              onChange={onChange('gender')}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-3">
        <label htmlFor="character-name-input">
          What is your character's name?
        </label>
        <input
          className="px-3 py-2 border border-gray-100 shadow-md w-80"
          type="text"
          id="character-name-input"
          value={characterState.name}
          onChange={onChange('name')}
        />
      </div>
    </div>
  );
}
