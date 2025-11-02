import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Automatically scroll to the top on route changes
  }, [pathname]);

  return null;
}

export default ScrollToTop;
