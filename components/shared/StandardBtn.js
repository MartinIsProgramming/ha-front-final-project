const StandardBtn = ({
  text,
  isSecondary,
  onClick,
  customClasses,
  icon,
  isExternalLink,
  href,
}) => {
  const baseStyles = `flex items-center justify-center py-2 px-4 text-sm font-medium rounded ${customClasses}`;

  const classNames = isSecondary
    ? 'text-primary-brand-dark bg-secondary-brand-dark hover:bg-secondary-brand-light '
    : 'text-gray-100 bg-primary-brand-dark hover:bg-primary-brand-light';

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
