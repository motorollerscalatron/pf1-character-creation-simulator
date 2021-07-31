import * as React from 'react';
import {
  EQUIPMENT,
  EquipmentValue,
} from '@/views/CharacterCreation/config/equipment';
import {
  ICharacterGenerationState,
  UpdateCharacterState,
} from '@/views/CharacterCreation/characterCreation.types';

export interface ICharacterEquipmentProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

export default function CharacterRace(props: ICharacterEquipmentProps) {
  const { characterState, updateCharacterState } = props;

  const setEquipmentChoice = (
    e: React.ChangeEvent<HTMLInputElement>,
    equipmentType: 'armor' | 'weapon' | 'shield',
    equipment: EquipmentValue
  ) => {
    const { checked } = e.target;
    console.log(e, equipment);
    updateCharacterState((draft) => {
      draft.equipment[equipmentType] = equipment;
    });
  };

  const totalSpent = React.useMemo(() => {
    return Object.values(characterState.equipment).reduce((acc, item) => {
      const price = item?.price || 0;
      return acc + price;
    }, 0);
  }, [characterState.equipment]);

  return (
    <div>
      <h2>Equipment</h2>
      <div>
        <h3>Gold: {characterState.characterClassTraits?.wealth}</h3>
        <p>
          {' '}
          (The current combination of equipments costs {totalSpent} as total.){' '}
        </p>
        <h3>Weapons</h3>
        <h3>Armor</h3>
        <div>
          {Object.entries(EQUIPMENT)
            .filter((item) => {
              const [_, equipment] = item;
              return [
                'heavy-armor',
                'medium-armor',
                'light-armor',
                'robe',
              ].includes(equipment.type);
            })
            .map((item) => {
              const [id, equipment] = item;
              return (
                <div key={id}>
                  <input
                    type="radio"
                    name="characterEquipmentArmor"
                    id={id}
                    value={id}
                    onChange={(e) => setEquipmentChoice(e, 'armor', equipment)}
                  />
                  <label htmlFor="{id}">
                    {' '}
                    {equipment.name} / {equipment.type} / {equipment.price} gp
                  </label>
                </div>
              );
            })}
        </div>
        <h3>Shield</h3>
      </div>
    </div>
  );
}
