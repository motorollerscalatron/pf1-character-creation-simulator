import * as React from 'react';
import {
  CLASS_SKILLS,
  Skill,
  SkillValue,
} from '@/views/CharacterCreation/config/classes';
import {
  AbilityLower,
  AbilityShortKey,
  ICharacterGenerationState,
  UpdateCharacterState,
  CharacterClass,
} from '@/views/CharacterCreation/characterCreation.types';
export interface ICharacterSkillsProps {
  characterState: ICharacterGenerationState;
  updateCharacterState: UpdateCharacterState;
}

type AbilityMap = Omit<Record<AbilityShortKey, AbilityLower>, 'Con'>;

const abilityMap: AbilityMap = {
  Cha: 'charisma',
  Str: 'strength',
  Int: 'intelligence',
  Wis: 'wisdom',
  Dex: 'dexterity',
};

export default function CharacterSkills(props: ICharacterSkillsProps) {
  const class_skills = Object.entries(CLASS_SKILLS) as [Skill, SkillValue][];
  const { characterState, updateCharacterState } = props;
  const { characterClassTraits } = characterState;
  const maxSkillPoints = characterState.characterClassTraits?.skillPoints || 0;

  const onChangeSkillTrained = (
    e: React.ChangeEvent<HTMLInputElement>,
    skill: Skill
  ) => {
    const nextTrainedValue = e.target.checked;
    updateCharacterState((draft) => {
      draft.characterTrainedSkills[skill] = nextTrainedValue;
    });
    // skill.trained = !skill.trained;
  };

  const numOfSelectedSkills = Object.entries(
    characterState.characterTrainedSkills
  ).filter((item) => {
    const [skill, isTrained] = item as [Skill, boolean];
    return isTrained;
  }).length;
  console.log('trained skills num', numOfSelectedSkills, 'max', maxSkillPoints);
  console.log('characterState in skills', characterState);
  return (
    <div>
      <div className="content">
        <h4>Select your skills</h4>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th className="text-left">Skill</th>
              <th>Class Skill</th>
              <th>Ability</th>
              <th>Mod</th>
              <th>Trained?</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {class_skills.map(([skill, skillValue], index) => {
              const { label, abilityType } = skillValue;
              const { abilities, bonusAbilityScore } = characterState;
              const abilityKey = abilityMap[abilityType];
              const { mod: defaultMod } = abilities[abilityKey];

              /*
                Find an object where ability == abilityKey
                Then, if found, get the mod
                Otherwise, default to 0
              */
              const bonusAbilityMod =
                bonusAbilityScore.find(
                  (bonusAbility) => bonusAbility.ability == abilityKey
                )?.mod || 0;
              const modSum = defaultMod + bonusAbilityMod;
              const isClassSkill = characterClassTraits?.classSkills.find(
                (classSkill) =>
                  classSkill.isClassSkill && classSkill.label === label
              );

              const classSkillTotalBonus = isClassSkill ? 3 : 0;
              const trained = characterState.characterTrainedSkills[skill]
                ? 1 + classSkillTotalBonus
                : 0;
              const total = modSum + trained;

              return (
                <tr key={index}>
                  <td>{label}</td>
                  <td>{isClassSkill ? 'Class Skill' : ''}</td>
                  <td>{abilityType}</td>
                  <td>{Math.sign(modSum) > 0 ? `+${modSum}` : modSum}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={characterState.characterTrainedSkills[skill]}
                      disabled={
                        !characterState.characterTrainedSkills[skill] &&
                        numOfSelectedSkills >= maxSkillPoints
                      }
                      onChange={(e) => onChangeSkillTrained(e, skill)}
                    ></input>
                  </td>
                  <td>{total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
