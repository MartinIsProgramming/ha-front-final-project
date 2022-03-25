import propTypes from 'prop-types';
import FormGroup from './shared/FormGroup';
import StandardBtn from './shared/StandardBtn';

const Filter = ({
  brandOptions,
  modelOptions,
  handleBrandChange,
  handleModelChange,
  handleFilter,
  handlePriceCurrency,
  handleResetFilters,
}) => {
  return (
    <div className="px-3 pt-3 pb-8 bg-gray-100 rounded-md md:sticky md:top-4 max-h-96">
      <h3 className="mb-2 text-lg font-semibold border-b-2 text-primary-brand-dark">
        Filter
      </h3>
      <div className="mb-3 space-y-2">
        <FormGroup
          labelText="brands"
          options={brandOptions}
          onChange={handleBrandChange}
        />
        <FormGroup
          labelText="models"
          options={modelOptions}
          onChange={handleModelChange}
        />
      </div>
      <div className="mt-6 space-y-3 ">
        <StandardBtn
          text="find my car"
          onClick={handleFilter}
          customClasses="w-full"
        />
        <StandardBtn
          text="change to pesos"
          isSecondary
          onClick={handlePriceCurrency}
          customClasses="w-full"
        />
        <StandardBtn
          text="all cars"
          onClick={handleResetFilters}
          customClasses="w-full"
        />
      </div>
    </div>
  );
};

Filter.propTypes = {
  brandOptions: propTypes.array.isRequired,
  modelOptions: propTypes.array.isRequired,
  handleBrandChange: propTypes.func.isRequired,
  handleModelChange: propTypes.func.isRequired,
  handleFilter: propTypes.func.isRequired,
  handlePriceCurrency: propTypes.func.isRequired,
  handleResetFilters: propTypes.func.isRequired,
};

export default Filter;
