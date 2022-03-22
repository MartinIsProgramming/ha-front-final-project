import Image from 'next/image';
import { MailIcon } from '@heroicons/react/outline';
import SectionTitle from './shared/SectionTitle';

const OurStory = () => {
  return (
    <section className="px-4 py-12 mx-auto sm:py-20 sm:px-6 max-w-7xl lg:px-8">
      <SectionTitle title="Our Story" label="Background" />
      <div className="grid grid-cols-1 mt-8 gap-y-6 sm:grid-cols-2 gap-x-6 xl:gap-x-8">
        <div className="relative w-full overflow-hidden rounded-lg h-72 aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
          <Image
            src="/images/about.jpg"
            alt="some text"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div>
          <h3 className="mb-3 text-2xl font-semibold text-primary-brand-dark">
            CARSHOP
          </h3>
          <div className="mb-4 space-y-2 md:text-base text-primary-brand-light">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur, magni quasi maiores obcaecati.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos quia animi consequuntur.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              necessitatibus vero tempora, minus voluptatibus ad?
            </p>
          </div>

          <button className="flex items-center justify-center px-4 py-2 text-sm rounded-md bg-secondary-brand-light hover:bg-secondary-brand-dark text-primary-brand-dark">
            <MailIcon className="w-4 h-4 mr-1" aria-hidden="true" />
            contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
