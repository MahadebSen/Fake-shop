import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import logo from "../../Images/logo 1.png";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleNavbar = () => {
    setActive(true);
  };

  const handleX = () => {
    setActive(false);
  };

  const menus = (
    <>
      <a href="/">
        <li
          className="hover:bg-[#bb005d] hover:text-white text-[rgb(197,227,244)] px-3 py-2 rounded-lg"
          onClick={handleX}
        >
          Home
        </li>
      </a>
      <a href="/" onClick={handleX}>
        <li className="hover:bg-[#bb005d] hover:text-white text-[rgb(197,227,244)] px-3 py-2 rounded-lg">
          About Us
        </li>
      </a>
      <a href="/" onClick={handleX}>
        <li className="hover:bg-[#bb005d] hover:text-white text-[rgb(197,227,244)] px-3 py-2 rounded-lg">
          Products
        </li>
      </a>
      <a href="/" onClick={handleX}>
        <li className="hover:bg-[#bb005d] hover:text-white text-[rgb(197,227,244)] px-3 py-2 rounded-lg">
          Comtact Us
        </li>
      </a>
    </>
  );

  return (
    <section className="sticky z-50 top-0 bg-[rgb(6,30,45)]">
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mx-6 py-4 md:mx-12 md:py-4">
          <div>
            <a to="/">
              <img width="130px" className="rounded-lg" src={logo} alt="" />
            </a>
          </div>

          <ul className="hidden md:flex items-center justify-center gap-5 text-lg">
            {menus}
          </ul>

          <div onClick={handleNavbar} className="border rounded-md md:hidden">
            <FontAwesomeIcon
              className="px-3 py-1"
              icon={faBars}
              color="white"
              size="lg"
            />
          </div>
        </div>

        <div
          className={
            active
              ? "md:hidden absolute z-50 top-0 px-6 py-4 bg-[rgb(6,30,45)] w-[100%]"
              : "hidden"
          }
        >
          <div className="flex items-center justify-between">
            <div>
              <a to="/">
                <img width="60px" className="rounded-lg" src={logo} alt="" />
              </a>
            </div>

            <div onClick={handleX} className="border rounded-md">
              <FontAwesomeIcon
                className="px-3 py-1"
                icon={faXmark}
                color="white"
                size="xl"
              />
            </div>
          </div>

          <ul className="mx-10 mt-4 mb-3">{menus}</ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
