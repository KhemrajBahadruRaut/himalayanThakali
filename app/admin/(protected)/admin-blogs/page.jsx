"use client"
import React, { useEffect, useState } from "react";

const AdminBlogs = () => {
  const API_BASE = "http://localhost/himalayanthakali_backend";

  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    short_description: "",
    content: "",
  });

  // ================= Fetch Blogs =================
  const fetchBlogs = async () => {
    const res = await fetch(`${API_BASE}/blogs/get_blogs.php`);
    const data = await res.json();
    if (data.success) {
      setBlogs(data.data);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ================= Handle Input =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= Reset =================
  const resetForm = () => {
    setEditingId(null);
    setImageFile(null);
    setFormData({
      title: "",
      short_description: "",
      content: "",
    });
  };

  // ================= Create =================
  const handleCreate = async () => {
    const formDataObj = new FormData();
    formDataObj.append("title", formData.title);
    formDataObj.append("short_description", formData.short_description);
    formDataObj.append("content", formData.content);
    formDataObj.append("image", imageFile);

    const res = await fetch(`${API_BASE}/blogs/create_blog.php`, {
      method: "POST",
      body: formDataObj,
    });

    const data = await res.json();

    if (data.success) {
      alert("Blog Created");
      resetForm();
      fetchBlogs();
    }
  };

  // ================= Update =================
  const handleUpdate = async () => {
    const formDataObj = new FormData();
    formDataObj.append("id", editingId);
    formDataObj.append("title", formData.title);
    formDataObj.append("short_description", formData.short_description);
    formDataObj.append("content", formData.content);

    if (imageFile) {
      formDataObj.append("image", imageFile);
    }

    const res = await fetch(`${API_BASE}/blogs/update_blog.php`, {
      method: "POST",
      body: formDataObj,
    });

    const data = await res.json();

    if (data.success) {
      alert("Blog Updated");
      resetForm();
      fetchBlogs();
    }
  };

  // ================= Delete =================
  const handleDelete = async (id) => {
    if (!confirm("Delete this blog?")) return;

    const res = await fetch(`${API_BASE}/blogs/delete_blog.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Blog Deleted");
      fetchBlogs();
    }
  };

  // ================= Edit =================
  const handleEdit = (blog) => {
    setEditingId(blog.id);
    setFormData({
      title: blog.title,
      short_description: blog.short_description,
      content: blog.content || "",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          {editingId ? "Update Blog" : "Create Blog"}
        </h1>

        {/* ================= FORM ================= */}
        <div className="bg-white p-6 rounded shadow mb-12">
          <div className="grid gap-4">

            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              value={formData.title}
              onChange={handleChange}
              className="border p-3 rounded"
              required
            />

            <textarea
              name="short_description"
              placeholder="Short Description"
              value={formData.short_description}
              onChange={handleChange}
              className="border p-3 rounded"
              rows="3"
              required
            />

            <textarea
              name="content"
              placeholder="Full Blog Content (HTML allowed)"
              value={formData.content}
              onChange={handleChange}
              className="border p-3 rounded"
              rows="6"
              required
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="border p-3 rounded"
              required={!editingId}
            />

            <div className="flex gap-4">
              {editingId ? (
                <>
                  <button
                    onClick={handleUpdate}
                    className="bg-blue-600 text-white px-6 py-2 rounded"
                  >
                    Update Blog
                  </button>

                  <button
                    onClick={resetForm}
                    className="bg-gray-500 text-white px-6 py-2 rounded"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={handleCreate}
                  className="bg-green-600 text-white px-6 py-2 rounded"
                >
                  Create Blog
                </button>
              )}
            </div>

          </div>
        </div>

        {/* ================= BLOG LIST ================= */}
        <h2 className="text-2xl font-semibold mb-6">All Blogs</h2>

        <div className="grid gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-6 rounded shadow flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <img
                  src={`${API_BASE}/${blog.image}`}
                  alt={blog.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-bold">{blog.title}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(blog.created_at).toDateString()}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => handleEdit(blog)}
                  className="bg-yellow-500 text-white px-4 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(blog.id)}
                  className="bg-red-600 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AdminBlogs;
