import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Searchbar from "./Searchbar";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileNav from "./MobileNav";
import Logo from "../data/codas.png";
const Navbar = () => {
  const [active, setActive] = useState(false);

  // styles
  const itemActive =
    "sm:py-6 py-3 border-b sm:uppercase capitalize text-sm font-medium text-white lg:px-2 border-sky-400/70";

  const itemNormal =
    "inline-block lg:px-2 sm:uppercase capitalize text-sm font-medium hover:text-white sm:py-6 py-3";

  return (
    <div className='  md:border border-slate-800/70'>
      <div className=' custom-container '>
        {/* large screen nav */}
        <div className=' z-[999] flex items-center justify-between '>
          {/* ----------------- */}
          {/* logo */}
          {/* ----------------- */}

          <div>
            <img src={Logo} className='h-8' alt='gg' />
          </div>

          {/* ---------------- */}
          {/* mobile nav */}
          <div className='flex md:hidden mt-6'>
            {/* bars */}
            <Bars3Icon
              className='h-8 w-8 cursor-pointer hover:text-slate-100'
              onClick={() => setActive(true)}
            />
          </div>
          {/* ---------------- */}

          {/* mobilenav */}
          {active && <MobileNav setActive={setActive} />}

          {/* ----------------- */}
          {/* menu items */}
          {/* ----------------- */}
          <div className='hidden md:flex'>
            <Searchbar setActive={setActive} />
          </div>
          <ul className='md:flex hidden items-center gap-6'>
            <li>
              <NavLink
                end
                to={"/"}
                className={({ isActive }) =>
                  isActive ? itemActive : itemNormal
                }
              >
                {" "}
                home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/advocates"}
                className={({ isActive }) =>
                  isActive ? itemActive : itemNormal
                }
              >
                {" "}
                advocates{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/companies"}
                className={({ isActive }) =>
                  isActive ? itemActive : itemNormal
                }
              >
                {" "}
                companies{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
