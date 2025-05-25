import Footer from '@/component/footer/footer';
import Header from '@/component/header/header';
import { AppProvider } from '@/context/appContext';
import '@/styles/globals.scss';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider>
        <header>
          <Header />
        </header>
        <Component {...pageProps} />
        <footer>
          <Footer />
        </footer>
      </AppProvider>
    </>
  )
}