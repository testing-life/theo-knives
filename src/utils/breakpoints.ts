const forTabletBreakpoint = 960;
const forDesktopBreakpoint = 1140;

export const forTablet = window.matchMedia(
  `(width > ${forTabletBreakpoint}px)`
).matches;

export const forDesktop = window.matchMedia(
  `(width > ${forDesktopBreakpoint}px)`
).matches;
