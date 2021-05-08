import React from 'react';
import { ICharacterGenerationState } from '../../characterCreation.types';
import styles from './CharacterStats.module.css';
import { calculateHealthPoints } from './helpers/abilities';
import clsx from 'clsx';
interface ICharacterStatsProps {
  characterState: ICharacterGenerationState;
}

/*

HP = 6 + Math.floor((abilities.constitution / 2))

*/

export default function CharacterStats(props: ICharacterStatsProps) {
  const { characterState } = props;
  const { abilities } = characterState;
  const {
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
  } = abilities;

  return (
    <div className="preview-column shadow-md p-6 text-left">
      <div
        id="character-preview"
        className="text-sm font-sans leading-tight .leading-6"
      >
        <h3 className="text-xl">{characterState.name}</h3>
        <strong>{characterState.race}</strong>
        <h5 className={styles.abilityHeader}>Defense</h5>
        <div className="space-y-1 mb-3">
          <div>
            <strong>HP</strong>{' '}
            {calculateHealthPoints(characterState.abilities.constitution)}
          </div>
          <div className="flex justify-between">
            <div className="w-1/3">
              <strong>AC:</strong> 10
            </div>
            <div className="w-1/3">
              <strong>TAC:</strong> 10
            </div>
            <div className="w-1/3">
              <strong>FFAC:</strong> 10
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="w-1/3">
              <strong>Ref:</strong> 0
            </div>
            <div className="w-1/3">
              <strong>Fort:</strong> 0
            </div>
            <div className="w-1/3">
              <strong>Will:</strong> 0
            </div>
          </div>
        </div>
        <h5 className={styles.abilityHeader}>Offense</h5>
        <div className="mb-3 space-y-1">
          <div>
            <b>Speed</b> 30
          </div>
          <div>
            <b>Melee</b> +0
          </div>

          <div>
            <b>Ranged</b> +0
          </div>
        </div>
        <h5 className={styles.abilityHeader}>Abilities</h5>
        <div className={clsx(styles.previewAbilities)}>
          <div className={styles.previewAbility}>
            <strong>Str:</strong> {strength} (0)
          </div>
          <div className={styles.previewAbility}>
            <strong>Int:</strong> {intelligence} (0)
          </div>
          <div className={styles.previewAbility}>
            <strong>Dex:</strong> {dexterity} (0)
          </div>
          <div className={styles.previewAbility}>
            <strong>Wis:</strong> {wisdom} (0)
          </div>
          <div className={styles.previewAbility}>
            <strong>Con:</strong> {constitution} (0)
          </div>
          <div className={styles.previewAbility}>
            <strong>Cha:</strong> {charisma} (0)
          </div>
        </div>
        <h5 className={styles.abilityHeader}>Feats</h5>
      </div>
    </div>
  );
}
