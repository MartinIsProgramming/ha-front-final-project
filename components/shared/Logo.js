import Link from 'next/link';
import propTypes from 'prop-types';

const Logo = ({ isLight }) => {
  const textColor = isLight ? 'text-gray-100' : 'text-primary-brand-dark';

  return (
    <Link href="/">
      <a className={`text-2xl rounded ${textColor}`}>CARSHOP</a>
    </Link>
  );
};

Logo.defaultProps = {
  isLight: false,
};

Logo.propTypes = {
  isLight: propTypes.bool,
};

export default Logo;
