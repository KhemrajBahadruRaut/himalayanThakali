"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "../../components/layout/footer/Footer";
import Navbar from "../../components/layout/navbar/Navbar";
import { X, ZoomIn } from "lucide-react";

const API = `${process.env.NEXT_PUBLIC_API_BASE || "http://localhost/himalayanthakali_backend"}/gallery`;

export default function ThakaliGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [galleryImages, setGalleryImages] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    fetch(`${API}/get_gallery.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setGalleryImages(data.data);
          const uniqueCategories = ["All", ...new Set(data.data.map((item) => item.category_name))];
          setFilters(uniqueCategories);
        }
      });
  }, []);

  useEffect(() => {
    if (!selectedImg) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImg(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImg]);

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category_name === activeFilter);

  return (
    <>
      <div className="bg-[#1E1E1E] text-white">
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&display=swap");
          @keyframes fadeInDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes scaleIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
          .animate-fadeInDown { animation: fadeInDown 0.4s ease-out; }
          .animate-fadeInUp { animation: fadeInUp 0.4s ease-out; }
          .animate-fadeInUp-delayed { animation: fadeInUp 0.4s ease-out 0.1s backwards; }
          .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
          .animate-scaleIn { animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) backwards; }
        `}</style>

        <div className="mx-auto px-10 pt-30">
          <Navbar />

          <header className="mb-10 text-center">
            <div className="mb-5 flex items-center justify-center gap-3 text-sm font-medium tracking-[0.125rem] text-[#D97634] uppercase animate-fadeInDown">
              <div className="h-px w-50 bg-linear-to-r from-transparent to-[#D97634]" />
              <span>Our Gallery</span>
              <div className="h-px w-50 bg-linear-to-l from-transparent to-[#D97634]" />
            </div>

            <h1 className="animate-fadeInUp text-[52px] font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Inside Himalayan <span className="text-[#D97634]">Thakali</span>
            </h1>

            <p className="animate-fadeInUp-delayed mx-auto max-w-150 text-base leading-relaxed text-[#999]">
              Experience our authentic ambiance, cuisine and cultural moments.
            </p>
          </header>

          <div className="animate-fadeIn mb-16 flex flex-wrap justify-center gap-4">
            {filters.map((filter, index) => (
              <button
                key={`${filter}-${index}`}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`group relative overflow-hidden rounded px-8 py-3 text-sm font-medium capitalize transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-[#D97634] text-white"
                    : "border border-[#D97634] bg-transparent text-[#D97634]"
                }`}
              >
                <span className="relative z-10">{filter}</span>
                <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-200 group-hover:translate-x-full" />
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="absolute hidden h-50 w-50 border-t-2 border-l-2 border-[#E9842C] sm:flex" />
            <div className="absolute bottom-0 right-0 hidden h-50 w-50 border-r-2 border-b-2 border-[#E9842C] sm:flex" />

            <div className="grid grid-cols-1 gap-8 sm:p-10 md:grid-cols-2 lg:grid-cols-6">
              {filteredImages.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImg(image)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                  aria-label={`Open image preview: ${image.alt_text || "Gallery image"}`}
                  className={`gallery-item group relative cursor-pointer overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1 animate-scaleIn ${
                    index < 2 ? "md:col-span-1 lg:col-span-3" : "md:col-span-1 lg:col-span-2"
                  }`}
                >
                  <div className={`relative w-full ${image.span === "large" ? "h-87.5" : "h-62.5"}`}>
                    <Image
                      src={`${API}/${image.image_path}`}
                      alt={image.alt_text || "Gallery image"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <ZoomIn className="h-8 w-8 scale-75 text-white transition-transform duration-200 group-hover:scale-100" aria-hidden="true" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {selectedImg && (
          <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 animate-fadeIn"
            onClick={() => setSelectedImg(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedImg.alt_text || "Gallery image preview"}
          >
            <button
              type="button"
              onClick={() => setSelectedImg(null)}
              className="absolute top-5 right-5 z-110 text-white/70 transition-colors hover:text-white"
              aria-label="Close image preview"
            >
              <X size={35} />
            </button>

            <div
              className="relative flex h-full w-full max-w-5xl flex-col items-center justify-center animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`${API}/${selectedImg.image_path}`}
                alt={selectedImg.alt_text || "Selected gallery image"}
                width={1400}
                height={1000}
                className="max-h-[85vh] max-w-full rounded-sm object-contain"
              />
              <h2 className="mt-4 text-xl font-medium tracking-wide text-white">
                {selectedImg.alt_text}
              </h2>
            </div>
          </div>
        )}

        <div className="pt-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
