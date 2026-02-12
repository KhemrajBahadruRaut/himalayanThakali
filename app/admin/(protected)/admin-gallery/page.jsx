"use client";
import { useEffect, useState } from "react";
import { Plus, Trash2, FolderPlus, Image as ImageIcon, X, Edit3, Loader2 } from "lucide-react";

export default function GalleryAdmin() {
  const API = "http://localhost/himalayanthakali_backend/gallery";

  // ——————————————————————————————————————————————————————————————————————————
  // STATE
  // ——————————————————————————————————————————————————————————————————————————
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [gallery, setGallery] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    id: null,
    alt_text: "",
    span: "normal",
    image: null,
  });

  // ——————————————————————————————————————————————————————————————————————————
  // CATEGORY LOGIC
  // ——————————————————————————————————————————————————————————————————————————
  const fetchCategories = async () => {
    try {
      const res = await fetch(`${API}/get_categories.php`);
      const data = await res.json();
      setCategories(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      setCategories([]);
    }
  };

  const addCategory = async () => {
    if (!newCategory.trim()) return;
    try {
      await fetch(`${API}/add_category.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newCategory }),
      });
      setNewCategory("");
      fetchCategories();
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const deleteCategory = async (id) => {
    if (!confirm("Delete this category and all its images?")) return;
    try {
      await fetch(`${API}/delete_category.php?id=${id}`);
      if (activeCategory === id) {
        setActiveCategory(null);
        setGallery([]);
      }
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleCategoryClick = async (id) => {
    try {
      setActiveCategory(id);
      const res = await fetch(`${API}/get_gallery.php?category_id=${id}`);
      const data = await res.json();
      setGallery(Array.isArray(data.data) ? data.data : []);
    } catch (error) {
      console.error("Failed to fetch gallery:", error);
      setGallery([]);
    }
  };

  // ——————————————————————————————————————————————————————————————————————————
  // IMAGE LOGIC
  // ——————————————————————————————————————————————————————————————————————————
  const handleEditImage = (img) => {
    setForm({
      id: img.id,
      alt_text: img.alt_text || "",
      span: img.span || "normal",
      image: null,
    });
    // Scroll to form for better Mobile UX
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setForm({ id: null, alt_text: "", span: "normal", image: null });
  };

  const deleteImage = async (id) => {
    if (!confirm("Delete this image?")) return;
    try {
      await fetch(`${API}/delete_gallery.php?id=${id}`);
      handleCategoryClick(activeCategory);
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const addImage = async () => {
    if (!activeCategory) return;
    setIsSubmitting(true);

    const fd = new FormData();
    fd.append("category_id", activeCategory);
    fd.append("alt_text", form.alt_text);
    fd.append("span", form.span);
    if (form.image) fd.append("image", form.image);

    let endpoint = form.id ? "update_gallery.php" : "add_gallery.php";
    if (form.id) fd.append("id", form.id);

    try {
      await fetch(`${API}/${endpoint}`, {
        method: "POST",
        body: fd,
      });
      setForm({ id: null, alt_text: "", span: "normal", image: null });
      handleCategoryClick(activeCategory);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // ——————————————————————————————————————————————————————————————————————————
  // RENDER
  // ——————————————————————————————————————————————————————————————————————————
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-zinc-50 text-zinc-900">
      {/* SIDEBAR / TOP NAV */}
      <aside className="w-full md:w-72 bg-white border-b md:border-r border-zinc-200 sticky top-0 z-20 h-auto md:h-screen flex flex-col">
        <div className=" border-b border-zinc-100 bg-white">
          <h2 className="font-bold text-2xl flex items-center gap-2 text-zinc-800">
            <FolderPlus className="text-orange-500" />
            <span>Gallery Admin</span>
          </h2>
        </div>

        <div className="p-3 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto">
          {/* Add Category Input */}
          <div className="shrink-0 w-48 md:w-full relative">
            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="w-full border border-zinc-200 pl-3 pr-10 py-2 rounded-lg text-sm outline-none focus:ring-2 focus:ring-orange-500/20"
              placeholder="Add Category"
            />
            <button onClick={addCategory} className="absolute right-2 top-2 text-orange-500">
              <Plus size={18} />
            </button>
          </div>

          {/* Categories List */}
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`shrink-0 flex items-center justify-between px-4 py-2 rounded-full md:rounded-lg cursor-pointer text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-[#E9842C] text-white shadow-md shadow-orange-200"
                  : "bg-zinc-100 md:bg-transparent text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              <span className="whitespace-nowrap">{cat.name}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteCategory(cat.id);
                }}
                className={`ml-2 p-1 rounded-md transition-colors ${
                  activeCategory === cat.id ? "hover:bg-orange-600" : "hover:text-red-500"
                }`}
              >
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 md:p-8">
        {!activeCategory ? (
          <div className="h-64 flex flex-col items-center justify-center text-zinc-400">
            <ImageIcon size={48} strokeWidth={1} className="mb-2" />
            <p>Select a category to manage images</p>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            {/* UPLOAD/EDIT FORM */}
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-4 md:p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-zinc-800">
                  {form.id ? "Edit Image Details" : "Upload Image"}
                </h3>
                {form.id && (
                  <button onClick={cancelEdit} className="text-zinc-400 hover:text-zinc-600">
                    <X size={20} />
                  </button>
                )}
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase ml-1">Label / Alt Text</label>
                    <input
                      value={form.alt_text}
                      onChange={(e) => setForm({ ...form, alt_text: e.target.value })}
                      className="w-full border border-zinc-200 p-3 rounded-xl text-sm outline-none focus:border-orange-500 bg-zinc-50"
                      placeholder="e.g. Traditional Dining Area"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase ml-1">Grid Layout</label>
                    <select
                      value={form.span}
                      onChange={(e) => setForm({ ...form, span: e.target.value })}
                      className="w-full border border-zinc-200 p-3 rounded-xl text-sm outline-none bg-zinc-50"
                    >
                      <option value="normal">Main Images 2</option>
                      <option value="large">normal images 3</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-end">
                  <div className="w-full space-y-1">
                    <label className="text-[10px] font-bold text-zinc-400 uppercase ml-1">Image File</label>
                    <input
                      type="file"
                      onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                      className="w-full text-sm text-zinc-500 file:mr-4 file:py-2.5 file:px-6 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-zinc-900 file:text-white"
                    />
                  </div>
                  <button
                    disabled={isSubmitting}
                    onClick={addImage}
                    className="w-full md:w-64 bg-orange-500 text-white h-11.5 rounded-xl text-sm font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-2 disabled:bg-zinc-300"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : form.id ? "Update Image" : "Upload Image"}
                  </button>
                </div>
              </div>
            </div>

            {/* IMAGE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((img) => (
                <div key={img.id} className="relative bg-white border border-zinc-200 rounded-2xl overflow-hidden group shadow-sm">
                  <img
                    src={`${API}/${img.image_path}`}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={img.alt_text}
                  />
                  
                  {/* Persistent Mobile-Friendly Actions */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-linear-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between">
                    <span className="text-white text-xs font-medium truncate pr-4">
                      {img.alt_text || "Untitled"}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditImage(img)}
                        className="bg-white/20 hover:bg-white text-white hover:text-zinc-900 p-2 rounded-lg backdrop-blur-md transition-colors"
                      >
                        <Edit3 size={16} />
                      </button>
                      <button
                        onClick={() => deleteImage(img.id)}
                        className="bg-red-500/80 hover:bg-red-600 text-white p-2 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {gallery.length === 0 && (
              <div className="text-center py-20 bg-zinc-100 rounded-2xl border-2 border-dashed border-zinc-200 text-zinc-400">
                No images found in this category.
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}