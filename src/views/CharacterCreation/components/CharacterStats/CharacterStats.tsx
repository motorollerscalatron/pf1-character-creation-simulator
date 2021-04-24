import React from 'react';
import { ICharacterGenerationState } from '../../characterCreation.types';
import { calculateHealthPoints } from './helpers/abilities';
interface ICharacterStatsProps {
  characterState: ICharacterGenerationState;
}

/*

HP = 6 + Math.floor((abilities.constitution / 2))

*/

export default function CharacterStats(props: ICharacterStatsProps) {
  const { characterState } = props;

  return (
    <div id="character-preview" className="content box-shadow">
      <h3 className="ntm">{characterState.class}</h3>
      <h5>Defense</h5>
      <div>
        <strong>HP</strong>
        {calculateHealthPoints(characterState.abilities.constitution)}
      </div>
      <div className="flex justify-between">
        <div>
          <strong>AC:</strong>
          10
        </div>
        <div>
          <strong>TAC:</strong>10
        </div>
        <div>
          <strong>FFAC:</strong> 10
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <strong>Ref:</strong> 0
        </div>
        <div>
          <strong>Fort:</strong> 0
        </div>
        <div>
          <strong>Will:</strong> 0
        </div>
      </div>
      <h5>Offense</h5>
      <b>Speed</b> 30
      <br />
      <b>Melee</b> +0
      <br />
      <b>Ranged</b> +0
      <br />
      <h5>Abilities</h5>
      <div className="preview__abilities hidden md:block">
        <div className="preview__ability">
          <strong>Str:</strong> 10 (0)
        </div>
        <div className="preview__ability">
          <strong>Int:</strong> 10 (0)
        </div>
        <div className="preview__ability">
          <strong>Dex:</strong> 10 (0)
        </div>
        <div className="preview__ability">
          <strong>Wis:</strong> 10 (0)
        </div>
        <div className="preview__ability">
          <strong>Con:</strong> 10 (0)
        </div>
        <div className="preview__ability">
          <strong>Cha:</strong> 10 (0)
        </div>
      </div>
      <h5>Feats</h5>
    </div>
  );
}
