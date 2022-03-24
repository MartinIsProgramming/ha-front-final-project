import { useState } from 'react';
import Filter from '../components/Filter';
import SectionTitle from '../components/shared/SectionTitle';
import Cars from '../components/Cars';
import { CarsProvider } from '../context/CarsContext';

const CarsPage = ({ carsData }) => {
  const [filteredCars, setFilteredCars] = useState(carsData);

  console.log(filteredCars);

  const [brandOptions, setBrandOptions] = useState([
    ...new Set(carsData.map(car => car.brand)),
  ]);
  const [modelOptions, setModelOptions] = useState([
    ...new Set(filteredCars.map(car => car.model)),
  ]);

  const [brand, setBrand] = useState(brandOptions[0]);
  const [model, setModel] = useState(modelOptions[0]);

  const handleBrandChange = e => {
    const newBrand = e.target.value;
    setBrand(newBrand);

    let modelsFiltered = carsData
      .filter(car => car.brand === newBrand)
      .map(car => car.model);

    setModelOptions(modelsFiltered);
    setModel(modelsFiltered[0]);
  };

  const handleModelChange = e => setModel(e.target.value);

  const handleFilter = () => {
    const newCarsData = carsData.filter(
      car => car.brand === brand && car.model === model
    );

    setFilteredCars(newCarsData);
  };
  const handleResetFilters = () => setFilteredCars(carsData);

  return (
    <section className="px-4 py-12 mx-auto sm:py-20 sm:px-6 lg:px-8 max-w-7xl">
      <SectionTitle title="Search your car" label="collection" />
      <div className="grid mt-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 md:gap-x-4">
        <CarsProvider>
          <Filter
            brandOptions={brandOptions}
            modelOptions={modelOptions}
            handleBrandChange={handleBrandChange}
            handleModelChange={handleModelChange}
            handleFilter={handleFilter}
            handleResetFilters={handleResetFilters}
          />
          <Cars carsData={filteredCars} />
        </CarsProvider>
      </div>
    </section>
  );
};

export default CarsPage;

export const getStaticProps = async () => {
  const res = await fetch(process.env.CARS_API);
  const carsData = await res.json();

  return { props: { carsData } };
};
