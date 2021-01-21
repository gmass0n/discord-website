import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import AnimatedWave from './AnimatedWave';

import { imageOne } from '../assets';

import {
  SectionContainer,
  SectionContent,
} from '../styles/components/Sections';

import theme from '../styles/theme';

const SectionOne: React.FC = () => {
  const sectionOneRef = useRef<HTMLElement>(null);

  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const { scrollY, innerHeight } = window;
    const { offsetTop } = sectionOneRef.current;

    if (innerHeight + scrollY + 170 >= offsetTop) setIsContentVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const { offsetTop } = sectionOneRef.current;

      if (innerHeight + scrollY + 170 >= offsetTop) setIsContentVisible(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <SectionContainer ref={sectionOneRef}>
      {isContentVisible && (
        <SectionContent>
          <Image
            src={imageOne}
            width={678}
            height={440}
            objectFit="contain"
            loading="eager"
            quality={100}
            alt="Imagem estilizada de um servidor do Discord com vários canais para fotos de animaizinhos, estudo, jogos e culinária."
          />

          <article>
            <h1>
              Ambientes controlados por convites, com muito espaço pra conversar
            </h1>

            <p>
              Os servidores Discord são organizados em canais com tópicos para
              vocês colaborarem, compartilharem ou simplesmente falarem do dia
              sem entupir um chat geral.
            </p>
          </article>
        </SectionContent>
      )}

      <AnimatedWave color={theme.colors.offWhite} />
    </SectionContainer>
  );
};

export default SectionOne;
