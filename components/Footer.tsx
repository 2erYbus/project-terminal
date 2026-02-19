import React from 'react';

export const Footer = () => {
    return (
        <footer className="border-t border-black bg-white p-4 flex flex-col md:flex-row justify-between items-center text-xs font-mono gap-4 md:gap-0">
            <div className="flex items-center">
                <span className="animate-pulse mr-2 text-primary bg-black px-1">_</span>
                <span className="font-bold">WAITING_FOR_INPUT</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 text-gray-500 text-center md:text-right">
                <span>© {new Date().getFullYear()} PROTOCOL INC.</span>
                <span>SYS_VER: 2.0.4</span>
                <span className="hidden md:inline">|</span>
                <span className="hover:text-black cursor-pointer">[ PRIVACY_POLICY ]</span>
            </div>
        </footer>
    );
};
