import type { CharacterClass } from '../characterCreation.types';

export type EquipmentTypeClass =
  | 'sword'
  | 'dagger'
  | 'wand'
  | 'staff'
  | 'heavy-armor'
  | 'medium-armor'
  | 'light-armor'
  | 'robe'
  | 'shield';

export type EquipmentValue = {
  id: string;
  name: string;
  price: number;
  type: EquipmentTypeClass;
  allowed_classes: Partial<CharacterClass[]>;
};

export type Equipment = Record<string, EquipmentValue>;

export const EQUIPMENT: Equipment = {
  1: {
    id: '1',
    name: 'Heavy Armor',
    price: 25,
    type: 'heavy-armor',
    allowed_classes: ['Fighter', 'Paladin'],
  },
  2: {
    id: '2',
    name: 'Magicial Robe',
    price: 30,
    type: 'robe',
    allowed_classes: ['Cleric', 'Wizard', 'Sorcerer'],
  },
  3: {
    id: '3',
    name: 'Padded Armor',
    price: 5,
    type: 'light-armor',
    allowed_classes: ['Fighter', 'Paladin', 'Rogue', 'Cleric'],
  },
  4: {
    id: '4',
    name: 'Leather Armor',
    price: 10,
    type: 'light-armor',
    allowed_classes: ['Fighter', 'Paladin', 'Rogue', 'Cleric'],
  },
};
