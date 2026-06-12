import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"; // Importăm Header-ul pe care tocmai l-am creat

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Transport Agabaritic și Excavații Cluj-Napoca",
    description: "Închiriere utilaje, transport platformă MAN 26 tone, excavator CAT 5 tone și basculantă. Intervenții rapide în județul Cluj și național.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ro" className="scroll-smooth">
        <body className={`${inter.className} bg-gray-50 text-slate-900`}>

        {/* Header-ul adăugat aici va apărea pe toate paginile */}
        <Header />

        <main className="min-h-screen">{children}</main>

        {/* Footer Minimalist */}
        {/* Footer Oficial */}
        <footer className="bg-slate-900 text-gray-400 py-8 text-center border-t border-slate-800 mt-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-2">
                <p className="font-bold text-gray-300">R&G Company SRL</p>
                <p className="text-sm">CUI: 22139540</p>
                <p className="text-sm mt-4">© {new Date().getFullYear()} R&G Company SRL. Toate drepturile rezervate.</p>
            </div>
        </footer>
        </body>
        </html>
    );
}