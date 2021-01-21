import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Main,
  Head,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="icon" href="/favicon.ico" />

          <link rel="preload" href="/fonts/Whitney-Light.woff" as="font" crossOrigin="" />

          <link rel="preload" href="/fonts/Whitney-Regular.woff" as="font" crossOrigin="" />

          <link rel="preload" href="/fonts/Whitney-Bold.woff" as="font" crossOrigin="" />

          <link rel="preload" href="/fonts/Archivo-Black.woff" as="font" crossOrigin="" />

          <meta name="description" content="O Discord é o jeito mais fácil de se comunicar por voz, vídeo e texto. Converse, curta e fique perto de seus amigos e comunidades."/>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
