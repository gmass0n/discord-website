import { FiDownload } from 'react-icons/fi';

import Image from 'next/image';

import { sparkles } from '../assets';

import { Container, Content } from '../styles/components/DownloadSection';

const DownloadSection: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <Image
            src={sparkles}
            quality={100}
            height={50}
            width={530}
            objectFit="contain"
            alt="Sparkles."
          />
        </div>

        <h4>Vamos começar sua jornada?</h4>

        <a
          href="https://discord.com/api/download?platform=osx"
          target="_blank"
          rel="noreferrer"
        >
          <FiDownload />
          Baixar para Mac
        </a>
      </Content>
    </Container>
  );
};

export default DownloadSection;
