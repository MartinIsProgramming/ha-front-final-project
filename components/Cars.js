import Image from 'next/image';
import StandardBtn from './shared/StandardBtn';
import Rating from './Rating';
import { useCarsContext } from '../context/CarsContext';

const Cars = ({ carsData }) => {
  const { inDollars } = useCarsContext();

  const calculatePrice = price =>
    price.toLocaleString({ maximumFractionDigits: 2 });

  return (
    <div className="space-y-12 md:col-span-2 lg:col-span-3">
      {carsData.map((car, i) => (
        <div key={i} className="lg:max-w-3xl">
          <div className="relative w-full h-56 overflow-hidden rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 lg:w-2/3 lg:h-64">
            <Image
              src={car.image}
              alt="car"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
            {car.status === 1 && (
              <span className="absolute px-2 py-1 text-xs font-medium text-gray-100 rounded-md top-3 left-2 bg-brand-orange">
                new
              </span>
            )}
          </div>

          <div className="my-3 lg:flex lg:justify-between">
            <h3 className="mb-1 text-lg font-medium text-primary-brand-dark">
              {car.brand} {car.model}
            </h3>
            <div className="flex items-center space-x-1 text-primary-brand-light">
              <span>{car.year} |</span>
              {
                <span>
                  {inDollars
                    ? `USD ${calculatePrice(car.price_usd)}`
                    : `$ ${calculatePrice(car.price_uyu)}`}
                </span>
              }
              <Rating rating={car.rating} />
            </div>
          </div>
          <p className="text-primary-brand-light">{car.description}</p>
          <div className="flex mt-3 space-x-2">
            <StandardBtn text="buy car" customClasses="w-28" />
            <StandardBtn text="more info" isSecondary customClasses="w-28" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cars;
