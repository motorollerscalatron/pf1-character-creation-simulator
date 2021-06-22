import { ICharacterGenerationState } from '../../../characterCreation.types';
import Class from './Class';
export const classStepValidator = (
  characterState: ICharacterGenerationState
) => {
  const { characterClass } = characterState;
  //TODO: prevent ability scores from exceeding the point buy limit
  return true;
};
