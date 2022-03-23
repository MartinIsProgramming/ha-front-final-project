import Filter from '../components/Filter';
import SectionTitle from '../components/shared/SectionTitle';

const CarsPage = () => {
  return (
    <section className="px-4 py-12 mx-auto sm:py-20 sm:px-6 lg:px-8 max-w-7xl">
      <SectionTitle title="Search your future car" label="collection" />
      <div className="grid mt-4 gap-y-6 md:grid-cols-3 md:gap-x-4">
        <Filter />
        <div className="md:col-span-2">CARS</div>
      </div>
    </section>
  );
};

export default CarsPage;
