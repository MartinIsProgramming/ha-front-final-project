import CustomNavLink from './shared/CustomNavLink';

const SmallNavigation = ({ Disclosure, navigation }) => {
  return (
    <Disclosure.Panel className="sm:hidden">
      {({ close }) => (
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map(link => (
            <CustomNavLink key={link.name} link={link} isMobile close={close} />
          ))}
        </div>
      )}
    </Disclosure.Panel>
  );
};

export default SmallNavigation;
