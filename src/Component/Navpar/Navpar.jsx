import React, { useState } from "react";
import logo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-11" alt="Webbing Agency Logo" />
          </a>
          
          {/* إخفاء زري Sign Up و Sign In في الشاشات الصغيرة */}
          <div className="hidden md:flex md:order-2 items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a href="/signup" className="text-[#1F7099] font-bold mr-5">
              Sign Up
            </a>
            <div className="bg-[#1F7099] px-5 py-1 rounded">
              <a href="/login" className="font-bold text-white">
                Sign In
              </a>
            </div>
          </div>

          {/* زر القائمة المنسدلة للأجهزة الصغيرة */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center text-gray-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* قائمة الروابط - تظهر للأجهزة الكبيرة */}
          <div className={`items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link href="#" className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black">
                  About
                </Link>
              </li>
              <li>
                <Link to="/allprojects" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* القائمة المنسدلة للأجهزة الصغيرة مع زري Sign Up و Sign In */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col p-4 font-medium bg-white shadow-md">
            <li>
              <Link href="#" className="block py-2 px-3 text-black hover:bg-gray-100">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">
                About
              </Link>
            </li>
            <li>
              <Link to="/allprojects" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">
                Contact Us
              </Link>
            </li>

            {/* زري Sign Up و Sign In يظهران في القائمة المنسدلة */}
            <li>
              <a href="/signup" className="block py-2 px-3 text-[#1F7099] font-bold">
                Sign Up
              </a>
            </li>
            <li>
              <a href="/login" className="block py-2 px-3 font-bold text-[#1F7099]">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
