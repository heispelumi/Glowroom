import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from 'recharts';

const COLORS = ['#ec4899', '#f9a8d4', '#f472b6', '#be185d'];

const analyticsData = [
  { month: 'Jan', value: 3400 },
  { month: 'Feb', value: 4200 },
  { month: 'Mar', value: 5900 },
  { month: 'Apr', value: 6800 },
  { month: 'May', value: 7500 },
  { month: 'Jun', value: 6900 },
  { month: 'Jul', value: 8800 },
  { month: 'Aug', value: 9100 },
  { month: 'Sep', value: 10200 },
  { month: 'Oct', value: 11000 },
  { month: 'Nov', value: 11700 },
  { month: 'Dec', value: 13000 },
];

const pieData = [
  { name: 'Returning Customers', value: 742 },
  { name: 'New Customers', value: 460 },
];

const topCategories = [
  { name: 'Skincare', orders: 400 },
  { name: 'Makeup', orders: 320 },
  { name: 'Haircare', orders: 240 },
  { name: 'Fragrance', orders: 190 },
];

const Analytics = () => {
  return (
    <div className="space-y-8 poppins  font-poppins">
      {/* Header */}
      <div className="bg-[#FFE4E1] p-6 rounded-2xl shadow">
        <h1 className="text-[18px] md:text-[36px] font-bold text-[#B3446C]">📊 Beauty Analytics</h1>
        <p className="text-[#B3446C] mt-1 text-[10px] md:text-[15px]">Empowering your glam empire with data insights 💅</p>
      </div>

      {/* Key Stats Cards */}
      <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[{
          title: 'Total Revenue', value: '$35,000'
        }, {
          title: 'Total Orders', value: '1,580'
        }, {
          title: 'Avg. Order Value', value: '$78.48'
        }, {
          title: 'Bounce Rate', value: '32.5%'
        }].map((item, i) => (
          <div key={i} className="text-[#B3446C]   p-5  bg-[#FFE4E1] rounded-xl text-center shadow-md">
            <p className="text-sm text-[#B3446C] ">{item.title}</p>
            <h3 className="text-2xl font-semibold mt-1">{item.value}</h3>
          </div>
        ))}
      </div>

      {/* Grid of Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className=" bg-[#FFE4E1] p-4 ">
          <h3 className="text-lg text-[#B3446C]   font-semibold mb-4">Customer Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={80} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className=" bg-[#FFE4E1]  p-4 ">
          <h3 className="text-lg   text-[#B3446C] font-semibold mb-4"> Top Categories by Orders</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topCategories}>
              <XAxis dataKey="name" stroke="#fce7f3" fontSize={12} />
              <YAxis stroke="#fce7f3" fontSize={12} />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Bar dataKey="orders" fill="#f472b6" barSize={40} radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue Area Chart */}
      <div className="bg-[#B3446C] p-6 rounded-2xl shadow">
        <h2 className="text-xl font-bold mb-4 text-white "> Monthly Revenue Trend</h2>
        <div className="h-64 ">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={analyticsData}>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f472b6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#be185d" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#fce7f3" fontSize={12} />
              <YAxis stroke="#fce7f3" fontSize={12} />
              <Tooltip  />
              <Area type="monotone" dataKey="value" stroke="#f472b6" fillOpacity={1} fill="url(#gradient)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
