import type { Race } from '../characterCreation.types';

type Size = 'Small' | 'Medium';

const RACIAL_TRAITS = {
  BONUS_FEAT: {
    label: 'Bonus Feat',
    description: 'Select one additional feat at 1st level',
  },
  SKILLED: {
    label: 'Skilled',
    description: 'Gain one additional skill rank at each level',
  },
  ELVEN_IMMUNITIES: {
    label: 'Elven Immunities',
    description:
      'Immune to magic sleep effects and +2 bonus on saving throws against enchantments',
  },
  KEEN_SENSES: {
    label: 'Keen Senses',
    description: '+2 bonus on Perception checks',
  },
  ADAPTABILITY: {
    label: 'Adaptability',
    description: 'Gain Skill Focus as a bonus feat at 1st level',
  },
  LOW_LIGHT_VISION: {
    label: 'Low Light Vision',
    description: 'Can see twice as far as humans in conditions of dim light',
  },
  ELVEN_MAGIC: {
    label: 'Elven Magic',
    description:
      '+2 bonus on caster level checks made to overcome spell resistance. And +2 racial bonus on Spellcraft checks to identify the properties of magic items',
  },
  ELVEN_WEAPON_FAMILIARITY: {
    label: 'Elven Weapon Familiarity',
    description:
      'Proficiency with longbows, longswords, rapiers, and shortbows, and treat any weapon with a the word "elven" in its name as a martial weapon.',
  },
  INTIMIDATING: {
    label: 'Intimidating',
    description: '+2 bonus on Intimidate checks',
  },
  ORC_FEROCITY: {
    label: 'Orc Ferocity',
    description:
      'Once per day, when you are brought below 0 hit points but are not killed, you can fight on for 1 more round as if disabled. At the end of your next turn, unless brought to above 0 hit points, you immediately fall unconscious and begin dying.',
  },
  ORC_WEAPON_FAMILIARITY: {
    label: 'Orc Weapon Familiarity',
    description:
      'Proficiency with greataxes and falchions and treat any weapon with the word "orc" in its name as a martial weapon.',
  },
  DARK_VISION: {
    label: 'Dark Vision',
    description: 'Can see in the dark up to 60 feet',
  },
  DEFENSIVE_TRAINING: {
    label: 'Defensive Training',
    description: '+4 dodge bonus to AC against giants',
  },
  HARDY: {
    label: 'Hardy',
    description:
      '+2 bonus on saving throws against poison, spells, and spell-like abilities',
  },
  STABILITY: {
    label: 'Stability',
    description:
      '+4 racial bonus to Combat Maneuver Defense when resisting a bullrush or trip',
  },
  GREED: {
    label: 'Greed',
    description:
      '+2 racial bonus on Appraise checks made to determine the price of non-magical goods that contian precious metals or gemstones',
  },
  STONE_CUNNING: {
    label: 'Stonecunning',
    description: '+2 bonus on perception checks to notice unusual stonework',
  },
  HATRED: {
    label: 'Hatred',
    description: '+1 bonus on attack rolls against orcs and goblins',
  },
  DWARVEN_WEAPON_FAMILIARITY: {
    label: 'Dwarven Weapon Familiarity',
    description:
      'Proficiency with battleaxes, heavy picks, and warhammers, and treat any weapon with the word "dwarven" in its name as a martial weapon',
  },
  HALFLING_LUCK: {
    label: 'Halfling Luck',
    description: '+1 on all saving throws',
  },
  FEARLESS: {
    label: 'Fearless',
    description:
      '+2 on saving throws against fear (this stacks with Halfling Luck)',
  },
  SURE_FOOTED: {
    label: 'Sure-Footed',
    description: '+2 bonus on Acrobatics and Climb checks',
  },
  HALFLING_WEAPON_FAMILIARITY: {
    label: 'Halfling Weapon Familiarity',
    description:
      'Proficiency with slings and treat any weapon with the word "halfling" in its name as a martial weapon',
  },
};

export type RaceTraits = {
  standardTraits: {
    abilityScores: {
      description: string;
    };
    size: Size;
    speed: number;
    languages: string[];
  };
  racialTraits: {
    label: string;
    description: string;
  }[];
};

type Races = Record<Lowercase<Race>, RaceTraits>;

export const races: Races = {
  human: {
    standardTraits: {
      abilityScores: {
        description:
          'Humans gain a +2 bonus to one ability score of their choice.',
      },
      size: 'Medium',
      speed: 30,
      languages: ['common'],
    },
    racialTraits: [RACIAL_TRAITS.BONUS_FEAT, RACIAL_TRAITS.SKILLED],
  },
  'half-elf': {
    standardTraits: {
      abilityScores: {
        description:
          'Half-Elves gain a +2 bonus to one ability score of their choice.',
      },
      size: 'Medium',
      speed: 30,
      languages: ['common', 'elven'],
    },
    racialTraits: [
      RACIAL_TRAITS.ELVEN_IMMUNITIES,
      RACIAL_TRAITS.KEEN_SENSES,
      RACIAL_TRAITS.ADAPTABILITY,
      RACIAL_TRAITS.LOW_LIGHT_VISION,
    ],
  },
  elf: {
    standardTraits: {
      abilityScores: {
        description: '+2 Dexterity, +2 Intelligence, but -2 Constitution',
      },
      size: 'Medium',
      speed: 30,
      languages: ['common', 'elven'],
    },
    racialTraits: [
      RACIAL_TRAITS.ELVEN_IMMUNITIES,
      RACIAL_TRAITS.KEEN_SENSES,
      RACIAL_TRAITS.LOW_LIGHT_VISION,
      RACIAL_TRAITS.ELVEN_MAGIC,
      RACIAL_TRAITS.ELVEN_WEAPON_FAMILIARITY,
    ],
  },
  'half-orc': {
    standardTraits: {
      abilityScores: {
        description:
          'Half-Orcs gain a +2 bonus to one ability score of their choice.',
      },
      size: 'Medium',
      speed: 30,
      languages: ['common', 'orc'],
    },
    racialTraits: [
      RACIAL_TRAITS.INTIMIDATING,
      RACIAL_TRAITS.ORC_FEROCITY,
      RACIAL_TRAITS.ORC_WEAPON_FAMILIARITY,
      RACIAL_TRAITS.DARK_VISION,
    ],
  },
  dwarf: {
    standardTraits: {
      abilityScores: {
        description: '+2 Constitution, +2 Wisdom, but -2 Charisma',
      },
      size: 'Medium',
      speed: 20,
      languages: ['common', 'dwarven'],
    },
    racialTraits: [
      RACIAL_TRAITS.DEFENSIVE_TRAINING,
      RACIAL_TRAITS.HARDY,
      RACIAL_TRAITS.STABILITY,
      RACIAL_TRAITS.GREED,
      RACIAL_TRAITS.STONE_CUNNING,
      RACIAL_TRAITS.HATRED,
      RACIAL_TRAITS.DWARVEN_WEAPON_FAMILIARITY,
      RACIAL_TRAITS.DARK_VISION,
    ],
  },
  halfling: {
    standardTraits: {
      abilityScores: {
        description: '+2 Dexterity, +2 Charisma, but -2 Strength',
      },
      size: 'Small',
      speed: 20,
      languages: ['common', 'halfling'],
    },
    racialTraits: [
      RACIAL_TRAITS.HALFLING_LUCK,
      RACIAL_TRAITS.FEARLESS,
      RACIAL_TRAITS.KEEN_SENSES,
      RACIAL_TRAITS.SURE_FOOTED,
      RACIAL_TRAITS.HALFLING_WEAPON_FAMILIARITY,
    ],
  },
};
