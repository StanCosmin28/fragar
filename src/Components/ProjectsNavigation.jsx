import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import data from "../Model/data";
import "./navbar.css";

export default function ProjectsNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

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

  const handleContactClick = (e) => {
    const isMobileUA = /Mobi|Android|iPhone|iPad|iPod/i.test(
      navigator.userAgent
    );
    if (!isMobileUA) {
      e.preventDefault();
      setShowPopup(true);
    }
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText("+40232250885");
    alert("Numărul de telefon a fost copiat!");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition < lastScrollPosition.current) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }

      lastScrollPosition.current = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `fixed w-full z-20 top-0 start-0 transition-all duration-300 bg-white ${
    isNavbarVisible ? "translate-y-0" : "-translate-y-full"
  } shadow-md`;

  return (
    <>
      <nav ref={navbarRef} className={navbarClasses}>
        <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4 xl:px-20">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img className="h-8" src={data.logoDark} alt="Fragar Trading" />
          </Link>
          <div className="flex items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* buton mobil */}
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
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-300"
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
              <ul className="flex flex-col p-4 md:p-0 font-bold bg-white text-black md:bg-transparent md:text-black rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:items-center">
                <li className="relative group">
                  <Link
                    to="/"
                    className="block py-2 px-3 text-black rounded-sm md:p-0 transition-all duration-300 cursor-pointer"
                  >
                    Acasă
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    to="/"
                    className="block py-2 px-3 text-black rounded-sm md:p-0 transition-all duration-300 cursor-pointer"
                  >
                    Despre noi
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    to="/"
                    className="block py-2 px-3 text-black rounded-sm md:p-0 transition-all duration-300 cursor-pointer"
                  >
                    Servicii
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    to="/noutati"
                    className="block py-2 px-3 text-black rounded-sm md:p-0 transition-all duration-300 cursor-pointer"
                  >
                    Noutăți
                  </Link>
                </li>
                {/* buton desktop */}
                <li className="relative group md:ml-4 hidden md:block">
                  <a href="tel:+40232250885" onClick={handleContactClick}>
                    <button className="text-white cursor-pointer bg-[#0655D1] hover:bg-blue-800 hover:font-bold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 hover:scale-110">
                      <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                        Contact
                      </span>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* popup desktop */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/5 backdrop-blur-md">
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl text-center max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <p className="text-xl font-semibold mb-4">📞 +40 232 250 885</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleCopyNumber}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                Copiază
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition cursor-pointer"
              >
                Închide
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
