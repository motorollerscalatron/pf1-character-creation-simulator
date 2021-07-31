import { Skill, CLASS_SKILLS } from '@/views/CharacterCreation/config/classes';
import {
  Offense,
  Defense,
} from '@/views/CharacterCreation/characterCreation.types';

export type Feat =
  | 'AGILE_MANUVERS'
  | 'ARCANE_STRIKE'
  | 'CATCH_OFF_GUARD'
  | 'COMBAT_EXPERTISE'
  | 'ACROBATIC'
  | 'ALERTNESS'
  | 'ANIMAL_AFFINITY'
  | 'ATHLETIC'
  | 'DECEITFUL'
  | 'DEFT_HANDS'
  | 'MAGICAL_APTITUDE'
  | 'PERSUASIVE'
  | 'SELF_SUFFICIANT'
  | 'STEALTHY';
type FeatType = 'combat' | 'skill';
export type FeatValue = {
  label: string;
  description: string;
  type: FeatType;
  bonus?: {
    combat?: {
      offense?: Partial<Record<keyof Offense, number>>;
      defense?: Partial<Record<keyof Defense, number>>;
    };
    skill?: Partial<Record<Lowercase<Skill>, number>>;
  };
};
export type Feats = Record<Feat, FeatValue>;

export const FEATS: Feats = {
  AGILE_MANUVERS: {
    label: 'Agile Manuevers',
    description:
      'Use your Dex bonus when calculating your Combat Manuever Bonus',
    type: 'combat',
    /*
    example
    bonus: {
      combat: {
        offense: {
          melee: 1,
        },
        defense: {
          ac: -1,
        },
      },
      skill: {
        acrobatics: 2,
      },
    },
    */
  },
  ARCANE_STRIKE: {
    label: 'Arcane Strike',
    description: '+1 damage and weapons are considered magic',
    type: 'combat',
  },
  CATCH_OFF_GUARD: {
    label: 'Catch Off-Guard',
    description: 'no penalties for improvised melee weapons',
    type: 'combat',
  },
  COMBAT_EXPERTISE: {
    label: 'Combat Expertise',
    description:
      'Choose to take a –1 penalty on melee attacks to gain a +1 dodge bonus to your AC until your next turn.',
    type: 'combat',
  },
  ACROBATIC: {
    label: 'Acrobatic',
    description: '+2 to Acrobatics and Fly Checks',
    type: 'skill',
    bonus: {
      skill: {
        acrobatics: 2,
      },
    },
  },
  ALERTNESS: {
    label: 'Alertness',
    description: '+2 to Perception and Sense Motive Checks',
    type: 'skill',
    bonus: {
      skill: {
        perception: 2,
        sense_motive: 2,
      },
    },
  },
  ANIMAL_AFFINITY: {
    label: 'Animal Affinity',
    description: '+2 to Perception and Sense Motive Checks',
    type: 'skill',
    bonus: {
      skill: {
        handle_animal: 2,
        ride: 2,
      },
    },
  },
  ATHLETIC: {
    label: 'Athletic',
    description: '+2 to Climb and Swim Checks',
    type: 'skill',
  },
  DECEITFUL: {
    label: 'Deceitful',
    description: '+2 to Bluff and Disguise Checks',
    type: 'skill',
  },
  DEFT_HANDS: {
    label: 'Deft Hands',
    description: '+2 to Disable Device and Sleight of Hand Checks',
    type: 'skill',
  },
  MAGICAL_APTITUDE: {
    label: 'Magical Aptitude',
    description: '+2 to Spellcraft and Use Magic Device Checks',
    type: 'skill',
  },
  PERSUASIVE: {
    label: 'Persuasive',
    description: '+2 to Diplomacy and Intimidate Checks',
    type: 'skill',
  },
  SELF_SUFFICIANT: {
    label: 'Self-Sufficiant',
    description: '+2 to Heal and Survival Checks',
    type: 'skill',
  },
  STEALTHY: {
    label: 'Stealthy',
    description: '+2 to Escape Artist and Stealth Checks',
    type: 'skill',
  },
};

const { combat, skill } = Object.entries(FEATS).reduce(
  (acc, item) => {
    const [feat, featValue] = item as [Feat, FeatValue];
    acc[featValue.type][feat] = featValue;
    return acc;
  },
  {
    combat: {},
    skill: {},
  } as {
    combat: Partial<Feats>;
    skill: Partial<Feats>;
  }
);

export { combat as COMBAT_FEATS, skill as SKILL_FEATS };
