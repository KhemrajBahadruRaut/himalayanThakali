"use client";

import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const AdminBlogs = () => {
  const API_BASE = "http://localhost/himalayanthakali_backend";

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    short_description: "",
    content: "",
  });

  // ================= Initialize Quill =================
  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });

      quillRef.current.on("text-change", () => {
        setFormData((prev) => ({
          ...prev,
          content: quillRef.current.root.innerHTML,
        }));
      });
    }
  }, []);

  // ================= Sync Content When Editing =================
  useEffect(() => {
    if (quillRef.current && editingId !== null) {
      quillRef.current.root.innerHTML = formData.content;
    }
  }, [editingId]);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setEditingId(null);
    setImageFile(null);
    setFormData({
      title: "",
      short_description: "",
      content: "",
    });

    if (quillRef.current) {
      quillRef.current.root.innerHTML = "";
    }
  };

  // ================= Create =================
  const handleCreate = async () => {
    const formDataObj = new FormData();
    formDataObj.append("title", formData.title);
    formDataObj.append("short_description", formData.short_description);
    formDataObj.append("content", formData.content);

    if (imageFile) {
      formDataObj.append("image", imageFile);
    }

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
    if (!editingId) return;

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

  const handleEdit = (blog) => {
    setEditingId(blog.id);
    setFormData({
      title: blog.title,
      short_description: blog.short_description,
      content: blog.content || "",
    });

    if (quillRef.current) {
      quillRef.current.root.innerHTML = blog.content || "";
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };
return (
  <div className="min-h-screen bg-gray-100 p-10">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        {editingId ? "Update Blog" : "Create Blog"}
      </h1>

      {/* ================= Blog Form ================= */}
      <div className="bg-white p-6 rounded shadow mb-12 grid gap-6">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <textarea
          name="short_description"
          placeholder="Short Description"
          value={formData.short_description}
          onChange={handleChange}
          className="border p-3 rounded"
          rows="3"
        />

        <div
          ref={editorRef}
          className="bg-white border rounded"
          style={{ minHeight: "250px" }}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="border p-3 rounded"
        />

        <div className="flex gap-4">
          {editingId ? (
            <>
              <button
                onClick={handleUpdate}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Update Blog
              </button>
              <button
                onClick={resetForm}
                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={handleCreate}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Create Blog
            </button>
          )}
        </div>
      </div>

     {/* ================= Blog List ================= */}
<div className="bg-white p-6 rounded shadow">
  <h2 className="text-2xl font-semibold mb-6">Uploaded Blogs</h2>

  {blogs.length === 0 ? (
    <p className="text-gray-500">No blogs uploaded yet.</p>
  ) : (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-3 border">Image</th>
            <th className="p-3 border">Title</th>
            <th className="p-3 border">Date</th>
            <th className="p-3 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id} className="hover:bg-gray-50">
              
              {/* Image */}
              <td className="p-3 border">
                {blog.image ? (
                  <img
                    src={`${API_BASE}/${blog.image}`}
                    alt={blog.title}
                    className="w-20 h-16 object-cover rounded"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">
                    No Image
                  </span>
                )}
              </td>

              {/* Title */}
              <td className="p-3 border font-medium">
                {blog.title}
              </td>

              {/* Date */}
              <td className="p-3 border text-sm text-gray-500">
                {new Date(blog.created_at).toDateString()}
              </td>

              {/* Actions */}
              <td className="p-3 border text-center">
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

    </div>
  </div>
);

};

export default AdminBlogs;
