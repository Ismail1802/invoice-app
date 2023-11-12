import { useLayoutEffect, useState } from "react";
const useIsMobileResolution = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = (e: UIEvent) => {
      setWidth((e.target as Window).innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = width < 768 ? true : false;
  return isMobile;
};
export { useIsMobileResolution };
