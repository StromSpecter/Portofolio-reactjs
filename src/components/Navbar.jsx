import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <p className="text-xl font-bold">PORTOFOLIO</p>
        {/* menu tampilan tablet dan desktop */}
        <ul className="flex-row hidden gap-5 md:flex">
          <li>
            <a className="hover:text-gray-300" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="#service">
              Service
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="#portfolio">
              Portofolio
            </a>
          </li>
        </ul>
        <div className="block md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {/* menu tampilan mobile */}
      <div className={`${isMenuOpen ? "block" : "hidden"}`}>
        <div className="container mx-auto">
          <ul className="absolute flex flex-col container gap-3 w-full bg-black top-14.5 p-4">
            <li>
              <a className="text-white hover:text-gray-300" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#about">
                About me
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#service">
                Service
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-300" href="#portfolio">
                Portofolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
