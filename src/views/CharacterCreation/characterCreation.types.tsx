import { Updater } from 'use-immer';
import type { ClassTraits } from './config/classes';
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

export type CharacterClass =
  | 'Fighter'
  | 'Rogue'
  | 'Paladin'
  | 'Cleric'
  | 'Sorcerer'
  | 'Wizard';
type BaseStatValue = {
  value: number;
  mod: number;
};

export type AbilityValue = BaseStatValue;

// type Person = Record<'name' | 'age', string | number>
// type PersonTwo = {
//   name: string,
//   age: number
// }
export type Abilities = Record<AbilityLower, AbilityValue>;
export type OffenseValue = BaseStatValue & { baseValue: number };
export type DefenseValue = BaseStatValue & { baseValue: number };
export type Offense = {
  speed: { baseValue: number; value: number };
  melee: OffenseValue;
  ranged: OffenseValue;
};
export type Defense = {
  hp: { baseValue: number; value: number };
  ac: DefenseValue;
  tac: DefenseValue;
  ffac: DefenseValue;
  reflex: DefenseValue;
  fortitude: DefenseValue;
  will: DefenseValue;
};

export type BonusAbilityScore = {
  ability: AbilityLower | '';
  value: number;
  mod: number;
};
export type Languages = Omit<Record<Race, string[]>, ''>;

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
  defense: Defense;
  offense: Offense;
  race: Race;
  bonusAbilityScore: BonusAbilityScore[];
  bonusLanguage: Map<string, boolean>;
  characterClass: CharacterClass | '';
  characterClassTraits: ClassTraits | null;
}

type Character = Omit<ICharacterGenerationState, 'campaignType'>;
type CharacterAbilities = Pick<
  ICharacterGenerationState,
  'abilities' | 'bonusAbilityScore'
>;
