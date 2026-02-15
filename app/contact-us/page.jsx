"use client";

import { useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import Navbar from "../../components/layout/navbar/Navbar.jsx";
import Footer from "../../components/layout/footer/Footer.jsx";

const CONTACT_API =
  `${process.env.NEXT_PUBLIC_API_BASE || "http://localhost/himalayanthakali_backend"}/contacts/submit-contact.php`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState({ type: "idle", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState({ type: "idle", message: "" });

    try {
      const res = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      setSubmitState({ type: "success", message: "Message sent successfully." });
      setFormData({
        fullName: "",
        email: "",
        phoneNo: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setSubmitState({
        type: "error",
        message: "Could not send your message. Please try again.",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#1E1E1E] px-4 pt-30 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl pb-10">
          <header className="mb-12 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-50 bg-linear-to-r from-transparent to-orange-500" />
              <div className="flex items-center gap-2 text-sm font-medium text-orange-500">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>CONTACT US</span>
              </div>
              <div className="h-px w-50 bg-linear-to-l from-transparent to-orange-500" />
            </div>

            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Get in Touch</h1>

            <p className="mx-auto max-w-2xl leading-relaxed text-gray-400">
              Share your questions or feedback and our team will get back to you soon.
            </p>
          </header>

          <div className="grid items-start gap-20 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                <div className="relative">
                  <fieldset className="group rounded-lg border border-zinc-600 px-2.5 py-1 transition-all focus-within:border-dashed focus-within:border-orange-500">
                    <legend className="px-2 text-xs tracking-wider text-orange-500 uppercase">
                      Full Name
                    </legend>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      autoComplete="name"
                      className="mb-1.5 w-full rounded-md bg-[#444444] px-4 py-2 text-white placeholder-gray-500 focus:outline-none"
                      required
                    />
                  </fieldset>
                </div>

                <div className="relative">
                  <fieldset className="group rounded-lg border border-zinc-600 px-2.5 py-1 transition-all focus-within:border-dashed focus-within:border-orange-500">
                    <legend className="px-2 text-xs tracking-wider text-gray-400 uppercase">
                      Email Address
                    </legend>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="mb-1.5 w-full rounded-md bg-[#444444] px-4 py-2 text-white placeholder-gray-500 focus:outline-none"
                      required
                    />
                  </fieldset>
                </div>

                <div className="relative">
                  <fieldset className="group rounded-lg border border-zinc-600 px-2.5 py-1 transition-all focus-within:border-dashed focus-within:border-orange-500">
                    <legend className="px-2 text-xs tracking-wider text-gray-400 uppercase">
                      Phone Number
                    </legend>
                    <input
                      type="tel"
                      id="phoneNo"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      autoComplete="tel"
                      className="mb-1.5 w-full rounded-md bg-[#444444] px-4 py-2 text-white placeholder-gray-500 focus:outline-none"
                      required
                    />
                  </fieldset>
                </div>

                <div className="relative">
                  <fieldset className="group rounded-lg border border-zinc-600 px-2.5 py-1 transition-all focus-within:border-dashed focus-within:border-orange-500">
                    <legend className="px-2 text-xs tracking-wider text-gray-400 uppercase">
                      Message
                    </legend>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full resize-none rounded-md bg-[#444444] px-4 py-3 text-white placeholder-gray-500 focus:outline-none"
                      required
                    />
                  </fieldset>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="rounded-md bg-orange-500 px-8 py-3 text-sm font-semibold tracking-wider text-black uppercase transition-colors duration-200 hover:bg-orange-600"
                  >
                    Send Message
                  </button>
                </div>

                <p
                  role="status"
                  aria-live="polite"
                  className={`text-center text-sm ${
                    submitState.type === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {submitState.message}
                </p>
              </form>
            </div>

            <div className="order-1 space-y-4 md:order-2">
              <div className="rounded-lg bg-zinc-800 p-3 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500">
                  <MapPin className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h2 className="mb-2 font-semibold text-white">Visit Us</h2>
                <p className="text-orange-500">Mid Baneshwor, Kathmandu</p>
              </div>

              <div className="rounded-lg bg-zinc-800 p-3 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500">
                  <Clock className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h2 className="mb-2 font-semibold text-white">Opening Hours</h2>
                <p className="text-orange-500">10:00 AM - 10:00 PM</p>
              </div>

              <div className="rounded-lg bg-zinc-800 p-3 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500">
                  <Phone className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <h2 className="mb-2 font-semibold text-white">Contact Us</h2>
                <div className="space-y-1 text-orange-500">
                  <a href="tel:+9770000000000" className="hover:underline">
                    +977 0000000000
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
