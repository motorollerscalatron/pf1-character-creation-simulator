import * as React from 'react';

export interface ICharismaDescriptionProps {
  className?: string;
}

export default function ConstitutionDescription(
  props: ICharismaDescriptionProps
) {
  return (
    <div className="ability-description" {...props}>
      <h2>Constitution</h2>{' '}
      <p>
        Constitution represents your character's health and stamina. A
        Constitution bonus increases a character's hit points, so the ability is
        important for all characters.{' '}
      </p>{' '}
      <p>You apply your character's Constitution modifier to:</p>{' '}
      <ul>
        <li>The number of hitpoints gained at each level</li>{' '}
        <li>
          Fortitude saving throws (for resisting poison, disease, and similar
          threats)
        </li>
      </ul>
    </div>
  );
}
