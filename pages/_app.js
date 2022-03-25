import '../styles/globals.css';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import propTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

MyApp.propTypes = {
  Component: propTypes.func.isRequired,
  pageProps: propTypes.any.isRequired,
};

export default MyApp;
