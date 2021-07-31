import React from 'react';
import {
  AbilityLower,
  AbilityValue,
  BonusAbilityScore,
  ICharacterGenerationState,
} from '../../characterCreation.types';
import styles from './CharacterStats.module.css';
import clsx from 'clsx';
import { AbilityPreview } from './components/AbilityPreview';
import { capitalize } from '../../../../helpers';
interface ICharacterStatsProps {
  characterState: ICharacterGenerationState;
}

const withBonusAbilityScore = (
  ability: AbilityLower,
  abilityValue: AbilityValue,
  bonusAbilityScore?: BonusAbilityScore
) => {
  if (!bonusAbilityScore) return abilityValue;
  if (!bonusAbilityScore.ability || ability !== bonusAbilityScore.ability)
    return abilityValue;

  return {
    value: abilityValue.value + bonusAbilityScore.value,
    mod: abilityValue.mod + bonusAbilityScore.mod,
  };
};

export default function CharacterStats(props: ICharacterStatsProps) {
  const { characterState } = props;
  const {
    abilities,
    bonusAbilityScore,
    characterClassTraits,
    characterRaceTraits,
    characterFeats,
  } = characterState;

  const previewAbilities: [string, AbilityValue][] = Object.entries(
    abilities
  ).map(([ability, abilityValue]) => {
    return [
      capitalize(ability.slice(0, 3)),
      withBonusAbilityScore(
        ability as AbilityLower,
        abilityValue,
        bonusAbilityScore?.find((item) => item.ability === ability)
      ),
    ];
  });

  const previewRacialTraits: [string, string][] | undefined =
    characterRaceTraits?.racialTraits.map(({ label, description }) => {
      return [label, description];
    });

  const previewClassTraits: [string, string][] | undefined =
    characterClassTraits?.classTraits.map(({ label, description }) => {
      return [label, description];
    });

  const previewFeats: string[] = Object.entries(characterFeats)
    .filter((characterFeat) => {
      return characterFeat[1]?.checked;
    })
    .map((characterFeat) => {
      return characterFeat[1]?.label || '';
    });

  return (
    <div className="preview-column shadow-md p-6 text-left">
      <div
        id="character-preview"
        className="text-sm font-sans leading-tight .leading-6"
      >
        <h3 className="text-xl">{characterState.name}</h3>
        <strong>{characterState.race}</strong>{' '}
        <strong>{characterState.characterClass}</strong>
        <h5 className={styles.abilityHeader}>Defense</h5>
        <div className="space-y-1 mb-3">
          <div>
            <strong>HP</strong> {characterState.defense.hp.value}
          </div>
          <div className="flex justify-between">
            <div className="w-1/3">
              <strong>AC:</strong> {characterState.defense.ac.value}
            </div>
            <div className="w-1/3">
              <strong>TAC:</strong> {characterState.defense.tac.value}
            </div>
            <div className="w-1/3">
              <strong>FFAC:</strong> {characterState.defense.ffac.value}
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="w-1/3">
              <strong>Ref:</strong>{' '}
              {characterState.defense.reflex.value > 0 ? '+' : ''}
              {characterState.defense.reflex.value}
            </div>
            <div className="w-1/3">
              <strong>Fort:</strong>{' '}
              {characterState.defense.fortitude.value > 0 ? '+' : ''}
              {characterState.defense.fortitude.value}
            </div>
            <div className="w-1/3">
              <strong>Will:</strong>{' '}
              {characterState.defense.will.value > 0 ? '+' : ''}
              {characterState.defense.will.value}
            </div>
          </div>
        </div>
        <h5 className={styles.abilityHeader}>Offense</h5>
        <div className="mb-3 space-y-1">
          <div>
            <b>Speed</b> {characterState.offense.speed.value}
          </div>
          <div>
            <b>Melee</b> {characterState.offense.melee.value > 0 ? '+' : ''}
            {characterState.offense.melee.value}
          </div>

          <div>
            <b>Ranged</b> {characterState.offense.ranged.value > 0 ? '+' : ''}
            {characterState.offense.ranged.value}
          </div>
        </div>
        <h5 className={styles.abilityHeader}>Abilities</h5>
        <div className={clsx(styles.previewAbilities)}>
          {previewAbilities.map(([label, abilityValue]) => {
            return (
              <AbilityPreview
                label={label}
                ability={abilityValue}
                key={label}
              />
            );
          })}
        </div>
        <h5 className={styles.abilityHeader}>Racial traits</h5>
        <div className={clsx(styles.previewAbilities)}>
          {previewRacialTraits?.map(([label, desc]) => {
            return <p key={label}>{label}, </p>;
          })}
        </div>
        <h5 className={styles.abilityHeader}>Class Traits</h5>
        <div className={clsx(styles.previewAbilities)}>
          {previewClassTraits?.map(([label, desc]) => {
            return <p key={label}>{label}, </p>;
          })}
        </div>
        <h5 className={styles.abilityHeader}>Feats</h5>
        <div className={clsx(styles.previewAbilities)}>
          {previewFeats?.map((previewFeat) => {
            return <p key={previewFeat}>{previewFeat}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
