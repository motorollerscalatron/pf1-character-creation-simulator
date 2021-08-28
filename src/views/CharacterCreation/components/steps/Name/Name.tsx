import * as React from 'react';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
} from '../../../characterCreation.types';

export interface ICharacterNameProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

type Gender = 'Male' | 'Female' | 'Other';
type Name = '';

async function fileToJSON(file: File) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (event: ProgressEvent<FileReader>) =>
      resolve(JSON.parse(event?.target?.result as string));
    fileReader.onerror = (error) => reject(error);
    fileReader.readAsText(file);
  });
}

export default function CharacterName(props: ICharacterNameProps) {
  const { characterState, updateCharacterState } = props;

  const onChange = (field: 'gender' | 'name') => (e: React.SyntheticEvent) => {
    const value = (e.target as HTMLInputElement).value as Gender | Name;
    console.log({ field, e, value });
    updateCharacterState((draft) => {
      draft[field] = value;
    });
  };

  const loadCharacterStateFromJson = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log('load', e, e.currentTarget.files);
    const file = e.currentTarget.files?.[0];
    type LoaderCharacterState = ICharacterGenerationState & {
      bonusLanguage: Record<string, boolean>;
    };
    if (!file) return;
    const characterState = (await fileToJSON(file)) as LoaderCharacterState;
    console.log(characterState);

    const bonusLanguage: Map<string, boolean> = new Map();

    for (const [language, value] of Object.entries(
      characterState.bonusLanguage
    )) {
      bonusLanguage.set(language, value);
    }
    updateCharacterState((draft) => {
      // Make sure that bonusLanguage is a Map instance before loading the state
      // When the state is saved, the Map is converted to an object, so we have to
      // convert the object back to a Map
      Object.assign(draft, {
        ...characterState,
        bonusLanguage,
      });
    }, true);
  };

  return (
    <div>
      <div>
        <input type="file" onChange={loadCharacterStateFromJson} />
        load
      </div>

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
