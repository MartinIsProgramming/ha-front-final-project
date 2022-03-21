import { Disclosure } from '@headlessui/react';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import CustomNavLink from './shared/CustomNavLink';

const BigNavigation = ({ open, navigation }) => {
  const renderIcons = open ? (
    <XIcon className="block w-6 h-6" aria-hidden="true" />
  ) : (
    <MenuAlt1Icon className="block w-6 h-6" aria-hidden="true" />
  );

  return (
    <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Open main menu</span>
            {renderIcons}
          </Disclosure.Button>
        </div>
        <div className="flex items-center justify-start flex-1 sm:items-stretch sm:justify-between">
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <a className="text-2xl text-white">CARSHOP</a>
            </Link>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {navigation.map(link => (
                <CustomNavLink key={link.name} link={link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNavigation;
