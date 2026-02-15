"use client";

import Navbar from "../../components/layout/navbar/Navbar";
import Footer from "../../components/layout/footer/Footer";

export default function PrivacyPage() {
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
          Privacy <span className="text-[#E9842C]">Policy</span>
        </h1>

        <div className="bg-linear-to-r from-transparent via-[#E9842C] to-transparent w-40 h-1 mb-10" />

        <div className="space-y-8 text-gray-300 leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information such as name, phone number,
              email address, and reservation details when voluntarily provided.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. How We Use Information
            </h2>
            <p>
              Information is used to process reservations, respond to inquiries,
              improve services, and enhance customer experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Third-Party Services
            </h2>
            <p>
              Orders made via external delivery partners such as Pathao and
              Foodmandu are governed by their privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Data Security
            </h2>
            <p>
              We implement reasonable measures to protect your personal
              information. However, no online system is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Your Rights
            </h2>
            <p>
              You may request access, correction, or deletion of your personal
              data by contacting us directly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Updates to Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Continued use of
              our website signifies acceptance of any revisions.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
