import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* Adicione aqui o link para o arquivo CSS gerado pelo Tailwind */}
        
          {/* Adicione outras tags meta, link ou script que você precisar */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
