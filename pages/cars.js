import Filter from '../components/Filter';
import SectionTitle from '../components/shared/SectionTitle';
import Car from '../components/Car';

const CarsPage = ({ carsData }) => {
  return (
    <section className="px-4 py-12 mx-auto sm:py-20 sm:px-6 lg:px-8 max-w-7xl">
      <SectionTitle title="Search your car" label="collection" />
      <div className="grid mt-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 md:gap-x-4">
        <Filter />
        <div className="space-y-12 md:col-span-2 lg:col-span-3">
          {carsData.map((car, i) => (
            <Car key={i} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsPage;

export const getStaticProps = async () => {
  const res = await fetch('https://ha.edu.uy/api/cars');
  const carsData = await res.json();

  return {
    props: {
      carsData,
    },
  };
};
