import Link from 'next/link';
import PropTypes from 'prop-types';

const CallToActionLink = ({
  text,
  href,
  isSecondary,
  isExternalLink,
  customClasses,
}) => {
  const baseStyles = `flex items-center justify-center px-8 py-3 text-base font-medium rounded md:py-4 md:text-lg md:px-10 ${customClasses}`;

  const classNames = isSecondary
    ? 'text-primary-brand-dark bg-secondary-brand-light hover:bg-secondary-brand-dark'
    : 'text-gray-100 bg-primary-brand-dark hover:bg-primary-brand-light shadow';

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
    <Link href={href}>
      <a className={`${baseStyles} ${classNames}`}>{text}</a>
    </Link>
  );
};

CallToActionLink.propTypes = {
  href: PropTypes.string.isRequired,
  isSecondary: PropTypes.bool,
  text: PropTypes.string.isRequired,
  isExternalLink: PropTypes.bool,
  customClasses: PropTypes.string,
};

export default CallToActionLink;
