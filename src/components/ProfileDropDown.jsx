import { useState } from "react";
import { User, ChevronDown, LogOut, Settings, Clock } from "lucide-react";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Button */}
      <div
        className="flex items-center gap-2  cursor-pointer rounded-md hover:text-gray-400"
        onClick={() => setOpen(!open)}
      >
        <User className="w-6 h-6 text-white-500" />
        <span className="text-white-700">Profile</span>
        <ChevronDown className="w-4 h-4 text-white-500" />
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="text-sm text-gray-700">
            <li className="flex items-center gap-2 pr-2 py-2 hover:bg-gray-100 cursor-pointer">
              <User className="w-4 h-4 text-gray-500" />
              Add Account
            </li>
            <li className="flex items-center gap-2 pr-3 py-2 hover:bg-gray-100 cursor-pointer">
              <Settings className="w-4 h-4 text-gray-500" />
              Settings & Privacy
            </li>
            <li className="flex items-center gap-2 pr-3 py-2 hover:bg-gray-100 cursor-pointer">
              <Clock className="w-4 h-4 text-gray-500" />
              Recents
            </li>
            <li className="flex items-center gap-2 pr-3 py-2 hover:bg-gray-100 cursor-pointer  ">
              <LogOut className="w-4 h-4 text-red-500" />
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
