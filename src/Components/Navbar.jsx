import { useState, useEffect, useRef } from "react";
import data from "../Model/data";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const lastScrollPosition = useRef(0);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition < lastScrollPosition.current) {
        // Scrolling up
        setIsNavbarVisible(true);
      } else {
        // Scrolling down
        setIsNavbarVisible(false);
      }
      lastScrollPosition.current = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`px-2 group fixed w-full z-20 top-0 left-0 transition-all duration-300 hover:bg-white ${
        isMenuOpen ?? "bg-white"
      } ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between flex-wrap py-4">
        <a href="#" className="flex items-center space-x-3">
          <img src={data.logo} className="h-8" alt="Fragar Trading" />
          <span className="text-2xl font-semibold whitespace-nowrap text-white group-hover:text-black transition-colors duration-300">
            Fragar
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-white group-hover:text-black rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:flex md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 bg-white md:bg-transparent">
            <li className="relative">
              <a
                onClick={(e) => handleScrollToSection(e, "home")}
                className={`block py-2 px-3 group-hover:text-black rounded-sm md:p-0 transition-all duration-300 cursor-pointer uppercase hover:text-black ${
                  isMenuOpen ? "text-black" : "text-white"
                }`}
              >
                Acasa
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
            <li className="relative">
              <a
                onClick={(e) => handleScrollToSection(e, "about")}
                className={`block py-2 px-3 group-hover:text-black rounded-sm md:p-0 transition-all duration-300 cursor-pointer uppercase hover:text-black ${
                  isMenuOpen ? "text-black" : "text-white"
                }`}
              >
                Despre Noi
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
            <li className="relative">
              <a
                onClick={(e) => handleScrollToSection(e, "services")}
                className={`block py-2 px-3 group-hover:text-black rounded-sm md:p-0 transition-all duration-300 cursor-pointer uppercase hover:text-black ${
                  isMenuOpen ? "text-black" : "text-white"
                }`}
              >
                Servicii
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
            <li className="relative">
              <a
                onClick={(e) => handleScrollToSection(e, "projects")}
                className={`block py-2 px-3 group-hover:text-black rounded-sm md:p-0 transition-all duration-300 cursor-pointer uppercase hover:text-black ${
                  isMenuOpen ? "text-black" : "text-white"
                }`}
              >
                Proiecte
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
            <li className="relative">
              <a
                onClick={(e) => handleScrollToSection(e, "contact")}
                className="block py-2 px-3 text-red-600 group-hover:text-red-600 rounded-sm md:p-0 transition-all duration-300 cursor-pointer uppercase hover:text-red-600"
              >
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-red-600 transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
