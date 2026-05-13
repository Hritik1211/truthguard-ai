import { useEffect, useState } from "react";
import { getDashboardStats } from "../api/dashboardApi";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Activity,
  Mail,
  Link2,
  Image,
  Bell,
  Search,
} from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const pieData = [
  { name: "Safe", value: 70 },
  { name: "Phishing", value: 20 },
  { name: "Malware", value: 10 },
];

const COLORS = ["#22c55e", "#ef4444", "#3b82f6"];

const barData = [
  { name: "Mon", threats: 40 },
  { name: "Tue", threats: 65 },
  { name: "Wed", threats: 35 },
  { name: "Thu", threats: 90 },
  { name: "Fri", threats: 50 },
  { name: "Sat", threats: 75 },
  { name: "Sun", threats: 30 },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#060816] text-white flex">

      {/* SIDEBAR */}
      <aside className="w-72 bg-[#0B1220] border-r border-gray-800 p-6 hidden lg:block">

        <div className="flex items-center gap-3 mb-14">

          <Shield className="text-red-500 w-9 h-9" />

          <div>

            <h1 className="text-2xl font-bold">
              TruthGuard
            </h1>

            <p className="text-gray-500 text-sm">
              AI Security Platform
            </p>

          </div>

        </div>

        <nav className="space-y-3">

          <div className="bg-red-500/20 text-red-400 px-4 py-4 rounded-2xl flex items-center gap-3">
            <Activity />
            Dashboard
          </div>

          <div className="text-gray-400 hover:bg-[#111827] hover:text-white transition px-4 py-4 rounded-2xl flex items-center gap-3 cursor-pointer">
            <Mail />
            Email Scans
          </div>

          <div className="text-gray-400 hover:bg-[#111827] hover:text-white transition px-4 py-4 rounded-2xl flex items-center gap-3 cursor-pointer">
            <Link2 />
            URL Analysis
          </div>

          <div className="text-gray-400 hover:bg-[#111827] hover:text-white transition px-4 py-4 rounded-2xl flex items-center gap-3 cursor-pointer">
            <Image />
            Image Scans
          </div>

          <div className="text-gray-400 hover:bg-[#111827] hover:text-white transition px-4 py-4 rounded-2xl flex items-center gap-3 cursor-pointer">
            <AlertTriangle />
            Threat Reports
          </div>

        </nav>

      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8">

        {/* TOPBAR */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          <div>

            <h1 className="text-4xl font-bold mb-2">
              Security Dashboard
            </h1>

            <p className="text-gray-400">
              AI powered real-time cybersecurity monitoring
            </p>

          </div>

          <div className="flex items-center gap-4">

            <div className="bg-[#111827] border border-gray-800 px-4 py-3 rounded-2xl flex items-center gap-3">

              <Search className="text-gray-500" size={20} />

              <input
                type="text"
                placeholder="Search threats..."
                className="bg-transparent outline-none text-sm"
              />

            </div>

            <button className="bg-[#111827] border border-gray-800 p-3 rounded-2xl">
              <Bell />
            </button>

          </div>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          <div className="bg-[#111827] border border-gray-800 p-6 rounded-3xl">

            <div className="flex items-center justify-between mb-5">

              <p className="text-gray-400">
                Total Scans
              </p>

              <Activity className="text-blue-400" />

            </div>

            <h1 className="text-5xl font-bold">
              12,450
            </h1>

            <p className="text-green-400 mt-3 text-sm">
              +18% this week
            </p>

          </div>

          <div className="bg-[#111827] border border-gray-800 p-6 rounded-3xl">

            <div className="flex items-center justify-between mb-5">

              <p className="text-gray-400">
                Threats Detected
              </p>

              <AlertTriangle className="text-red-400" />

            </div>

            <h1 className="text-5xl font-bold text-red-400">
              2,184
            </h1>

            <p className="text-red-400 mt-3 text-sm">
              High Risk Activity
            </p>

          </div>

          <div className="bg-[#111827] border border-gray-800 p-6 rounded-3xl">

            <div className="flex items-center justify-between mb-5">

              <p className="text-gray-400">
                Safe Results
              </p>

              <CheckCircle className="text-green-400" />

            </div>

            <h1 className="text-5xl font-bold text-green-400">
              10,266
            </h1>

            <p className="text-green-400 mt-3 text-sm">
              Protected Successfully
            </p>

          </div>

          <div className="bg-[#111827] border border-gray-800 p-6 rounded-3xl">

            <div className="flex items-center justify-between mb-5">

              <p className="text-gray-400">
                AI Accuracy
              </p>

              <Shield className="text-yellow-400" />

            </div>

            <h1 className="text-5xl font-bold text-yellow-400">
              98.2%
            </h1>

            <p className="text-yellow-400 mt-3 text-sm">
              AI Confidence Score
            </p>

          </div>

        </div>

        {/* CHARTS */}
        <div className="grid xl:grid-cols-2 gap-8 mb-10">

          {/* PIE */}
          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-8">
              Threat Distribution
            </h2>

            <div className="h-[320px]">

              <ResponsiveContainer width="100%" height="100%">

                <PieChart>

                  <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={110}
                    label
                  >

                    {pieData.map((entry, index) => (

                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />

                    ))}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* BAR */}
          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-8">
              Weekly Threat Activity
            </h2>

            <div className="h-[320px]">

              <ResponsiveContainer width="100%" height="100%">

                <BarChart data={barData}>

                  <XAxis
                    dataKey="name"
                    stroke="#9CA3AF"
                  />

                  <YAxis stroke="#9CA3AF" />

                  <Tooltip />

                  <Bar
                    dataKey="threats"
                    fill="#ef4444"
                    radius={[10, 10, 0, 0]}
                  />

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

        </div>

        {/* RECENT ACTIVITY */}
        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-2xl font-bold">
              Recent Threat Activity
            </h2>

            <button className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-2xl transition">
              Export Report
            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="text-left border-b border-gray-800 text-gray-400">

                  <th className="pb-5">Threat Type</th>
                  <th className="pb-5">Risk</th>
                  <th className="pb-5">Status</th>
                  <th className="pb-5">Time</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b border-gray-900 hover:bg-[#0f172a] transition">

                  <td className="py-6">
                    Phishing Email
                  </td>

                  <td className="text-red-400">
                    High
                  </td>

                  <td>
                    Blocked
                  </td>

                  <td className="text-gray-400">
                    2 mins ago
                  </td>

                </tr>

                <tr className="border-b border-gray-900 hover:bg-[#0f172a] transition">

                  <td className="py-6">
                    Fake Banking URL
                  </td>

                  <td className="text-yellow-400">
                    Medium
                  </td>

                  <td>
                    Flagged
                  </td>

                  <td className="text-gray-400">
                    12 mins ago
                  </td>

                </tr>

                <tr className="hover:bg-[#0f172a] transition">

                  <td className="py-6">
                    QR Scam
                  </td>

                  <td className="text-red-400">
                    High
                  </td>

                  <td>
                    Removed
                  </td>

                  <td className="text-gray-400">
                    1 hour ago
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;