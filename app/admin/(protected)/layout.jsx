"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, LogOut, Menu, X} from "lucide-react";
import { Contact } from "lucide-react";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname(); // Get current URL to highlight sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Protect Routes (Check for token)
  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      router.push("/admin"); 
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    router.push("/admin");
  };

  if (isLoading) return null; 

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-20 bg-black/50 lg:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* --- SIDEBAR --- */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30 w-64 bg-slate-900 text-white transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
           <div className="flex items-center justify-between h-16 px-6 border-b border-slate-800">
          <span className="text-xl flex font-bold tracking-wider  ">
            <img src="/logo/himalayan-thakalil-logo.png" className="w-20" alt="" />
          </span>
            <span className="text-[#E9842C] flex font-bold tracking-wider items-baseline">ADMIN</span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-1">
          {/* Note: We pass the 'active' prop based on the current pathname */}
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" href="/admin/dashboard" active={pathname === "/admin/dashboard"} />
          <SidebarItem icon={<Contact size={20} />} text="Contacts" href="/admin/contacts-table" active={pathname === "/admin/contacts-table"} />
          {/* <SidebarItem icon={<ShoppingBag size={20} />} text="Orders" href="/admin/orders" active={pathname === "/admin/orders"} />
          <SidebarItem icon={<BarChart3 size={20} />} text="Analytics" href="/admin/analytics" active={pathname === "/admin/analytics"} />
          <SidebarItem icon={<Settings size={20} />} text="Settings" href="/admin/settings" active={pathname === "/admin/settings"} /> */}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button onClick={handleLogout} className="flex items-center w-full px-4 py-2 text-sm text-red-400 transition-colors rounded-lg hover:bg-slate-800 hover:text-red-300">
            <LogOut size={20} className="mr-3" /> Sign Out
          </button>
        </div>
      </aside>

      {/* --- CONTENT AREA --- */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200 shadow-sm shrink-0">
          <div className="flex items-center">
            <button onClick={() => setIsSidebarOpen(true)} className="p-2 mr-4 text-gray-600 rounded-lg lg:hidden hover:bg-gray-100">
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-semibold text-gray-700 capitalize">
               {pathname.split("/").pop()} {/* Displays 'dashboard', 'users', etc. */}
            </h2>
          </div>
          {/* User Profile / Search (Simplified for brevity) */}
          <div className="flex items-center space-x-4">
             <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">A</div>
          </div>
        </header>

        {/* DYNAMIC PAGE CONTENT RENDERS HERE */}
        <main className="flex-1 overflow-y-auto p-6">
          {children} 
        </main>
      </div>
    </div>
  );
}

// Sidebar Item Component (Updated to use Next.js Link)
function SidebarItem({ icon, text, href, active }) {
  return (
    <Link 
      href={href}
      className={`
        flex items-center px-2 py-1 cursor-pointer transition-colors group
        ${active ? "bg-[#E9842C] text-white" : "text-gray-400 hover:bg-slate-800 hover:text-white"}
      `}
    >
      <span className={`${active ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
        {icon}
      </span>
      <span className="ml-3 font-medium">{text}</span>
    </Link>
  );
}