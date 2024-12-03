import { imgPath } from "@/components/helpers/functions-general";
import { Search } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Headings = () => {
  return (
    <div>
      <header className="bg-dark py-1">
        <div className="container">
          <div className="flex justify-between items-center">
            <img src={`${imgPath}/logo.png`} alt="" className="w-[100px] h-[5rem]" />
            <nav>
              <ul className="flex items-center gap-5 text-white">
                <li>
                  <NavLink>About</NavLink>
                </li>
                <li>
                  <NavLink>Delivery</NavLink>
                </li>
                <li>
                  <NavLink>Loaction</NavLink>
                </li>
                <li>
                  <NavLink>Contact</NavLink>
                </li>
              </ul>
            </nav>
            <button>
              <Search stroke="#fff" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Headings;
