import React from "react";
import Header from "../components/header";
import { Check } from "lucide-react";
import Footer from "../components/footer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 85000 },
  { name: "Feb", value: 120000 },
  { name: "Mar", value: 160000 },
  { name: "Apr", value: 240000 },
  { name: "May", value: 310000 },
  { name: "Jun", value: 420000 },
  { name: "Jul", value: 876650 },
];

export default function Index() {
  return (
    <div className="bg-white text-gray-800">
      <Header />

      <main className="space-y-6">
        {/* Hero Section */}
        <section className="w-full py-20 px-4 md:px-8 bg-gradient-to-br from-[#d4f1f4] to-[#ffffff]">
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-6 mt-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#05445e] leading-tight">
              The Ultimate Crypto Trading Experience
            </h1>

            <p className="text-md md:text-2xl text-[#189ab4]">
              Buy Bitcoin, Ethereum, and 400+ cryptocurrencies instantly with
              top-tier security and speed.
            </p>

            <ul className="flex flex-col gap-4 px-4 md:px-0 max-w-md w-full mx-auto text-left">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#189ab4] mt-1" />
                <span className="text-gray-700 text-base">
                  Trade with 20+ global fiat currencies
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#189ab4] mt-1" />
                <span className="text-gray-700 text-base">
                  Industry-leading security & compliance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#189ab4] mt-1" />
                <span className="text-gray-700 text-base">
                  Trusted by 140M+ users worldwide
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Why Trumpinvestltd */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#05445e] mb-4">
                Why Trumpinvestltd?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At{" "}
                <span className="font-semibold text-[#189ab4]">
                  Trumpinvestltd
                </span>
                , we go beyond basic trading. We offer a powerful, transparent,
                and secure platform designed to help you grow your wealth
                through multiple investment streams.
              </p>
              <p className="text-lg mt-4 text-gray-700 leading-relaxed">
                We provide a global outlook and diversified strategies that
                include:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                <li>Cryptocurrency Trading</li>
                <li>Binary Options</li>
                <li>Forex Markets</li>
                <li>CFDs (Contract for Differences)</li>
                <li>Stocks & Commodities</li>
              </ul>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#05445e] mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to fuel the universal adoption of blockchain
                through safe, innovative, and transparent investment
                opportunities. We specialize in cryptocurrency and forex,
                blending traditional finance with next-generation tech.
              </p>
              <p className="text-lg mt-4 text-gray-700 leading-relaxed">
                We invest in leading assets like{" "}
                <span className="font-medium">BTC</span>,{" "}
                <span className="font-medium">ETH</span>,{" "}
                <span className="font-medium">XRP</span>,{" "}
                <span className="font-medium">ETC</span>, and continue to
                support the growth of emerging coins and projects.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#05445e] mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We’ve assembled a world-class team of finance and tech experts
                to design a platform that’s both beginner-friendly and
                professional-grade. Our goal is to empower you with the tools,
                insights, and support to thrive in today’s dynamic crypto
                markets.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 bg-white text-gray-800 font-sans">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Evaluation Card */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">
                Hi Barbara
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Launch: Jan. 17, 2025
              </p>

              <div className="mt-4">
                <p className="text-sm text-gray-500">Evaluation</p>
                <p className="text-3xl font-bold text-black">$3,000,000</p>

                <div className="text-xs mt-3 space-y-1 text-gray-600">
                  <p>Deposit: $85,000</p>
                  <p>Date: Jul. 13, 2025</p>
                  <p>Withdrawal: Sept. 13, 2025</p>
                  <p className="text-black font-semibold">
                    Est. withdrawal: $3,456,677
                  </p>
                </div>
              </div>

              {/* Graph Placeholder */}
              <div className="mt-6 h-28 bg-gray-200 rounded-md flex items-center justify-center text-gray-500 text-sm">
                1M Line Graph
              </div>

              {/* Alert */}
              <div className="mt-4">
                <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white text-sm font-semibold py-2 px-4 rounded-lg shadow w-fit">
                  ⚠️ Action needed on your account!
                </div>
              </div>
            </div>

            {/* Allocation Card */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm flex justify-center gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Allocation
                </h3>
                <div className="flex mb-4">
                  <div className="w-28 h-[45vh] bg-gradient-to-b from-cyan-500 to-cyan-800 rounded-lg"></div>
                </div>
              </div>

              {/* Percentages */}
              <div className="text-sm space-y-6 text-gray-700">
                <p className="text-xl font-semibold text-gray-500">Balanced</p>

                <p className="text-lg font-semibold">
                  Crypto: <span className="text-black font-bold">20%</span>
                </p>
                <div className="border-b border-gray-300"></div>

                <p className="text-lg font-semibold">
                  Stocks: <span className="text-black font-bold">35%</span>
                </p>
                <div className="border-b border-gray-300"></div>

                <p className="text-lg font-semibold">
                  Bonds: <span className="text-black font-bold">30%</span>
                </p>
                <div className="border-b border-gray-300"></div>

                <p className="text-lg font-semibold">
                  Cash: <span className="text-black font-bold">15%</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
