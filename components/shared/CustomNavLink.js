import Link from 'next/link';
import propTypes from 'prop-types';
import useCheckActiveLink from '../../hooks/useCheckCurrentLink';

const CustomNavLink = ({ link, close }) => {
  const isCurrent = useCheckActiveLink(link.href, link.current);

  const baseStyles =
    'block px-3 py-2 text-sm rounded-md font-medium focus:outline-none';

  const currentStyles = isCurrent
    ? 'bg-primary-brand-dark text-gray-100'
    : 'text-primary-brand-light hover:text-primary-brand-dark';

  return (
    <Link href={link.href} key={link.name}>
      <a
        className={`${baseStyles} ${currentStyles}`}
        aria-current={isCurrent ? 'page' : undefined}
        onClick={close && close}
      >
        {link.name}
      </a>
    </Link>
  );
};

CustomNavLink.propTypes = {
  link: propTypes.shape({
    name: propTypes.string.isRequired,
    href: propTypes.string.isRequired,
    current: propTypes.bool.isRequired,
  }),
  close: propTypes.func,
};

export default CustomNavLink;
