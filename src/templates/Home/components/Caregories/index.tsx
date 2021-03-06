import {
  HeroIcon,
  VillainIcon,
  AntiHeroIcon,
  AlienIcon,
  HumanIcon,
  IconProps,
} from 'components/CustomIcons';

import * as S from './styles';

export type CategoryTypes = 'HERO' | 'VILLIAN' | 'ANTIHERO' | 'ALIEN' | 'HUMAN';

export type Category = {
  type: CategoryTypes;
  colors: [string, string];
  Icon: (props: IconProps) => JSX.Element;
};

const titles: { [key: string]: string } = {
  HERO: 'Heróis',
  VILLIAN: 'Vilões',
  ANTIHERO: 'Anti-heróis',
  ALIEN: 'Aliens',
  HUMAN: 'Humanos',
};

const categories: Category[] = [
  { type: 'HERO', Icon: HeroIcon, colors: ['#005BEA', '#00C6FB'] },
  { type: 'VILLIAN', Icon: VillainIcon, colors: ['#ED1D24', '#ED1F69'] },
  { type: 'ANTIHERO', Icon: AntiHeroIcon, colors: ['#B224EF', '#7579FF'] },
  { type: 'ALIEN', Icon: AlienIcon, colors: ['#0BA360', '#3CBA92'] },
  { type: 'HUMAN', Icon: HumanIcon, colors: ['#FF7EB3', '#FF758C'] },
];

export function Categories() {
  return (
    <S.List>
      {categories.map(({ Icon, type, colors }) => (
        <S.Item from={colors[0]} to={colors[1]} key={type} title={titles[type]}>
          <Icon fill="white" stroke="none" size={24} />
        </S.Item>
      ))}
    </S.List>
  );
}
