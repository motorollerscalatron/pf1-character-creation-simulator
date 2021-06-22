import type { CharacterClass } from '../characterCreation.types';

const CLASS_TRAITS = {
  HEAVY_ARMOR_PROFICIENCY: {
    label: 'Heavy Armor Proficiency',
    description: 'Ability to wear light, medium, or heavy armor.',
  },
  LIGHT_ARMOR_PROFICIENCY: {
    label: 'Light Armor Proficiency',
    description: 'Ability to wear light, medium, or heavy armor.',
  },
  SHIELD_PROFICIENCY: {
    label: 'Shield Proficiency',
    description: 'Ability to use all sheilds (including the tower sheild',
  },
  SNEAK_ATTACK: {
    label: 'Sneak Attack',
    description:
      'Inflict 1d6 extra damage anytime your target would be denied a Dexterity bonus to AC, or when you flank your target',
  },
  TRAP_FINDING: {
    label: 'Trap Finding',
    description:
      '+1 to Perception checks made to locate traps and +1 to Disable Device checks. You can use Disable Device to disarm magic traps.',
  },
  BONUS_FEAT: {
    label: 'Bonus Feat',
    description: 'At 1st level a fighter gains a bonus combat feat',
  },
  AURA_OF_GOOD: {
    label: 'Aura of Good',
    description: 'At level one, a paladin has a faint aura of good.',
  },
  DETECT_EVIL: {
    label: 'Detect Evil',
    description:
      'As a move action, can determine if a creature or object is evil',
  },
  SMITE_EVIL: {
    label: 'Smite Evil',
    description: 'Gain a combat bonus against one evil creature per day',
  },
  AURA: {
    label: 'Aura',
    description:
      "You have a powerful aura corresponding to your deity's alignment",
  },
  DOMAIN: {
    label: 'Domain',
    description: '',
  },
  ORISONS: {
    label: 'Orisons',
    description:
      'You can prepare 3 orisons each day that you can cast any number of times that day.',
  },
  SPELLCASTING: {
    label: 'SpellCasting',
    description: 'You are able to cast level one cleric spells.',
  },
  CHANNEL_ENERGY: {
    label: 'Channel Energy',
    description:
      "You can channel divine energy which affects the creatures within 30' of you.",
  },
  ESCHEW_MATERIALS: {
    label: 'Eschew Materials',
    description:
      'You can cast any spell with a material component costing 1 gp or less without needing that component.',
  },
  BLOODLINE_POWER: {
    label: 'Bloodline Power',
    description: '',
  },
  CANTRIPS: {
    label: 'Cantrips',
    description: '',
  },
  WIZARD_SCHOOL: {
    label: '',
    description: '',
  },
  SCRIBE_SCROLL: {
    label: 'Scribe Scroll',
    description: 'Can write a scroll of a known cantrip or spell',
  },
  ARCANE_BOND: {
    label: 'Arcane Bond',
    description: '',
  },
};

type SkillValue = {
  label: string;
  isClassSkill: boolean;
  abilityType: 'Int' | 'Cha' | 'Str' | 'Dex' | 'Wis';
  trained: boolean;
  total: number;
};

type Skill =
  | 'ACROBATICS'
  | 'APPRAISE'
  | 'BLUFF'
  | 'CLIMB'
  | 'CRAFT'
  | 'DIPLOMACY'
  | 'DISABLE_DEVICE'
  | 'DISGUISE'
  | 'KNOWLEDGE_DUNGEONEERING'
  | 'KNOWLEDGE_ENGINEERING'
  | 'ESCAPE_ARTIST'
  | 'FLY'
  | 'HANDLE_ANIMAL'
  | 'HEAL'
  | 'INTIMIDATE'
  | 'KNOWLEDGE_ARCANA'
  | 'KNOWLEDGE_HISTORY'
  | 'KNOWLEDGE_LOCAL'
  | 'KNOWLEDGE_NOBILITY'
  | 'KNOWLEDGE_RELIGION'
  | 'KNOWLEDGE_PLANES'
  | 'LINGUISTICS'
  | 'PERCEPTION'
  | 'PERFORM'
  | 'PROFESSION'
  | 'RIDE'
  | 'SENSE_MOTIVE'
  | 'SLEIGHT_OF_HAND'
  | 'SPELLCRAFT'
  | 'STEALTH'
  | 'SURVIVAL'
  | 'SWIM'
  | 'USE_MAGIC_DEVICE';

type ClassSkills = Record<Skill, SkillValue>;

export const CLASS_SKILLS: ClassSkills = {
  ACROBATICS: {
    label: 'Acrobatics',
    isClassSkill: true,
    abilityType: 'Dex',
    trained: false,
    total: 0,
  },
  APPRAISE: {
    label: 'Appraise',
    isClassSkill: true,
    abilityType: 'Int',
    trained: false,
    total: 0,
  },
  BLUFF: {
    label: 'Bluff',
    isClassSkill: true,
    abilityType: 'Cha',
    trained: false,
    total: 0,
  },
  CLIMB: {
    label: 'Climb',
    isClassSkill: true,
    abilityType: 'Str',
    trained: false,
    total: 0,
  },
  CRAFT: {
    label: 'Craft',
    isClassSkill: true,
    abilityType: 'Int',
    trained: false,
    total: 200,
  },
  DIPLOMACY: {
    label: 'Diplomacy',
    isClassSkill: true,
    abilityType: 'Cha',
    trained: false,
    total: 200,
  },
  DISABLE_DEVICE: {
    label: 'Disable Device',
    isClassSkill: true,
    abilityType: 'Dex',
    trained: false,
    total: 200,
  },
  DISGUISE: {
    label: 'Disguise',
    isClassSkill: true,
    abilityType: 'Cha',
    trained: false,
    total: 200,
  },
  KNOWLEDGE_DUNGEONEERING: {
    label: 'Knowledge (dungeoneering)',
    isClassSkill: true,
    abilityType: 'Int',
    trained: false,
    total: 0,
  },
  KNOWLEDGE_ENGINEERING: {
    label: 'Knowledge (engineering)',
    isClassSkill: true,
    abilityType: 'Int',
    trained: false,
    total: 0,
  },
  ESCAPE_ARTIST: {
    label: 'Escape Artist',
    isClassSkill: true,
    abilityType: 'Dex',
    trained: false,
    total: 0,
  },
  FLY: {
    label: 'Escape Artist',
    isClassSkill: true,
    abilityType: 'Dex',
    trained: false,
    total: 0,
  },
  HANDLE_ANIMAL: {
    label: 'Handle Animal',
    isClassSkill: true,
    abilityType: 'Cha',
    trained: false,
    total: 0,
  },
  HEAL: {
    label: 'Heal',
    isClassSkill: true,
    abilityType: 'Wis',
    trained: false,
    total: 0,
  },
  INTIMIDATE: {
    label: 'Intimidate',
    isClassSkill: true,
    abilityType: 'Cha',
    trained: false,
    total: 0,
  },
  KNOWLEDGE_ARCANA: {
    label: 'Knowledge (arcana)',
    isClassSkill: true,
    abilityType: 'Int',
    trained: false,
    total: 0,
  },
  KNOWLEDGE_HISTORY: {
    label: 'Knowledge (history)',
    isClassSkill: true,
    abilityType: 'Int',
    trained: false,
    total: 0,
  },
  KNOWLEDGE_LOCAL: {
    label: 'Knowledge (local)',
    isClassSkill: true,
    abilityType: 'Int',
    trained: false,
    total: 0,
  },
  KNOWLEDGE_NOBILITY: {
    label: 'Knowledge (nobility)',
    isClassSkill: true,
    abilityType: 'Int',
    trained: false,
    total: 0,
  },
  KNOWLEDGE_PLANES: {
    label: 'Knowledge (planes)',
    isClassSkill: true,
    abilityType: 'Int',
    trained: false,
    total: 0,
  },
  KNOWLEDGE_RELIGION: {
    label: 'Knowledge (religion)',
    isClassSkill: true,
    abilityType: 'Int',
    trained: false,
    total: 0,
  },
  LINGUISTICS: {
    label: 'Linguistics',
    isClassSkill: true,
    abilityType: 'Int',
    trained: false,
    total: 0,
  },
  SLEIGHT_OF_HAND: {
    label: 'Sleight of Hand',
    isClassSkill: true,
    abilityType: 'Dex',
    trained: false,
    total: 0,
  },
  PROFESSION: {
    label: 'Profession',
    isClassSkill: true,
    abilityType: 'Wis',
    trained: false,
    total: 0,
  },
  PERCEPTION: {
    label: 'Perception',
    isClassSkill: true,
    abilityType: 'Wis',
    trained: false,
    total: 0,
  },
  PERFORM: {
    label: 'Perform',
    isClassSkill: true,
    abilityType: 'Cha',
    trained: false,
    total: 0,
  },
  SENSE_MOTIVE: {
    label: 'Sense Motive',
    isClassSkill: true,
    abilityType: 'Wis',
    trained: false,
    total: 0,
  },
  RIDE: {
    label: 'Ride',
    isClassSkill: true,
    abilityType: 'Dex',
    trained: false,
    total: 0,
  },
  SPELLCRAFT: {
    label: 'Spellcraft',
    isClassSkill: true,
    abilityType: 'Int',
    trained: false,
    total: 0,
  },
  STEALTH: {
    label: 'Stealth',
    isClassSkill: true,
    abilityType: 'Dex',
    trained: false,
    total: 0,
  },
  SURVIVAL: {
    label: 'Survival',
    isClassSkill: true,
    abilityType: 'Wis',
    trained: false,
    total: 0,
  },
  SWIM: {
    label: 'Swim',
    isClassSkill: true,
    abilityType: 'Str',
    trained: false,
    total: 0,
  },
  USE_MAGIC_DEVICE: {
    label: 'Use Magic Device',
    isClassSkill: true,
    abilityType: 'Cha',
    trained: false,
    total: 0,
  },
};

type Deity =
  | 'Torag'
  | 'Srenrae'
  | 'Desna'
  | 'Pharasma'
  | 'Calistria'
  | 'Asmodeus';

export type ClassTraits = {
  bonusStats: {
    defense: {
      hp?: number;
      fortitude?: number;
      reflex?: number;
      will?: number;
    };
    offense: {
      melee?: number;
      ranged?: number;
    };
  };
  bonusFeats: number;
  classTraits: {
    label: string;
    description: string;
  }[];
  skillPoints: number;
  classSkills: SkillValue[];
  deity?: Deity;
};

type Classes = Record<Lowercase<CharacterClass>, ClassTraits>;

export const classes: Classes = {
  fighter: {
    bonusStats: {
      defense: {
        hp: 4,
        fortitude: 2,
      },
      offense: {
        melee: 1,
        ranged: 1,
      },
    },
    bonusFeats: 1,
    classTraits: [
      CLASS_TRAITS.HEAVY_ARMOR_PROFICIENCY,
      CLASS_TRAITS.SHIELD_PROFICIENCY,
      CLASS_TRAITS.BONUS_FEAT,
    ],
    skillPoints: 2,
    classSkills: [
      CLASS_SKILLS.CLIMB,
      CLASS_SKILLS.CRAFT,
      CLASS_SKILLS.HANDLE_ANIMAL,
      CLASS_SKILLS.INTIMIDATE,
      CLASS_SKILLS.KNOWLEDGE_DUNGEONEERING,
      CLASS_SKILLS.KNOWLEDGE_ENGINEERING,
      CLASS_SKILLS.PROFESSION,
      CLASS_SKILLS.RIDE,
      CLASS_SKILLS.SURVIVAL,
      CLASS_SKILLS.SWIM,
    ],
  },
  rogue: {
    bonusStats: {
      defense: {
        hp: 2,
        reflex: 2,
      },
      offense: {},
    },
    bonusFeats: 0,
    classTraits: [
      CLASS_TRAITS.LIGHT_ARMOR_PROFICIENCY,
      CLASS_TRAITS.SNEAK_ATTACK,
      CLASS_TRAITS.TRAP_FINDING,
    ],
    skillPoints: 8,
    classSkills: [
      CLASS_SKILLS.ACROBATICS,
      CLASS_SKILLS.BLUFF,
      CLASS_SKILLS.CLIMB,
      CLASS_SKILLS.DIPLOMACY,
      CLASS_SKILLS.DISABLE_DEVICE,
      CLASS_SKILLS.DISGUISE,
      CLASS_SKILLS.ESCAPE_ARTIST,
      CLASS_SKILLS.INTIMIDATE,
      CLASS_SKILLS.KNOWLEDGE_DUNGEONEERING,
      CLASS_SKILLS.KNOWLEDGE_LOCAL,
      CLASS_SKILLS.LINGUISTICS,
      CLASS_SKILLS.PERCEPTION,
      CLASS_SKILLS.PERFORM,
      CLASS_SKILLS.PROFESSION,
      CLASS_SKILLS.SENSE_MOTIVE,
      CLASS_SKILLS.SLEIGHT_OF_HAND,
      CLASS_SKILLS.STEALTH,
      CLASS_SKILLS.SWIM,
      CLASS_SKILLS.USE_MAGIC_DEVICE,
    ],
  },
  paladin: {
    bonusStats: {
      defense: {
        hp: 4,
        fortitude: 2,
        will: 2,
      },
      offense: {
        melee: 1,
        ranged: 1,
      },
    },
    bonusFeats: 0,
    classTraits: [
      CLASS_TRAITS.HEAVY_ARMOR_PROFICIENCY,
      CLASS_TRAITS.SHIELD_PROFICIENCY,
      CLASS_TRAITS.AURA_OF_GOOD,
      CLASS_TRAITS.DETECT_EVIL,
      CLASS_TRAITS.SMITE_EVIL,
    ],
    skillPoints: 2,
    classSkills: [
      CLASS_SKILLS.CRAFT,
      CLASS_SKILLS.DIPLOMACY,
      CLASS_SKILLS.HANDLE_ANIMAL,
      CLASS_SKILLS.HEAL,
      CLASS_SKILLS.KNOWLEDGE_NOBILITY,
      CLASS_SKILLS.KNOWLEDGE_RELIGION,
      CLASS_SKILLS.PROFESSION,
      CLASS_SKILLS.RIDE,
      CLASS_SKILLS.SENSE_MOTIVE,
      CLASS_SKILLS.SPELLCRAFT,
    ],
  },
  cleric: {
    bonusStats: {
      defense: {
        hp: 2,
        fortitude: 2,
        will: 2,
      },
      offense: {},
    },
    bonusFeats: 0,
    classTraits: [
      CLASS_TRAITS.AURA,
      CLASS_TRAITS.DOMAIN,
      CLASS_TRAITS.ORISONS,
      CLASS_TRAITS.SPELLCASTING,
      CLASS_TRAITS.CHANNEL_ENERGY,
    ],
    skillPoints: 2,
    classSkills: [
      CLASS_SKILLS.APPRAISE,
      CLASS_SKILLS.CRAFT,
      CLASS_SKILLS.DIPLOMACY,
      CLASS_SKILLS.HEAL,
      CLASS_SKILLS.INTIMIDATE,
      CLASS_SKILLS.KNOWLEDGE_ARCANA,
      CLASS_SKILLS.KNOWLEDGE_HISTORY,
      CLASS_SKILLS.KNOWLEDGE_NOBILITY,
      CLASS_SKILLS.KNOWLEDGE_PLANES,
      CLASS_SKILLS.KNOWLEDGE_RELIGION,
      CLASS_SKILLS.LINGUISTICS,
      CLASS_SKILLS.PROFESSION,
      CLASS_SKILLS.SENSE_MOTIVE,
    ],
  },
  sorcerer: {
    bonusStats: {
      defense: {
        hp: 0,
        reflex: 2,
        will: 2,
      },
      offense: {},
    },
    bonusFeats: 0,
    classTraits: [
      CLASS_TRAITS.ESCHEW_MATERIALS,
      CLASS_TRAITS.BLOODLINE_POWER,
      CLASS_TRAITS.CANTRIPS,
      CLASS_TRAITS.SPELLCASTING,
    ],
    skillPoints: 2,
    classSkills: [
      CLASS_SKILLS.APPRAISE,
      CLASS_SKILLS.BLUFF,
      CLASS_SKILLS.CRAFT,
      CLASS_SKILLS.FLY,
      CLASS_SKILLS.INTIMIDATE,
      CLASS_SKILLS.KNOWLEDGE_ARCANA,
      CLASS_SKILLS.PROFESSION,
      CLASS_SKILLS.SPELLCRAFT,
      CLASS_SKILLS.USE_MAGIC_DEVICE,
    ],
  },
  wizard: {
    bonusStats: {
      defense: {
        hp: 0,
        will: 2,
      },
      offense: {},
    },
    bonusFeats: 0,
    classTraits: [
      CLASS_TRAITS.WIZARD_SCHOOL,
      CLASS_TRAITS.CANTRIPS,
      CLASS_TRAITS.SPELLCASTING,
      CLASS_TRAITS.SCRIBE_SCROLL,
    ],
    skillPoints: 2,
    classSkills: [
      CLASS_SKILLS.APPRAISE,
      CLASS_SKILLS.CRAFT,
      CLASS_SKILLS.DIPLOMACY,
      CLASS_SKILLS.HEAL,
      CLASS_SKILLS.INTIMIDATE,
      CLASS_SKILLS.KNOWLEDGE_ARCANA,
      CLASS_SKILLS.KNOWLEDGE_HISTORY,
      CLASS_SKILLS.KNOWLEDGE_NOBILITY,
      CLASS_SKILLS.KNOWLEDGE_PLANES,
      CLASS_SKILLS.KNOWLEDGE_RELIGION,
      CLASS_SKILLS.LINGUISTICS,
      CLASS_SKILLS.PROFESSION,
      CLASS_SKILLS.SENSE_MOTIVE,
    ],
  },
};
