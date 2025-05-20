import data from "../Model/data";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
          {/* Logo and Contact Info */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-3 mb-4">
              <img src={data.logo} className="h-8" alt="Fragar Trading" />
              <span className="text-xl font-bold">Fragar Trading</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">
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
                0232 250 885
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
                info@high-quality.ro
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-12 mb-8 md:mb-0 sm:gap-10 md:gap-0">
            <div className="footer-edit mb-6 md:mb-0 md:block flex justify-center items-center gap-10">
              <h3 className="text-lg font-semibold mb-2">Acasă</h3>
              <div className="bar"></div>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Despre noi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Servicii
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Proiecte
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-edit mb-6 md:mb-0 md:block flex justify-center items-center gap-10">
              <h3 className="text-lg font-semibold mb-2 text-center footer-text">
                Serviciile noastre
              </h3>
              <div className="bar"></div>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Antrepriză generală
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Proiectare tehnică
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Implementare BMS
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Panouri fotovoltaice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Parcuri și spații urbane
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Construcții civile <br /> și industriale
                  </a>
                </li>
              </ul>
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
                <path d="M12 2a10 10 0 00-3.16 19.5c.5.09.68-.22.68-.49v-1.73c-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.8c.85.004 1.71.114 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.42.1 2.67.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.49A10 10 0 0012 2z"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
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
  );
}
