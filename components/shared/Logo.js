import Link from 'next/link';

const Logo = ({ isLight }) => {
  const textColor = isLight ? 'text-gray-100' : 'text-primary-brand-dark';

  return (
    <Link href="/">
      <a className={`text-2xl rounded ${textColor}`}>CARSHOP</a>
    </Link>
  );
};

export default Logo;
