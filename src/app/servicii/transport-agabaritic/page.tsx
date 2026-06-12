import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// 1. OPTIMIZARE SEO: Meta-date specifice pentru Google
export const metadata: Metadata = {
    title: "Transport Agabaritic și Utilaje Grele Cluj | Platformă 26 Tone",
    description: "Servicii profesionale de transport agabaritic, utilaje de construcții, agricole și containere cu platformă MAN de 26 tone. Acoperire în Cluj și Național.",
};

export default function TransportAgabariticPage() {
    const phoneNumber = "+40720883503";
    const whatsappNumber = "40720883503";
    const displayPhone = "0720 883 503";

    // 2. OPTIMIZARE AI (AEO): Date structurate Schema.org pentru inteligența artificială
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Transport Agabaritic si Utilaje Grele",
        "provider": {
            "@type": "LocalBusiness",
            "name": "R&G Company SRL",
            "telephone": phoneNumber,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Cluj-Napoca",
                "addressCountry": "RO"
            }
        },
        "areaServed": [
            { "@type": "City", "name": "Cluj-Napoca" },
            { "@type": "Country", "name": "Romania" }
        ],
        "description": "Transport agabaritic si relocare utilaje grele cu platforma de 26 tone local in Cluj si pe intreg teritoriul Romaniei."
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            {/* Injectăm scriptul Schema pentru AI */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

                {/* Imagine Principală Serviciu */}
                <div className="relative h-64 md:h-96 w-full bg-slate-900">
                    <Image
                        src="/utilaje/platforma-man-26-tone.jpeg"
                        alt="Platforma MAN 26 tone pentru transport agabaritic în Cluj"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Serviciul Principal
            </span>
                        <h1 className="text-3xl md:text-5xl font-bold mt-2">
                            Transport Agabaritic și Utilaje Grele
                        </h1>
                    </div>
                </div>

                {/* Conținut Detaliat */}
                <div className="p-6 md:p-10 space-y-8">

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Soluții de Transport cu Platformă MAN (26 Tone)</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Dispunem de o platformă de mare tonaj capabilă să transporte în deplină siguranță o gamă largă de echipamente și structuri voluminoase. Operăm atât **local în Cluj-Napoca și împrejurimi**, cât și **la nivel național**, asigurând rute optimizate și timpi rapizi de livrare.
                        </p>
                    </div>

                    {/* Ce putem transporta (Specific pentru a prinde cuvinte cheie) */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-bold text-slate-800 mb-4">Ce putem transporta pentru șantierul tău:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                            <div className="flex items-center">
                                <span className="text-yellow-500 mr-2">✔</span> Utilaje de construcții (excavatoare, buldozere, cilindri)
                            </div>
                            <div className="flex items-center">
                                <span className="text-yellow-500 mr-2">✔</span> Utilaje agricole (tractoare, combine, semănători)
                            </div>
                            <div className="flex items-center">
                                <span className="text-yellow-500 mr-2">✔</span> Containere de șantier și barăci modulare
                            </div>
                            <div className="flex items-center">
                                <span className="text-yellow-500 mr-2">✔</span> Structuri metalice și componente industriale voluminoase
                            </div>
                        </div>
                    </div>

                    {/* Detalii Tehnice și Siguranță */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">De ce să colaborezi cu noi?</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li>
                                <strong>Capacitate de 26 Tone:</strong> Ideală pentru echipamente grele care necesită stabilitate și autorizații speciale.
                            </li>
                            <li>
                                <strong>Ancorare și Siguranță:</strong> Fiecare transport este asigurat conform normelor stricte de siguranță la încărcare, transport și descărcare.
                            </li>
                            <li>
                                <strong>Flexibilitate Națională:</strong> Preluăm utilajul din Cluj și îl livrăm în orice județ din România, sau invers.
                            </li>
                        </ul>
                    </div>

                    {/* Banner Ofertă în Pereche (Marketing cross-selling) */}
                    <div className="bg-yellow-50 border-2 border-dashed border-yellow-400 p-6 rounded-2xl text-center">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">💡 Economisește la Organizarea Șantierului</h4>
                        <p className="text-slate-700">
                            Dacă folosești platforma noastră pentru a aduce pe șantier un alt utilaj din flota noastră (cum ar fi excavatorul CAT), beneficiezi de **50% reducere** la închirierea celui de-al doilea echipament!
                        </p>
                    </div>

                    {/* Call to Action (Butoane de contact) */}
                    <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:${phoneNumber}`}
                            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-4 px-8 rounded-xl text-center text-lg transition-all shadow-md"
                        >
                            Cere Ofertă Preț: {displayPhone}
                        </a>
                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-center text-lg transition-all shadow-md flex items-center justify-center gap-2"
                        >
                            Discută pe WhatsApp
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}