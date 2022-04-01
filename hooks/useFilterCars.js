import { useState } from 'react';

const useFilterCars = carsData => {
  const [filteredCars, setFilteredCars] = useState(carsData);

  const [brandOptions, setBrandOptions] = useState([
    ...new Set(carsData.map(car => car.brand)),
  ]);
  const [brand, setBrand] = useState(brandOptions[0]);

  const [modelOptions, setModelOptions] = useState([
    ...new Set(
      carsData.filter(car => car.brand === brand).map(car => car.model)
    ),
  ]);

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

  return [
    filteredCars,
    brandOptions,
    modelOptions,
    handleBrandChange,
    handleModelChange,
    handleFilter,
    handleResetFilters,
  ];
};

export default useFilterCars;
