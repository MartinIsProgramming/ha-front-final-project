import { Disclosure } from '@headlessui/react';
import BigNavigation from './BigNavigation';
import SmallNavigation from './SmallNavigation';

const navigation = [
  { name: 'home', href: '/', current: false },
  { name: 'about', href: '/about', current: false },
  { name: 'cars', href: '/cars', current: false },
];

const Navigation = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <BigNavigation open={open} navigation={navigation} />
          <SmallNavigation Disclosure={Disclosure} navigation={navigation} />
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
