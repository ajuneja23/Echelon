import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom';
import '../index.css';

const Navbar=()=> {
    return (
        <div>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-3">
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <span className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
        Echelon Camp
      </span>
      <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span className="block relative w-6 h-px rounded-sm bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div className="lg:flex flex-grow items-center">
      <ul className="flex lg:flex-row list-none ml-auto">
          <li className="link">
            <Link to="/"><span className="px-3 py-2 flex items-center text-xs uppercase  text-white hover:font-bold">
              Home
            </span>
            </Link>
          </li>
          <li className="link">
            <Link to="/aboutus">
            <span className="px-3 py-2 flex items-center text-xs uppercase   text-white hover:font-bold" >
              About Us
            </span>
            </Link>
          </li>
          <li className="link">
              <Link to="/signup">
            <span className="px-3 py-2 flex items-center text-xs uppercase text-white hover:font-bold">
              Sign Up
            </span>
            </Link>
          </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    );
};

export default Navbar;