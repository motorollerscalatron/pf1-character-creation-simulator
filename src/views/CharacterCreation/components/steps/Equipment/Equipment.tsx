import * as React from 'react';
import {
  EQUIPMENT,
  EquipmentTypeClass,
  EquipmentValue,
} from '@/views/CharacterCreation/config/equipment';
import {
  CharacterClass,
  EquipmentType,
  ICharacterGenerationState,
  UpdateCharacterState,
} from '@/views/CharacterCreation/characterCreation.types';

import InputCard from '@/components/common/InputCard';

export interface ICharacterEquipmentProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

export default function CharacterRace(props: ICharacterEquipmentProps) {
  const { characterState, updateCharacterState } = props;

  const setEquipmentChoice = (
    checked: boolean,
    equipmentType: 'armor' | 'weapon' | 'shield',
    equipment: EquipmentValue
  ) => {
    console.log(equipment);
    updateCharacterState((draft) => {
      draft.equipment[equipmentType] = equipment;
    });
  };

  const totalGold = characterState.characterClassTraits?.wealth || 0;

  const totalSpent = React.useMemo(() => {
    return Object.values(characterState.equipment).reduce((acc, item) => {
      const price = item?.price || 0;
      return acc + price;
    }, 0);
  }, [characterState.equipment]);

  const goldLeft = totalGold - totalSpent;

  const characterClass = characterState!.characterClass;

  const checkIfGearIsSelected = (
    characterState: ICharacterGenerationState,
    id: string,
    gearType: EquipmentType
  ) => {
    const { characterClass, equipment } = characterState;
    return id === (characterClass && equipment?.[gearType]?.id);
  };

  return (
    <div>
      <h2>Equipment</h2>
      <div>
        <h3>Total gold: {totalGold}</h3>
        <h4>Gold left: {goldLeft}</h4>
        <p>
          {' '}
          (The current combination of equipments costs {totalSpent} as total.){' '}
        </p>
        <h3>Weapons</h3>
        <div className="grid grid-cols-3 gap-4 items-stretch">
          {Object.entries(EQUIPMENT)
            .filter((item) => {
              const [_, equipment] = item;
              return ['sword', 'dagger', 'wand', 'staff'].includes(
                equipment.type
              );
            })
            .map((item) => {
              const [id, equipment] = item;
              const isClassCompatibleWithEquipment =
                characterClass &&
                equipment.allowed_classes.includes(characterClass);
              return (
                <div key={id}>
                  {/* <input
                    type="radio"
                    name="characterEquipmentArmor"
                    id={id}
                    value={id}
                    disabled={!isClassCompatibleWithEquipment}
                    onChange={(e) => setEquipmentChoice(e, 'armor', equipment)}
                  />
                  <label htmlFor="{id}">
                    {' '}
                    {equipment.name} / {equipment.type} / {equipment.price} gp
                  </label> */}
                  <InputCard
                    className="h-full"
                    inputProps={{
                      type: 'radio',
                      name: 'characterEquipmentArmor',
                      id,
                      value: id,
                      disabled: !isClassCompatibleWithEquipment,
                    }}
                    checked={checkIfGearIsSelected(
                      characterState,
                      id,
                      'weapon'
                    )}
                    onSelect={(checked: boolean) =>
                      setEquipmentChoice(checked, 'weapon', equipment)
                    }
                    labelProps={{
                      htmlFor: id,
                    }}
                    label={`${equipment.name} / ${equipment.type} / ${equipment.price} gp`}
                  />
                </div>
              );
            })}
        </div>
        <h3>Armor</h3>
        <div className="grid grid-cols-3 gap-4 items-stretch">
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
              const isClassCompatibleWithEquipment =
                characterClass &&
                equipment.allowed_classes.includes(characterClass);
              return (
                <div key={id}>
                  {/* <input
                    type="radio"
                    name="characterEquipmentArmor"
                    id={id}
                    value={id}
                    disabled={!isClassCompatibleWithEquipment}
                    onChange={(e) => setEquipmentChoice(e, 'armor', equipment)}
                  />
                  <label htmlFor="{id}">
                    {' '}
                    {equipment.name} / {equipment.type} / {equipment.price} gp
                  </label> */}
                  <InputCard
                    className="h-full"
                    inputProps={{
                      type: 'radio',
                      name: 'characterEquipmentArmor',
                      id,
                      value: id,
                      disabled: !isClassCompatibleWithEquipment,
                    }}
                    checked={checkIfGearIsSelected(characterState, id, 'armor')}
                    onSelect={(checked: boolean) =>
                      setEquipmentChoice(checked, 'armor', equipment)
                    }
                    labelProps={{
                      htmlFor: id,
                    }}
                    label={`${equipment.name} / ${equipment.type} / ${equipment.price} gp`}
                  />
                </div>
              );
            })}
        </div>
        <h3>Shield</h3>
      </div>
    </div>
  );
}
