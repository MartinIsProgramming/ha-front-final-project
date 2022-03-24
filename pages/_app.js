import '../styles/globals.css';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
