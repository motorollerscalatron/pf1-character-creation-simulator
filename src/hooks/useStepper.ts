import { useState } from 'react';

/*
  Should accept initialStep value and maxSteps value
  Have a state for current step
  Have a function that should increment the step, but not go beyond the maxSteps
  Have a function that should decrement the step, but not go below 1
  Have a function that should allow setting a new step
*/

export const useStepper = (initialStep: number = 1, maxSteps: number) => {
  const [step, _setStep] = useState(initialStep);
  const nextStep = () => {
    if (step < maxSteps) {
      _setStep(step + 1);
    }
  };
  const prevStep = () => {
    if (step > 1) {
      _setStep(step - 1);
    }
  };
  const setStep = (stepValue: number) => {
    if (stepValue < maxSteps || stepValue > 1) {
      _setStep(stepValue);
    } else {
      throw new Error(`The step value ${stepValue} is out of bound.`);
    }
  };
  return {
    step,
    nextStep,
    prevStep,
    setStep,
  };
};
