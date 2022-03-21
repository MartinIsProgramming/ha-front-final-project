import Link from 'next/link';
import useCheckActiveLink from '../../hooks/useCheckCurrentLink';

const CustomNavLink = ({ link }) => {
  const isCurrent = useCheckActiveLink(link.href, link.current);

  const className = isCurrent
    ? 'bg-gray-900 text-white'
    : 'text-gray-300 hover:bg-gray-700 hover:text-white';

  return (
    <Link href={link.href} key={link.name}>
      <a
        className={`px-3 py-2 rounded-md text-sm font-medium ${className}`}
        aria-current={isCurrent ? 'page' : undefined}
      >
        {link.name}
      </a>
    </Link>
  );
};

export default CustomNavLink;
