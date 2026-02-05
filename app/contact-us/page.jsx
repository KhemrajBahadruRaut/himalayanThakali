// app/contact/page.jsx or components/ContactPage.jsx
"use client";

import { useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import Navbar from "../../components/layout/navbar/Navbar.jsx";
import Footer from "../../components/layout/footer/Footer.jsx";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch(
    "http://localhost/himalayanthakali_backend/contacts/submit-contact.php",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }
  );

  if (res.ok) {
    alert("Message sent successfully");
    setFormData({
      fullName: "",
      email: "",
      phoneNo: "",
      message: "",
    });
  }
};


  return (
    <>
      <Navbar />
      <div className="bg-[#1E1E1E] pt-30 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-4xl mx-auto  pb-10 ">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-20 bg-linear-to-r from-transparent to-orange-500"></div>
              <div className="flex items-center gap-2 text-orange-500 text-sm font-medium">
                <Phone className="w-4 h-4" />
                <span>CONTACT US</span>
              </div>
              <div className="h-px w-20 bg-linear-to-l from-transparent to-orange-500"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>

            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-20 items-start">
            {/* Contact Form */}
            <div className="order-2 md:order-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="relative">
                  <fieldset className="group rounded-lg border border-zinc-600 focus-within:border-dashed focus-within:border-orange-500 px-2.5 py-1 transition-all">
                    <legend className="px-2 text-xs uppercase tracking-wider text-orange-500">
                      Full Name
                    </legend>

                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-[#444444] rounded-md px-4 py-2 mb-1.5 text-white placeholder-gray-500 focus:outline-none"
                      required
                    />
                  </fieldset>
                </div>

                {/* Email Address */}
                <div className="relative">
                  <fieldset className="group rounded-lg border border-zinc-600 focus-within:border-dashed focus-within:border-orange-500 px-2.5 py-1 transition-all">
                    <legend className="px-2 text-xs uppercase tracking-wider text-gray-400 ">
                      Email Address
                    </legend>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#444444] rounded-md mb-1.5 px-4 py-2 text-white placeholder-gray-500 focus:outline-none"
                      required
                    />
                  </fieldset>
                </div>

                {/* Phone No */}
                <div className="relative">
                  <fieldset className="group rounded-lg border border-zinc-600 focus-within:border-dashed focus-within:border-orange-500 px-2.5 py-1 transition-all">
                    <legend className="px-2 text-xs uppercase tracking-wider text-gray-400">
                      Phone No
                    </legend>

                    <input
                      type="tel"
                      id="phoneNo"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      className="w-full bg-[#444444]  mb-1.5 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none"
                      required
                    />
                  </fieldset>
                </div>

                {/* Message */}
                <div className="relative">
                  <fieldset className="group rounded-lg border border-zinc-600 focus-within:border-dashed focus-within:border-orange-500 px-2.5 py-1 transition-all">
                    <legend className="px-2 text-xs uppercase tracking-wider text-gray-400">
                      Message
                    </legend>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full bg-[#444444] rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none resize-none"
                      required
                    />
                  </fieldset>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">

                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-8 rounded-md transition-colors duration-200 uppercase tracking-wider text-sm"
                  >
                  Send Message
                </button>
                    </div>
              </form>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 order-1 md:order-2">
              {/* Visit Us */}
              <div className="bg-zinc-800 rounded-lg  p-3 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-orange-500">Mid Baneshwor, Kathmandu</p>
              </div>

              {/* Opening Hours */}
              <div className="bg-zinc-800 rounded-lg p-3 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Opening Hours</h3>
                <p className="text-orange-500">10:00 AM - 10:00 PM</p>
              </div>

              {/* Contact Us */}
              <div className="bg-zinc-800 rounded-lg p-3 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Contact Us</h3>
                <div className="text-orange-500 space-y-1">
                  <p>+977 0000000000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer  />
      </div>

    </>
  );
}
