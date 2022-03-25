import CallToActionLink from '../shared/CallToActionLink';

const AreYouReady = () => {
  return (
    <section className="px-4 py-12 mx-auto lg:flex sm:py-20 max-w-7xl sm:px-6 lg:px-8 lg:justify-between">
      <h2 className="flex flex-col mb-6 text-3xl font-extrabold tracking-tight lg:mb-0 sm:text-4xl">
        <span className="text-primary-brand-dark">Ready to dive in?</span>
        <span className="text-brand-orange">
          Start searching your favorite car.
        </span>
      </h2>
      <div className="flex lg:block">
        <CallToActionLink href="/cars" text="Get started" />
      </div>
    </section>
  );
};

export default AreYouReady;
