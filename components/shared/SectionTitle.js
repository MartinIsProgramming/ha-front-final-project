const SectionTitle = ({ title, label }) => {
  return (
    <>
      <h2 className="text-base font-semibold tracking-wide uppercase text-brand-orange">
        {label}
      </h2>
      <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-primary-brand-dark sm:text-4xl">
        {title}
      </p>
    </>
  );
};

export default SectionTitle;
