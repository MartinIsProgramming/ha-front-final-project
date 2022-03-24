import { createContext, useContext, useState } from 'react';

const CarsContext = createContext();

const useCarsContext = () => useContext(CarsContext);

const CarsProvider = ({ data, children }) => {
  const [inDollars, setInDollars] = useState(true);

  const handlePriceCurrency = () => setInDollars(!inDollars);

  return (
    <CarsContext.Provider value={{ data, inDollars, handlePriceCurrency }}>
      {children}
    </CarsContext.Provider>
  );
};

export { CarsProvider, useCarsContext };
