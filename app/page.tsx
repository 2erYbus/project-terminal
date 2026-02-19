'use client';

import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LoadingCurtain } from '@/components/LoadingCurtain';

export default function Home() {
  return (
    <>
      <LoadingCurtain />
      <div className="relative min-h-screen w-full flex flex-col border-x border-black max-w-[1440px] mx-auto bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative flex flex-col justify-center min-h-[80vh] border-b border-black overflow-hidden px-6 lg:px-12 py-12 bg-grid-pattern">
          {/* Grid Lines Visual */}
          <div className="absolute inset-0 pointer-events-none flex justify-between px-6 lg:px-12 opacity-10">
            <div className="w-px h-full bg-black"></div>
            <div className="w-px h-full bg-black"></div>
            <div className="w-px h-full bg-black"></div>
            <div className="w-px h-full bg-black"></div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="max-w-[90vw]">
              <h1 className="font-display font-black text-[12vw] leading-[0.8] tracking-tighter uppercase break-words text-black">
                COMPE-<br />
                TENCE<br />
                IS SILENT.
              </h1>
            </div>
            <div className="flex flex-col gap-6 max-w-sm pb-4">
              <p className="font-mono text-sm leading-relaxed border-l-2 border-primary pl-4">
                {'//'} We do not sell synergy.<br />
                {'//'} We sell uptime.<br />
                {'//'} We eliminate fluff.<br />
                {'//'} We execute.
              </p>
              <div className="flex items-center gap-2 font-mono text-xs text-gray-500">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                SYSTEM_STATUS: OPERATIONAL
              </div>
            </div>
          </div>
        </section>

        {/* The Index (Ticker) */}
        <section className="border-b border-black bg-black text-primary overflow-hidden py-4">
          <div className="whitespace-nowrap flex overflow-hidden relative">
            <div className="animate-marquee flex-shrink-0 flex gap-12 items-center font-mono font-bold text-2xl tracking-tight min-w-full pr-12">
              <span>UPTIME 99.99%</span><span>{'//'}</span>
              <span>RETENTION +40%</span><span>{'//'}</span>
              <span>COST -15%</span><span>{'//'}</span>
              <span>DEPLOYMENT &lt;24H</span><span>{'//'}</span>
              <span>ZERO_LAG_INFRASTRUCTURE</span><span>{'//'}</span>
              <span>UPTIME 99.99%</span><span>{'//'}</span>
              <span>RETENTION +40%</span><span>{'//'}</span>
              <span>COST -15%</span><span>{'//'}</span>
              <span>DEPLOYMENT &lt;24H</span><span>{'//'}</span>
              <span>ZERO_LAG_INFRASTRUCTURE</span><span>{'//'}</span>
            </div>
            <div className="animate-marquee flex-shrink-0 flex gap-12 items-center font-mono font-bold text-2xl tracking-tight min-w-full pr-12">
              <span>UPTIME 99.99%</span><span>{'//'}</span>
              <span>RETENTION +40%</span><span>{'//'}</span>
              <span>COST -15%</span><span>{'//'}</span>
              <span>DEPLOYMENT &lt;24H</span><span>{'//'}</span>
              <span>ZERO_LAG_INFRASTRUCTURE</span><span>{'//'}</span>
              <span>UPTIME 99.99%</span><span>{'//'}</span>
              <span>RETENTION +40%</span><span>{'//'}</span>
              <span>COST -15%</span><span>{'//'}</span>
              <span>DEPLOYMENT &lt;24H</span><span>{'//'}</span>
              <span>ZERO_LAG_INFRASTRUCTURE</span><span>{'//'}</span>
            </div>
          </div>
        </section>

        {/* Content Area: Philosophy vs Metrics */}
        <section className="flex flex-col lg:flex-row border-b border-black">
          {/* Left: Philosophy / Context */}
          <div className="lg:w-1/3 border-b lg:border-b-0 lg:border-r border-black p-8 lg:p-12 flex flex-col justify-between bg-surface">
            <div>
              <h3 className="font-heading font-bold text-4xl mb-8 uppercase tracking-tight">The Reality Check</h3>
              <p className="font-mono text-sm mb-6 leading-relaxed">
                Most consultancies sell you a roadmap to nowhere. We deploy operational rigor that functions immediately.
              </p>
              <p className="font-mono text-sm mb-12 leading-relaxed">
                Our audit process strips away corporate theater to reveal the raw machinery of your business. Then we optimize it.
              </p>
            </div>
            <div className="mt-auto">
              <div className="h-40 w-full bg-black mb-4 relative overflow-hidden group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6di2fGVcEibLxAKM2wVsp53P_DQlRoUp8EA4qx5TucmkZWkDWj9e8C9cyB7P5FV6h5D38ANRPzVIgdPQqtvYkklxIMuqzN9lYGkVZ3w4YVN9qWF5Cv03egp6ytfL7jnB4TZk2YhCcnoQHfbDvr2BNfo6nkpD7rarKzJJMRHV8pTQoMqL-15kRti4nsPlS07eVqfj1a0hmWeaeaHI5E3PnivUvNkxLPxseC_Rh2XpBBEsLxpqlvp3fEnN1ITDF8AXpvysuGhbqsjA"
                  alt="Abstract data visualization"
                  fill
                  className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-primary text-xs border border-primary px-2 py-1 bg-black/80">FIG_01: DATA_FLOW</span>
                </div>
              </div>
              <span className="font-mono text-xs text-gray-500 block">SOURCE: INTERNAL_AUDIT_LOGS_2024</span>
            </div>
          </div>

          {/* Right: Metric Grid (3x3) */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white">
            {/* Metric Card 1 */}
            <div className="group relative border-b border-black md:border-r p-8 flex flex-col justify-between min-h-[240px] hover:bg-primary transition-colors duration-0 cursor-crosshair">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-black">ID_01</span>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-black group-hover:rotate-45 transition-transform">arrow_outward</span>
              </div>
              <div>
                <span className="font-mono text-6xl lg:text-7xl font-bold tracking-tighter block mb-2 group-hover:scale-105 transition-transform origin-left">+300%</span>
                <span className="font-display font-bold text-xs tracking-widest uppercase border-t border-black pt-2 inline-block w-full">Efficiency Gain</span>
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="group relative border-b border-black lg:border-r p-8 flex flex-col justify-between min-h-[240px] hover:bg-primary transition-colors duration-0 cursor-crosshair">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-black">ID_02</span>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-black group-hover:rotate-45 transition-transform">bolt</span>
              </div>
              <div>
                <span className="font-mono text-6xl lg:text-7xl font-bold tracking-tighter block mb-2 group-hover:scale-105 transition-transform origin-left">0.01s</span>
                <span className="font-display font-bold text-xs tracking-widest uppercase border-t border-black pt-2 inline-block w-full">Latency Target</span>
              </div>
            </div>

            {/* Metric Card 3 */}
            <div className="group relative border-b border-black md:border-r lg:border-r-0 p-8 flex flex-col justify-between min-h-[240px] hover:bg-primary transition-colors duration-0 cursor-crosshair">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-black">ID_03</span>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-black group-hover:rotate-45 transition-transform">trending_down</span>
              </div>
              <div>
                <span className="font-mono text-6xl lg:text-7xl font-bold tracking-tighter block mb-2 group-hover:scale-105 transition-transform origin-left">-40%</span>
                <span className="font-display font-bold text-xs tracking-widest uppercase border-t border-black pt-2 inline-block w-full">Overhead Reduct.</span>
              </div>
            </div>

            {/* Metric Card 4 */}
            <div className="group relative border-b border-black lg:border-r p-8 flex flex-col justify-between min-h-[240px] hover:bg-primary transition-colors duration-0 cursor-crosshair">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-black">ID_04</span>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-black group-hover:rotate-45 transition-transform">database</span>
              </div>
              <div>
                <span className="font-mono text-6xl lg:text-7xl font-bold tracking-tighter block mb-2 group-hover:scale-105 transition-transform origin-left">99.9</span>
                <span className="font-display font-bold text-xs tracking-widest uppercase border-t border-black pt-2 inline-block w-full">Uptime Guarantee</span>
              </div>
            </div>

            {/* Metric Card 5 */}
            <div className="group relative border-b border-black md:border-r p-8 flex flex-col justify-between min-h-[240px] hover:bg-primary transition-colors duration-0 cursor-crosshair">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-black">ID_05</span>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-black group-hover:rotate-45 transition-transform">group</span>
              </div>
              <div>
                <span className="font-mono text-6xl lg:text-7xl font-bold tracking-tighter block mb-2 group-hover:scale-105 transition-transform origin-left">24/7</span>
                <span className="font-display font-bold text-xs tracking-widest uppercase border-t border-black pt-2 inline-block w-full">Monitoring</span>
              </div>
            </div>

            {/* Metric Card 6 */}
            <div className="group relative border-b border-black lg:border-r-0 p-8 flex flex-col justify-between min-h-[240px] hover:bg-primary transition-colors duration-0 cursor-crosshair">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-black">ID_06</span>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-black group-hover:rotate-45 transition-transform">security</span>
              </div>
              <div>
                <span className="font-mono text-6xl lg:text-7xl font-bold tracking-tighter block mb-2 group-hover:scale-105 transition-transform origin-left">0</span>
                <span className="font-display font-bold text-xs tracking-widest uppercase border-t border-black pt-2 inline-block w-full">Breaches</span>
              </div>
            </div>

            {/* Metric Card 7 */}
            <div className="group relative border-b md:border-b-0 border-black md:border-r lg:border-r p-8 flex flex-col justify-between min-h-[240px] hover:bg-primary transition-colors duration-0 cursor-crosshair">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-black">ID_07</span>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-black group-hover:rotate-45 transition-transform">rocket_launch</span>
              </div>
              <div>
                <span className="font-mono text-6xl lg:text-7xl font-bold tracking-tighter block mb-2 group-hover:scale-105 transition-transform origin-left">4x</span>
                <span className="font-display font-bold text-xs tracking-widest uppercase border-t border-black pt-2 inline-block w-full">Velocity</span>
              </div>
            </div>

            {/* Metric Card 8 */}
            <div className="group relative border-b md:border-b-0 border-black lg:border-r p-8 flex flex-col justify-between min-h-[240px] hover:bg-primary transition-colors duration-0 cursor-crosshair">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-black">ID_08</span>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-black group-hover:rotate-45 transition-transform">code</span>
              </div>
              <div>
                <span className="font-mono text-6xl lg:text-7xl font-bold tracking-tighter block mb-2 group-hover:scale-105 transition-transform origin-left">100%</span>
                <span className="font-display font-bold text-xs tracking-widest uppercase border-t border-black pt-2 inline-block w-full">Code Coverage</span>
              </div>
            </div>

            {/* Metric Card 9: CTA */}
            <div className="group relative border-black p-0 flex flex-col justify-center items-center min-h-[240px] bg-black text-white hover:bg-primary hover:text-black transition-colors duration-0 cursor-pointer">
              <div className="text-center">
                <span className="material-symbols-outlined text-6xl mb-4 group-hover:animate-bounce">terminal</span>
                <h4 className="font-display font-bold text-2xl uppercase">Init_Protocol</h4>
                <span className="font-mono text-xs mt-2 block opacity-60 group-hover:opacity-100">Click to start &gt;</span>
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
