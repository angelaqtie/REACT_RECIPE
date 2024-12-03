import React from 'react'
import { Facebook, Instagram, Search, Twitter, Youtube } from "lucide-react";


const Footnote = () => {
  return (
    <footer className="py-5 px-4
     md:py-24 bg-black text-white">
      <div className="container">
        <div className="grid md:grid-cols-[1fr,_1fr,_2fr,_2fr] ">
          <ul className="md:space-y-5 mb-4 border-b border-gray-600 border-opacity-25 md:border-none">
            <li className="mb-2">Privary Policy</li>
            <li className="mb-2">Terms & Conditions</li>
            <li className="mb-2">Cookie Policy</li>
          </ul>
          <ul className="md:space-y-5 mb-4 border-b border-gray-600 border-opacity-25 md:border-none">
            <li className="mb-2">About</li>
            <li className="mb-2">Menu</li>
            <li className="mb-2">Delivery</li>
          </ul>
          <ul className="md:space-y-5 mb-4 border-b border-gray-600 border-opacity-25 md:border-none">
            <li className="mb-2">Gallery</li>
            <li className="mb-2">Contact</li>
          </ul>

          <div>
            <ul className="flex gap-5 mb-5">
              <li>
                <Facebook />
              </li>
              <li>
                <Twitter />
              </li>
              <li>
                <Instagram />
              </li>
              <li>
                <Youtube />
              </li>
            </ul>
            <p className="mb-3">012 345 6789</p>
            <p>1818 St. Silangan Palagaran Tiaong Quezon</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footnote