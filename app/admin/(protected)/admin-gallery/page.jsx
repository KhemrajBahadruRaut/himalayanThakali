"use client";
import { useEffect, useState } from "react";

export default function AdminGallery() {
  const [gallery, setGallery] = useState([]);
  const [form, setForm] = useState({
    id: "",
    category: "",
    alt_text: "",
    span: "normal",
    image: null,
  });

  const API = "http://localhost/himalayanthakali_backend/gallery";

  const fetchGallery = async () => {
    const res = await fetch(`${API}/get_gallery.php`);
    const data = await res.json();
    setGallery(data.data || []);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (form[key]) formData.append(key, form[key]);
    });

    const endpoint = form.id
      ? "update_gallery.php"
      : "add_gallery.php";

    await fetch(`${API}/${endpoint}`, {
      method: "POST",
      body: formData,
    });

    setForm({
      id: "",
      category: "",
      alt_text: "",
      span: "normal",
      image: null,
    });

    fetchGallery();
  };

  const handleDelete = async (id) => {
    await fetch(`${API}/delete_gallery.php`, {
      method: "POST",
      body: JSON.stringify({ id }),
    });
    fetchGallery();
  };

  const handleEdit = (item) => {
    setForm({
      id: item.id,
      category: item.category,
      alt_text: item.alt_text,
      span: item.span,
      image: null,
    });
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Gallery Management</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <input
          type="text"
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          className="border p-2 w-full"
          required
        />

        <input
          type="text"
          placeholder="Alt Text"
          value={form.alt_text}
          onChange={(e) =>
            setForm({ ...form, alt_text: e.target.value })
          }
          className="border p-2 w-full"
        />

        <select
          value={form.span}
          onChange={(e) =>
            setForm({ ...form, span: e.target.value })
          }
          className="border p-2 w-full"
        >
          <option value="normal">Normal</option>
          <option value="large">Large</option>
        </select>

        <input
          type="file"
          onChange={(e) =>
            setForm({ ...form, image: e.target.files[0] })
          }
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          {form.id ? "Update" : "Add"} Image
        </button>
      </form>

      <div className="grid grid-cols-4 gap-4">
        {gallery.map((item) => (
          <div key={item.id} className="border p-3">
            <img
              src={`http://localhost/himalayanthakali_backend/gallery/${item.image_path}`}
              className="h-40 w-full object-cover"
            />
            <p>{item.category}</p>
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(item)}
                className="bg-yellow-500 text-white px-3 py-1"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-600 text-white px-3 py-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
