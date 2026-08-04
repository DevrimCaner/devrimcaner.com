import { getInitColorSchemeScript } from '@mui/joy/styles';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        {getInitColorSchemeScript({ defaultMode: 'dark', modeStorageKey: 'portfolio-theme' })}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
