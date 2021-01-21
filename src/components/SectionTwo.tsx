import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import AnimatedWave from './AnimatedWave';

import { imageTwo } from '../assets';

import {
  SectionContainer,
  SectionContent,
} from '../styles/components/Sections';

const SectionTwo: React.FC = () => {
  const sectionTwoRef = useRef<HTMLElement>(null);

  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const { offsetTop } = sectionTwoRef.current;

      if (innerHeight + scrollY + 170 >= offsetTop) setIsContentVisible(true);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <SectionContainer ref={sectionTwoRef}>
      {isContentVisible && (
        <SectionContent>
          <article>
            <h2>Aqui é fácil se encontrar</h2>

            <p>
              Entre no canal de voz quando estiver à toa. Amigos no mesmo
              servidor podem te ver e entrar imediatamente, sem nem ter que
              fazer a chamada.
            </p>
          </article>

          <Image
            src={imageTwo}
            width={678}
            height={440}
            objectFit="contain"
            loading="eager"
            quality={100}
            alt="Imagem estilizada de amigos se reunindo em vários canais de voz."
          />
        </SectionContent>
      )}

      <AnimatedWave />
    </SectionContainer>
  );
};

export default SectionTwo;
