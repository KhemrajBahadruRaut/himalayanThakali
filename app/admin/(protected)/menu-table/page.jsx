"use client";
import { useEffect, useState } from "react";
import {
  Plus,
  Trash2,
  Utensils,
  FolderPlus,
  Image as ImageIcon,
  Loader2,
} from "lucide-react";

export default function MenuAdmin() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });

  const API = "http://localhost/himalayanthakali_backend/menu";

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${API}/get_categories.php`);
      const data = await res.json();
      setCategories(data);
      if (!activeCategory && data.length) {
        handleCategoryClick(data[0].id);
      }
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    fetchItems(id);
  };

  const fetchItems = async (id) => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/get_items.php?category_id=${id}`);
      const data = await res.json();
      setItems(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const addCategory = async () => {
    if (!newCategory) return;
    await fetch(`${API}/add_category.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newCategory }),
    });
    setNewCategory("");
    fetchCategories();
  };

  const deleteCategory = async (id) => {
    if (!confirm("Are you sure? This will delete all items in this category."))
      return;
    await fetch(`${API}/delete_category.php?id=${id}`);
    fetchCategories();
    setItems([]);
  };

  const addItem = async () => {
    if (!activeCategory || !form.name || !form.price) return;

    const fd = new FormData();
    fd.append("category_id", activeCategory);
    fd.append("name", form.name);
    fd.append("description", form.description);
    fd.append("price", form.price);
    if (form.image) fd.append("image", form.image);

    await fetch(`${API}/add_item.php`, {
      method: "POST",
      body: fd,
    });

    setForm({ name: "", description: "", price: "", image: null });
    fetchItems(activeCategory);
  };

  const deleteItem = async (id) => {
    if (!confirm("Delete this item?")) return;
    await fetch(`${API}/delete_item.php?id=${id}`);
    fetchItems(activeCategory);
  };

  return (
    <div className=" max-w-7xl mx-auto bg-gray-50 min-h-screen font-sans text-slate-900">
      {/* Header */}
      <header className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight flex items-center gap-3">
            <Utensils className="text-[#E9842C]" size={20} />
            Menu <span className="text-[#E9842C]">Management</span>
          </h1>
          <p className="text-slate-500 mt-1">
            Organize your restaurant offerings and pricing.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
        {/* Left Column: Categories */}
        <div className="lg:col-span-3 space-y-1">
          <div className="bg-white shadow-sm rounded p-3 border border-slate-200">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FolderPlus size={20} className="text-[#E9842C]" />
              Categories
            </h2>

            <div className="flex gap-2 mb-6">
              <input
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Ex: Main Course"
                className="flex-1 border border-slate-200 focus:ring-2 focus:ring-[#E9842C]/20 focus:border-[#E9842C] p-2.5 rounded-xl outline-none transition-all"
              />
              <button
                onClick={addCategory}
                className="bg-[#E9842C] hover:bg-[#cf7320] text-white p-2.5 rounded-xl transition-all shadow-md active:scale-95"
              >
                <Plus size={24} />
              </button>
            </div>

            <div className="space-y-1">
              {categories.length === 0 && (
                <div className="text-center py-8 text-slate-400 italic">
                  No categories created
                </div>
              )}
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`group flex justify-between items-center px-2 py-1 rounded-lg cursor-pointer transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-[#E9842C] text-white shadow-lg"
                      : "hover:bg-orange-50 text-slate-600"
                  }`}
                >
                  <span className="font-medium">{cat.name}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteCategory(cat.id);
                    }}
                    className={`p-1 rounded-lg transition-colors ${
                      activeCategory === cat.id
                        ? "hover:bg-white/20 text-white"
                        : "text-slate-300 hover:text-red-500 hover:bg-red-50"
                    }`}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Items */}
        <div className="lg:col-span-9">
          {activeCategory ? (
            <div className="space-y-6">
              {/* Form Card */}
              <div className="bg-white shadow-sm rounded p-6 border border-slate-200">
                <h2 className="text-lg font-bold mb-4">Add New Item</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    placeholder="Item Name (e.g. Thakali Thali)"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border border-slate-200 focus:ring-2 focus:ring-[#E9842C]/20 focus:border-[#E9842C] p-2.5 rounded-xl outline-none"
                  />
                  <input
                    placeholder="Price (Rs.)"
                    type="number"
                    value={form.price}
                    onChange={(e) =>
                      setForm({ ...form, price: e.target.value })
                    }
                    className="border border-slate-200 focus:ring-2 focus:ring-[#E9842C]/20 focus:border-[#E9842C] p-2.5 rounded-xl outline-none"
                  />
                  <div className="md:col-span-2">
                    <textarea
                      placeholder="Item Description"
                      value={form.description}
                      onChange={(e) =>
                        setForm({ ...form, description: e.target.value })
                      }
                      className="w-full border border-slate-200 focus:ring-2 focus:ring-[#E9842C]/20 focus:border-[#E9842C] p-2.5 rounded-xl outline-none h-20"
                    />
                  </div>
                  <div className="md:col-span-2 flex items-center gap-4 border-2 border-dashed border-slate-100 p-4 rounded-xl">
                    <ImageIcon className="text-slate-400" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setForm({ ...form, image: e.target.files[0] })
                      }
                      className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-[#E9842C] hover:file:bg-orange-100"
                    />
                  </div>
                  <button
                    onClick={addItem}
                    className="md:col-span-2 bg-slate-900 hover:bg-black text-white py-3 rounded-xl font-bold transition shadow-lg active:transform active:scale-[0.99]"
                  >
                    Add Item to Menu
                  </button>
                </div>
              </div>

              {/* Items List */}
              <div className="bg-white shadow-sm rounded overflow-hidden border border-slate-200">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <h2 className="font-bold text-xl text-slate-800">
                    Menu Items
                  </h2>
                  {loading && (
                    <Loader2
                      className="animate-spin text-[#E9842C]"
                      size={20}
                    />
                  )}
                </div>

                <div className="divide-y divide-slate-100">
                  {items.length === 0 && !loading && (
                    <div className="p-12 text-center text-slate-400">
                      This category is currently empty. Add your first item
                      above!
                    </div>
                  )}
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-6 flex justify-between items-center hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex gap-4 items-center">
                        {/* Image Container */}
                        <div className="h-20 w-20 rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200">
                          {item.image_url ? (
                            <img
                              src={item.image_url}
                              alt={item.name}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.target.src =
                                  "https://via.placeholder.com/80?text=No+Image";
                              }}
                            />
                          ) : (
                            <Utensils className="text-slate-300" size={24} />
                          )}
                        </div>

                        <div>
                          <h3 className="font-bold text-slate-800 uppercase tracking-wide">
                            {item.name}
                          </h3>
                          <p className="text-slate-500 text-sm max-w-md line-clamp-1">
                            {item.description}
                          </p>
                          <p className="text-[#E9842C] font-bold mt-1">
                            Rs. {item.price}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => deleteItem(item.id)}
                        className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center bg-white border-2 border-dashed border-slate-200 rounded p-12 text-center">
              <div className="bg-orange-50 p-6 rounded-full mb-4">
                <Utensils size={48} className="text-[#E9842C]" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                No Category Selected
              </h3>
              <p className="text-slate-500 mt-2">
                Select or create a category on the left to manage its menu
                items.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
