import { User, PlayCircle, Music, Shield, Users, Info } from "lucide-react";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black text-white p-8">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>
      
      <div className="space-y-4">
        {/* Account Settings */}
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer">
          <div className="flex items-center gap-4">
            <User className="w-6 h-6 text-gray-400" />
            <div>
              <h2 className="text-lg font-semibold">Account</h2>
              <p className="text-sm text-gray-400">Manage your account details, password, and subscription.</p>
            </div>
          </div>
        </div>

        {/* Playback Settings */}
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer">
          <div className="flex items-center gap-4">
            <PlayCircle className="w-6 h-6 text-gray-400" />
            <div>
              <h2 className="text-lg font-semibold">Playback</h2>
              <p className="text-sm text-gray-400">Customize how your music plays, including crossfade and autoplay.</p>
            </div>
          </div>
        </div>

        {/* Media Quality */}
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer">
          <div className="flex items-center gap-4">
            <Music className="w-6 h-6 text-gray-400" />
            <div>
              <h2 className="text-lg font-semibold">Media Quality</h2>
              <p className="text-sm text-gray-400">Adjust streaming and download quality for better performance.</p>
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer">
          <div className="flex items-center gap-4">
            <Shield className="w-6 h-6 text-gray-400" />
            <div>
              <h2 className="text-lg font-semibold">Privacy</h2>
              <p className="text-sm text-gray-400">Control your data, listening history, and security preferences.</p>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer">
          <div className="flex items-center gap-4">
            <Users className="w-6 h-6 text-gray-400" />
            <div>
              <h2 className="text-lg font-semibold">Social</h2>
              <p className="text-sm text-gray-400">Manage who can see your listening activity and interactions.</p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer">
          <div className="flex items-center gap-4">
            <Info className="w-6 h-6 text-gray-400" />
            <div>
              <h2 className="text-lg font-semibold">About</h2>
              <p className="text-sm text-gray-400">Learn more about this app and check for updates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
