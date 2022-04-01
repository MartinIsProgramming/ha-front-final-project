import Founders from '../components/about/Founders';
import OurStory from '../components/about/OurStory';
import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About us</title>
        <meta name="description" content="Best cars and deals in the market" />
      </Head>
      <OurStory />
      <Founders />
    </>
  );
};

export default AboutPage;
