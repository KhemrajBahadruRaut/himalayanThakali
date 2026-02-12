"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/layout/navbar/Navbar";
import Footer from "../../components/layout/footer/Footer";

const API = "http://localhost/himalayanthakali_backend/menu";

const MenuPage = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // ================= Fetch Categories =================
  const fetchCategories = async () => {
    try {
      const res = await fetch(`${API}/get_categories.php`);
      const data = await res.json();
      setCategories(data);

      if (data.length > 0) {
        setActiveCategory(data[0].id);
        fetchItems(data[0].id);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  // ================= Fetch Items =================
  const fetchItems = async (id) => {
    try {
      setActiveCategory(id);
      const res = await fetch(`${API}/get_items.php?category_id=${id}`);
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Error fetching items:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-[#1E1E1E] text-white pt-24">
        <div className="flex flex-col lg:flex-row">
          {/* ================= Sidebar ================= */}
          <aside className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-gray-800 p-4  pt-20 ">
            <h2 className="text-[#E9842C] font-bold text-xl mb-4 lg:mb-6 text-center">
              MENU
            </h2>

            <nav className="overflow-x-auto lg:overflow-visible">
              <ul className="flex lg:flex-col gap-2 min-w-max lg:min-w-0">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => fetchItems(category.id)}
                      className={`whitespace-nowrap w-full px-4 py-2 rounded transition-colors text-sm lg:text-base ${
                        activeCategory === category.id
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
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-20 sm:w-32 bg-linear-to-r from-transparent to-orange-500" />
                <div className="flex items-center gap-2 text-[#E9842C]">
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

            {/* ================= Items Grid ================= */}
            {/* ================= Items Section ================= */}
            {items.length === 0 ? (
              <div className="flex justify-center items-center py-20">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-300 mb-2">
                    No Items Available
                  </h3>
                  <p className="text-gray-500 text-sm">
                    There are no items in this category at the moment.
                  </p>
                </div>
              </div>
            ) : (
              <>
                {/* ================= Items Grid ================= */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
                  {items.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className="rounded-lg p-6 bg-gray-800/50 hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                      <div className="aspect-square max-w-55 mx-auto rounded-full overflow-hidden mb-4 bg-gray-700">
                        <img
                          src={
                            item.image
                              ? `${API}/uploads/${item.image}`
                              : "/placeholder.png"
                          }
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
                        Rs. {item.price}/-
                      </p>
                    </div>
                  ))}
                </div>

                {/* ================= Single Item ================= */}
                {items.length > 3 && (
                  <div className="max-w-sm mx-auto px-2 sm:px-0">
                    <div
                      onClick={() => setSelectedItem(items[3])}
                      className="rounded-lg p-6 bg-gray-800/50 hover:bg-gray-800 transition-colors cursor-pointer"
                    >
                      <div className="aspect-square max-w-55 mx-auto rounded-full overflow-hidden mb-4 bg-gray-700">
                        <img
                          src={
                            items[3].image
                              ? `${API}/uploads/${items[3].image}`
                              : "/placeholder.png"
                          }
                          alt={items[3].name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <h3 className="text-lg font-semibold text-center mb-2">
                        {items[3].name}
                      </h3>

                      <p className="text-gray-400 text-xs text-center mb-4 leading-relaxed">
                        {items[3].description}
                      </p>

                      <p className="text-center text-orange-500 font-medium">
                        Rs. {items[3].price}/-
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* ================= Single Item (4th Item Layout Preserved) ================= */}
            {items.length > 3 && (
              <div className="max-w-sm mx-auto px-2 sm:px-0">
                <div className="rounded-lg p-6 bg-gray-800/50 hover:bg-gray-800 transition-colors">
                  <div className="aspect-square max-w-55 mx-auto rounded-full overflow-hidden mb-4 bg-gray-700">
                    <img
                      src={
                        items[3].image
                          ? `${API}/uploads/${items[3].image}`
                          : "/placeholder.png"
                      }
                      alt={items[3].name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-center mb-2">
                    {items[3].name}
                  </h3>

                  <p className="text-gray-400 text-xs text-center mb-4 leading-relaxed">
                    {items[3].description}
                  </p>

                  <p className="text-center text-orange-500 font-medium">
                    Rs. {items[3].price}/-
                  </p>
                </div>
              </div>
            )}
          </main>
          {/* ================= Modal ================= */}
          {selectedItem && (
            <div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
              onClick={() => setSelectedItem(null)}
            >
              <div
                className="bg-[#1E1E1E] max-w-md w-full rounded-lg p-6 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-white"
                >
                  ✕
                </button>

                {/* Image */}
                <div className="aspect-square rounded-lg overflow-hidden mb-4 bg-gray-700">
                  <img
                    src={
                      selectedItem.image
                        ? `${API}/uploads/${selectedItem.image}`
                        : "/placeholder.png"
                    }
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <h2 className="text-xl font-semibold mb-2 text-center">
                  {selectedItem.name}
                </h2>

                <p className="text-gray-400 text-sm text-center mb-4">
                  {selectedItem.description}
                </p>

                <p className="text-center text-orange-500 font-medium text-lg">
                  Rs. {selectedItem.price}/-
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default MenuPage;
