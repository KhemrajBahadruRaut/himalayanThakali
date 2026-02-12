"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "../../components/layout/footer/Footer";
import Navbar from "../../components/layout/navbar/Navbar";

export default function ThakaliGallery() {
  const [activeFilter, setActiveFilter] = useState("Interior");
  const [galleryImages, setGalleryImages] = useState([]);
  const [filters, setFilters] = useState([]);

  const API = "http://localhost/himalayanthakali_backend/gallery";

  // Fetch gallery data
  useEffect(() => {
    fetch(`${API}/get_gallery.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setGalleryImages(data.data);

          // Extract unique categories dynamically
          const uniqueCategories = [
            ...new Set(data.data.map((item) => item.category)),
          ];

          setFilters(uniqueCategories);

          // Set first category as default
          if (uniqueCategories.length > 0) {
            setActiveFilter(uniqueCategories[0]);
          }
        }
      });
  }, []);

  // Filter images based on active filter
  const filteredImages = galleryImages.filter(
    (image) => image.category === activeFilter,
  );

  return (
    <div className="bg-[#1E1E1E] min-h-screen text-white">
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&display=swap");

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-fadeInUp-delayed {
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out 0.4s backwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out backwards;
        }

        .gallery-item:nth-child(1) {
          animation-delay: 0.1s;
        }
        .gallery-item:nth-child(2) {
          animation-delay: 0.15s;
        }
        .gallery-item:nth-child(3) {
          animation-delay: 0.2s;
        }
        .gallery-item:nth-child(4) {
          animation-delay: 0.25s;
        }
        .gallery-item:nth-child(5) {
          animation-delay: 0.3s;
        }
        .gallery-item:nth-child(6) {
          animation-delay: 0.35s;
        }
        .gallery-item:nth-child(7) {
          animation-delay: 0.4s;
        }
        .gallery-item:nth-child(8) {
          animation-delay: 0.45s;
        }
      `}</style>

      <div className="max-w-350 mx-auto px-10 pt-30">
        <Navbar />

        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 text-[#D97634] text-sm font-medium tracking-[0.125rem] uppercase mb-5 animate-fadeInDown">
            <div className="w-20 h-px bg-linear-to-r from-transparent to-[#D97634]" />
            <span>Our Gallery</span>
            <div className="w-20 h-px bg-linear-to-l from-transparent to-[#D97634]" />
          </div>

          <h1
            className="text-[52px] font-semibold mb-5 animate-fadeInUp"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Inside Himalayan <span className="text-[#D97634]">Thakali</span>
          </h1>

          <p className="text-[#999] text-base leading-relaxed max-w-150 mx-auto animate-fadeInUp-delayed">
            Experience our authentic ambiance, cuisine and cultural moments.
          </p>
        </header>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap animate-fadeIn">
          {filters.map((filter, index) => (
            <button
              key={`${filter}-${index}`}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 text-sm font-medium capitalize rounded transition-all duration-300 relative overflow-hidden group ${
                activeFilter === filter
                  ? "bg-[#D97634] text-white shadow-[0_5px_15px_rgba(217,118,52,0.4)]"
                  : "bg-transparent border border-[#D97634] text-[#D97634]"
              }`}
            >
              <span className="relative z-10">{filter}</span>
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-300" />
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="relative p-10 bg-linear-to-br from-[rgba(217,118,52,0.05)] to-transparent border border-[rgba(217,118,52,0.2)] rounded-lg">
          <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-50 h-0.5 bg-linear-to-r from-transparent via-[#D97634] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {filteredImages.length === 0 ? (
              <div className="col-span-full text-center py-20">
                <p className="text-[#999] text-lg tracking-wide">
                  No gallery items available for this category.
                </p>
              </div>
            ) : (
              filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`gallery-item relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-400 hover:-translate-y-1 animate-scaleIn group ${
                    index < 2
                      ? "lg:col-span-3 md:col-span-1"
                      : "lg:col-span-2 md:col-span-1"
                  }`}
                >
                  <div
                    className={`relative w-full ${image.span === "large" ? "h-87.5" : "h-62.5"}`}
                  >
                    <img
  src={`http://localhost/himalayanthakali_backend/gallery/${image.image_path}`}
  alt={image.alt_text || "Gallery image"}
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
/>

                  </div>

                  <div className="absolute inset-0 bg-linear-to-br from-[rgba(217,118,52,0.4)] to-[rgba(0,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
