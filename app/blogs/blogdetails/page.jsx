"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/layout/navbar/Navbar";
import Footer from "../../../components/layout/footer/Footer";
import { useSearchParams } from "next/navigation";
import "quill/dist/quill.snow.css";

const BlogDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [blog, setBlog] = useState(null);

  const API_BASE = "http://localhost/himalayanthakali_backend";

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${API_BASE}/blogs/get_single_blog.php?id=${id}`,
        );
        const data = await res.json();
        if (data.success) {
          setBlog(data.data);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog)
    return <div className="text-white p-20 text-center">Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="bg-[#1E1E1E] text-white px-4 pt-30">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-serif mb-6">{blog.title}</h1>

          <img
            src={`${API_BASE}/${blog.image}`}
            alt={blog.title}
            className="w-full h-96 object-cover mb-10 rounded"
          />

          <p className="text-gray-400 mb-10">
            {new Date(blog.created_at).toDateString()}
          </p>

          {/* ✅ Proper Quill Styled Output */}
          <div
            className="blog-content text-gray-300 leading-8"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        <div className="pt-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
