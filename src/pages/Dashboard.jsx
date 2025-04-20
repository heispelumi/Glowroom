
// export default Dashboard;
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import ProductCard from '../components/ProductCard';
import { productList } from '../components/productList';

const revenueData = [
  { month: 'Jan', revenue: 7800 },
  { month: 'Feb', revenue: 9200 },
  { month: 'Mar', revenue: 11200 },
  { month: 'Apr', revenue: 13450 },
  { month: 'May', revenue: 14980 },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
 

      {/* Greeting */}
      <div className="bg-[#FFE4E1] poppins p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-[#B3446C] mb-2">Welcome back, Beauty Boss 💄</h1>
        <p className="text-[#B3446C]">Here's a snapshot of your store's glam stats today ✨</p>
      </div>

      {/* Revenue Chart */}
      <div className="bg-[#B3446C] p-6 rounded-lg  text-[#B3446C] shadow">
        <h2 className="text-2xl font-bold mb-4 "> Monthly Beauty Revenue</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#be185d" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#fce7f3" />
              <YAxis stroke="#f472b6" />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="#f472b6" fillOpacity={1} fill="url(#revenueGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Product Sections */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* New Arrivals */}
        <div className="bg-pink-700 poppins  p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-white">🛍️ New Arrivals</h3>
          <p className="text-sm text-pink-200 mb-4">Latest additions to your beauty collection.</p>
          <ul className="space-y-3 ">
            {productList.slice(0, 4).map((product, idx) => (
              <ProductCard key={idx} product={product} compact />
            ))}
          </ul>
        </div>

        {/* Fan Favorites */}
        <div className="bg-pink-700 p-6  rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2 text-white">🌟 Fan Favorites</h3>
          <p className="text-sm text-pink-200 mb-4">Your most adored beauty products.</p>
          <ul className="space-y-3">
            {productList
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 4)
              .map((product, idx) => (
                <ProductCard key={idx} product={product} showRating compact />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
