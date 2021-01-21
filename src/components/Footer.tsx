import { useMemo } from 'react';

import Image from 'next/image';

import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
} from 'react-icons/fa';

import { logoImg } from '../assets';

import { Container, Content } from '../styles/components/Footer';

export interface INavItem {
  title: string;
  items: Array<{
    title: string;
    url: string;
  }>
}

interface IProps {
  navList?: INavItem[];
}

const Footer: React.FC<IProps> = ({ navList = [] }) => {
  const handleScrollToTop = (): void => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <Content>
        <nav>
          <div>
            <h4>Seu lugar para conversar</h4>

            <ul>
              <li>
                <a href="https://www.twitter.com/discord">
                  <FaTwitter />
                </a>
              </li>

              <li>
                <a href="https://www.twitter.com/discord">
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a href="https://www.twitter.com/discord">
                  <FaFacebookSquare />
                </a>
              </li>

              <li>
                <a href="https://www.twitter.com/discord">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>

          <ul>
            {navList && navList.map(navItem => (
              <li key={navItem.title}>
                <ul aria-label={navItem.title}>
                  {navItem.items.map(item => (
                    <li key={item.url}>
                      <a href={item.url}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>

        <hr />

        <div>
          <button type="button" onClick={handleScrollToTop} aria-label="Clickable logo icon">
            <Image
              src={logoImg}
              width={124}
              height={38}
              objectFit="contain"
              quality={100}
              alt="Discord logo."
            />
          </button>

          <a href="https://discord.com/register">Registrar</a>
        </div>
      </Content>
    </Container>
  );
};

export default Footer;
