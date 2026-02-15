"use client";

import { useState } from "react";
import Navbar from "../../components/layout/navbar/Navbar";
import Footer from "../../components/layout/footer/Footer";
import { useEffect } from "react";

const API = "http://localhost/himalayanthakali_backend/career";
const API2 = "http://localhost/himalayanthakali_backend/application";

export default function CareerPage() {
  const [jobListings, setJobListings] = useState([]);
  const [careerEmail, setCareerEmail] = useState("abc@example.com");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });

  const openApplication = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  const handleFormChange = (e) => {
    if (e.target.name === "resume") {
      setFormData({ ...formData, resume: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const submitApplication = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("job_id", selectedJob.id);
    form.append("job_title", selectedJob.title);
    form.append("full_name", formData.full_name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("message", formData.message);
    form.append("resume", formData.resume);

    const res = await fetch(`${API2}/submit_application.php`, {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    alert(data.message);

    if (data.success) {
      closeModal();
    }
  };

  useEffect(() => {
    fetchJobs();
    fetchCareerEmail();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch(`${API}/get_openings.php`);
      const data = await res.json();
      if (data.success) {
        setJobListings(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    }
  };

  const fetchCareerEmail = async () => {
    try {
      const res = await fetch(`${API}/get_career_email.php`);
      const data = await res.json();
      if (data.success) {
        setCareerEmail(data.email);
      }
    } catch (error) {
      console.error("Failed to fetch email:", error);
    }
  };
  const benefits = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke="#D97634"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Professional Growth",
      description:
        "Continuous training in Himalayan cuisine and international hospitality standards",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V10C2 9.46957 2.21071 8.96086 2.58579 8.58579C2.96086 8.21071 3.46957 8 4 8H7M12 3V14M12 14L8 10M12 14L16 10"
            stroke="#D97634"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Daily Meals",
      description:
        "Complimentary authentic Thakali meals during shifts for all staff members",
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
            stroke="#D97634"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Team Culture",
      description:
        "Supportive family-like environment that values each team member's contribution",
    },
  ];

  return (
    <div className="bg-[#1E1E1E] min-h-screen text-white">
      <Navbar />
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Montserrat:wght@400;500;600&display=swap");

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out backwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out backwards;
        }

        .benefit-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        .benefit-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .benefit-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        .job-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        .job-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .job-card:nth-child(3) {
          animation-delay: 0.3s;
        }
      `}</style>

      <div className="max-w-300 mx-auto px-6 pt-30">
        {/* Header Section */}
        <header className="text-center mb-20">
          {/* Career Label */}
          <div className="flex items-center justify-center gap-3 text-[#D97634] text-sm font-medium tracking-[0.125rem] uppercase mb-5 animate-fadeInDown">
            <div className="w-50 h-px bg-linear-to-r from-transparent to-[#D97634]" />
            <svg
              className="w-5 h-5 fill-[#D97634]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 7H16V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V7H4C3.46957 7 2.96086 7.21071 2.58579 7.58579C2.21071 7.96086 2 8.46957 2 9V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H20C20.5304 21 21.0391 20.7893 21.4142 20.4142C21.7893 20.0391 22 19.5304 22 19V9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7ZM10 5H14V7H10V5ZM20 19H4V9H8V11H10V9H14V11H16V9H20V19Z" />
            </svg>
            <span>Career</span>
            <div className="w-50 h-px bg-linear-to-l from-transparent to-[#D97634]" />
          </div>

          {/* Title */}
          <h1
            className="text-[48px] md:text-[56px] font-semibold mb-5 animate-fadeInUp"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Join Our Team
          </h1>

          {/* Description */}
          <p
            className="text-[#999] text-base leading-relaxed max-w-150 mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </header>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card animate-scaleIn bg-[#2A2A2A] p-8 rounded-lg text-center hover:bg-[#333] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(217,118,52,0.2)]"
            >
              <div className="flex justify-center mb-5">{benefit.icon}</div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {benefit.title}
              </h3>
              <p className="text-[#999] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* ================= CURRENT OPENINGS ================= */}
        <div className="mb-12">
          <div className="relative mb-12">
            <div className="h-px bg-linear-to-r from-transparent via-[#D97634] to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1E1E1E] px-6">
              <h2 className="text-[#D97634] text-xl font-semibold tracking-wider uppercase">
                Current Openings
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            {jobListings.length > 0 ? (
              jobListings.map((job) => (
                <div
                  key={job.id}
                  className="job-card bg-[#2A2A2A] rounded-lg overflow-hidden hover:shadow-[0_8px_25px_rgba(217,118,52,0.15)] transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3 text-white">
                          {job.title}
                        </h3>

                        <p className="text-[#999] text-sm leading-relaxed mb-4">
                          {job.description}
                        </p>

                        {/* Job Meta */}
                        <div className="flex flex-wrap gap-4 text-sm text-[#D97634]">
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span> EXPERIENCE- {job.experience}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 6V12L16 14"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="md:ml-6">
                        <button
                          onClick={() => openApplication(job)}
                          className="bg-[#D97634] text-white px-8 py-3 rounded font-medium uppercase tracking-wider text-sm hover:bg-[#c56829] transition-all duration-300 hover:shadow-[0_5px_20px_rgba(217,118,52,0.4)]"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-[#999] py-10">
                No current openings available.
              </div>
            )}
          </div>
        </div>

        {/* ================= FOOTER EMAIL SECTION ================= */}
        <div className="text-center mt-16 pt-12 border-t border-[#333]">
          <p className="text-[#D97634] text-base">
            Don't see any post for you?{" "}
            <a
              href={`mailto:${careerEmail}`}
              className="underline hover:text-[#c56829] transition-colors duration-300"
            >
              Email your resume to {careerEmail}
            </a>
          </p>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white text-black w-full max-w-lg p-8 rounded-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4">
              Apply for {selectedJob?.title}
            </h2>

            <form onSubmit={submitApplication} className="space-y-4">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                required
                onChange={handleFormChange}
                className="w-full border p-3 rounded"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleFormChange}
                className="w-full border p-3 rounded"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleFormChange}
                className="w-full border p-3 rounded"
              />

              <textarea
                name="message"
                placeholder="Cover Letter / Message"
                rows="3"
                onChange={handleFormChange}
                className="w-full border p-3 rounded"
              />

              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleFormChange}
                className="w-full"
              />

              <div className="md:ml-6">
                <button className="bg-[#D97634] text-white px-8 py-3 rounded font-medium uppercase tracking-wider text-sm hover:bg-[#c56829] transition-all duration-300 hover:shadow-[0_5px_20px_rgba(217,118,52,0.4)] hover:-translate-y-0.5 whitespace-nowrap">
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
}
