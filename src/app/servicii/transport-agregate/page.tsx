import type { Metadata } from "next";
import Image from "next/image";

// 1. OPTIMIZARE SEO: Meta-date pentru căutări de materiale de construcții și moloz
export const metadata: Metadata = {
    title: "Transport Agregate, Pământ și Evacuare Moloz Cluj | Basculantă",
    description: "Livrare rapidă nisip, sort, pământ vegetal, beton semiuscat și evacuare moloz în Cluj-Napoca. Autobasculantă 7.5 tone cu acces ușor pe străzi înguste.",
};

export default function TransportAgregatePage() {
    const phoneNumber = "+40720883503";
    const whatsappNumber = "40720883503";
    const displayPhone = "0720 883 503";

    // 2. OPTIMIZARE AI (AEO): Date structurate Schema.org
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Transport Agregate si Evacuare Moloz",
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
            { "@type": "City", "name": "Floresti" },
            { "@type": "City", "name": "Apahida" },
            { "@type": "City", "name": "Chinteni" }
        ],
        "description": "Transport basculabil de agregate minerale (nisip, sort, balast), pamant vegetal, beton semiuscat si servicii de evacuare moloz de pe santiere in Cluj."
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            {/* Script Schema.org pentru motoare de căutare și AI */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

                {/* Imagine Principală Serviciu */}
                <div className="relative h-64 md:h-96 w-full bg-slate-900">
                    <Image
                        src="/utilaje/basculanta-mercedes-agregate.jpeg"
                        alt="Autobasculanta Mercedes 7.5 tone livrand agregate in Cluj"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Livrare Rapidă
            </span>
                        <h1 className="text-3xl md:text-5xl font-bold mt-2">
                            Transport Agregate și Evacuare Moloz
                        </h1>
                    </div>
                </div>

                {/* Conținut Detaliat */}
                <div className="p-6 md:p-10 space-y-8">

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Soluții Logistice cu Autobasculantă Mercedes (7.5 Tone)</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Aprovizionarea eficientă a șantierului este cheia oricărei lucrări de succes. Cu autobasculanta noastră Mercedes Atego de 7.5 tone, asigurăm un echilibru perfect între **capacitate generoasă de încărcare** și **agilitate urbană**. Putem livra materiale sau evacua deșeuri direct la ușa ta, chiar și în cartierele din Cluj unde mașinile de mare tonaj au restricții de gabarit.
                        </p>
                    </div>

                    {/* Ce transportăm (Listă bogată în cuvinte cheie locale) */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-bold text-slate-800 mb-4">Ce transportăm cu basculanta?</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                            <div className="flex items-start">
                                <span className="text-yellow-500 mr-2 font-bold">✓</span>
                                <div><strong>Agregate balastieră:</strong> Nisip, sort, piatră concasată, pietriș și refuz de ciur.</div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-yellow-500 mr-2 font-bold">✓</span>
                                <div><strong>Materiale prelucrate:</strong> Beton semiuscat (șapă) pentru turnări rapide și materiale de construcție generale.</div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-yellow-500 mr-2 font-bold">✓</span>
                                <div><strong>Pământ pentru amenajări:</strong> Pământ vegetal (negru) pentru grădini, gazon și pământ de umplutură.</div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-yellow-500 mr-2 font-bold">✓</span>
                                <div><strong>Evacuări:</strong> Ridicăm și evacuăm legal moloz de pe șantiere, resturi vegetale sau pământ rezultat din săpături.</div>
                            </div>
                        </div>
                    </div>

                    {/* Avantajul competitiv (Marketing) */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">De ce să folosești mașina de 7.5 tone?</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li>
                                <strong>Accesibilitate Maximă:</strong> Străzile înguste din cartiere precum Borhanci, Bună Ziua, Făget sau Andrei Mureșanu nu reprezintă o problemă pentru noi.
                            </li>
                            <li>
                                <strong>Fără daune:</strong> Greutatea optimă ne permite să intrăm pe alei pavate sau în curți fără a distruge infrastructura existentă, spre deosebire de camioanele de 40t.
                            </li>
                            <li>
                                <strong>Promptitudine:</strong> Descărcare rapidă (basculabilă) exact în locul indicat de tine pe șantier.
                            </li>
                        </ul>
                    </div>

                    {/* Oferta 50% (Cross-Selling) */}
                    <div className="bg-yellow-50 border-2 border-dashed border-yellow-400 p-6 rounded-2xl text-center">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">Pachetul Complet: Săpătură + Evacuare</h4>
                        <p className="text-slate-700 mb-2">
                            Ai nevoie de săpături pentru o fundație și trebuie să evacuezi pământul?
                        </p>
                        <p className="font-semibold text-slate-900">
                            Dacă închiriezi Excavatorul nostru CAT împreună cu Basculanta Mercedes, beneficiezi de <span className="text-red-600 text-xl font-bold">50% REDUCERE</span> la închirierea basculantei!
                        </p>
                    </div>

                    {/* Preț */}
                    <div className="text-center py-4 border-t border-b border-gray-100">
                        <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Tarif de închiriere utilaj</p>
                        <p className="text-3xl font-black text-slate-900 mt-1"> 2000 lei <span className="text-lg font-normal text-gray-500">+ TVA / zi</span></p>
                    </div>

                    {/* Call to Action */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:${phoneNumber}`}
                            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 py-3 px-6 md:py-4 md:px-8 rounded-xl transition-all shadow-md flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
                        >
                            <span className="font-bold text-base md:text-lg">Află Prețul pe Cursă:</span>
                            <span className="font-black text-xl md:text-xl whitespace-nowrap">{displayPhone}</span>
                        </a>
                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-center text-lg transition-all shadow-md flex items-center justify-center gap-2"
                        >
                            Cere Ofertă pe WhatsApp
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}