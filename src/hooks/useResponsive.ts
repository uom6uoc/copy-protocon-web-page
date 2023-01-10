import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
  const MOBILE_MAX_WIDTH = 744;
  const TABLET_MAX_WIDTH = 960;

  const isMobile = useMediaQuery({ maxWidth: MOBILE_MAX_WIDTH });
  const isTablet = useMediaQuery({
    minWidth: MOBILE_MAX_WIDTH,
    maxWidth: TABLET_MAX_WIDTH,
  });
  const isDesktop = useMediaQuery({ minWidth: TABLET_MAX_WIDTH });

  return { isMobile, isTablet, isDesktop };
};
