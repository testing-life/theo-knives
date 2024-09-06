import { useEffect, useMemo, useState } from 'react';

const forTabletBreakpoint = 758;
const forDesktopBreakpoint = 1024;

const useBreakpoints = () => {
  const forTableMediaQueryList = useMemo(
    () => window.matchMedia(`(width > ${forTabletBreakpoint}px)`),
    []
  );
  const forDesktopMediaQueryList = useMemo(
    () => window.matchMedia(`(width > ${forDesktopBreakpoint}px)`),
    []
  );
  const [forTablet, setForTablet] = useState(forTableMediaQueryList.matches);
  const [forDesktop, setForDesktop] = useState(
    forDesktopMediaQueryList.matches
  );

  useEffect(() => {
    forTableMediaQueryList.addEventListener('change', tabletMediaQueryChange);
    forDesktopMediaQueryList.addEventListener(
      'change',
      desktopMediaQueryChange
    );
    return () => {
      forTableMediaQueryList.removeEventListener(
        'change',
        tabletMediaQueryChange
      );
      forDesktopMediaQueryList.removeEventListener(
        'change',
        desktopMediaQueryChange
      );
    };
  }, [forDesktopMediaQueryList, forTableMediaQueryList]);

  const tabletMediaQueryChange = (e: MediaQueryListEvent) => {
    setForTablet(e.matches);
  };
  const desktopMediaQueryChange = (e: MediaQueryListEvent) => {
    setForDesktop(e.matches);
  };

  return [forTablet, forDesktop] as const;
};

export default useBreakpoints;
