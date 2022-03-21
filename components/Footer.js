import Link from 'next/link';

const navigation = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
  { label: 'cars', href: '/cars' },
];

const Footer = () => {
  return (
    <footer className="bg-brand-dark">
      <div className="flex flex-col items-center py-12 mx-auto space-y-4 max-w-7xl">
        <Link href="/">
          <a className="text-2xl text-gray-100">CARSHOP</a>
        </Link>
        <ul className="flex items-center justify-center">
          {navigation.map(({ label, href }) => (
            <li
              className="py-2 mx-3 text-gray-100 rounded hover:underline"
              key={label}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-base text-center text-gray-400">
          &copy; {`${new Date().getFullYear()}`} Carshop, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
