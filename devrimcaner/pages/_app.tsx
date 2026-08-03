import type { AppProps } from 'next/app';
import { LayoutProvider } from '../components/ThemeSwitcherLayout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <a className="skipLink" href="#main-content">
        Skip to content
      </a>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}
