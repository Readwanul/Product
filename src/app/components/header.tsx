import React from "react";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { useAppSelector } from "../store/hook";

const HeaderMain = () => {
  const cartItems = useAppSelector((state) => state.counter.cartItems);
  const cartCount = cartItems.length;


  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container flex justify-between items-center">
        <div className="mx-10 font-bold text-4xl text-center sm:text-left text-blackish pb-4 sm:pb-0">
          Logo
        </div>

        <div className="w-full sm:w-[600px] relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <IoIosSearch />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Products..."
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2 bottom-1 bg-slate-400 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 dark:bg-slate-500 dark:hover:bg-slate-600 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>

        <div className="mx-10 hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <BiUser />
          <div className="relative">
            <FiHeart />
            <div className="bg-red-800 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            0
            </div>
          </div>

          <div className="relative">
          <Link href="/cart">
            <HiOutlineShoppingBag />
            <div className="bg-red-800 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            {cartCount}
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
