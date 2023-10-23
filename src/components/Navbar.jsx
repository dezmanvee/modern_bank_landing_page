import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="bank logo" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => {
          return (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          );
        })}
      </ul>

      <div className="sm:hidden flex justify-end items-center flex-1">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(prev => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} absolute right-0 top-20 p-6 mx-4 my-2 bg-black-gradient min-w-[200px] rounded-lg sidebar`}>
        
          <ul className="list-none flex flex-col justify items-center flex-1">
          {navLinks.map((nav, index) => {
            return (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-10"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            );
          })}
        </ul>

        </div>
      </div>
    </nav>
  );
};
export default Navbar;
