import Link from 'next/link';
import useCheckActiveLink from '../../hooks/useCheckCurrentLink';

const CustomNavLink = ({ link, isMobile, close }) => {
  const isCurrent = useCheckActiveLink(link.href, link.current);

  const baseStyles = isMobile
    ? 'block px-3 py-2 rounded-md text-base font-medium'
    : 'px-3 py-2 rounded-md text-sm font-medium';

  const className = isCurrent
    ? 'bg-primary-brand-dark text-gray-100'
    : 'text-primary-brand-light hover:text-primary-brand-dark';

  return (
    <Link href={link.href} key={link.name}>
      <a
        className={`${baseStyles} ${className}`}
        aria-current={isCurrent ? 'page' : undefined}
        onClick={close && close}
      >
        {link.name}
      </a>
    </Link>
  );
};

export default CustomNavLink;
