"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";


const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/Ourservises" },
  { name: "About", href: "/About" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/Contactus" },
];

export function HeaderApp() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={'/assets/imgs/logo.png'} width={1150} height={1150} className="h-11 w-auto" alt="Webbing Agency Logo" />
          </Link>
          
          {/* إخفاء زري Sign Up و Sign In في الشاشات الصغيرة */}
          <div className="hidden md:flex md:order-2 items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href="/signup" className="text-[#1F7099] font-bold mr-5">
              Sign Up
            </Link>
            <div className="bg-[#1F7099] px-5 py-1 rounded">
              <Link href="/login" className="font-bold text-white">
                Sign In
              </Link>
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
              {links.map((link, index) => <li key={index}>
                <Link href={link.href} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black">
                  {link.name}
                </Link>
              </li>)}
              {/* <li>
                <Link href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black">
                  Services
                </Link>
              </li> */}
              
            </ul>
          </div>
        </div>

        {/* القائمة المنسدلة للأجهزة الصغيرة مع زري Sign Up و Sign In */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col p-4 font-medium bg-white shadow-md">
          {links.map((link, index) => <li key={index}>
              <Link href={link.href} className="block py-2 px-3 text-black hover:bg-gray-100">
                {link.name}
              </Link>
            </li>)}
            {/* <li>
              <Link href="#" className="block py-2 px-3 text-gray-900 hover:bg-gray-100">
                Services
              </Link>
            </li> */}
            

            {/* زري Sign Up و Sign In يظهران في القائمة المنسدلة */}
            <li>
              <Link href="/signup" className="block py-2 px-3 text-[#1F7099] font-bold">
                Sign Up
              </Link>
            </li>
            <li>
              <Link href="/login" className="block py-2 px-3 font-bold text-[#1F7099]">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
