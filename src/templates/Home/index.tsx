import { useTheme } from 'styled-components';

import { MarvelIcon, MenuIcon, SearchIcon } from 'components/CustomIcons';
import { CharactersList } from 'components/CharactersList';

import { Categories } from './components/Caregories';

import * as S from './styles';

export type HomeCharacter = {
  name: string;
  slug: string;
  alterEgo: string;
  image: Array<{ url: string; width: number; height: number }>;
};

export type HomeTemplateProps = {
  characters: {
    heroes: HomeCharacter[];
    villains: HomeCharacter[];
    antiHeroes: HomeCharacter[];
    aliens: HomeCharacter[];
    humans: HomeCharacter[];
  };
};

export function HomeTemplate({ characters }: HomeTemplateProps) {
  const { colors, gradients } = useTheme();

  return (
    <S.Wrapper>
      <S.Header>
        <MenuIcon
          size={24}
          style={{ cursor: 'pointer' }}
          wrapperProps={{
            role: 'img',
            'aria-label': 'Ícone para acessar o menu',
          }}
        />

        <MarvelIcon
          width={71}
          height={26}
          start={{ color: gradients.red.from, offset: 25 }}
          end={{ color: gradients.red.to, offset: 75 }}
          wrapperProps={{ role: 'img', 'aria-label': 'Logo escrito marvel' }}
        />

        <SearchIcon
          size={20}
          style={{ cursor: 'pointer' }}
          stroke={colors.primaryDark}
          fill="none"
          wrapperProps={{
            role: 'img',
            'aria-label': 'Ícone de lupa para pesquisar',
          }}
        />
      </S.Header>

      <S.Main>
        <S.HeadingContainer>
          <S.HomeSubtitle>Bem vindo ao Marvel Heroes</S.HomeSubtitle>
          <S.HomeTitle>Escolha o seu personagem</S.HomeTitle>
        </S.HeadingContainer>

        <Categories />

        <CharactersList title="Heróis" characters={characters.heroes} />
        <CharactersList title="Vilões" characters={characters.villains} />
        <CharactersList
          title="Anti-heróis"
          characters={characters.antiHeroes}
        />
        <CharactersList title="Aliens" characters={characters.aliens} />
        <CharactersList title="Humanos" characters={characters.humans} />
      </S.Main>
    </S.Wrapper>
  );
}
