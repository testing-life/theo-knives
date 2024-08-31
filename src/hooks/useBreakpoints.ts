import React, { useEffect, useState } from 'react';

const forTabletBreakpoint = 758;
const forDesktopBreakpoint = 1024;

const useBreakpoints = () => {
  const forTableMediaQueryList = window.matchMedia(
    `(width > ${forTabletBreakpoint}px)`
  );
  const forDesktopMediaQueryList = window.matchMedia(
    `(width > ${forDesktopBreakpoint}px)`
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
  }, []);

  const tabletMediaQueryChange = (e: MediaQueryListEvent) => {
    setForTablet(e.matches);
  };
  const desktopMediaQueryChange = (e: MediaQueryListEvent) => {
    setForDesktop(e.matches);
  };

  return [forTablet, forDesktop] as const;
};

export default useBreakpoints;
