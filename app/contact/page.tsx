import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Contact - Protocol',
    description: 'Initiate secure communication channel.',
};

export default function ContactPage() {
    return (
        <div className="bg-white text-black h-screen w-full flex flex-col overflow-hidden font-display selection:bg-primary selection:text-black">
            {/* Top Navigation / Header Area - Unique for Contact Page */}
            <header className="w-full flex justify-between items-center px-6 py-4 border-b border-black shrink-0 z-20 bg-white">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-xl">terminal</span>
                    <span className="font-bold tracking-tighter text-sm">PROTOCOL_V1.0</span>
                </div>

                {/* Status Indicator */}
                <div className="hidden md:flex items-center gap-3 font-mono text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span>SYSTEM READY</span>
                    </div>
                    <span>{'//'}</span>
                    <span>LATENCY: 12ms</span>
                </div>

                <Link href="/" className="group flex items-center gap-2 font-bold text-xs hover:bg-black hover:text-white transition-colors px-3 py-1 border border-black rounded-sm uppercase tracking-wider">
                    <span>[ ESC ]</span>
                    <span>ABORT SEQUENCE</span>
                </Link>
            </header>

            {/* Main Terminal Area */}
            <main className="flex-1 relative flex flex-col justify-center w-full max-w-[1440px] mx-auto px-6 md:px-12 py-12 z-10">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
                </div>

                {/* Terminal Window */}
                <div className="w-full max-w-4xl mx-auto space-y-8 relative">
                    {/* Output History */}
                    <div className="font-mono text-sm md:text-base text-gray-500 space-y-1 select-none opacity-60">
                        <p>Establishing secure connection...</p>
                        <p>Handshake complete.</p>
                        <p>Loading contact module...</p>
                        <p className="text-primary font-bold">Done.</p>
                    </div>

                    {/* Active Input Line */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 w-full">
                        {/* Prompt */}
                        <div className="font-mono text-lg md:text-2xl text-primary font-bold whitespace-nowrap mr-4 bg-black px-2 py-1 rounded-sm">
                            root@protocol:~/inquiry$
                        </div>

                        {/* Input Container */}
                        <div className="relative flex-1 w-full flex items-center">
                            <input
                                type="email"
                                placeholder=""
                                autoComplete="off"
                                autoFocus
                                spellCheck="false"
                                className="w-full bg-transparent border-none p-0 text-2xl md:text-4xl font-mono text-black placeholder-gray-300 focus:ring-0 caret-transparent font-bold tracking-tight outline-none"
                                defaultValue="client@enterprise.com"
                            />
                            {/* Custom Blinking Block Cursor */}
                            {/* Note: This cursor position is static in HTML but should be dynamic with input. 
                  For now we place it roughly where the text ends or use a simple CSS trick on the carets */}
                            <div className="absolute left-[440px] md:left-[480px] top-1/2 -translate-y-1/2 w-4 h-8 md:w-5 md:h-10 bg-primary animate-blink"></div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer / Instructions */}
            <footer className="shrink-0 w-full border-t border-black bg-surface">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black">
                    {/* Key Instructions */}
                    <div className="p-6 flex flex-col justify-between h-32 md:h-40 group hover:bg-primary transition-colors duration-300 cursor-default">
                        <span className="material-symbols-outlined text-4xl mb-2 group-hover:rotate-90 transition-transform">keyboard_return</span>
                        <div>
                            <p className="font-display font-black text-xl uppercase leading-none">Initiate</p>
                            <p className="font-mono text-xs mt-1 text-gray-500 group-hover:text-black">&gt; PRESS ENTER TO SEND</p>
                        </div>
                    </div>

                    {/* Secondary Info */}
                    <div className="p-6 flex flex-col justify-between h-32 md:h-40 hover:bg-white transition-colors">
                        <span className="material-symbols-outlined text-4xl mb-2">alternate_email</span>
                        <div>
                            <p className="font-display font-black text-xl uppercase leading-none">Direct Line</p>
                            <p className="font-mono text-xs mt-1 text-gray-500">&gt; HELLO@PROTOCOL.DEV</p>
                        </div>
                    </div>

                    {/* Encryption Notice */}
                    <div className="p-6 flex flex-col justify-between h-32 md:h-40 bg-black text-white">
                        <span className="material-symbols-outlined text-4xl mb-2 text-primary">lock</span>
                        <div>
                            <p className="font-display font-black text-xl uppercase leading-none text-primary">Secure Channel</p>
                            <p className="font-mono text-xs mt-1 text-gray-400">&gt; 256-BIT ENCRYPTED</p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Decorative Corner Elements */}
            <div className="fixed top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-black z-50 pointer-events-none"></div>
            <div className="fixed top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-black z-50 pointer-events-none"></div>
            <div className="fixed bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-black z-50 pointer-events-none"></div>
            <div className="fixed bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-black z-50 pointer-events-none"></div>
        </div>
    );
}
