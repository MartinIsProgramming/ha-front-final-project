import { Disclosure, Transition } from '@headlessui/react';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import CustomNavLink from './shared/CustomNavLink';

const navigation = [
  { name: 'home', href: '/', current: false },
  { name: 'about', href: '/about', current: false },
  { name: 'cars', href: '/cars', current: false },
];

const Navigation = () => {
  return (
    <Disclosure as="nav" className="shadow-md">
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center justify-start flex-1 sm:items-stretch sm:justify-between">
                <div className="flex items-center flex-shrink-0">
                  <Link href="/">
                    <a className="text-2xl text-brand-dark">CARSHOP</a>
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
              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-brand-dark">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuAlt1Icon
                      className="block w-6 h-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-out duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden">
              {({ close }) => (
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map(link => (
                    <CustomNavLink
                      key={link.name}
                      link={link}
                      isMobile
                      close={close}
                    />
                  ))}
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
