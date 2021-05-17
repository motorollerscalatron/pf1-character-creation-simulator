import { AbilityValue } from '../../../characterCreation.types';
import {
  BASE_HEALTH,
  BASE_ABILITY_VALUE,
} from '../../../constants/defaultCharacterSettings';

export const calculateHealthPoints = (constitution: AbilityValue) => {
  const { value, mod } = constitution;
  const fullConstitution = value + mod;
  const health =
    BASE_HEALTH + Math.floor((fullConstitution - BASE_ABILITY_VALUE) / 2);
  console.log({ health });
  return health < BASE_HEALTH ? BASE_HEALTH : health;
};
