import { useContext, useEffect, useState } from "react";
import { AppContent } from "../Context/AppContext";

import {
  User,
  PlayCircle,
  Shield,
  Users,
  Info,
  ChevronDown,
  ChevronUp,
  Paintbrush,
} from "lucide-react";


export default function Settings() {
  const { userData } = useContext(AppContent);
  const [showSocial, setShowSocial] = useState(false);
  const [showTheme, setShowTheme] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("System");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "System";
    setSelectedTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    localStorage.setItem("theme", theme);
    applyTheme(theme);
  };

  const applyTheme = (theme) => {
    const root = document.documentElement;
    if (theme === "Dark") {
      root.classList.add("dark");
    } else if (theme === "Light") {
      root.classList.remove("dark");
    } else {
      // System default
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      prefersDark ? root.classList.add("dark") : root.classList.remove("dark");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white p-8">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>

      <div className="space-y-4">
        <SettingCard
          icon={<User className="w-6 h-6 text-gray-400" />}
          title="Account"
          description="Manage your account details, password, and subscription."
        />

        <SettingCard
          icon={<PlayCircle className="w-6 h-6 text-gray-400" />}
          title="Playback"
          description="Customize how your music plays, including crossfade and autoplay."
        />

        <SettingCard
          icon={<Shield className="w-6 h-6 text-gray-400" />}
          title="Privacy"
          description="Control your data, listening history, and security preferences."
        />

        <DropdownCard
          title="Social"
          icon={<Users className="w-6 h-6 text-gray-400" />}
          isOpen={showSocial}
          onToggle={() => setShowSocial(!showSocial)}
        >
          <div className="mt-4">
            <div className="mb-4">
              <h3 className="text-md font-semibold text-white mb-1">Followers</h3>
              <ul className="text-sm text-gray-300 list-disc pl-6 space-y-1">
                {userData?.followers?.length > 0 ? (
                  userData.followers.map((f) => (
                    <li key={f._id} className="hover:text-white hover:underline cursor-pointer">
                      {f.name}
                    </li>
                  ))
                ) : (
                  <li>No followers yet</li>
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold text-white mb-1">Following</h3>
              <ul className="text-sm text-gray-300 list-disc pl-6 space-y-1">
                {userData?.following?.length > 0 ? (
                  userData.following.map((f) => (
                    <li key={f._id} className="hover:text-white hover:underline cursor-pointer">
                      {f.name}
                    </li>
                  ))
                ) : (
                  <li>Not following anyone</li>
                )}
              </ul>
            </div>
          </div>
        </DropdownCard>

        <DropdownCard
          title="Themes"
          icon={<Paintbrush className="w-6 h-6 text-gray-400" />}
          isOpen={showTheme}
          onToggle={() => setShowTheme(!showTheme)}
        >
          <div className="mt-4 space-y-2 pl-2">
            {["Light", "Dark"].map((theme) => (
              <div
                key={theme}
                onClick={() => handleThemeChange(theme)}
                className={`cursor-pointer px-4 py-2 rounded-md transition ${
                  selectedTheme === theme
                    ? "bg-purple-700 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {theme}
              </div>
            ))}
          </div>
        </DropdownCard>

        <DropdownCard
          title="About"
          icon={<Info className="w-6 h-6 text-gray-400" />}
          isOpen={showAbout}
          onToggle={() => setShowAbout(!showAbout)}
        >
          <div className="mt-4 space-y-2 text-sm text-gray-300 leading-relaxed px-2">
            <p>
              This music streaming platform is designed for both casual listeners and music
              enthusiasts. Create playlists, explore trending tracks, and follow other users' journeys.
            </p>
            <p>
              With seamless playback, personalized recommendations, and a vibrant community,
              our goal is to make discovering and sharing music a joy.
            </p>
            <p>
              Built using modern web technologies like React, Tailwind CSS, and Express.js,
              it delivers a smooth and stylish experience across all devices.
            </p>
          </div>
        </DropdownCard>
      </div>
    </div>
  );
}

function SettingCard({ icon, title, description }) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors duration-200">
      <div className="flex items-center gap-4">
        {icon}
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

function DropdownCard({ title, icon, isOpen, onToggle, children }) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200">
      <div className="flex items-center justify-between cursor-pointer" onClick={onToggle}>
        <div className="flex items-center gap-4">
          {icon}
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-400">Click to expand options.</p>
          </div>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </div>
      {isOpen && <div className="pt-4">{children}</div>}
    </div>
  );
}
