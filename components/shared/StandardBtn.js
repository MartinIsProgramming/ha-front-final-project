const StandardBtn = ({
  text,
  isSecondary,
  onClick,
  customClasses,
  icon,
  isExternalLink,
  href,
}) => {
  const baseStyles = `block w-full py-2 text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${customClasses}`;

  const classNames = isSecondary
    ? 'text-primary-brand-dark bg-secondary-brand-dark hover:bg-secondary-brand-light focus:ring-primary-brand-light'
    : 'text-gray-100  bg-primary-brand-dark hover:bg-primary-brand-light focus:ring-primary-brand-light';

  return isExternalLink ? (
    <a
      href={href}
      className={`${baseStyles} ${classNames}`}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  ) : (
    <button
      type="button"
      className={`${baseStyles} ${classNames}`}
      onClick={onClick}
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default StandardBtn;
