import Image from 'next/image';

import { logoImg } from '../assets';

import { Container } from '../styles/components/NavBar';

const NavBar: React.FC = () => {
  return (
    <Container>
      <nav>
        <a href="/">
          <Image
            src={logoImg}
            width={124}
            height={38}
            objectFit="contain"
            quality={100}
          />
        </a>

        <ul>
          <li>
            <a href="/#download">Baixar</a>
          </li>

          <li>
            <a href="/#why-discord">Por que usar o Discord?</a>
          </li>

          <li>
            <a href="/#nitro">Nitro</a>
          </li>

          <li>
            <a href="/#safety">Segurança</a>
          </li>

          <li>
            <a href="/#support">Suporte</a>
          </li>
        </ul>

        <a href="https://discord.com/login">Entrar</a>
      </nav>
    </Container>
  );
};

export default NavBar;
