import {
  BASE_HEALTH,
  BASE_ABILITY_VALUE,
} from '../../../constants/defaultCharacterSettings';
export const calculateHealthPoints = (constitution: number) => {
  const health =
    BASE_HEALTH + Math.floor((constitution - BASE_ABILITY_VALUE) / 2);
  console.log({ health });
  return health < BASE_HEALTH ? BASE_HEALTH : health;
};
