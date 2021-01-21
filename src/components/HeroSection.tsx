import { useState } from 'react';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

import AnimatedWave from './AnimatedWave';
import NavBar from './NavBar';

import {
  Balloons,
  Ship,
  Island,
  CloudOne,
  CloudTwo,
  CloudThree,
  CloudFour,
  CloudFive,
  CloudSeven,
  CloudEight,
  CloudNine,
  HeroBuildings,
  HeroForegroundLeft,
  HeroForegroundRight,
} from '../assets';

import {
  Container,
  Content,
  Background,
} from '../styles/components/HeroSection';

const HeroSection: React.FC = () => {
  const [username, setUsername] = useState<string | undefined>(undefined);

  return (
    <Container>
      <NavBar />

      <Content>
        <h1>Seu lugar para conversar</h1>

        <p>
          Não importa se você faz parte de um clube escolar, uma comunidade
          artística mundial ou só amigos querendo ficar de boa, o Discord torna
          mais fácil conversar todo dia e se ver com mais frequência.
        </p>

        <div>
          {username === undefined ? (
            <div>
              <a
                href="https://discord.com/api/download?platform=osx"
                target="_blank"
                rel="noreferrer"
              >
                <FiDownload />
                Baixar para Mac
              </a>

              <button type="button" onClick={() => setUsername('')}>
                Abra o discord no seu navegador
              </button>
            </div>
          ) : (
            <>
              <form>
                <input
                  name="username"
                  placeholder="Insira um nome de usuário"
                />

                <button type="submit">
                  <FiArrowRight />
                </button>
              </form>

              <span>
                Ao se registrar, você concorda com os{' '}
                <a
                  href="https://discord.com/terms"
                  target="_blank"
                  rel="noreferrer"
                >
                  termos de serviço
                </a>{' '}
                e a{' '}
                <a
                  href="https://discord.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                >
                  política de privacidade
                </a>{' '}
                do Discord.
              </span>
            </>
          )}
        </div>
      </Content>

      <Background>
        <Balloons />

         <Ship />

        <Island />

        <CloudOne></CloudOne>

        <CloudTwo />

        <CloudThree />

        <CloudFour />

        <CloudFive />

        <CloudSeven />

        <CloudEight />

        <CloudNine />

        <HeroBuildings  />

        <HeroForegroundLeft  />

        <HeroForegroundRight/>

        <AnimatedWave />
      </Background>
    </Container>
  );
};

export default HeroSection;
