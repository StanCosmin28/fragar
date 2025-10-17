import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import data from "../Model/data";
import "./footer.css";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    // Check if on homepage
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleConsultClick = (e) => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      setShowPopup(true);
    }
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText("+40232250885");
    alert("Numărul de telefon a fost copiat!");
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
            {/* Logo and Contact Info */}
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={data.logoWhite}
                  className="h-8"
                  alt="Fragar Trading"
                />
              </div>
              <h3 className="text-lg font-semibold mb-8">
                Construim Clădiri și Spații Smart pentru un Viitor Eficient și
                Sustenabil.
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  România, Iași Aleea Rozelor 6A Demisol 700202
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <a href="tel:+40232250885" onClick={handleConsultClick}>
                    0232 250 885
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <a href="mailto:info@high-quality.ro">info@high-quality.ro</a>
                </li>
              </ul>
            </div>

            {/* Navigation Links */}
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:space-x-12 mb-8 md:mb-0 sm:gap-10 md:gap-0 md:justify-end">
                <div className="footer-edit footer-edit-home mb-6 md:mb-0 md:block flex justify-center items-center">
                  <h3 className="text-lg font-semibold mb-2">Acasă</h3>
                  <div className="bar"></div>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#about"
                        className="hover:underline"
                        onClick={(e) => handleNavClick(e, "about")}
                      >
                        Despre noi
                      </a>
                    </li>
                    <li>
                      <a
                        href="#services"
                        className="hover:underline"
                        onClick={(e) => handleNavClick(e, "services")}
                      >
                        Servicii
                      </a>
                    </li>
                    <li>
                      <a
                        href="#projects"
                        className="hover:underline"
                        onClick={(e) => handleNavClick(e, "projects")}
                      >
                        Proiecte
                      </a>
                    </li>
                    <li>
                      <a href="/" className="hover:underline">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-edit footer-edit-service mb-6 md:mb-0 md:block flex justify-center items-center gap-10">
                  <h3 className="text-lg font-semibold mb-2 text-center footer-text">
                    Serviciile noastre
                  </h3>
                  <div className="bar"></div>
                  <ul className="space-y-2">
                    <li>
                      <p>Antrepriză generală</p>
                    </li>
                    <li>
                      <p>Proiectare tehnică</p>
                    </li>
                    <li>
                      <p>Implementare BMS</p>
                    </li>
                    <li>
                      <p>Panouri fotovoltaice</p>
                    </li>
                    <li>
                      <p>Parcuri și spații urbane</p>
                    </li>
                    <li>
                      <p>
                        Construcții civile <br /> și industriale
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media and Copyright */}
          <div className="flex flex-col md:flex-row-reverse justify-between items-center mt-8 border-t border-gray-700 pt-4">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-white hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.34,5.46a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46ZM21.94,7.88a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47,4.78,4.78,0,0,0-1.77,1.15,4.7,4.7,0,0,0-1.15,1.77,7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06a5.73,5.73,0,0,1-1.86-.34,3.27,3.27,0,0,1-1.15-.75,3,3,0,0,1-.74-1.15,5.54,5.54,0,0,1-.34-1.86c0-1-.06-1.37-.06-4s0-3,.06-4a5.54,5.54,0,0,1,.34-1.86,3,3,0,0,1,.74-1.15,3.14,3.14,0,0,1,1.15-.75,5.73,5.73,0,0,1,1.86-.34c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34,3.06,3.06,0,0,1,1.15.75,3.06,3.06,0,0,1,.75,1.15,5.61,5.61,0,0,1,.34,1.86c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87a5.13,5.13,0,1,0,5.13,5.13A5.12,5.12,0,0,0,12,6.87Zm0,8.46a3.33,3.33,0,1,1,3.33-3.33A3.33,3.33,0,0,1,12,15.33Z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/fragar-trading-008020326/"
                target="_blank"
                className="text-white hover:text-gray-400"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.96 0-1.74-.78-1.74-1.74s.78-1.74 1.74-1.74 1.74.78 1.74 1.74-.78 1.74-1.74 1.74zm13.5 11.3h-3v-5.5c0-1.31-.47-2.2-1.65-2.2-.9 0-1.43.61-1.67 1.2-.09.22-.11.53-.11.84v5.66h-3v-10h3v1.33c.43-.66 1.2-1.6 2.92-1.6 2.14 0 3.74 1.4 3.74 4.41v5.86z"></path>
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-400">
              © 2025 FRAGAR TRADING SRL. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </footer>

      {/* Popup with blur background for phone number on non-mobile devices */}
      {showPopup && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white/5 backdrop-blur-md">
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl text-center max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Consultanță Gratuită</h2>
            <p className="text-xl font-semibold mb-4">📞 +40 232 250 885</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleCopyNumber}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition cursor-pointer"
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
