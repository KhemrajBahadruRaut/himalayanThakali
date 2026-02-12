"use client";
import { useEffect, useState } from "react";

export default function MenuAdmin() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [items, setItems] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });

  const API = "http://localhost/himalayanthakali_backend/menu";

  const fetchCategories = () => {
    fetch(`${API}/get_categories.php`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        if (!activeCategory && data.length) {
          setActiveCategory(data[0].id);
          fetchItems(data[0].id);
        }
      });
  };

  const fetchItems = (id) => {
    setActiveCategory(id);
    fetch(`${API}/get_items.php?category_id=${id}`)
      .then((res) => res.json())
      .then(setItems);
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
    if (!confirm("Delete category and all items?")) return;
    await fetch(`${API}/delete_category.php?id=${id}`);
    fetchCategories();
    setItems([]);
  };
  const addItem = async () => {
    if (!activeCategory) return;

    const fd = new FormData();
    fd.append("category_id", activeCategory);
    fd.append("name", form.name);
    fd.append("description", form.description);
    fd.append("price", form.price);

    if (form.image) {
      fd.append("image", form.image);
    }

    await fetch(`${API}/add_item.php`, {
      method: "POST",
      body: fd, // ✅ multipart/form-data
    });

    setForm({ name: "", description: "", price: "", image: null });
    fetchItems(activeCategory);
  };

  const deleteItem = async (id) => {
    await fetch(`${API}/delete_item.php?id=${id}`);
    fetchItems(activeCategory);
  };

  return (
    <div className="p-6 max-w-5xl">
      <h1 className="text-2xl font-bold mb-6">Menu Management</h1>

      {/* ===== Category Section ===== */}
      <div className="border p-4 mb-6 rounded">
        <h2 className="font-semibold mb-3">Categories</h2>

        <div className="flex gap-2 mb-4">
          <input
            id="category-name"
            name="category_name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New category name"
            className="border p-2 flex-1"
          />

          <button onClick={addCategory} className="bg-black text-white px-4">
            Add
          </button>
        </div>

        {categories.map((cat) => (
          <div key={cat.id} className="flex justify-between py-1">
            <span
              className={`cursor-pointer ${
                activeCategory === cat.id ? "font-bold" : ""
              }`}
              onClick={() => fetchItems(cat.id)}
            >
              {cat.name}
            </span>
            <button
              onClick={() => deleteCategory(cat.id)}
              className="text-red-500 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* ===== Item Section ===== */}
      {activeCategory && (
        <div className="border p-4 rounded">
          <h2 className="font-semibold mb-4">Menu Items</h2>

          <div className="grid gap-2 mb-4">
            <input
              id="item-name"
              name="item_name"
              placeholder="Item Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border p-2"
            />

            <input
              id="item-description"
              name="item_description"
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="border p-2"
            />

            <input
              id="item-price"
              name="item_price"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="border p-2"
            />

            <input
              id="item-image"
              name="item_image"
              type="file"
              accept="image/*"
              onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
              className="border p-2"
            />

            <button onClick={addItem} className="bg-black text-white py-2">
              Add Item
            </button>
          </div>

          {items.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <span>{item.name}</span>
              <button
                onClick={() => deleteItem(item.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
