"use client";
import React from "react";
import { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";
import { useAppSelector } from "../store/hook";

const HeaderMain = () => {
  const cartItems = useAppSelector((state) => state.counter.cartItems);
  const cartCount = cartItems.length;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="px-6 md:px-12 flex flex-wrap justify-between items-center pt-5 pb-5 border-b drop-shadow-md border-b-gray-300 shadow-stone-500">
      <div className="text-2xl font-bold">My Website</div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-black focus:outline-none"
      >
        ☰
      </button>
      <nav
        className={`w-full md:w-auto mt-4 md:mt-0 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-5 ${
          isOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        <Link
          href="#"
          className="px-3 py-2 border border-black rounded-md hover:bg-gray-400 hover:text-black"
        >
          Home
        </Link>
        <Link
          href="#"
          className="px-3 py-2 border border-black rounded-md hover:bg-gray-400 hover:text-black"
        >
          Product
        </Link>
      </nav>
      <div className="p-2 border border-black rounded-3xl hover:bg-gray-400 hover:text-black">
        <Link href="/S_cart">
        <div className="relative w-6 h-6"> {/* Controls the icon and badge area size */}
        <HiOutlineShoppingBag className="text-[24px]" />
        <div className="bg-red-800 rounded-full absolute -top-1 -right-1 w-4 h-4 text-[10px] text-white grid place-items-center">
        {cartCount}
        </div>
      </div>
        </Link>
    </div>

    </header>
  );
};

export default HeaderMain;
