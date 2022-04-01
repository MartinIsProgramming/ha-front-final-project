import Filter from '../components/Filter';
import SectionTitle from '../components/shared/SectionTitle';
import Cars from '../components/Cars';
import useFilterCars from '../hooks/useFilterCars';
import propTypes from 'prop-types';
import Head from 'next/head';

const CarsPage = ({ carsData }) => {
  const [
    filteredCars,
    inDollars,
    brandOptions,
    modelOptions,
    handleBrandChange,
    handleModelChange,
    handleFilter,
    handleResetFilters,
    handlePriceCurrency,
  ] = useFilterCars(carsData);

  return (
    <>
      <Head>
        <title>Cars</title>
        <meta
          name="description"
          content="Chose your car at the best price possible."
        />
      </Head>

      <section className="px-4 py-12 mx-auto sm:py-20 sm:px-6 lg:px-8 max-w-7xl">
        <SectionTitle title="Search your car" label="collection" />
        <div className="grid mt-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 md:gap-x-4">
          <Filter
            inDollars={inDollars}
            brandOptions={brandOptions}
            modelOptions={modelOptions}
            handleBrandChange={handleBrandChange}
            handleModelChange={handleModelChange}
            handleFilter={handleFilter}
            handleResetFilters={handleResetFilters}
            handlePriceCurrency={handlePriceCurrency}
          />
          <Cars carsData={filteredCars} inDollars={inDollars} />
        </div>
      </section>
    </>
  );
};

CarsPage.propTypes = {
  carsData: propTypes.array.isRequired,
};

export default CarsPage;

export const getStaticProps = async () => {
  const res = await fetch(process.env.CARS_API);
  const carsData = await res.json();

  return { props: { carsData } };
};
