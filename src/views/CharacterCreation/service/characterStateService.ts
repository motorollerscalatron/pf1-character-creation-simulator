import { ICharacterGenerationState } from '../characterCreation.types';

const updateHealth = (characterState: ICharacterGenerationState) => {
  let healthModifier = 0;
  const conMod = characterState.abilities.constitution.mod;
  healthModifier += conMod;
  const bonusAbilityConstitution = characterState.bonusAbilityScore.find(
    (item) => item.ability === 'constitution'
  );
  healthModifier += bonusAbilityConstitution?.mod ?? 0;

  characterState.defense.hp.value =
    characterState.defense.hp.baseValue + healthModifier;
};

const updateAc = (characterState: ICharacterGenerationState) => {
  const dexMod = characterState.abilities.dexterity.mod;
  characterState.defense.ac.value =
    characterState.defense.ac.baseValue + dexMod;
};

export const updateDefense = (characterState: ICharacterGenerationState) => {
  console.log('in update defense', characterState.abilities.constitution.mod);
  const dexMod = characterState.abilities.dexterity.mod;
  updateAc(characterState);
  characterState.defense.tac.value =
    characterState.defense.tac.baseValue + dexMod;
  characterState.defense.reflex.value = dexMod;

  const conMod = characterState.abilities.constitution.mod;
  characterState.defense.fortitude.value =
    characterState.defense.fortitude.baseValue + conMod;
  updateHealth(characterState);

  const wisMod = characterState.abilities.wisdom.mod;
  characterState.defense.will.value =
    characterState.defense.will.baseValue + wisMod;
};

export const updateOffense = (characterState: ICharacterGenerationState) => {
  const dexMod = characterState.abilities.dexterity.mod;
  characterState.offense.ranged.value = dexMod;
  const strMod = characterState.abilities.strength.mod;
  characterState.offense.melee.value = strMod;
};
