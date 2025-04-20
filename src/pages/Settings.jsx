import React from 'react';

const Settings = () => {
  return (
    <div className="poppins max-w-6xl mx-auto text-gray-800 space-y-12">
      {/* Pretty Header */}
      <div className="bg-[#FFE4E1] p-6 rounded-2xl shadow">
        <h1 className="text-3xl font-bold text-[#B3446C]">⚙️ Settings</h1>
        <p className="text-[#B3446C] mt-1 text-sm">Customize your store preferences and user experience 💫</p>
      </div>

      {/* General Settings */}
      <section className="bg-[#FFE4E1] p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold text-pink-600">General Settings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Store Name</label>
            <input type="text" placeholder="Enter store name" className="w-full focus:outline-none px-4 py-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Store Email</label>
            <input type="email" placeholder="Enter store email" className="w-full focus:outline-none px-4 py-2 border rounded-lg" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1">Store Address</label>
            <input type="text" placeholder="Enter store address" className="w-full px-4 focus:outline-none  py-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Currency</label>
            <select className="w-full px-4 py-2 border rounded-lg">
              <option>USD ($)</option>
              <option>NGN (₦)</option>
              <option>EUR (€)</option>
            </select>
          </div>
          <div className="flex items-center gap-3 mt-6">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-pink-600 transition-all"></div>
              <div className="absolute w-4 h-4 bg-white rounded-full left-1 top-1 peer-checked:translate-x-5 transition-transform shadow-md"></div>
            </label>
            <span className="text-sm text-gray-700">Enable email notifications</span>
          </div>
        </div>
        <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-lg">Save Changes</button>
      </section>

      {/* Notification Preferences */}
      <section className="bg-[#FFE4E1] p-6 rounded-xl shadow space-y-6">
        <h2 className="text-xl font-semibold text-pink-600">Notification Preferences</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Order Updates</h3>
              <p className="text-sm text-gray-600">Receive notifications about order status changes</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-pink-600 transition-all"></div>
              <div className="absolute w-4 h-4 bg-white rounded-full left-1 top-1 peer-checked:translate-x-5 transition-transform shadow-md"></div>
            </label>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Inventory Alerts</h3>
              <p className="text-sm text-gray-600">Get notified when products are low in stock</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-pink-600 transition-all"></div>
              <div className="absolute w-4 h-4 bg-white rounded-full left-1 top-1 peer-checked:translate-x-5 transition-transform shadow-md"></div>
            </label>
          </div>
        </div>
      </section>

      {/* Security Settings */}
      <section className=" bg-[#FFE4E1] p-6 rounded-xl shadow space-y-4">
        <h2 className="text-xl font-semibold text-pink-600">Security Settings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Current Password</label>
            <input type="password" placeholder="Enter current password" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">New Password</label>
            <input type="password" placeholder="Enter new password" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1">Confirm New Password</label>
            <input type="password" placeholder="Confirm new password" className="w-full px-4 py-2 border rounded-lg" />
          </div>
        </div>
        <button className="mt-4 bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded-lg">Update Password</button>
      </section>

      {/* Language & Region */}
      <section className="bg-[#FFE4E1] p-6 rounded-xl shadow space-y-6">
        <h2 className="text-xl font-semibold text-pink-600">Language & Region</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Language</label>
            <select className="w-full px-4 py-2 border rounded-lg">
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Time Zone</label>
            <select className="w-full px-4 py-2 border rounded-lg">
              <option>GMT +1 (West Africa)</option>
              <option>GMT</option>
              <option>GMT -5 (EST)</option>
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
