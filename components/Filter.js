import { useCarsContext } from '../context/CarsContext';
import FormGroup from './shared/FormGroup';
import StandardBtn from './shared/StandardBtn';

const Filter = () => {
  const { data, handlePriceCurrency } = useCarsContext();

  const BrandOptions = [...new Set(data.map(car => car.brand))];
  const ModelOptions = [...new Set(data.map(car => car.model))];

  return (
    <div className="px-3 pt-3 pb-8 bg-gray-100 rounded-md md:sticky md:top-4 max-h-96">
      <h3 className="mb-2 text-lg font-semibold border-b-2 text-primary-brand-dark">
        Filter
      </h3>
      <div className="mb-3 space-y-2">
        <FormGroup labelText="Brands" options={BrandOptions} />
        <FormGroup labelText="Models" options={ModelOptions} />
      </div>
      <div className="space-y-3">
        <StandardBtn text="find my car" />
        <StandardBtn
          text="change to pesos"
          isSecondary
          onClick={handlePriceCurrency}
        />
        <StandardBtn text="all cars" />
      </div>
    </div>
  );
};

export default Filter;
