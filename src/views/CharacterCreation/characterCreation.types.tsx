import { Updater } from 'use-immer';
export type UpdateCharacterState = Updater<ICharacterGenerationState>;

export type Ability =
  | 'Strength'
  | 'Dexterity'
  | 'Constitution'
  | 'Intelligence'
  | 'Wisdom'
  | 'Charisma';

export type AbilityLower = Lowercase<Ability>;

export type Race =
  | 'Human'
  | 'Half-Elf'
  | 'Elf'
  | 'Half-Orc'
  | 'Dwarf'
  | 'Halfling'
  | '';

export type AbilityValue = {
  value: number;
  mod: number;
};

// type Person = Record<'name' | 'age', string | number>
// type PersonTwo = {
//   name: string,
//   age: number
// }
export type Abilities = Record<AbilityLower, AbilityValue>;
export type BonusAbilityScore = {
  ability: AbilityLower | '';
  value: number;
  mod: number;
};
/*

 {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  }
  */

export interface ICharacterGenerationState {
  name: string;
  gender: 'Male' | 'Female' | 'Other' | '';
  campaignType:
    | 'Low Fantasy'
    | 'Standard Fantasy'
    | 'High Fantasy'
    | 'Epic Fantasy'
    | '';
  abilities: Abilities;
  race: Race;
  bonusAbilityScore: BonusAbilityScore;
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

type Character = Omit<ICharacterGenerationState, 'campaignType'>;
type CharacterAbilities = Pick<
  ICharacterGenerationState,
  'abilities' | 'bonusAbilityScore'
>;
