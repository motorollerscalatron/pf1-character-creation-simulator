import { ICharacterGenerationState } from '../../../characterCreation.types';
export const abilityStepValidator = (
  characterState: ICharacterGenerationState
) => {
  if (Number(localStorage.getItem('pointsSpent')) > 15) {
    return false;
  }
  return true;
};
