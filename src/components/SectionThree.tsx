import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import AnimatedWave from './AnimatedWave';

import {
  SectionContainer,
  SectionContent,
} from '../styles/components/Sections';

import theme from '../styles/theme';
import { imageThree } from '../assets';

const SectionThree: React.FC = () => {
  const sectionThreeRef = useRef<HTMLElement>(null);

  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window;
      const { offsetTop } = sectionThreeRef.current;

      if (innerHeight + scrollY + 170 >= offsetTop) setIsContentVisible(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <SectionContainer ref={sectionThreeRef}>
      {isContentVisible && (
        <SectionContent>
          <Image
            src={imageThree}
            width={678}
            height={440}
            objectFit="contain"
            loading="eager"
            quality={100}
            alt="Imagem estilizada de amigos em um servidor organizados em funções de Treinador, Líder estudantil e Animal Crossing."
          />


          <article>
            <h2>Para poucos e para muitos</h2>

            <p>
              Organize uma comunidade de qualquer tamanho com ferramentas de
              moderação e acesso personalizado a membros. Dê poderes especiais
              aos membros, monte canais privados e muito mais.
            </p>
          </article>
        </SectionContent>
      )}

      <AnimatedWave color={theme.colors.offWhite} />
    </SectionContainer>
  );
};

export default SectionThree;
