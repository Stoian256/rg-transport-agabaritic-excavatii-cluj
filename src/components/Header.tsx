"use client"; // Spune Next.js că aceasta este o componentă interactivă pe client

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const phoneNumber = "+40720883503";
    const displayPhone = "0720 883 503";

    return (
        <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo / Nume Firmă */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold tracking-tight">
                            <span className="text-yellow-500">R&G</span> COMPANY
                        </Link>
                    </div>

                    {/* Meniu Desktop */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="hover:text-yellow-500 transition-colors font-medium">Acasă</Link>
                        <Link href="/servicii/excavatii-cat" className="hover:text-yellow-500 transition-colors font-medium">Excavații CAT</Link>
                        <Link href="/servicii/transport-agregate" className="hover:text-yellow-500 transition-colors font-medium">Prestări Servicii Transport Basculantă</Link>
                        <Link href="/contact" className="hover:text-yellow-500 transition-colors font-medium">Contact</Link>

                        {/* Buton Apelare Desktop */}
                        <a
                            href={`tel:${phoneNumber}`}
                            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-5 py-2 rounded-md font-bold transition-transform hover:scale-105"
                        >
                            {displayPhone}
                        </a>
                    </nav>

                    {/* Buton Hamburger (Mobil) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                            aria-label="Deschide meniul"
                        >
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Meniu Dropdown Mobil */}
            {isMenuOpen && (
                <div className="md:hidden bg-slate-800 shadow-xl border-t border-slate-700 transition-all">
                    <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-700 hover:text-yellow-500">
                            Acasă
                        </Link>
                        <Link href="/servicii/excavatii-cat" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-700 hover:text-yellow-500">
                            Excavații CAT
                        </Link>
                        <Link href="/servicii/transport-agregate" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-700 hover:text-yellow-500">
                            Transport Autobasculabil
                        </Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-700 hover:text-yellow-500">
                            Contact
                        </Link>

                        <a
                            href={`tel:${phoneNumber}`}
                            className="mt-4 text-center block w-full bg-yellow-500 text-slate-900 px-5 py-3 rounded-md font-bold text-lg"
                        >
                            Sună Acum
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}