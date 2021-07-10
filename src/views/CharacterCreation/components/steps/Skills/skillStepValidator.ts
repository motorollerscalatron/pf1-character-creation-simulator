import { ICharacterGenerationState } from '../../../characterCreation.types';
export const skillStepValidator = (
  characterState: ICharacterGenerationState
) => {
  //TODO: prevent ability scores from exceeding the point buy limit
  return true;
};
