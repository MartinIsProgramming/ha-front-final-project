import '../styles/globals.css';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import propTypes from 'prop-types';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cars dealer company - All cars at the best price</title>
        <meta
          name="description"
          content="We provide both the best cars selection and lowest prices in the market."
        />
      </Head>
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
