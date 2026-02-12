"use client";
import { useEffect, useState } from "react";
import { 
  FileText, 
  ExternalLink, 
  Search, 
  Download, 
  User, 
  Calendar, 
  Mail,
  Filter
} from "lucide-react";

const API = "http://localhost/himalayanthakali_backend/application";

export default function CareerApplications() {
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API}/get_applications.php`);
      const data = await res.json();
      if (data.success) setApplications(data.data);
    } catch (error) {
      console.error("Failed to fetch applications:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredApps = applications.filter(app => 
    app.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Search and Stats Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full flex items-center md:w-96">
            <Search className=" text-zinc-400" size={18} />
          <input 
            type="text"
            placeholder="Search by name, job, or email..."
            className="w-full p-2 bg-white border border-zinc-200 rounded-xl text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2 text-sm text-zinc-500 bg-zinc-100 px-4 py-2 rounded-lg">
          <Filter size={16} />
          <span>Total: <b>{filteredApps.length}</b> Applications</span>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50/50 border-b border-zinc-200">
                <th className="p-4 text-xs font-bold uppercase text-zinc-400 tracking-wider">Candidate</th>
                <th className="p-4 text-xs font-bold uppercase text-zinc-400 tracking-wider">Applied For</th>
                <th className="p-4 text-xs font-bold uppercase text-zinc-400 tracking-wider text-center">Resume</th>
                <th className="p-4 text-xs font-bold uppercase text-zinc-400 tracking-wider">Date Applied</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {isLoading ? (
                [...Array(3)].map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    <td colSpan="4" className="p-8 bg-zinc-50/20"></td>
                  </tr>
                ))
              ) : filteredApps.length > 0 ? (
                filteredApps.map((app) => (
                  <tr key={app.id} className="hover:bg-zinc-50/80 transition-colors group">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                          {app.full_name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-zinc-900">{app.full_name}</div>
                          <div className="text-xs text-zinc-500 flex items-center gap-1">
                            <Mail size={12} /> {app.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                        {app.job_title}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center gap-2">
                        <a
                          href={`http://localhost/himalayanthakali_backend/application/uploads/${app.resume}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-zinc-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition"
                          title="View Resume"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                          href={`http://localhost/himalayanthakali_backend/application/uploads/${app.resume}`}
                          download
                          className="p-2 text-zinc-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          title="Download Resume"
                        >
                          <Download size={20} />
                        </a>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-sm text-zinc-600">
                        <Calendar size={14} className="text-zinc-400" />
                        {formatDate(app.created_at)}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-12 text-center">
                    <div className="flex flex-col items-center text-zinc-400">
                      <FileText size={48} strokeWidth={1} className="mb-2" />
                      <p className="text-sm font-medium">No applications matching your search.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}