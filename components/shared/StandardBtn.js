const StandardBtn = ({ text, isSecondary, onClick }) => {
  const baseStyles =
    'block w-full py-3 text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';

  const classNames = isSecondary
    ? 'text-primary-brand-dark bg-secondary-brand-dark hover:bg-secondary-brand-light focus:ring-primary-brand-light'
    : 'text-gray-100  bg-primary-brand-dark hover:bg-primary-brand-light focus:ring-primary-brand-light';

  return (
    <button
      type="button"
      className={`${baseStyles} ${classNames}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default StandardBtn;
