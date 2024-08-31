import React, { useEffect, useState } from 'react';

const forTabletBreakpoint = 960;
const forDesktopBreakpoint = 1140;

const useBreakpoints = () => {
  const [forTablet, setForTablet] = useState(false);
  const [forDesktop, setForDesktop] = useState(false);
  const forTableMediaQueryList = window.matchMedia(
    `(width > ${forTabletBreakpoint}px)`
  );
  const forDesktopMediaQueryList = window.matchMedia(
    `(width > ${forDesktopBreakpoint}px)`
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
