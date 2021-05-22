import * as races from './components/races';
import { AbilityLower, Race } from '../../../characterCreation.types';
export type RaceMap = Readonly<Record<Race, typeof races[keyof typeof races]>>;

export type RaceWithFixedBonusAbilities = 'Elf' | 'Dwarf' | 'Halfling';
type BonusAbilityTuple = [AbilityLower, number, number];
export type BonusAbilityMap = Record<
  RaceWithFixedBonusAbilities,
  BonusAbilityTuple[]
>;
