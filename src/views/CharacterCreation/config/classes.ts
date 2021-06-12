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
    label: 'BonusFeat',
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
};

export type ClassTraits = {
  bonusStats: {
    defense: {
      hp?: number;
      fortitude?: number;
      melee?: number;
      ranged?: number;
      reflex?: number;
      will?: number;
    };
  };
  bonusFeats: number;
  classTraits: {
    label: string;
    description: string;
  }[];
};

type Classes = Record<Lowercase<CharacterClass>, ClassTraits>;

export const classes: Classes = {
  fighter: {
    bonusStats: {
      defense: {
        hp: 4,
        fortitude: 2,
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
  },
  rogue: {
    bonusStats: {
      defense: {
        hp: 2,
        reflex: 2,
      },
    },
    bonusFeats: 0,
    classTraits: [
      CLASS_TRAITS.LIGHT_ARMOR_PROFICIENCY,
      CLASS_TRAITS.SNEAK_ATTACK,
      CLASS_TRAITS.TRAP_FINDING,
    ],
  },
  paladin: {
    bonusStats: {
      defense: {
        hp: 4,
        fortitude: 2,
        will: 2,
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
  },
  cleric: {
    bonusStats: {
      defense: {
        hp: 2,
        fortitude: 2,
        will: 2,
      },
    },
    bonusFeats: 0,
    classTraits: [],
  },
  sorcerer: {
    bonusStats: {
      defense: {
        hp: 0,
        reflex: 2,
        will: 2,
      },
    },
    bonusFeats: 0,
    classTraits: [],
  },
  wizard: {
    bonusStats: {
      defense: {
        hp: 0,
        will: 2,
      },
    },
    bonusFeats: 0,
    classTraits: [],
  },
};
