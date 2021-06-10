import * as React from 'react';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
} from '../../../../../characterCreation.types';

export interface IWizardProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

export function Wizard(props: IWizardProps) {
  return (
    <div>
      <h2>Wizard</h2>
      <p>
        While universalist wizards might study to prepare themselves for any
        manner of danger, specialist wizards research schools of magic that make
        them exceptionally skilled within a specific focus. Yet no matter their
        specialty, all wizards are masters of the impossible and can aid their
        allies in overcoming any danger.
      </p>
    </div>
  );
}
