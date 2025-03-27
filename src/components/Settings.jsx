import React from 'react';
import {
  User,
  PlayCircle,
  Sound,
  Shield,
  Info,
  Users,
  ChevronRight,
  ToggleRight,
  ToggleLeft,
} from "lucide-react";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>

        {/* Account Section */}
        <div className="bg-gray-800 p-4 rounded-lg mb-4 flex justify-between items-center cursor-pointer hover:bg-gray-700">
          <div className="flex items-center gap-4">
            <User className="w-6 h-6 text-green-400" />
            <p className="text-lg">Account</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Playback Section */}
        <div className="bg-gray-800 p-4 rounded-lg mb-4 flex justify-between items-center cursor-pointer hover:bg-gray-700">
          <div className="flex items-center gap-4">
            <PlayCircle className="w-6 h-6 text-green-400" />
            <p className="text-lg">Playback</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Media Quality Section */}
        <div className="bg-gray-800 p-4 rounded-lg mb-4 flex justify-between items-center hover:bg-gray-700">
          <div className="flex items-center gap-4">
            <Sound className="w-6 h-6 text-green-400" />
            <p className="text-lg">Media Quality</p>
          </div>
          <select className="bg-gray-700 text-white p-1 rounded-md">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        {/* Privacy Section */}
        <div className="bg-gray-800 p-4 rounded-lg mb-4 flex justify-between items-center cursor-pointer hover:bg-gray-700">
          <div className="flex items-center gap-4">
            <Shield className="w-6 h-6 text-green-400" />
            <p className="text-lg">Privacy & Security</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Social Section */}
        <div className="bg-gray-800 p-4 rounded-lg mb-4 flex justify-between items-center hover:bg-gray-700">
          <div className="flex items-center gap-4">
            <Users className="w-6 h-6 text-green-400" />
            <p className="text-lg">Social</p>
          </div>
          <button className="flex items-center gap-1 bg-gray-700 p-1 px-3 rounded-md">
            <ToggleLeft className="w-6 h-6 text-gray-400" />
            <span className="text-sm">Disabled</span>
          </button>
        </div>

        {/* About Section */}
        <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-gray-700">
          <div className="flex items-center gap-4">
            <Info className="w-6 h-6 text-green-400" />
            <p className="text-lg">About</p>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
