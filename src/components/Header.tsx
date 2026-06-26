"use client"; // Spune Next.js că aceasta este o componentă interactivă pe client

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // Stare pentru meniul de servicii pe mobil
    const phoneNumber = "+40720883503";
    const displayPhone = "0720 883 503";

    // Funcție combinată pentru închiderea meniului mobil
    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
    };

    return (
        <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo / Nume Firmă */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold tracking-tight" onClick={closeMenu}>
                            <span className="text-yellow-500">R&G</span> COMPANY
                        </Link>
                    </div>

                    {/* Meniu Desktop */}
                    <nav className="hidden lg:flex space-x-6 items-center">
                        <Link href="/" className="hover:text-yellow-500 transition-colors font-medium">Acasă</Link>
                        <Link href="/servicii/excavatii-cat" className="hover:text-yellow-500 transition-colors font-medium">Excavații CAT</Link>
                        <Link href="/servicii/transport-agregate" className="hover:text-yellow-500 transition-colors font-medium">Prestări Servicii Transport Basculantă</Link>

                        {/* Servicii Dropdown (Desktop) */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-yellow-500 transition-colors font-medium py-2">
                                Mai multe servicii
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>

                            {/* Dropdown Servicii - Listă directă */}
                            <div className="absolute left-0 mt-2 w-72 bg-white text-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2">
                                <Link href="/servicii/excavatii-cat" className="block px-4 py-2.5 hover:bg-slate-50 hover:text-yellow-600 transition-colors rounded-md text-sm font-medium">Săpături Fundații & Rețele</Link>
                                <Link href="/servicii/excavatii-cat" className="block px-4 py-2.5 hover:bg-slate-50 hover:text-yellow-600 transition-colors rounded-md text-sm font-medium">Săpături Generale & Decopertări</Link>
                                <Link href="/#servicii" className="block px-4 py-2.5 hover:bg-slate-50 hover:text-yellow-600 transition-colors rounded-md text-sm font-medium">Terasamente Grele & Nivelări</Link>
                                <Link href="/servicii/excavatii-cat" className="block px-4 py-2.5 hover:bg-slate-50 hover:text-yellow-600 transition-colors rounded-md text-sm font-medium">Amenajări Drumuri & Forestiere</Link>
                                <Link href="/servicii/excavatii-cat" className="block px-4 py-2.5 hover:bg-slate-50 hover:text-yellow-600 transition-colors rounded-md text-sm font-medium">Amenajări Curți, Alei & Drenaje</Link>
                                <Link href="/servicii/transport-agregate" className="block px-4 py-2.5 hover:bg-slate-50 hover:text-yellow-600 transition-colors rounded-md text-sm font-medium">Transport Agregate & Evacuări</Link>
                                <Link href="/#servicii" className="block px-4 py-2.5 hover:bg-slate-50 hover:text-yellow-600 transition-colors rounded-md text-sm font-medium">Compactări</Link>
                                <Link href="/" className="block px-4 py-2.5 hover:bg-slate-50 hover:text-yellow-600 transition-colors rounded-md text-sm font-medium">Închiriere Utilaje</Link>
                            </div>
                        </div>

                        {/* Link Portofoliu */}
                        <Link href="/portofoliu" className="hover:text-yellow-500 transition-colors font-medium">Portofoliu</Link>

                        <Link href="/contact" className="hover:text-yellow-500 transition-colors font-medium">Contact</Link>

                        {/* Buton Apelare Desktop */}
                        <a
                            href={`tel:${phoneNumber}`}
                            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-5 py-2 rounded-md font-bold transition-transform hover:scale-105 whitespace-nowrap"
                        >
                            {displayPhone}
                        </a>
                    </nav>

                    {/* Buton Hamburger (Mobil) */}
                    <div className="lg:hidden flex items-center">
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
                <div className="lg:hidden bg-slate-800 shadow-xl border-t border-slate-700 transition-all">
                    <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
                        <Link href="/" onClick={closeMenu} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-700 hover:text-yellow-500">
                            Acasă
                        </Link>
                        <Link href="/servicii/excavatii-cat" onClick={closeMenu} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-700 hover:text-yellow-500">
                            Excavații CAT
                        </Link>
                        <Link href="/servicii/transport-agregate" onClick={closeMenu} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-700 hover:text-yellow-500">
                            Transport Autobasculabil
                        </Link>

                        {/* Servicii Acordeon (Mobil) */}
                        <div>
                            <button
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                                className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-medium hover:bg-slate-700 hover:text-yellow-500 focus:outline-none"
                            >
                                Mai multe servicii
                                <svg className={`w-5 h-5 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>

                            {/* Aici au fost introduse toate opțiunile de pe desktop */}
                            {isServicesOpen && (
                                <div className="pl-6 space-y-1 mt-1 border-l border-slate-600 ml-3">
                                    <Link href="/servicii/excavatii-cat" onClick={closeMenu} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-500">Săpături Fundații & Rețele</Link>
                                    <Link href="/servicii/excavatii-cat" onClick={closeMenu} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-500">Săpături Generale & Decopertări</Link>
                                    <Link href="/#servicii" onClick={closeMenu} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-500">Terasamente Grele & Nivelări</Link>
                                    <Link href="/servicii/excavatii-cat" onClick={closeMenu} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-500">Amenajări Drumuri & Forestiere</Link>
                                    <Link href="/servicii/excavatii-cat" onClick={closeMenu} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-500">Amenajări Curți, Alei & Drenaje</Link>
                                    <Link href="/servicii/transport-agregate" onClick={closeMenu} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-500">Transport Agregate & Evacuări</Link>
                                    <Link href="/#servicii" onClick={closeMenu} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-500">Compactări</Link>
                                    <Link href="/" onClick={closeMenu} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yellow-500">Închiriere Utilaje</Link>
                                </div>
                            )}
                        </div>

                        {/* Link Portofoliu Mobil actualizat pentru a duce la pagina portofoliu */}
                        <Link href="/portofoliu" onClick={closeMenu} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-700 hover:text-yellow-500">
                            Portofoliu
                        </Link>

                        <Link href="/contact" onClick={closeMenu} className="block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-700 hover:text-yellow-500">
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