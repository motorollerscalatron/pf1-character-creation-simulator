export type Abilities =
  | 'Strength'
  | 'Dexterity'
  | 'Constitution'
  | 'Intelligence'
  | 'Wisdom'
  | 'Charisma';

export interface ICharacterGenerationState {
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
  abilityScore: Abilities | '';
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
