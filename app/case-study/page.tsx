import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Case Study: Client Alpha | Protocol',
    description: 'Legacy infrastructure optimization case study. Reduced latency by 40%.',
};

export default function CaseStudyPage() {
    return (
        <div className="bg-background-light text-black font-display antialiased selection:bg-primary selection:text-black overflow-x-hidden min-h-screen flex flex-col">
            <Header />

            {/* Main Content Layout */}
            <main className="relative flex flex-col lg:flex-row flex-grow">
                {/* Left Panel: Context (Fixed on Desktop) */}
                <aside className="w-full lg:w-5/12 lg:h-[calc(100vh-64px)] lg:sticky lg:top-[64px] border-b lg:border-b-0 lg:border-r border-black flex flex-col bg-white overflow-y-auto">
                    <div className="p-8 lg:p-12 flex flex-col h-full justify-between">
                        <div>
                            <div className="font-mono text-xs font-bold text-gray-500 mb-6 flex gap-2">
                                <span className="border border-black px-2 py-0.5 bg-surface text-black">CASE: PROTOCOL_04</span>
                                <span className="border border-black px-2 py-0.5 bg-surface text-black">SECTOR: FINTECH</span>
                            </div>
                            <h1 className="text-6xl lg:text-7xl font-bold leading-[0.85] tracking-tighter mb-8 uppercase break-words font-display">
                                Client_<br />Alpha
                            </h1>
                            <div className="border-t border-black pt-8 mb-8">
                                <h3 className="font-mono text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">{'//'} Problem Statement</h3>
                                <p className="text-2xl lg:text-3xl font-bold leading-tight uppercase">
                                    Legacy infrastructure causing <span className="bg-primary px-1">400ms latency</span> spikes. Developer churn at critical 25%. Operational drag unsustainable for Series B scaling.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 border-t border-black pt-8 mt-8 lg:mt-0 font-mono text-sm">
                            <div>
                                <span className="block text-gray-500 text-xs mb-1">DURATION</span>
                                <span className="block font-bold text-lg">6 WEEKS</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 text-xs mb-1">BUDGET</span>
                                <span className="block font-bold text-lg">$140K USD</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 text-xs mb-1">STACK</span>
                                <span className="block font-bold text-lg">RUST / K8S</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 text-xs mb-1">STATUS</span>
                                <span className="flex items-center font-bold text-lg text-primary bg-black inline-block px-2 w-fit">
                                    OPTIMIZED
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Decorational Grid Background for Left Panel */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}>
                    </div>
                </aside>

                {/* Right Panel: The Data (Scrollable) */}
                <section className="w-full lg:w-7/12 bg-white flex flex-col">
                    {/* Sticky Header for Data Panel */}
                    <div className="sticky top-[64px] z-20 bg-white border-b border-black px-6 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">monitoring</span>
                            <span className="font-mono text-sm font-bold uppercase">Audit_Log_v2.1</span>
                        </div>
                        <div className="font-mono text-xs text-gray-500">LAST UPDATED: T-MINUS 2HRS</div>
                    </div>

                    <div className="p-0">
                        {/* Chart Section */}
                        <div className="p-6 lg:p-12 border-b border-black relative">
                            <div className="flex justify-between items-end mb-8">
                                <div>
                                    <h3 className="font-display text-2xl font-bold uppercase mb-1">Velocity Metrics</h3>
                                    <p className="font-mono text-xs text-gray-500">[ DEPLOYMENT FREQUENCY vs. ERROR RATE ]</p>
                                </div>
                                <div className="flex gap-4 font-mono text-xs">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-black"></div>
                                        <span>EFFICIENCY</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-gray-300 border border-black"></div>
                                        <span>LEGACY BASELINE</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative w-full aspect-[16/9] border border-black bg-surface p-4">
                                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200">
                                    {/* Grid Lines */}
                                    <g className="stroke-[#e5e5e5] stroke-dasharray-4">
                                        <line x1="0" x2="400" y1="50" y2="50" strokeDasharray="4"></line>
                                        <line x1="0" x2="400" y1="100" y2="100" strokeDasharray="4"></line>
                                        <line x1="0" x2="400" y1="150" y2="150" strokeDasharray="4"></line>
                                    </g>
                                    {/* Baseline (Gray) */}
                                    <polyline fill="none" points="0,160 50,155 100,165 150,150 200,160 250,155 300,165 350,160 400,162" stroke="#ccc" strokeWidth="2"></polyline>
                                    {/* Actual Data (Black) */}
                                    <polyline fill="none" points="0,160 50,120 100,130 150,80 200,60 250,40 300,45 350,20 400,10" stroke="#000" strokeWidth="3"></polyline>

                                    {/* Interactive Points */}
                                    <g className="cursor-crosshair group">
                                        <circle className="transition-all duration-300 group-hover:r-8" cx="150" cy="80" fill="#c4f20d" r="6" stroke="black" strokeWidth="2"></circle>
                                        <foreignObject className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" height="60" width="140" x="160" y="40">
                                            <div className="bg-black text-white p-2 font-mono text-xs border border-primary shadow-hard">
                                                <div className="font-bold">INFRA_SWITCH</div>
                                                <div>LATENCY: -40%</div>
                                            </div>
                                        </foreignObject>
                                    </g>
                                    <g className="cursor-crosshair group">
                                        <circle className="transition-all duration-300 group-hover:r-8" cx="350" cy="20" fill="#c4f20d" r="6" stroke="black" strokeWidth="2"></circle>
                                        <foreignObject className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" height="60" width="120" x="220" y="-10">
                                            <div className="bg-black text-white p-2 font-mono text-xs border border-primary shadow-hard">
                                                <div className="font-bold">OPTIMIZED</div>
                                                <div>UPTIME: 99.9%</div>
                                            </div>
                                        </foreignObject>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        {/* Comparison Data Table */}
                        <div className="flex flex-col border-b border-black">
                            <div className="px-6 py-4 border-b border-black bg-surface">
                                <h4 className="font-mono text-sm font-bold uppercase">{'//'} METRIC_COMPARISON</h4>
                            </div>

                            {[
                                { id: '01', title: 'Deployment Time', before: '48 HRS', after: '15 MINS' },
                                { id: '02', title: 'Server Costs', before: '$45K/MO', after: '$12K/MO' },
                                { id: '03', title: 'Retention Rate', before: '65%', after: '94%' },
                            ].map((metric) => (
                                <div key={metric.id} className="group relative flex flex-col md:flex-row border-b border-black hover:bg-black hover:text-white transition-colors duration-200">
                                    <div className="p-6 md:w-1/3 border-b md:border-b-0 md:border-r border-black group-hover:border-white/20">
                                        <span className="font-mono text-xs opacity-60 block mb-1">METRIC_ID: {metric.id}</span>
                                        <h5 className="font-bold text-xl uppercase">{metric.title}</h5>
                                    </div>
                                    <div className="flex-1 p-6 flex items-center justify-between">
                                        <div className="flex items-center gap-4 w-full justify-between md:justify-start md:gap-12">
                                            <div className="text-right md:text-left">
                                                <span className="font-mono text-xs opacity-60 block">BEFORE</span>
                                                <span className="font-mono text-2xl font-bold line-through opacity-50">{metric.before}</span>
                                            </div>
                                            <span className="material-symbols-outlined text-primary text-2xl group-hover:animate-pulse">arrow_right_alt</span>
                                            <div>
                                                <span className="font-mono text-xs opacity-60 block group-hover:text-primary">AFTER</span>
                                                <span className="font-mono text-3xl md:text-4xl font-bold bg-primary px-2 text-black shadow-hard">{metric.after}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Raw Log Output */}
                        <div className="bg-black text-white p-8 font-mono text-sm">
                            <div className="mb-4 text-primary opacity-80">{'//'} SYSTEM_LOG_OUTPUT</div>
                            <div className="space-y-1">
                                <p className="opacity-50">&gt; 2023-10-12 08:00:01 -- INITIATING PROTOCOL ALPHA</p>
                                <p className="opacity-50">&gt; 2023-10-12 08:05:22 -- ANALYZING LEGACY CODEBASE...</p>
                                <p className="opacity-50">&gt; 2023-10-15 14:20:00 -- <span className="text-red-400">CRITICAL ERROR FOUND IN LOAD BALANCER</span></p>
                                <p className="opacity-70">&gt; 2023-10-20 09:00:00 -- REFACTORING CORE MODULES</p>
                                <p className="text-primary">&gt; 2023-11-01 16:45:00 -- DEPLOYMENT SUCCESSFUL. LATENCY STABILIZED.</p>
                                <p className="flex items-center gap-2 mt-4">
                                    <span className="text-primary">root@protocol:~$</span>
                                    <span>awaiting_next_command</span>
                                    <span className="w-2.5 h-5 bg-primary block animate-blink"></span>
                                </p>
                            </div>
                        </div>

                        {/* Footer Navigation */}
                        <div className="flex border-t border-black">
                            <button className="flex-1 py-8 px-6 text-left hover:bg-surface transition-colors border-r border-black group">
                                <span className="font-mono text-xs text-gray-500 mb-1 block group-hover:text-black">PREVIOUS_CASE</span>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-lg transform group-hover:-translate-x-1 transition-transform">arrow_back</span>
                                    <span className="font-bold text-lg">CLIENT_OMEGA</span>
                                </div>
                            </button>
                            <button className="flex-1 py-8 px-6 text-right hover:bg-black hover:text-white transition-colors group">
                                <span className="font-mono text-xs text-gray-500 mb-1 block group-hover:text-white/60">NEXT_STEP</span>
                                <div className="flex items-center justify-end gap-2">
                                    <span className="font-bold text-lg text-primary">INITIATE_CONTACT</span>
                                    <span className="material-symbols-outlined text-lg transform group-hover:translate-x-1 transition-transform text-primary">arrow_forward</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
