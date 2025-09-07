import React, { useState } from "react";
import PageLayout from "../Layout/PageLayout";

function Settings() {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    language: "en",
    timezone: "GMT+5:30",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    alert("Settings saved!");
    console.log("Saved settings:", settings);
  };

  return (
    <PageLayout>
      <div className="p-6 space-y-8 text-gray-800 dark:text-white">
        <h1 className="text-2xl font-bold">Settings</h1>

        {/* Profile Settings */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-semibold border-b border-gray-300 dark:border-gray-700 pb-2">
            Profile Settings
          </h2>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="New Password"
              className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 space-y-4">
          <h2 className="text-lg font-semibold border-b border-gray-300 dark:border-gray-700 pb-2">
            System Settings
          </h2>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
              />
              Enable Dark Mode
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
              />
              Enable Notifications
            </label>
            <div>
              <label className="block mb-1">Language</label>
              <select
                name="language"
                value={settings.language}
                onChange={handleChange}
                className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              >
                <option value="en">English</option>
                <option value="si">Sinhala</option>
                <option value="ta">Tamil</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Timezone</label>
              <select
                name="timezone"
                value={settings.timezone}
                onChange={handleChange}
                className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent"
              >
                <option value="GMT+5:30">GMT+5:30 (Sri Lanka)</option>
                <option value="GMT+0">GMT+0 (UTC)</option>
                <option value="GMT+1">GMT+1 (Europe)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </PageLayout>
  );
}

export default Settings;
