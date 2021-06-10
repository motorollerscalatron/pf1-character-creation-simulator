import * as characterClasses from './components/classes';
import { CharacterClass } from '../../../characterCreation.types';

export type CharacterClassMap = Readonly<
  Record<CharacterClass, typeof characterClasses[keyof typeof characterClasses]>
>;
