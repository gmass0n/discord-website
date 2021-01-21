import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { imageFour } from '../assets';

import {
  SectionContainer,
  SectionContent,
} from '../styles/components/Sections';

const SectionFour: React.FC = () => {
  const sectionFourRef = useRef<HTMLElement>(null);

  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      const { scrollY, innerHeight } = window;
      const { offsetTop } = sectionFourRef.current;

      if (innerHeight + scrollY + 170 >= offsetTop) setIsContentVisible(true);
    };
  }, []);

  return (
    <SectionContainer hasWave={false} ref={sectionFourRef}>
      {isContentVisible && (
        <SectionContent isColumn>
          <article>
            <h2>Tecnologia de conexão confiável</h2>

            <p>
              Voz e vídeo de baixa latência, para você conversar como se
              estivesse na mesma sala. Dê um joinha por vídeo, veja amigos
              transmitirem a jogatina do dia ou junte uma galera pra desenhar na
              tela compartilhada.
            </p>
          </article>

          <Image
            src={imageFour}
            alt="Imagem estilizada de amigos conversando por vídeo pelo computador e pelo celular."
            height="600"
            width="980px"
            objectFit="contain"
            loading="eager"
            quality={100}
          />
        </SectionContent>
      )}
    </SectionContainer>
  );
};

export default SectionFour;
