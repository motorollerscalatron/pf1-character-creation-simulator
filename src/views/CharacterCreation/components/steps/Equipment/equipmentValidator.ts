import { ICharacterGenerationState } from '../../../characterCreation.types';

export const equipmentValidator = (
  characterState: ICharacterGenerationState
) => {
  const { characterClass, characterClassTraits, equipment } = characterState;

  const totalSpent = Object.values(equipment).reduce((acc, item) => {
    const price = item?.price || 0;
    return acc + price;
  }, 0);
  //TODO: prevent ability scores from exceeding the point buy limit
  return totalSpent < (characterClassTraits!?.wealth || 0);
};
