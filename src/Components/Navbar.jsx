import { useState, useEffect, useRef } from "react";
import data from "../Model/data";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Always visible
  const [isTransparent, setIsTransparent] = useState(true); // Transparent over video
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
      const videoHeight = window.innerHeight; // Height of video section

      // In video section (top)
      if (currentScrollPosition <= videoHeight) {
        setIsNavbarVisible(true);
        setIsTransparent(true);
      } else {
        // After video section
        setIsTransparent(false);
        if (currentScrollPosition < lastScrollPosition.current) {
          // Scrolling up
          setIsNavbarVisible(true);
        } else {
          // Scrolling down
          setIsNavbarVisible(false);
        }
      }

      lastScrollPosition.current = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isTransparent ? "text-white" : "text-black";
  const bgColor = isTransparent ? "bg-transparent" : "bg-white";
  const navbarClasses = `fixed w-full z-20 top-0 start-0 transition-all duration-300 ${bgColor} ${
    isNavbarVisible ? "translate-y-0" : "-translate-y-full"
  } ${!isTransparent ? "shadow-md" : ""}`;

  return (
    <nav ref={navbarRef} className={navbarClasses}>
      <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4 xl:px-20">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={data.logo} className="h-8" alt="Fragar" />
          <span
            className={`leading-none self-center text-xl font-bold whitespace-nowrap ${textColor} transition-colors duration-300`}
          >
            Fragar Trading
          </span>
        </a>
        <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="tel:+40232250885" className="md:hidden">
            <button
              type="button"
              className="text-white cursor-pointer bg-[#0655D1] hover:bg-blue-800 hover:font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 hover:scale-110"
            >
              Contact
            </button>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm ${textColor} rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-300`}
            aria-controls="navbar-sticky"
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
            className={`absolute top-full left-0 w-full md:static md:flex md:w-auto transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            } md:opacity-100 md:translate-y-0 md:pointer-events-auto`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 font-bold bg-white text-black md:bg-transparent md:text-inherit rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:items-center">
              {/* <li className="relative group">
                <a
                  className={`block py-2 px-3 ${
                    isMenuOpen ? "text-black" : textColor
                  } rounded-sm md:p-0 transition-all duration-300 cursor-pointer`}
                  aria-current="page"
                  onClick={(e) => handleScrollToSection(e, "about")}
                >
                  Acasa
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li> */}
              <li className="relative group">
                <a
                  className={`block py-2 px-3 ${
                    isMenuOpen ? "text-black" : textColor
                  } rounded-sm md:p-0 transition-all duration-300 cursor-pointer`}
                  aria-current="page"
                  onClick={(e) => handleScrollToSection(e, "about")}
                >
                  Despre noi
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="relative group">
                <a
                  className={`block py-2 px-3 ${
                    isMenuOpen ? "text-black" : textColor
                  } rounded-sm md:p-0 transition-all duration-300 cursor-pointer`}
                  onClick={(e) => handleScrollToSection(e, "solutions")}
                >
                  Servicii
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="relative group">
                <a
                  className={`block py-2 px-3 ${
                    isMenuOpen ? "text-black" : textColor
                  } rounded-sm md:p-0 transition-all duration-300 cursor-pointer`}
                  onClick={(e) => handleScrollToSection(e, "proiecte")}
                >
                  Proiecte
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              {/* <li className="relative group">
                <a
                  className={`block py-2 px-3 ${
                    isMenuOpen ? "text-black" : textColor
                  } rounded-sm md:p-0 transition-allCASTE-4 cursor-pointer`}
                  onClick={(e) => handleScrollToSection(e, "proiecte")}
                >
                  Portofoliu
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li className="relative group">
                <a
                  className={`block py-2 px-3 ${
                    isMenuOpen ? "text-black" : textColor
                  } rounded-sm md:p-0 transition-all duration-300 cursor-pointer`}
                  onClick={(e) => handleScrollToSection(e, "blog")}
                >
                  Blog
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li> */}
              <li className="relative group md:ml-4 hidden md:block">
                <a href="tel:+40232250885">
                  <button className="text-white cursor-pointer bg-[#0655D1] hover:bg-blue-800 hover:font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 hover:scale-110">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                      Contact
                    </span>
                    {/* <span className="absolute inset-0 bg-[#F42223] translate-y-full group-hover:translate-y-0 transition-transform duration-800 rounded-full scale-120"></span> */}
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
