import CallToActionBtn from '../shared/CallToActionBtn';

const AreYouReady = () => {
  return (
    <section className="px-4 py-12 mx-auto sm:py-20 max-w-7xl sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold tracking-tight text-primary-brand-dark sm:text-4xl">
        <span className="block">Ready to dive in?</span>
        <span className="block text-brand-orange">
          Start searching your favorite car.
        </span>
      </h2>
      <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <CallToActionBtn href="/cars" text="Get started" />
        </div>
      </div>
    </section>
  );
};

export default AreYouReady;
