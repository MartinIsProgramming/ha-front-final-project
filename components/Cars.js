import Image from 'next/image';
import StandardBtn from './shared/StandardBtn';
import Rating from './Rating';
import propTypes from 'prop-types';

const Cars = ({ carsData, inDollars }) => {
  const calculatePrice = price =>
    price.toLocaleString({ maximumFractionDigits: 2 });

  return (
    <div className="space-y-12 md:col-span-2 lg:col-span-3">
      {carsData.map((car, i) => (
        <div key={i} className="lg:max-w-3xl">
          <div className="relative w-full h-56 overflow-hidden rounded-lg lg:w-2/3 lg:h-64">
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
            <StandardBtn text="buy car" />
            <StandardBtn text="more info" isSecondary />
          </div>
        </div>
      ))}
    </div>
  );
};

Cars.propTypes = {
  carsData: propTypes.arrayOf(
    propTypes.shape({
      brand: propTypes.string,
      description: propTypes.string,
      image: propTypes.string,
      model: propTypes.string,
      price_usd: propTypes.number,
      price_uyu: propTypes.number,
      rating: propTypes.number,
      status: propTypes.number,
      year: propTypes.number,
    }).isRequired
  ).isRequired,
  inDollars: propTypes.bool.isRequired,
};

export default Cars;
