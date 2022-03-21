import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useCheckCurrentLink = (href, current) => {
  const [isCurrent, setIsCurrent] = useState(current);
  const { isReady, asPath } = useRouter();

  useEffect(() => {
    if (isReady) {
      const linkPathname = new URL(href, location.href).pathname;
      const activePathname = new URL(asPath, location.href).pathname;

      linkPathname === activePathname
        ? setIsCurrent(true)
        : setIsCurrent(false);
    }
  }, [isReady, asPath, href]);

  return isCurrent;
};

export default useCheckCurrentLink;
