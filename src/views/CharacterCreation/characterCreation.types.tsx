import type { ClassTraits, Skill } from './config/classes';
import type { Feat, FeatValue } from './config/feats';
import type { RaceTraits } from './config/races';
import type { EquipmentValue } from './config/equipment';

export type UpdateCharacterState = (
  fn: (draft: ICharacterGenerationState) => void,
  override?: boolean
) => void;

export type Ability =
  | 'Strength'
  | 'Dexterity'
  | 'Constitution'
  | 'Intelligence'
  | 'Wisdom'
  | 'Charisma';

export type AbilityLower = Lowercase<Ability>;
export type AbilityShortKey = 'Cha' | 'Str' | 'Int' | 'Wis' | 'Dex' | 'Con';
export type Race =
  | 'Human'
  | 'Half-Elf'
  | 'Elf'
  | 'Half-Orc'
  | 'Dwarf'
  | 'Halfling';

export type CharacterClass =
  | 'Fighter'
  | 'Rogue'
  | 'Paladin'
  | 'Cleric'
  | 'Sorcerer'
  | 'Wizard';

export type CharacterClassLower = Lowercase<CharacterClass>;

type BaseStatValue = {
  value: number;
  mod: number;
};

export type AbilityValue = BaseStatValue;

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
export type EquipmentType = 'weapon' | 'armor' | 'shield';

export type SelectedEquipment = Record<EquipmentType, EquipmentValue>;

export type FavouredClassBonus = 'hp' | 'skill';
export type Languages = Omit<Record<Race, string[]>, ''>;
export type CharacterClassTrait = Record<string, string>;
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
  race: Race | '';
  bonusAbilityScore: BonusAbilityScore[];
  bonusLanguage: Map<string, boolean>;
  characterClass: CharacterClass | '';
  characterClassTraits: ClassTraits | null;
  characterRaceTraits: RaceTraits | null;
  favouredClassBonus: FavouredClassBonus | '';
  skillPoints: number;
  characterTrainedSkills: Partial<Record<Skill, boolean>>;
  characterFeats: Partial<Record<Feat, FeatValue & { checked: boolean }>>;
  equipment: Partial<SelectedEquipment>;
}

type Character = Omit<ICharacterGenerationState, 'campaignType'>;
type CharacterAbilities = Pick<
  ICharacterGenerationState,
  'abilities' | 'bonusAbilityScore'
>;
