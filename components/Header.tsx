'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { usePathname } from 'next/navigation';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: '[ Index ]', href: '/' },
        { name: '[ Services ]', href: '/services' },
        { name: '[ The_Audit ]', href: '/case-study' },
        { name: '[ Contact ]', href: '/contact' },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-black h-16 flex items-center justify-between px-6 lg:px-12">
            {/* Logo - wrapped for layout balance */}
            <div className="flex-1 flex justify-start">
                <Link href="/" className="flex items-center gap-3 group">
                    <span className="material-symbols-outlined text-3xl font-bold group-hover:animate-pulse">terminal</span>
                    <h2 className="font-display font-black text-xl tracking-tighter">PROTOCOL</h2>
                </Link>
            </div>

            {/* Desktop Nav - Centered via flex-1 siblings */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-8 flex-none">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`font-mono text-sm font-bold hover:bg-primary hover:text-black px-2 py-1 transition-colors uppercase ${isActive(link.href) ? 'bg-black text-white' : ''
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* Desktop Actions - Right aligned */}
            <div className="flex-1 justify-end hidden md:flex items-center gap-4">
                <Button href="/contact" variant="primary">
                    &gt; INITIATE
                </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex-1 flex justify-end md:hidden">
                <button
                    className="material-symbols-outlined text-3xl"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? 'close' : 'menu'}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white border-b border-black p-6 flex flex-col gap-4 md:hidden shadow-hard animate-slide-in-down z-40">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`font-mono text-lg font-bold hover:bg-primary hover:text-black px-4 py-3 border border-transparent hover:border-black transition-all uppercase ${isActive(link.href) ? 'bg-primary border-black' : ''
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button href="/contact" className="w-full text-center justify-center mt-2">
                        &gt; INITIATE PROTOCOL
                    </Button>
                </div>
            )}
        </header>
    );
};
