import React, { useState } from 'react';
import { Ability } from '../../../../../characterCreation.types';
type AbilityKey = Lowercase<Ability>;
export interface IAbilitityControlBarProps {
  ability: Ability;
  value: number;
  updateAbility: (
    ability: AbilityKey,
    value: number,
    mod: number,
    costDifference: number
  ) => void;
}

/*
Score Mod Cost
7 -2 -4
8 -1 -2
9 -1 -1
10  0  0
11  0  1
12  +1  2
13  +1  3
14  +2  5
15  +2  7
16  +3  10
17  +3  13
18  +4  17

*/
type AbilityConfig = [number, number];
type AbilitiesValuesConfig = Record<string, AbilityConfig>;
const abilitiesValuesConfig: AbilitiesValuesConfig = {
  7: [-2, -4],
  8: [-1, -2],
  9: [-1, -1],
  10: [0, 0],
  11: [0, 1],
  12: [1, 2],
  13: [1, 3],
  14: [2, 5],
  15: [2, 7],
  16: [3, 10],
  17: [3, 13],
  18: [4, 17],
};

/*
For increment:
take the next cost and decrement the current cost from it

For decrement
take the current cost and add the previous cost to it

*/
export default function AbilitityControlBar(props: IAbilitityControlBarProps) {
  const { ability, value, updateAbility } = props;

  const [mod, cost] = abilitiesValuesConfig[value];

  const onDecrement = () => {
    const [mod, prevCost] = abilitiesValuesConfig[value - 1];
    const costDiff = prevCost - cost;
    console.log({ costDiff });
    updateAbility(
      ability.toLowerCase() as AbilityKey,
      value - 1,
      mod,
      costDiff
    );
  };

  const onIncrement = () => {
    const [mod, nextCost] = abilitiesValuesConfig[value + 1];
    const costDiff = nextCost - cost;
    updateAbility(
      ability.toLowerCase() as AbilityKey,
      value + 1,
      mod,
      costDiff
    );
  };

  return (
    <tr>
      <td>
        <h4>{ability}</h4>
      </td>
      <td>{value}</td>
      <td>{mod}</td>
      <td>{cost}</td>
      <td className="space-x-2">
        <button
          disabled={value === 7}
          className="px-4 py-2 bg-red-900 text-red-50 text-2xl"
          onClick={onDecrement}
        >
          -
        </button>
        <button
          disabled={value === 18}
          className="px-4 py-2 bg-red-900 text-red-50 text-2xl"
          onClick={onIncrement}
        >
          +
        </button>
      </td>
    </tr>
  );
}
