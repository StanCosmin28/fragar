import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on every route change
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // Smooth scroll to top
  }, [pathname]); // Trigger on pathname change

  return null; // This component doesn't render anything
}
