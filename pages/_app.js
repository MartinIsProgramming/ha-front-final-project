import '../styles/globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CarsProvider } from '../context/CarsContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <CarsProvider>
        <Component {...pageProps} />
      </CarsProvider>
      <Footer />
    </>
  );
}

export default MyApp;
