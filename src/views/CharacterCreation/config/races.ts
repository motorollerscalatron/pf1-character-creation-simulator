import type { Race } from '../characterCreation.types';

type Size = 'Small' | 'Medium';

export type RaceTraits = {
  standardTraits: {
    abilityScores: {
      description: string;
    };
    size: Size;
    speed: number;
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
    },
    racialTraits: [
      //      CLASS_TRAITS.HEAVY_ARMOR_PROFICIENCY,
    ],
  },
  'half-elf': {
    standardTraits: {
      abilityScores: {
        description:
          'Half-Elves gain a +2 bonus to one ability score of their choice.',
      },
      size: 'Medium',
      speed: 30,
    },
    racialTraits: [],
  },
  elf: {
    standardTraits: {
      abilityScores: {
        description: '+2 Dexterity, +2 Intelligence, but -2 Constitution',
      },
      size: 'Medium',
      speed: 30,
    },
    racialTraits: [],
  },
  'half-orc': {
    standardTraits: {
      abilityScores: {
        description:
          'Half-Orcs gain a +2 bonus to one ability score of their choice.',
      },
      size: 'Medium',
      speed: 30,
    },
    racialTraits: [],
  },
  dwarf: {
    standardTraits: {
      abilityScores: {
        description: '+2 Constitution, +2 Wisdom, but -2 Charisma',
      },
      size: 'Medium',
      speed: 20,
    },
    racialTraits: [],
  },
  halfling: {
    standardTraits: {
      abilityScores: {
        description: '+2 Dexterity, +2 Charisma, but -2 Strength',
      },
      size: 'Small',
      speed: 20,
    },
    racialTraits: [],
  },
};
