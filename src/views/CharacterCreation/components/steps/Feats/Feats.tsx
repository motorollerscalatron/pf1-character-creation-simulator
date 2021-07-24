import {
  ICharacterGenerationState,
  UpdateCharacterState,
} from '@/views/CharacterCreation/characterCreation.types';

import * as React from 'react';
import {
  COMBAT_FEATS,
  SKILL_FEATS,
  Feat,
  FeatValue,
} from '../../../config/feats';

export interface ICharacterFeatsProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

export default function CharacterFeats(props: ICharacterFeatsProps) {
  const { characterState, updateCharacterState } = props;

  const onChangeFeats = (
    e: React.ChangeEvent<HTMLInputElement>,
    feat: Feat
  ) => {
    const isFeatChecked = e.target.checked;
    updateCharacterState((draft) => {
      draft.characterFeats[feat] = isFeatChecked;
      // console.log('on update feat', characterState, isFeatChecked);
    });
  };
  console.log({ characterState });
  return (
    <div>
      <div>Character Feats</div>

      <div>
        <h3>Combat Feats</h3>
        <div>
          {Object.entries(COMBAT_FEATS).map((combat_feat) => {
            const [feat, featValue] = combat_feat as [Feat, FeatValue];
            const { label, description, type } = featValue;
            return (
              <div key={feat}>
                <p>
                  <input type="checkbox" /> {label} : {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3>Skill Feats</h3>
        <div>
          {Object.entries(SKILL_FEATS).map((skill_feat) => {
            const [feat, featValue] = skill_feat as [Feat, FeatValue];
            const { label, description, type } = featValue;
            return (
              <div key={feat}>
                <p>
                  <input
                    type="checkbox"
                    checked={characterState.characterFeats[feat]}
                    onChange={(e) => onChangeFeats(e, feat)}
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
