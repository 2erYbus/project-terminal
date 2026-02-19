import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Services - The Stack | Protocol',
    description: 'Comprehensive skill-gap analysis, cloud migration, and operational rigor.',
};

export default function ServicesPage() {
    const services = [
        {
            id: 'HR-01',
            name: 'Talent Audit_Core',
            description: 'Comprehensive skill-gap analysis.',
            output: { icon: 'description', text: 'PDF_REPORT_v1' },
            timeframe: '2 WEEKS',
            cost: '$5,000'
        },
        {
            id: 'IT-04',
            name: 'Cloud Migration_L1',
            description: 'Legacy to AWS/Azure transfer.',
            output: { icon: 'cloud_done', text: 'ACTIVE_INSTANCE' },
            timeframe: '4 WEEKS',
            cost: '$12,500'
        },
        {
            id: 'HY-02',
            name: 'Ops_Streamline',
            description: 'Cross-departmental efficiency.',
            output: { icon: 'settings_suggest', text: 'WORKFLOW_MAP' },
            timeframe: '1 WEEK',
            cost: '$3,200'
        },
        {
            id: 'IT-09',
            name: 'Security_Hardening',
            description: 'Penetration testing & patching.',
            output: { icon: 'security', text: 'AUDIT_LOG_PASS' },
            timeframe: '72 HOURS',
            cost: '$8,000'
        },
        {
            id: 'HR-05',
            name: 'Rapid_Recruit',
            description: 'Senior dev placement sprint.',
            output: { icon: 'group_add', text: '3_CANDIDATES' },
            timeframe: '10 DAYS',
            cost: '15% SALARY'
        },
        {
            id: 'XX-00',
            name: 'Full_Protocol_Reset',
            description: 'Total organizational restructure.',
            output: { icon: 'restart_alt', text: 'NEW_COMPANY_OS' },
            timeframe: '6 MONTHS',
            cost: 'CUSTOM'
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background-light text-black font-display antialiased">
            <Header />

            <main className="flex-grow flex flex-col w-full max-w-[1440px] mx-auto px-0 lg:px-10 py-8 lg:py-12">
                {/* Header Section */}
                <div className="px-4 lg:px-0 mb-8 lg:mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase font-display">
                            THE STACK
                        </h1>
                        <div className="flex items-center gap-2 font-mono text-sm lg:text-base border-l-2 border-primary pl-3 mt-2">
                            <span className="text-gray-500">SYSTEM_STATUS:</span>
                            <span className="text-primary bg-black px-1 animate-pulse">ONLINE</span>
                            <span className="text-gray-500">{'//'} CATALOG_ID: v4.2.0</span>
                        </div>
                    </div>
                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-3 font-mono text-xs lg:text-sm">
                        <button className="bg-primary shadow-hard-sm font-bold border border-black px-4 py-2 hover:bg-primary/50 transition-colors uppercase tracking-wider">
                            [ ALL_SYSTEMS ]
                        </button>
                        <button className="border border-black px-4 py-2 hover:bg-primary/50 transition-colors uppercase tracking-wider">
                            [ HR_MODULES ]
                        </button>
                        <button className="border border-black px-4 py-2 hover:bg-primary/50 transition-colors uppercase tracking-wider">
                            [ IT_INFRA ]
                        </button>
                        <button className="border border-black px-4 py-2 hover:bg-primary/50 transition-colors uppercase tracking-wider">
                            [ HYBRID_OPS ]
                        </button>
                    </div>
                </div>

                {/* The Grid / Table Container */}
                <div className="border border-black flex flex-col bg-white shadow-hard mx-4 lg:mx-0">
                    {/* Sticky Header */}
                    <div className="hidden lg:grid grid-cols-12 bg-black text-white sticky top-0 z-10 border-b border-black">
                        <div className="col-span-1 p-4 font-mono text-xs font-bold border-r border-white/20">ID_REF</div>
                        <div className="col-span-4 p-4 font-mono text-xs font-bold border-r border-white/20">SERVICE_NOMENCLATURE</div>
                        <div className="col-span-3 p-4 font-mono text-xs font-bold border-r border-white/20">DELIVERABLE_OUTPUT</div>
                        <div className="col-span-2 p-4 font-mono text-xs font-bold border-r border-white/20">EST_TIMEFRAME</div>
                        <div className="col-span-2 p-4 font-mono text-xs font-bold text-right">UNIT_COST</div>
                    </div>

                    {/* Mobile Label */}
                    <div className="lg:hidden bg-black text-white p-2 text-xs font-mono font-bold text-center border-b border-black">
                        SCROLL_DOWN_FOR_DATA
                    </div>

                    {/* Rows Container */}
                    <div className="flex flex-col divide-y divide-black">
                        {services.map((service) => (
                            <div key={service.id} className="group relative lg:grid lg:grid-cols-12 transition-colors duration-0 cursor-crosshair hover:bg-primary hover:text-black">
                                {/* Mobile Layout Wrapper */}
                                <div className="flex flex-col lg:contents p-4 lg:p-0">
                                    {/* ID */}
                                    <div className="lg:col-span-1 lg:p-4 lg:border-r lg:border-black flex justify-between lg:block items-center mb-2 lg:mb-0">
                                        <span className="lg:hidden font-mono text-xs text-gray-500 font-bold">ID:</span>
                                        <span className="font-mono text-sm font-bold text-gray-600 group-hover:text-black">{service.id}</span>
                                    </div>
                                    {/* Service */}
                                    <div className="lg:col-span-4 lg:p-4 lg:border-r lg:border-black mb-2 lg:mb-0">
                                        <h3 className="text-lg lg:text-xl font-bold uppercase tracking-tight">{service.name}</h3>
                                        <p className="text-xs lg:text-sm mt-1 opacity-80 font-mono">{service.description}</p>
                                    </div>
                                    {/* Output */}
                                    <div className="lg:col-span-3 lg:p-4 lg:border-r lg:border-black flex flex-col justify-center mb-2 lg:mb-0">
                                        <span className="lg:hidden font-mono text-xs text-gray-500 font-bold mb-1">OUTPUT:</span>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-sm">{service.output.icon}</span>
                                            <span className="text-sm font-medium">{service.output.text}</span>
                                        </div>
                                    </div>
                                    {/* Timeframe */}
                                    <div className="lg:col-span-2 lg:p-4 lg:border-r lg:border-black flex items-center justify-between lg:justify-start mb-2 lg:mb-0">
                                        <span className="lg:hidden font-mono text-xs text-gray-500 font-bold">TIME:</span>
                                        <span className="font-mono text-sm">{service.timeframe}</span>
                                    </div>
                                    {/* Cost & Action */}
                                    <div className="lg:col-span-2 lg:p-4 flex items-center justify-between lg:justify-end gap-4">
                                        <div className="flex flex-col items-end">
                                            <span className="lg:hidden font-mono text-xs text-gray-500 font-bold self-start">COST:</span>
                                            <span className="font-mono text-lg font-bold">{service.cost}</span>
                                        </div>
                                        <button className="hidden lg:hidden group-hover:flex bg-white text-black border border-black px-3 py-1 text-xs font-mono font-bold shadow-hard-sm uppercase">
                                            [ SELECT ]
                                        </button>
                                        {/* Desktop hover button simulation or just leave as is */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Table Footer/Pagination */}
                    <div className="border-t border-black p-4 flex justify-between items-center bg-white text-xs font-mono group-hover:text-black">
                        <span>SHOWING 1-6 OF 24 RECORDS</span>
                        <div className="flex gap-2">
                            <button className="border border-black px-2 py-1 hover:bg-black hover:text-white transition-colors disabled:opacity-50" disabled>&lt; PREV</button>
                            <button className="border border-black px-2 py-1 hover:bg-black hover:text-white transition-colors">NEXT &gt;</button>
                        </div>
                    </div>
                </div>

                {/* Legend / Helper */}
                <div className="mt-8 flex gap-8 px-4 lg:px-0 text-xs font-mono text-gray-500 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 border border-black bg-primary"></div>
                        <span>Active_Row</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 border border-black bg-black"></div>
                        <span>Header_Data</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">ads_click</span>
                        <span>Select_to_Queue</span>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
