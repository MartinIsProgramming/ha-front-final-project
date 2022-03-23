import { StarIcon as FullStar } from '@heroicons/react/solid';
import { StarIcon as EmptyStar } from '@heroicons/react/outline';
import Filter from '../components/Filter';
import SectionTitle from '../components/shared/SectionTitle';
import StandardBtn from '../components/shared/StandardBtn';
import Image from 'next/image';

const CarsPage = ({ carsData }) => {
  console.log(carsData);
  return (
    <section className="px-4 py-12 mx-auto sm:py-20 sm:px-6 lg:px-8 max-w-7xl">
      <SectionTitle title="Search your future car" label="collection" />
      <div className="grid mt-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 md:gap-x-4">
        <Filter />
        <div className="space-y-12 md:col-span-2 lg:col-span-3">
          {carsData.map((car, i) => {
            return (
              <div key={i} className="lg:max-w-3xl">
                <div className="relative w-full h-56 overflow-hidden rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 lg:w-2/3 lg:h-64">
                  <Image
                    src={car.image}
                    alt="car"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>

                <div className="my-3 lg:flex lg:justify-between">
                  <h3 className="mb-1 text-lg font-medium text-primary-brand-dark">
                    {car.brand} {car.model}
                  </h3>
                  <div className="flex items-center space-x-1 text-primary-brand-light">
                    <span>{car.year} |</span>
                    <span>USD {car.price_usd} |</span>
                    <span className="flex">
                      <FullStar className="w-4 h-4 text-yellow-400" />
                      <EmptyStar className="w-4 h-4" />
                      <EmptyStar className="w-4 h-4" />
                      <EmptyStar className="w-4 h-4" />
                      <EmptyStar className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <p className="text-primary-brand-light">{car.description}</p>
                <div className="flex mt-3 space-x-2">
                  <StandardBtn text="buy car" customClasses="w-28" />
                  <StandardBtn
                    text="more info"
                    isSecondary
                    customClasses="w-28"
                  />
                </div>
              </div>
            );
          })}
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
