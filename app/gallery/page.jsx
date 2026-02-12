"use client";

import { useState, useEffect } from "react";
import Footer from "../../components/layout/footer/Footer";
import Navbar from "../../components/layout/navbar/Navbar";
import { X, ZoomIn } from "lucide-react";

export default function ThakaliGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [galleryImages, setGalleryImages] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);

  const API = "http://localhost/himalayanthakali_backend/gallery";

  useEffect(() => {
    fetch(`${API}/get_gallery.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setGalleryImages(data.data);
          const uniqueCategories = [
            "All",
            ...new Set(data.data.map((item) => item.category_name)),
          ];
          setFilters(uniqueCategories);
        }
      });
  }, []);

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter((image) => image.category_name === activeFilter);

  return (
    <>
    <div className="bg-[#1E1E1E] text-white ">
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

      <div className=" mx-auto px-10 pt-30">
        <Navbar />

        <header className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 text-[#D97634] text-sm font-medium tracking-[0.125rem] uppercase mb-5 animate-fadeInDown">
            <div className="w-50 h-px bg-linear-to-r from-transparent to-[#D97634]" />
            <span>Our Gallery</span>
            <div className="w-50 h-px bg-linear-to-l from-transparent to-[#D97634]" />
          </div>

          <h1 className="text-[52px] font-semibold  animate-fadeInUp" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Inside Himalayan <span className="text-[#D97634]">Thakali</span>
          </h1>

          <p className="text-[#999] text-base leading-relaxed max-w-150 mx-auto animate-fadeInUp-delayed">
            Experience our authentic ambiance, cuisine and cultural moments.
          </p>
        </header>

        <div className="flex justify-center gap-4 mb-16 flex-wrap animate-fadeIn">
          {filters.map((filter, index) => (
              <button
              key={`${filter}-${index}`}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 text-sm font-medium capitalize rounded transition-all duration-200 relative overflow-hidden group ${
                  activeFilter === filter
                  ? "bg-[#D97634] text-white"
                  : "bg-transparent border border-[#D97634] text-[#D97634]"
                }`}
                >
              <span className="relative z-10">{filter}</span>
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-200" />
            </button>
          ))}
        </div>

        <div className="relative ">
            <div className="border-t-2 hidden sm:flex border-l-2 w-50 h-50 absolute border-[#E9842C]"></div>
            <div className="border-b-2  hidden sm:flex border-r-2 w-50 h-50 absolute bottom-0 right-0 border-[#E9842C]"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:p-10">
            {filteredImages.map((image, index) => (  
                <div
                key={image.id}
                onClick={() => setSelectedImg(image)}
                style={{ animationDelay: `${index * 0.05}s` }} // Very short delay per item
                className={`gallery-item relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 animate-scaleIn group ${
                    index < 2 ? "lg:col-span-3 md:col-span-1" : "lg:col-span-2 md:col-span-1"
                }`}
                >
                <div className={`relative w-full ${image.span === "large" ? "h-87.5" : "h-62.5"}`}>
                  <img
                    src={`${API}/${image.image_path}`}
                    alt={image.alt_text || "Gallery image"}
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <ZoomIn className="text-white w-8 h-8 transform scale-75 group-hover:scale-100 transition-transform duration-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAST MODAL */}
      {selectedImg && (
          <div 
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 animate-fadeIn"
          onClick={() => setSelectedImg(null)}
          >
          <button className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-110">
            <X size={35} />
          </button>

          <div 
            className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
            >
            <img
              src={`${API}/${selectedImg.image_path}`}
              alt={selectedImg.alt_text}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              />
            <h3 className="mt-4 text-xl font-medium tracking-wide text-white">
              {selectedImg.alt_text}
            </h3>
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