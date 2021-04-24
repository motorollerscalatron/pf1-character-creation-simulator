import React from 'react';
import styles from './characterCreationSteps.module.css';

const characterCreationStepsConfig = [
  'Name',
  'Ability',
  'Race',
  'Class',
  'Skills',
  'Feats',
  'Equipment',
  'Details',
];

console.log({ styles });

interface ICharacterCreationStepsProps {
  currentStep: number;
}

const activeStyle = 'bg-red-800 text-red-50';
const inactiveStyle = 'bg-gray-500 text-gray-100';

function CharacterCreationSteps(props: ICharacterCreationStepsProps) {
  return (
    <div className={styles.root}>
      <div className="relative flex items-center justify-center space-x-12">
        <div className="h-1 bg-gray-500 absolute left-0 right-0 z-[-1] transform -translate-y-4"></div>
        {characterCreationStepsConfig.map((label, idx) => {
          const isActive = idx + 1 === props.currentStep;
          return (
            <div
              key={idx}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <div
                className={`flex items-center justify-center rounded-full w-8 h-8 ${
                  isActive ? activeStyle : inactiveStyle
                }`}
              >
                {idx + 1}
              </div>
              <div className={isActive ? 'text-red-900' : 'text-gray-900'}>
                {label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterCreationSteps;
