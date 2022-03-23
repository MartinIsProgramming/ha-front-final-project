import Image from 'next/image';
import StandardBtn from './shared/StandardBtn';
import Rating from './Rating';

const Car = ({ car }) => {
  return (
    <div className="lg:max-w-3xl">
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
          <Rating rating={car.rating} />
        </div>
      </div>
      <p className="text-primary-brand-light">{car.description}</p>
      <div className="flex mt-3 space-x-2">
        <StandardBtn text="buy car" customClasses="w-28" />
        <StandardBtn text="more info" isSecondary customClasses="w-28" />
      </div>
    </div>
  );
};

export default Car;
