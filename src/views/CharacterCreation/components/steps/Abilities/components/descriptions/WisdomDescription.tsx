import * as React from 'react';

export interface ICharismaDescriptionProps {
  className?: string;
}

export default function WisdomDescription(props: ICharismaDescriptionProps) {
  return (
    <div className="ability-description" {...props}>
      <h2>Wisdom</h2>{' '}
      <p>
        Wisdom describes a character's willpower, common sense, awareness, and
        intuition. Wisdom is the most important ability for divine spellcasters
        like Clerics and Druids. But any character that wants to have acute
        senses, should have a high score in Wisdom.
      </p>
      <p>You apply your character's Wisdom modifier to:</p>{' '}
      <ul>
        <li>
          Will saving throws (for negating the effects of compulsions, charms,
          and other spells)
        </li>{' '}
        <li>The difficulty to resist your divine spells</li>
        <li></li>
        <li>Heal, Perception, Profession, Sense Motive, and Survival checks</li>
      </ul>
    </div>
  );
}
