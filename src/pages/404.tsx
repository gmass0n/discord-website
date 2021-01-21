import Head from 'next/head';
import Image from 'next/image';

import { robot } from '../assets'

import { Container, GlitchWrapper } from '../styles/pages/404';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Página Não Encontrada | Discord</title>
      </Head>

      <section>
        <GlitchWrapper>
          <div data-text="404" />
        </GlitchWrapper>

        <h2>Magoas atrás de cortinas?</h2>

        <p>
          Que coisa mais 1939. Na verdade, o Discord funciona com hamsters robôs
          quânticos. As maravilhas da tecnologia, né? Enfim, parece que você
          virou errado em algum lugar. Toma aqui algumas sugestões de páginas.
        </p>

        <ul>
          <li>
            <a href="https://status.discord.com">Página do estado</a>
          </li>

          <li>
            <a href="https://twitter.com/discord">@discord</a>
          </li>

          <li>
            <a href="https://support.discord.com">Suporte</a>
          </li>
        </ul>
      </section>

      <Image src={robot} width={580} height={530} objectFit="contain" quality={100}/>
    </Container>
  );
};

export default NotFound;
