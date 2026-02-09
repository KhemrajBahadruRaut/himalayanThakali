"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../../components/layout/navbar/Navbar";
import { MenuList } from "@mui/material";

const MenuPage = () => {
  const thaliItems = [
    {
      id: 1,
      name: "Veg / Chicken Thali",
      description:
        "Traditional set meal with 12 authentic components including dal, bhat, tarkari, achar, gunduk",
      price: "Rs. 450/550",
      image: "/thakali-plates/thakali.png",
    },
    {
      id: 2,
      name: "Veg / Chicken Thali",
      description:
        "Traditional set meal with 12 authentic components including dal, bhat, tarkari, achar, gunduk",
      price: "Rs. 500",
      image: "/thakali-plates/p4.png",
    },
    {
      id: 3,
      name: "Veg / Chicken Thali",
      description:
        "Traditional set meal with 12 authentic components including dal, bhat, tarkari, achar, gunduk",
      price: "Rs. 450/550",
      image: "/thakali-plates/p4.png",
    },
    {
      id: 4,
      name: "Veg / Chicken Thali",
      description:
        "Traditional set meal with 12 authentic components including dal, bhat, tarkari, achar, gunduk",
      price: "Rs. 500",
      image: "/thakali-plates/p4.png",
    },
  ];

  const menuCategories = [
    { name: "Thali Set", active: true },
    { name: "Buff Items", active: false },
    { name: "Chicken Items", active: false },
    { name: "Fish Items", active: false },
    { name: "Veg Snacks", active: false },
    { name: "Pork Items", active: false },
    { name: "Egg Items", active: false },
    { name: "Boiled Items", active: false },
    { name: "Biryani", active: false },
    { name: "Pizza", active: false },
    { name: "Soup & Salad", active: false },
    { name: "Sekuwa", active: false },
    { name: "Momo", active: false },
    { name: "Noodles", active: false },
    { name: "Katti Rolls & Stick Foods", active: false },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-[#1E1E1E] text-white pt-24">
        <div className="flex flex-col lg:flex-row">
          {/* ================= Sidebar ================= */}
          <aside className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-gray-800 p-4 lg:p-6 lg:min-h-screen">
            <h2 className="text-orange-500 font-bold text-xl mb-4 lg:mb-6">
              MENU
            </h2>

            <nav className="overflow-x-auto lg:overflow-visible">
              <ul className="flex lg:flex-col gap-2 min-w-max lg:min-w-0">
                {menuCategories.map((category, index) => (
                  <li key={index}>
                    <button
                      className={`whitespace-nowrap w-full px-4 py-2 rounded transition-colors text-sm lg:text-base ${
                        category.active
                          ? "bg-orange-500 text-white font-medium"
                          : "text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* ================= Main Content ================= */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-20 sm:w-32 bg-linear-to-r from-transparent to-orange-500" />
                <div className="flex items-center gap-2 text-orange-500">
                  <span className="uppercase tracking-wider text-sm font-medium">
                     Our Menu
                  </span>
                </div>
                <div className="h-px w-20 sm:w-32 bg-linear-to-l from-transparent to-orange-500" />
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif">
                From Our Kitchen
              </h1>
            </div>

            {/* ================= Thali Grid ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
              {thaliItems.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg p-6 bg-gray-800/50 hover:bg-gray-800 transition-colors"
                >
                  <div className="aspect-square max-w-55 mx-auto rounded-full overflow-hidden mb-4 bg-gray-700">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-center mb-2">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-xs text-center mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <p className="text-center text-orange-500 font-medium">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            {/* ================= Single Item ================= */}
            <div className="max-w-sm mx-auto px-2 sm:px-0">
              <div className="rounded-lg p-6 bg-gray-800/50 hover:bg-gray-800 transition-colors">
                <div className="aspect-square max-w-55 mx-auto rounded-full overflow-hidden mb-4 bg-gray-700">
                  <img
                    src={thaliItems[3].image}
                    alt={thaliItems[3].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold text-center mb-2">
                  {thaliItems[3].name}
                </h3>

                <p className="text-gray-400 text-xs text-center mb-4 leading-relaxed">
                  {thaliItems[3].description}
                </p>

                <p className="text-center text-orange-500 font-medium">
                  {thaliItems[3].price}
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
