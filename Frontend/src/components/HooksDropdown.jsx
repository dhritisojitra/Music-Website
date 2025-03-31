import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, ChevronDown, LogOut, Settings, Clock } from "lucide-react";

export default function HooksDropdown() {
  const [open, setOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative profile-dropdown">
      {/* Profile Button */}
      <div
        className="flex items-center gap-2 cursor-pointer rounded-md hover:text-gray-400"
        onClick={() => setOpen(!open)}
      >
        <User className="w-6 h-6 text-white" />
        <span className="text-gray-200">Learn Hooks</span>
        <ChevronDown className="w-4 h-4 text-white" />
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <ul className="text-sm text-gray-700">
            <li className="flex items-center gap-2 pr-2 py-2 hover:bg-gray-100 cursor-pointer">
              <User className="w-4 h-4 text-gray-500" />
              <Link to='/usestate' style={{textDecoration: "none", color: "inherit"}}>
              useState
              </Link>
            </li>
            <li className="flex items-center gap-2 pr-2 py-2 hover:bg-gray-100 cursor-pointer">
              <Settings className="w-4 h-4 text-gray-500" />
              <Link to="/useeffect" style={{textDecoration: "none", color: "inherit"}}>
                useEffect
              </Link>
            </li>
            <li className="flex items-center gap-2 pr-2 py-2 hover:bg-gray-100 cursor-pointer">
              <Clock className="w-4 h-4 text-gray-500" />
              <Link to='/useref' style={{textDecoration: "none", color: "inherit"}}>useRef</Link>
            </li>
            <li className="flex items-center gap-2 pr-2 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
              <LogOut className="w-4 h-4" />
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
