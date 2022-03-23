import FormGroup from './shared/FormGroup';
import StandardBtn from './shared/StandardBtn';

const Filter = () => {
  return (
    <div className="px-3 pt-3 pb-8 bg-gray-100 rounded-md md:sticky md:top-4 max-h-96">
      <h3 className="mb-2 text-lg font-semibold border-b-2 text-primary-brand-dark">
        Filter
      </h3>
      <div className="mb-3 space-y-3">
        <FormGroup labelText="Brands" />
        <FormGroup labelText="Models" />
      </div>
      <div className="space-y-3">
        <StandardBtn text="find my car" />
        <StandardBtn text="change to pesos" isSecondary />
        <StandardBtn text="all cars" />
      </div>
    </div>
  );
};

export default Filter;
