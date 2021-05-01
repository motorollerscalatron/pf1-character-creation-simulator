import { ICharacterGenerationState } from '../../../characterCreation.types';
import Abilities from './Abilities';
export const abilityStepValidator = (
  characterState: ICharacterGenerationState
) => {
  const { abilities } = characterState;
  //TODO: prevent ability scores from exceeding the point buy limit
  return true;
};
