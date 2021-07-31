import {
  ICharacterGenerationState,
  UpdateCharacterState,
} from '@/views/CharacterCreation/characterCreation.types';

import * as React from 'react';
import {
  COMBAT_FEATS,
  SKILL_FEATS,
  FEATS,
  Feat,
  FeatValue,
} from '../../../config/feats';

export interface ICharacterFeatsProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

const getMaxAllowedPoints = (characterState: ICharacterGenerationState) => {
  let maxCombatPoints = 1;
  let maxSkillPoints = 1;

  if (
    characterState.characterClass === 'Fighter' ||
    characterState.race === 'Human'
  ) {
    maxCombatPoints++;
  }

  return {
    maxCombatPoints,
    maxSkillPoints,
  };
};

const calculateFeatsPointsSpend = (
  characterState: ICharacterGenerationState,
  maxCombatPoints: number,
  maxSkillPoints: number
) => {
  let combatPointsSpent = 0;
  let skillsPointsSpent = 0;

  let activeCombatFeatsNum = 0;
  let activeSkillsFeatsNum = 0;

  for (const item of Object.entries(characterState.characterFeats)) {
    const [feat, featValue] = item as [Feat, typeof item[1]];

    if (!featValue?.checked) continue;
    if (featValue.type === 'combat') {
      combatPointsSpent++;
    } else if (featValue.type === 'skill') {
      skillsPointsSpent++;
    }
  }

  return {
    combatPointsSpent,
    skillsPointsSpent,
    combatPointsLeft: maxCombatPoints - combatPointsSpent,
    skillsPointsLeft: maxSkillPoints - skillsPointsSpent,
  };
};

export default function CharacterFeats(props: ICharacterFeatsProps) {
  const { characterState, updateCharacterState } = props;
  const { maxCombatPoints, maxSkillPoints } =
    getMaxAllowedPoints(characterState);

  const { combatPointsLeft, skillsPointsLeft } = calculateFeatsPointsSpend(
    characterState,
    maxCombatPoints,
    maxSkillPoints
  );

  const onChangeFeats = (
    e: React.ChangeEvent<HTMLInputElement>,
    feat: Feat,
    featValue: FeatValue
  ) => {
    const isFeatChecked = e.target.checked;
    updateCharacterState((draft) => {
      draft.characterFeats[feat] = {
        ...featValue,
        checked: isFeatChecked,
      };
      // console.log('on update feat', characterState, isFeatChecked);
    });
  };
  console.log({ characterState });
  return (
    <div>
      <div>Character Feats</div>

      <div>
        <h3>Combat Feats</h3>
        <div>You can spend max {maxCombatPoints} points.</div>
        <div>
          {Object.entries(COMBAT_FEATS).map((combat_feat) => {
            const [feat, featValue] = combat_feat as [Feat, FeatValue];
            const { label, description, type } = featValue;
            return (
              <div key={feat}>
                <p>
                  <input
                    type="checkbox"
                    checked={!!characterState.characterFeats[feat]?.checked}
                    onChange={(e) => onChangeFeats(e, feat, featValue)}
                    disabled={
                      combatPointsLeft <= 0 &&
                      !characterState.characterFeats[feat]?.checked
                    }
                  />{' '}
                  {label} : {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3>Skill Feats</h3>
        <div>You can spend max {maxSkillPoints} points.</div>

        <div>
          {Object.entries(SKILL_FEATS).map((skill_feat) => {
            const [feat, featValue] = skill_feat as [Feat, FeatValue];
            const { label, description, type } = featValue;
            return (
              <div key={feat}>
                <p>
                  <input
                    type="checkbox"
                    checked={!!characterState.characterFeats[feat]?.checked}
                    onChange={(e) => onChangeFeats(e, feat, featValue)}
                    disabled={
                      skillsPointsLeft <= 0 &&
                      !characterState.characterFeats[feat]?.checked
                    }
                  />{' '}
                  {label}: {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
