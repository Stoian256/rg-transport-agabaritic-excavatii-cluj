import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({subsets: ["latin"]});

// SETĂRI SEO AVANSATE PENTRU NEXT.JS APP ROUTER
export const metadata: Metadata = {
    metadataBase: new URL("https://excavatii-cluj.ro"), // Schimbă cu domeniul final când îl cumperi
    title: {
        default: "Excavații, Terasamente și Săpături Fundații Cluj | R&G Company",
        template: "%s | R&G Excavații Cluj"
    },
    icons: {
        icon: {
            url: '/favicon.png', // Asigură-te că e aici
        }
    },
    description: "Firmă specializată în excavații, săpături fundații, terasamente, nivelări și transport agregate în Cluj-Napoca și împrejurimi. Închiriere excavator și basculantă.",
    keywords: ["excavatii cluj", "sapaturi fundatii cluj", "terasamente cluj", "transport agregate cluj", "inchiriere excavator cluj", "amenajari curti cluj", "nivelare teren"],
    openGraph: {
        title: "Excavații și Terasamente Cluj | R&G Company",
        description: "Servicii profesionale de săpături, terasamente și transport agregate în județul Cluj.",
        url: "https://excavatii-cluj.ro", // Schimbă cu domeniul tău
        siteName: "R&G Excavații Cluj",
        locale: "ro_RO",
        type: "website",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ro" className="scroll-smooth">
        <body className={`${inter.className} bg-gray-50 text-slate-900`}>
        <Header/>

        <main className="min-h-screen">{children}</main>

        <footer className="bg-slate-900 text-gray-400 py-10 text-center border-t border-slate-800 mt-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-left">
                    <p className="font-bold text-white text-lg">R&G Company SRL</p>
                    <p className="text-sm mt-1">CUI: 22139540</p>
                    <p className="text-sm mt-1">Județul Cluj, România</p>
                </div>
                <div className="text-sm text-center md:text-right">
                    <p>© {new Date().getFullYear()} Toate drepturile rezervate.</p>
                    <p className="mt-1">Servicii profesionale de terasamente și excavații.</p>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}