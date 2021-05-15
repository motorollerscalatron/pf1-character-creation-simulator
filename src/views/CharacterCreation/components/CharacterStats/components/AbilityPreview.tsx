import * as React from 'react';
import { AbilityValue } from '../../../characterCreation.types';
import styles from './AbilityPreview.module.css';

export interface IAbilityPreviewProps {
  label: string;
  ability: AbilityValue;
}

export function AbilityPreview(props: IAbilityPreviewProps) {
  const { label, ability } = props;
  const { value, mod } = ability;
  return (
    <div className={styles.previewAbility}>
      <strong>{label}:</strong> {value} ({mod})
    </div>
  );
}
