import * as React from 'react';

export interface ICharismaDescriptionProps {
  className?: string;
}

export default function IntelligenceDescription(
  props: ICharismaDescriptionProps
) {
  return (
    <div className="ability-description" {...props}>
      <h2>Intelligence</h2>{' '}
      <p>
        Intelligence determines how well your character learns and reasons. This
        ability is essential for wizards because it affects their spellcasting
        ability in many ways.{' '}
      </p>{' '}
      <p>You apply your character's Intelligence modifier to:</p>{' '}
      <ul>
        <li>The number of languages your character knows</li>{' '}
        <li>The number of skill points gained each level</li>{' '}
        <li>The difficulty to resist your wizard spells</li>
        <li></li>
        <li>Appraise, Craft, Knowledge, Linguistics, and Spellcraft checks</li>
      </ul>
    </div>
  );
}
