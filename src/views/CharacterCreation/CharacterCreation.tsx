import * as React from 'react';
import { useStepper } from '../../hooks';
import CharacterCreationSteps from './components/CharacterCreationSteps/CharacterCreationSteps';
import Name from './components/steps/Name/Name';
import Abilities from './components/steps/Abilities/Abilities';
import Race from './components/steps/Race/Race';
import Class from './components/steps/Class/Class';
import Skills from './components/steps/Skills/Skills';
import Feats from './components/steps/Feats/Feats';
import Equipment from './components/steps/Equipment/Equipment';
import Details from './components/steps/Details/Details';
import CharacterStats from './components/CharacterStats/CharacterStats';
import { useImmer } from 'use-immer';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
} from './characterCreation.types';
import { nameStepValidator } from './components/steps/Name/nameStepValidator';
import { abilityStepValidator } from './components/steps/Abilities/abilityStepValidator';
import { raceStepValidator } from './components/steps/Race/raceStepValidator';
import { updateOffense, updateDefense } from './service/characterStateService';
import { classStepValidator } from './components/steps/Class/classStepValidator';
import { skillStepValidator } from './components/steps/Skills/skillStepValidator';

const { useState } = React;
export interface ICharacterCreationProps {}

type ComponentsMap = {
  [key: string]: typeof Name | typeof Abilities;
};

const componentsMap: ComponentsMap = {
  1: Name,
  2: Abilities,
  3: Race,
  4: Class,
  5: Skills,
  6: Feats,
  /*
  7: Equipment,
  8: Details,
  */
};

type StepValidators = {
  [key: string]: (characterState: ICharacterGenerationState) => boolean;
};

const stepValidators: StepValidators = {
  1: nameStepValidator,
  2: abilityStepValidator,
  3: raceStepValidator,
  4: classStepValidator,
  5: skillStepValidator,
};

const initialState: ICharacterGenerationState = {
  name: '',
  gender: '',
  campaignType: 'Standard Fantasy',
  abilities: {
    strength: { value: 10, mod: 0 },
    dexterity: { value: 10, mod: 0 },
    constitution: { value: 10, mod: 0 },
    intelligence: { value: 10, mod: 0 },
    wisdom: { value: 10, mod: 0 },
    charisma: { value: 10, mod: 0 },
  },
  defense: {
    hp: {
      baseValue: 6,
      value: 6,
    },
    ac: { baseValue: 10, value: 10, mod: 0 },
    tac: { baseValue: 10, value: 10, mod: 0 },
    ffac: { baseValue: 10, value: 10, mod: 0 },
    reflex: { baseValue: 0, value: 0, mod: 0 },
    fortitude: { baseValue: 0, value: 0, mod: 0 },
    will: { baseValue: 0, value: 0, mod: 0 },
  },
  offense: {
    speed: {
      baseValue: 30,
      value: 30,
    },
    melee: { baseValue: 0, value: 0, mod: 0 },
    ranged: { baseValue: 0, value: 0, mod: 0 },
  },
  race: '',
  bonusAbilityScore: [
    {
      ability: '',
      value: 0,
      mod: 0,
    },
  ],
  bonusLanguage: new Map(),
  characterClass: '',
  characterClassTraits: null,
  characterRaceTraits: null,
  favouredClassBonus: '',
  skillPoints: 0,
  characterTrainedSkills: {},
  characterFeats: {},
};

localStorage.setItem('pointsSpent', '0');

export default function CharacterCreation(props: ICharacterCreationProps) {
  const { step, nextStep, prevStep, setStep } = useStepper(1, 8);
  const [characterState, setCharacterState] = useImmer(initialState);

  const updateCharacterState: UpdateCharacterState = (fn) => {
    setCharacterState((draft) => {
      fn(draft);
      updateOffense(draft);
      updateDefense(draft);
    });
  };

  console.log({ characterState });
  const CurrentComponent = componentsMap[step];

  const onNextStep = () => {
    const validator = stepValidators[step];
    if (typeof validator !== 'function') {
      throw new Error(`No validator function provided for step ${step}`);
    }

    const isStepComplete = validator(characterState);

    if (!isStepComplete) {
      switch (step) {
        case 1: {
          alert('Please complete all the fields!');
          return;
        }
        case 2: {
          alert('You have spent too many points on your abilities!');
          return;
        }
        case 3: {
          alert('Please complete all the fields!');
          return;
        }
        default: {
          break;
        }
      }
    }
    nextStep();
  };

  return (
    <div className="container mx-auto">
      <div className="mb-8">Character creation</div>
      <CharacterCreationSteps currentStep={step} />
      <main className="grid grid-cols-12 mt-8">
        <aside className="col-span-3">
          <CharacterStats characterState={characterState} />
        </aside>

        <section className="col-span-9 space-y-8">
          <div>
            <CurrentComponent
              characterState={characterState}
              updateCharacterState={updateCharacterState}
            />
          </div>
          <div className="space-x-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-blue-50 font-bold py-2 px-4 rounded"
              onClick={prevStep}
            >
              prev
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-blue-50 font-bold py-2 px-4 rounded"
              onClick={onNextStep}
            >
              next
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
