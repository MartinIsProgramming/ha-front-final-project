import { StarIcon as FullStar } from '@heroicons/react/solid';
import { StarIcon as EmptyStar } from '@heroicons/react/outline';

const Rating = ({ rating }) => {
  let arr = [null, null, null, null, null];
  arr.fill(1, 0, rating);

  const generateStars = () =>
    arr.map(el =>
      el === 1 ? (
        <FullStar className="w-5 h-5 text-yellow-400" />
      ) : (
        <EmptyStar className="w-4 h-4" />
      )
    );

  return <span className="flex items-center">{generateStars()}</span>;
};

export default Rating;
