import * as React from 'react';
import {
  COMBAT_FEATS,
  SKILL_FEATS,
  Feat,
  FeatValue,
} from '../../../config/feats';

export interface ICharacterFeatsProps {}

export default function CharacterFeats(props: ICharacterFeatsProps) {
  return (
    <div>
      <div>Character Feats</div>

      <div>
        <h3>Combat Feats</h3>
        <div>
          {Object.entries(COMBAT_FEATS).map((combat_feat) => {
            const [feat, featValue] = combat_feat as [Feat, FeatValue];
            console.log(featValue);
            const { label, description, type } = featValue;
            return (
              <div key={feat}>
                <p>
                  <input type="checkbox" /> {label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3>Skill Feats</h3>
        <div></div>
      </div>
    </div>
  );
}
