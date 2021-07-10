export type Feat =
  | 'AGILE_MANUVERS'
  | 'ARCANE_STRIKE'
  | 'ACROBATIC'
  | 'ALERTNESS';
type FeatType = 'combat' | 'skill';

export type FeatValue = {
  label: string;
  description: string;
  type: FeatType;
};
type Feats = Record<Feat, FeatValue>;

export const FEATS: Feats = {
  AGILE_MANUVERS: {
    label: 'Agile Manuvers',
    description: '',
    type: 'combat',
  },
  ARCANE_STRIKE: {
    label: 'Arcane Strike',
    description: '',
    type: 'combat',
  },
  ACROBATIC: {
    label: 'Acrobatic',
    description: '',
    type: 'skill',
  },
  ALERTNESS: {
    label: 'Alertness',
    description: '',
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
