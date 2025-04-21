import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const metrics = {
  totalCustomers: 100,
  activeCustomers: 82,
  avgSpent: 946,
  churnRate: 2.4,
};

const customerGrowthData = [
  { month: 'Jan', customers: 100 },
  { month: 'Feb', customers: 150 },
  { month: 'Mar', customers: 200 },
  { month: 'Apr', customers: 280 },
  { month: 'May', customers: 300 },
  { month: 'Jun', customers: 420 },
  { month: 'Jul', customers: 350 },
  { month: 'Aug', customers: 470 },
  { month: 'Sep', customers: 550 },
  { month: 'Oct', customers: 620 },
  { month: 'Nov', customers: 700 },
  { month: 'Dec', customers: 760 },
];

const customers = [
  { name: 'Tobias Renshaw', email: 'tobias.renshaw@mailnest.com', status: 'Active', orders: 15, spent: '$1200' },
  { name: 'Amara Obiano', email: 'amara.obiano@netpost.io', status: 'Active', orders: 8, spent: '$750' },
  { name: 'Elliot Grayson', email: 'elliot.g@inboxnow.com', status: 'Inactive', orders: 3, spent: '$300' },
  { name: 'Emily Brown', email: 'emily@mailnest.com', status: 'Active', orders: 12, spent: '$980' },
  { name: 'Sienna Patel', email: 'sienna.patel@fastmailer.com', status: 'Active', orders: 20, spent: '$1500' },
];

const Customers = () => {
  return (
    <div className="space-y-8 poppins">
     {/* Header */}
<div className="bg-[#FFE4E1] p-6 rounded-2xl shadow">
  <h1 className="text-[18px] md:text-[36px] font-bold text-[#B3446C] mb-2 md:mb-2">👩‍💼 Loyal Beauties</h1>
  <p className="text-[#B3446C] text-[10px] md:text-[15px]">Get to know your cherished customers and their glow-up journey 💖</p>
</div>


      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#FFE4E1] p-4 rounded-lg shadow">
          <h3 className="text-sm text-[#B3446C]">Total Customers</h3>
          <p className="text-xl font-bold text-[#B3446C]">{metrics.totalCustomers}</p>
        </div>
        <div className="bg-[#FFE4E1] p-4 rounded-lg shadow">
          <h3 className="text-sm text-[#B3446C]">Active Customers</h3>
          <p className="text-xl font-bold text-[#B3446C]">
            {metrics.activeCustomers} ({(metrics.activeCustomers / metrics.totalCustomers) * 100}%)
          </p>
        </div>
        <div className="bg-[#FFE4E1] p-4 rounded-lg shadow">
          <h3 className="text-sm text-[#B3446C]">Avg. Spent</h3>
          <p className="text-xl font-bold text-[#B3446C]">${metrics.avgSpent}</p>
        </div>
        <div className="bg-[#FFE4E1] p-4 rounded-lg shadow">
          <h3 className="text-sm text-[#B3446C]">Churn Rate</h3>
          <p className="text-xl font-bold text-[#B3446C]">{metrics.churnRate}%</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search customers..."
          className="w-full md:w-1/2 px-4 py-2 bg-pink-100 text-[#B3446C] rounded-lg focus:outline-none"
        />
        <select className="bg-pink-100 text-[#B3446C] px-3 py-2 rounded-lg">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Growth Chart */}
      <div className="bg-[#B3446C] md:p-6 p-4 rounded-lg shadow">
        <h2 className="text-2xl  mb-4 text-white">Customer Growth</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={customerGrowthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#be185d" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#fce7f3" />
              <YAxis stroke="#fce7f3" />
              <Tooltip />
              <Area type="monotone" dataKey="customers" stroke="#f472b6" fillOpacity={1} fill="url(#growthGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Customer Table */}
      <div className="overflow-x-auto bg-[#FFE4E1]  rounded-lg">
        <table className="min-w-full text-[10px] md:text-[20px] text-white">
          <thead className="bg-pink-600 text-[10px] md:text-[15px] poppins ">
            <tr>
              <th className="px-2 md:px-4text-pink-600   font-thin py-2 text-left">Name</th>
              <th className="px-2 md:px-4  font-thin py-2 text-left">Email</th>
              <th className="px-2 md:px-4  font-thin py-2 text-left">Status</th>
              <th className="px-2 md:px-4  font-thin py-2 text-left">Orders</th>
              <th className="px-2 md:px-4  font-thin  py-2 text-left">Total Spent</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, idx) => (
              <tr key={idx} className="border-t text-pink-600  border-pink-600">
                <td className="px-2 text-[9px] md:text-[16px] md:px-4 py-2">{c.name}</td>
                <td className="px-2 text-[9px] md:text-[16px] md:px-4 py-2">{c.email}</td>
                <td className="px-2 md:px-4 py-2">
                  <span
                    className={`inline-block md:px-3 px-1.5 py-1  text-[10px] md:text-xs rounded-full ${
                      c.status === 'Active' ? 'bg-green-300 text-green-800' : 'bg-red-300 text-red-800'
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="px-2 text-[9px] md:text-[16px] md:px-4 py-2">{c.orders}</td>
                <td className="px-2 text-[9px] md:text-[16px] md:px-4 py-2">{c.spent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
