import { ICharacterGenerationState } from '../../../characterCreation.types';
export const raceStepValidator = (
  characterState: ICharacterGenerationState
) => {
  const { race, bonusAbilityScore } = characterState;
  console.log('race', race);
  console.log('bonusAbilityScore', bonusAbilityScore);

  if (
    (race === 'Human' || race === 'Half-Elf' || race === 'Half-Orc') &&
    bonusAbilityScore.length === 0
  ) {
    console.log('zero');
    return false;
  }
  return true;
};
