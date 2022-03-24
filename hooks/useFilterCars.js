import { useState } from 'react';

const useFilterCars = carsData => {
  const [filteredCars, setFilteredCars] = useState(carsData);
  const [inDollars, setInDollars] = useState(true);

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

    const modelsFiltered = [
      ...new Set(
        carsData.filter(car => car.brand === newBrand).map(car => car.model)
      ),
    ];

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

  const handlePriceCurrency = () => setInDollars(!inDollars);

  return [
    filteredCars,
    inDollars,
    brandOptions,
    modelOptions,
    handleBrandChange,
    handleModelChange,
    handleFilter,
    handleResetFilters,
    handlePriceCurrency,
  ];
};

export default useFilterCars;
