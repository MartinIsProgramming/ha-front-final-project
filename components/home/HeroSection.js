import CallToActionBtn from '../shared/CallToActionBtn';

const HeroSection = () => {
  return (
    <section className="px-2 py-12 mx-auto sm:py-20 max-w-7xl sm:text-center sm:px-0 lg:max-w-2xl lg:mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl md:text-6xl">
        <span className="block xl:inline">All the power you need.</span>{' '}
        <span className="block text-brand-orange xl:inline">
          In your garage.
        </span>
      </h1>
      <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>

      <div className="mx-auto mt-5 space-y-2 sm:space-x-2 sm:space-y-0 sm:max-w-md md:max-w-xl sm:mt-8 sm:flex sm:justify-center">
        <CallToActionBtn href="/about" text="Know more" />
        <CallToActionBtn
          href="https://github.com/MartinIsProgramming"
          text="developer"
          isSecondary
          isExternalLink
        />
      </div>
    </section>
  );
};

export default HeroSection;
