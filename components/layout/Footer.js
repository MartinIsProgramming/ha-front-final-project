import Link from 'next/link';
import Logo from '../shared/Logo';

const navigation = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
  { label: 'cars', href: '/cars' },
];

const Footer = () => {
  return (
    <footer className="border-t-2 bg-primary-brand-dark border-brand-orange">
      <div className="flex flex-col items-center max-w-6xl py-12 mx-auto space-y-4 sm:py-20">
        <Logo isLight />
        <div className="flex items-center justify-center">
          {navigation.map(({ label, href }) => (
            <Link key={label} href={href}>
              <a className="px-3 py-2 text-gray-100 rounded hover:underline">
                {label}
              </a>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-base text-center text-gray-400">
          &copy; {`${new Date().getFullYear()}`} Carshop, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
