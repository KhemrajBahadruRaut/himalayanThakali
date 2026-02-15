"use client";

import Navbar from "../../components/layout/navbar/Navbar";
import Footer from "../../components/layout/footer/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none hidden sm:flex">
        <div className="absolute top-40 right-40 w-28 h-28 border-2 border-dashed border-[#E9842C26] rounded-full" />
        <div className="absolute top-96 left-20 w-16 h-16 border-2 border-dashed border-[#E9842C26] rounded-full" />
      </div>

      <Navbar />

      <section className="relative max-w-5xl mx-auto px-6 md:px-10 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Terms of <span className="text-[#E9842C]">Service</span>
        </h1>

        <div className="bg-linear-to-r from-transparent via-[#E9842C] to-transparent w-40 h-1 mb-10" />

        <div className="space-y-8 text-gray-300 leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to Himalayan Thakali. By accessing or using our website,
              you agree to comply with these Terms of Service. If you do not
              agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. Use of Website
            </h2>
            <p>
              You agree to use this website for lawful purposes only. Any
              misuse, unauthorized access, or disruption of our services is
              strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Orders & Reservations
            </h2>
            <p>
              Orders placed through third-party platforms (e.g., Pathao,
              Foodmandu) are subject to their respective terms and conditions.
              We are not responsible for external platform policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Intellectual Property
            </h2>
            <p>
              All content, branding, images, and materials on this website are
              the property of Himalayan Thakali and may not be copied or used
              without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              We are not liable for any damages resulting from the use or
              inability to use our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Continued
              use of the website after updates constitutes acceptance.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
