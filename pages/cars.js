import SectionTitle from '../components/shared/SectionTitle';

const CarsPage = () => {
  return (
    <section className="px-4 py-12 mx-auto sm:py-20 sm:px-6 lg:px-8 max-w-7xl">
      <SectionTitle title="Search your future car" label="collection" />
      <div className="grid mt-4 gap-y-6 md:grid-cols-3 md:gap-x-4">
        <div className="px-3 pt-3 pb-8 bg-gray-100 rounded-md">
          <h3 className="mb-2 text-lg font-semibold border-b-2 text-primary-brand-dark">
            Filter
          </h3>
          <div className="space-y-3">
            <div>
              <label
                htmlFor="Brands"
                className="block mb-1 text-sm font-medium text-primary-brand-light"
              >
                Brands
              </label>
              <select
                type="text"
                name="brands"
                id="brands"
                placeholder="brands.."
                className="w-full rounded-md text-primary-brand-light border-secondary-brand-light focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
              >
                <option>Please select</option>
                <option>Please select</option>
                <option>Please select</option>
                <option>Please select</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="Brands"
                className="block mb-1 text-sm font-medium text-primary-brand-light"
              >
                Models
              </label>

              <select
                type="text"
                name="brands"
                id="brands"
                placeholder="brands.."
                className="w-full rounded-md text-primary-brand-light border-secondary-brand-light focus:outline-none focus:ring-brand-orange focus:border-brand-orange sm:text-sm"
              >
                <option>Please select</option>
                <option>Please select</option>
                <option>Please select</option>
                <option>Please select</option>
              </select>
            </div>
          </div>
          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="block w-full py-3 text-sm font-medium text-gray-100 rounded-md shadow-sm bg-primary-brand-dark hover:bg-primary-brand-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-brand-light"
            >
              find my car
            </button>

            <button
              type="button"
              className="block w-full py-3 text-sm font-medium rounded-md shadow-sm text-primary-brand-dark bg-secondary-brand-dark hover:bg-secondary-brand-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-brand-light"
            >
              change to pesos
            </button>

            <button
              type="button"
              className="block w-full py-3 text-sm font-medium text-gray-100 rounded-md shadow-sm bg-primary-brand-dark hover:bg-primary-brand-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-brand-light"
            >
              all cars
            </button>
          </div>
        </div>

        {/* cars */}
        <div className="md:col-span-2">CARS</div>
      </div>
    </section>
  );
};

export default CarsPage;
