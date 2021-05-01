import { ICharacterGenerationState } from '../../../characterCreation.types';
export const nameStepValidator = (
  characterState: ICharacterGenerationState
) => {
  const { gender, name } = characterState;
  if (!gender || !name) return false;
  return true;
};
