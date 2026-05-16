import { useNavigate } from "react-router-dom";
import {
  Shield,
  Mail,
  Image,
  Link2,
  History,
} from "lucide-react";

function Home() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-[#060816] text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6 border-b border-gray-800">

        <div className="flex items-center gap-3">

          <Shield className="text-red-500 w-8 h-8" />

          <h1 className="text-2xl font-bold">
            TruthGuard AI
          </h1>

        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-xl font-medium"
        >
          Dashboard
        </button>

      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 pt-24 pb-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-full mb-8">

              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>

              AI Powered Cybersecurity Platform

            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">

              Detect
              <span className="text-red-500"> Phishing </span>
              &
              <span className="text-blue-500"> Online Scams </span>
              in Real Time

            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">

              Analyze suspicious emails, fake URLs,
              screenshots, and phishing attacks using
              AI powered threat detection and real-time
              scam analysis.

            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap gap-4">

              <button
                onClick={() => navigate("/email")}
                className="bg-red-500 hover:bg-red-600 px-6 py-4 rounded-2xl font-semibold flex items-center gap-2 transition"
              >

                <Mail size={20} />
                Scan Email

              </button>

              <button
                onClick={() => navigate("/image")}
                className="bg-[#111827] hover:bg-[#1f2937] border border-gray-700 px-6 py-4 rounded-2xl font-semibold flex items-center gap-2 transition"
              >

                <Image size={20} />
                Scan Image

              </button>

              <button
                onClick={() => navigate("/url")}
                className="bg-[#111827] hover:bg-[#1f2937] border border-gray-700 px-6 py-4 rounded-2xl font-semibold flex items-center gap-2 transition"
              >

                <Link2 size={20} />
                Scan URL

              </button>

            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 shadow-2xl">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-2xl font-bold">
                Threat Overview
              </h2>

              <div className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">

                Active

              </div>

            </div>

            {/* STATS */}
            <div className="space-y-6">

              <div className="bg-[#111827] rounded-2xl p-5 border border-gray-800">

                <p className="text-gray-400 mb-2">
                  Threat Detection Accuracy
                </p>

                <h1 className="text-4xl font-bold text-green-400">
                  98.2%
                </h1>

              </div>

              <div className="bg-[#111827] rounded-2xl p-5 border border-gray-800">

                <p className="text-gray-400 mb-2">
                  Emails Scanned
                </p>

                <h1 className="text-4xl font-bold text-red-400">
                  12,450+
                </h1>

              </div>

              <div className="bg-[#111827] rounded-2xl p-5 border border-gray-800">

                <p className="text-gray-400 mb-2">
                  Phishing Threats Blocked
                </p>

                <h1 className="text-4xl font-bold text-blue-400">
                  2,184
                </h1>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold mb-4">
            Powerful Security Features
          </h2>

          <p className="text-gray-400 text-lg">
            AI driven protection against modern cyber threats
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* FEATURE 1 */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 hover:border-red-500 transition">

            <div className="bg-red-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">

              <Shield className="text-red-500" />

            </div>

            <h3 className="text-2xl font-semibold mb-4">
              AI Scam Detection
            </h3>

            <p className="text-gray-400 leading-relaxed">

              Detect phishing emails,
              impersonation attempts,
              and malicious content using AI analysis.

            </p>

          </div>

          {/* FEATURE 2 */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition">

            <div className="bg-blue-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">

              <Link2 className="text-blue-500" />

            </div>

            <h3 className="text-2xl font-semibold mb-4">
              URL Analysis
            </h3>

            <p className="text-gray-400 leading-relaxed">

              Analyze suspicious URLs and detect fake websites,
              phishing domains, and malicious redirects.

            </p>

          </div>

          {/* FEATURE 3 */}
          <div className="bg-[#0f172a] border border-gray-800 rounded-3xl p-8 hover:border-green-500 transition">

            <div className="bg-green-500/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">

              <History className="text-green-500" />

            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Threat History
            </h3>

            <p className="text-gray-400 leading-relaxed">

              Track previous scans,
              detection reports,
              and AI generated threat insights.

            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">

        <p>
          © 2026 TruthGuard AI — AI Powered Cybersecurity Platform
        </p>

      </footer>

    </div>

  );
}

export default Home;