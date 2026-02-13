"use client";
import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import Navbar from "../../components/layout/navbar/Navbar";
import Footer from "../../components/layout/footer/Footer";
import { useRouter } from "next/navigation";

const BlogListingPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const router = useRouter();

  // Your backend base URL
  const API_BASE = "http://localhost/himalayanthakali_backend";

  // ================= Fetch Blogs =================
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_BASE}/blogs/get_blogs.php`);
        const data = await res.json();
        if (data.success) {
          setBlogPosts(data.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // ================= Navigate to Blog Details =================
  const handleBlogClick = (blogId) => {
    router.push(`/blogs/blogdetails?id=${blogId}`);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#1E1E1E] text-white px-4 pt-30">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px md:w-56 bg-linear-to-r from-transparent to-[#D97634]" />
              <div className="flex items-center gap-2 text-[#D97634] text-sm">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <span className="uppercase tracking-wider">OUR BLOGS</span>
              </div>
              <div className="h-px md:w-56 bg-linear-to-l from-transparent to-[#D97634]" />
            </div>

            <h1 className="text-4xl md:text-5xl font-serif mb-4">
              News & Updates
            </h1>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex justify-end mb-8">
            <select className="bg-transparent border border-[#D97634] text-[#D97634] px-4 py-2 rounded text-sm cursor-pointer transition-colors">
              <option className="bg-[#1E1E1E]">Sort By: Relevance</option>
              <option className="bg-[#1E1E1E]">Sort By: Date</option>
              <option className="bg-[#1E1E1E]">Sort By: Popular</option>
            </select>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group cursor-pointer"
                onClick={() => handleBlogClick(post.id)}
              >
                <div className="relative overflow-hidden transition-all duration-300">
                  {/* Decorative Borders */}
                  <div className="absolute border-[#D97634] border-t-2 border-l-2 w-50 h-50"></div>
                  <div className="absolute bottom-0 right-0 border-[#D97634] border-b-2 border-r-2 w-50 h-50"></div>

                  <div className="m-10">
                    {/* Image */}
                    <div className="relative h-64 border-red-700">
                      <img
                        src={`${API_BASE}/${post.image}`} // ✅ Correct backend URL
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="bg-[#1a1a1a] border-amber-600 p-4">
                      <h3 className="text-white text-lg font-semibold mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {post.short_description || post.description}
                      </p>

                      {/* Date */}
                      <div className="flex justify-end">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.created_at).toDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BlogListingPage;
