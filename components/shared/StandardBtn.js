import propTypes from 'prop-types';

const StandardBtn = ({
  text,
  type,
  onClick,
  isSecondary,
  icon,
  isExternalLink,
  href,
  customClasses,
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
      type={type}
      className={`${baseStyles} ${classNames}`}
      onClick={onClick}
    >
      {icon && icon}
      {text}
    </button>
  );
};

StandardBtn.defaultProps = {
  type: 'button',
  isSecondary: false,
  isExternalLink: false,
};

StandardBtn.propTypes = {
  text: propTypes.string.isRequired,
  type: propTypes.oneOf(['submit', 'button', 'reset']),
  isSecondary: propTypes.bool,
  icon: propTypes.element,
  onclick: propTypes.func,
  customClasses: propTypes.string,
  isExternalLink: propTypes.bool,
  href: propTypes.string,
};

export default StandardBtn;
