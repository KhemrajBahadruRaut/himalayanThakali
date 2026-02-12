"use client";
import React, { useEffect, useState, useCallback } from "react";
import CareerApplications from "./application/page";
import { 
  Briefcase, 
  Mail, 
  Plus, 
  Edit2, 
  Trash2, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  X 
} from "lucide-react";

const API = "http://localhost/himalayanthakali_backend/career";

export default function CareerAdmin() {
  const [activeTab, setActiveTab] = useState("jobs"); // "jobs" or "applications"
  const [jobs, setJobs] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [careerEmail, setCareerEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const [form, setForm] = useState({
    title: "",
    description: "",
    experience: "",
    type: "Full-time",
    location: "",
  });

  // ================= HELPERS =================
  const showStatus = (type, message) => {
    setStatus({ type, message });
    setTimeout(() => setStatus({ type: "", message: "" }), 4000);
  };

  const fetchJobs = useCallback(async () => {
    try {
      const res = await fetch(`${API}/get_openings.php`);
      const data = await res.json();
      if (data.success) setJobs(data.data);
    } catch (err) {
      showStatus("error", "Failed to load jobs");
    }
  }, []);

  const fetchEmail = async () => {
    try {
      const res = await fetch(`${API}/get_career_email.php`);
      const data = await res.json();
      if (data.success) setCareerEmail(data.email);
    } catch (err) {}
  };

  useEffect(() => {
    fetchJobs();
    fetchEmail();
  }, [fetchJobs]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ================= ACTIONS =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = editingId ? `${API}/update_opening.php` : `${API}/add_opening.php`;
    const payload = editingId ? { ...form, id: editingId } : form;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        showStatus("success", editingId ? "Job updated!" : "Job added!");
        setForm({ title: "", description: "", experience: "", type: "Full-time", location: "" });
        setEditingId(null);
        fetchJobs();
      } else {
        showStatus("error", data.message);
      }
    } catch (err) {
      showStatus("error", "Connection error");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (job) => {
    setEditingId(job.id);
    setForm({
      title: job.title,
      description: job.description,
      experience: job.experience,
      type: job.type,
      location: job.location,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    try {
      const res = await fetch(`${API}/delete_opening.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        showStatus("success", "Opening deleted");
        fetchJobs();
      }
    } catch (err) {
      showStatus("error", "Delete failed");
    }
  };

  const updateEmail = async () => {
    const res = await fetch(`${API}/update_career_email.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: careerEmail }),
    });
    const data = await res.json();
    showStatus(data.success ? "success" : "error", data.message);
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Status */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Career Dashboard</h1>
            <p className="text-zinc-500">Manage job openings and candidate applications</p>
          </div>
          
          {status.message && (
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg animate-in fade-in slide-in-from-top-2 ${
              status.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}>
              {status.type === "success" ? <CheckCircle2 size={18}/> : <AlertCircle size={18}/>}
              <span className="text-sm font-medium">{status.message}</span>
            </div>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 bg-zinc-200/50 p-1 rounded-xl w-fit mb-8">
          <button 
            onClick={() => setActiveTab("jobs")}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition ${
              activeTab === "jobs" ? "bg-white shadow text-orange-600" : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            Job Management
          </button>
          <button 
            onClick={() => setActiveTab("applications")}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition ${
              activeTab === "applications" ? "bg-white shadow text-orange-600" : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            Applications
          </button>
        </div>

        {activeTab === "jobs" ? (
          <div className="space-y-8 animate-in fade-in duration-500">
            
            {/* Email Settings Bar */}
            <div className="bg-white p-4 rounded-xl border border-zinc-200 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-zinc-500 mr-auto">
                <Mail size={18} />
                <span className="text-sm font-medium">Application Target:</span>
              </div>
              <input
                type="email"
                value={careerEmail}
                onChange={(e) => setCareerEmail(e.target.value)}
                className="bg-zinc-50 border border-zinc-200 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 w-full md:w-64"
                placeholder="career@restaurant.com"
              />
              <button onClick={updateEmail} className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-zinc-800 transition">
                Update
              </button>
            </div>

            <div className="flex flex-wrap gap-8">
              {/* Form Column */}
              <div className="">
                <div className="bg-white border border-zinc-200 rounded-2xl p-6 sticky top-8">
                  <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                    {editingId ? <Edit2 size={20} className="text-blue-500"/> : <Plus size={20} className="text-orange-500"/>}
                    {editingId ? "Edit Opening" : "Create New Job"}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-bold uppercase text-zinc-400 ml-1">Title</label>
                      <input name="title" value={form.title} onChange={handleChange} className="w-full border-zinc-200 border p-3 rounded-xl bg-zinc-50 text-sm" required placeholder="Sous Chef" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-zinc-400 ml-1">Experience</label>
                      <input name="experience" value={form.experience} onChange={handleChange} className="w-full border-zinc-200 border p-3 rounded-xl bg-zinc-50 text-sm" required placeholder="2-4 Years" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-bold uppercase text-zinc-400 ml-1">Type</label>
                        <select name="type" value={form.type} onChange={handleChange} className="w-full border-zinc-200 border p-3 rounded-xl bg-zinc-50 text-sm">
                          <option>Full-time</option>
                          <option>Part-time</option>
                          <option>Contract</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase text-zinc-400 ml-1">Location</label>
                        <input name="location" value={form.location} onChange={handleChange} className="w-full border-zinc-200 border p-3 rounded-xl bg-zinc-50 text-sm" required placeholder="Kathmandu" />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase text-zinc-400 ml-1">Description</label>
                      <textarea name="description" value={form.description} onChange={handleChange} className="w-full border-zinc-200 border p-3 rounded-xl bg-zinc-50 text-sm h-32" required placeholder="Detail the role responsibilities..." />
                    </div>
                    <button disabled={loading} className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700 transition disabled:opacity-50">
                      {loading ? "Processing..." : editingId ? "Save Changes" : "Post Opening"}
                    </button>
                    {editingId && (
                      <button type="button" onClick={() => {setEditingId(null); setForm({title:"", description:"", experience:"", type:"Full-time", location:""});}} className="w-full text-zinc-400 text-sm font-medium flex items-center justify-center gap-1">
                        <X size={14}/> Discard Edit
                      </button>
                    )}
                  </form>
                </div>
              </div>

              {/* Jobs List Column */}
              <div className="space-y-4 flex-1">
                <h2 className="text-lg font-bold">Active Openings ({jobs.length})</h2>
                {jobs.map((job) => (
                  <div key={job.id} className="bg-white border border-zinc-200 p-5 rounded-2xl flex justify-between items-start hover:shadow-md transition group">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg text-zinc-900">{job.title}</h3>
                        <span className="bg-orange-50 text-orange-600 text-[10px] font-black uppercase px-2 py-0.5 rounded border border-orange-100">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
                        <div className="flex items-center gap-1"><MapPin size={14}/> {job.location}</div>
                        <div className="flex items-center gap-1"><Clock size={14}/> {job.experience}</div>
                      </div>
                      <p className="text-sm text-zinc-600 line-clamp-2 pt-2 border-t border-zinc-50">{job.description}</p>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition">
                      <button onClick={() => handleEdit(job)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"><Edit2 size={18}/></button>
                      <button onClick={() => handleDelete(job.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"><Trash2 size={18}/></button>
                    </div>
                  </div>
                ))}
                {jobs.length === 0 && (
                  <div className="bg-white border-2 border-dashed border-zinc-200 rounded-2xl p-20 text-center">
                    <Briefcase className="mx-auto text-zinc-300 mb-4" size={48} />
                    <p className="text-zinc-500 font-medium">No active openings found.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in duration-500">
            <CareerApplications />
          </div>
        )}
      </div>
    </div>
  );
}