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

const { useState } = React;
export interface ICharacterCreationProps {}

type ComponentsMap = {
  [key: string]: React.FC;
};

const componentsMap: ComponentsMap = {
  1: Name,
  2: Abilities,
  3: Race,
  4: Class,
  5: Skills,
  6: Feats,
  7: Equipment,
  8: Details,
};

interface CharacterGenerationState {
  name: string;
  gender: 'Male' | 'Female' | 'Other' | '';
  campaignType:
    | 'Low Fantasy'
    | 'Standard Fantasy'
    | 'High Fantasy'
    | 'Epic Fantasy'
    | '';
  abilities: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
  race: 'Human' | 'Half-Elf' | 'Elf' | 'Half-Orc' | 'Dwarf' | 'Halfling' | '';
  abilityScore:
    | 'Strength'
    | 'Dexterity'
    | 'Constitution'
    | 'Intelligence'
    | 'Wisdom'
    | 'Charisma'
    | '';
  bonusLanguage: string;
  class:
    | 'Fighter'
    | 'Rouge'
    | 'Paladin'
    | 'Cleric'
    | 'Sorcerer'
    | 'Wizard'
    | '';
}

const initialState: CharacterGenerationState = {
  name: '',
  gender: '',
  campaignType: 'Standard Fantasy',
  abilities: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
  race: '',
  abilityScore: '',
  bonusLanguage: '',
  class: '',
};

export default function CharacterCreation(props: ICharacterCreationProps) {
  const { step, nextStep, prevStep, setStep } = useStepper(1, 8);
  const [form, setForm] = useState(initialState);

  const CurrentComponent = componentsMap[step];

  return (
    <div className="container mx-auto">
      <div className="mb-8">Character creation</div>
      <CharacterCreationSteps currentStep={step} />
      <div>step: {step}</div>
      <div>
        <CurrentComponent />
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
          onClick={nextStep}
        >
          next
        </button>
      </div>
    </div>
  );
}
