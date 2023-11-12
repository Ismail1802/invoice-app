// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

type Scroll = {
  children: React.ReactNode;
};

const ScrollToTop = (props: Scroll) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
