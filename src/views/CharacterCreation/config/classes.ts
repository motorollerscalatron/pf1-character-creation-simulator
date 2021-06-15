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
  },
};
