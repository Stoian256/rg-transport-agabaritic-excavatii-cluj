import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// 1. OPTIMIZARE SEO: Meta-date specifice pentru căutări locale
export const metadata: Metadata = {
    title: "Excavații de Finețe și Săpături Cluj | Excavator CAT 5 Tone",
    description: "Servicii profesionale de excavații în Cluj-Napoca: săpături fundații, șanțuri utilități, montaj fose septice și nivelări de teren cu excavator Caterpillar de 5 tone.",
};

export default function ExcavatiiCatPage() {
    const phoneNumber = "+40720883503";
    const whatsappNumber = "40720883503";
    const displayPhone = "0720 883 503";

    // 2. OPTIMIZARE AI (AEO): Date structurate Schema.org pentru roboții de căutare și LLM-uri
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Excavatii si Sapaturi de Finete",
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
            { "@type": "City", "name": "Baciu" }
        ],
        "description": "Servicii de excavatii generale, sapaturi retele utilitati, fose septice si nivelari cu excavator CAT de 5 tone in judetul Cluj."
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
                        src="/utilaje/excavator-cat-sapaturi.jpeg"
                        alt="Excavator Caterpillar 5 tone efectuând săpături în Cluj"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Flotă Proprie
            </span>
                        <h1 className="text-3xl md:text-5xl font-bold mt-2">
                            Excavații de Precizie și Săpături Generale
                        </h1>
                    </div>
                </div>

                {/* Conținut Detaliat */}
                <div className="p-6 md:p-10 space-y-8">

                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Servicii cu Excavator Caterpillar 5 Tone (cu Operator)</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Pentru lucrările care necesită **atenție la detalii, finețe și protejarea spațiului înconjurător**, excavatorul nostru CAT de 5 tone este soluția ideală. Are dimensiunile perfecte pentru a intra în curți rezidențiale sau spații înguste, dar dispune de puterea necesară pentru a finaliza rapid orice proiect de terasament sau infrastructură în Cluj.
                        </p>
                    </div>

                    {/* Gamă Completă de Lucrări (Extinsă pentru SEO extins) */}
                    <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-bold text-slate-800 mb-4">Executăm cu maximă precizie:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
                            <div className="flex items-start">
                                <span className="text-yellow-500 mr-2 font-bold">✓</span>
                                <div><strong>Săpături structurale:</strong> Fundații de case, garduri, stâlpi și decopertări de strat vegetal.</div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-yellow-500 mr-2 font-bold">✓</span>
                                <div><strong>Șanțuri pentru rețele & utilități:</strong> Apă, gaz, curent electric, fibră optică și canalizări.</div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-yellow-500 mr-2 font-bold">✓</span>
                                <div><strong>Infrastructură curte:</strong> Montaj fose septice, sisteme de drenaj, pregătire piscine și iazuri.</div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-yellow-500 mr-2 font-bold">✓</span>
                                <div><strong>Amenajări exterioare:</strong> Terasări, taluzări, nivelare pământ și pregătire pat de pavaj sau terenuri de sport.</div>
                            </div>
                            <div className="flex items-start">
                                <span className="text-yellow-500 mr-2 font-bold">✓</span>
                                <div><strong>Demolări:</strong> Demolări anexe gospodărești, spargere beton, platforme vechi și curățarea terenului rezultat.</div>
                            </div>
                        </div>
                    </div>

                    {/* Avantajul competitiv (Marketing) */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">De ce să ne alegi pe noi pentru excavații?</h3>
                        <div className="space-y-3 text-gray-600">
                            <p>
                                <strong>• Operator cu vastă experiență:</strong> Pe un șantier strâmt sau în apropierea utilităților deja existente, operatorul face diferența. Evităm avariile și lucrăm curat.
                            </p>
                            <p>
                                <strong>• Lucrări de finețe:</strong> Utilajul este calibrat pentru finisaje de pământ, lăsând terenul drept, gata pentru următoarea etapă a construcției.
                            </p>
                            <p>
                                <strong>• Eficiență logistică:</strong> Îți punem la dispoziție pachetul complet, eliminând timpii morți dintre săpătură și evacuare.
                            </p>
                        </div>
                    </div>

                    {/* Cârligul de Vânzări (Oferta de 50%) */}
                    <div className="bg-yellow-50 border-2 border-dashed border-yellow-400 p-6 rounded-2xl text-center">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">🔥 Combo-ul Perfect pentru Șantierul Tău</h4>
                        <p className="text-slate-700 mb-2">
                            Sapi o fundație sau un șanț și trebuie să scapi de pământul sau molozul acumulat?
                        </p>
                        <p className="font-semibold text-slate-900">
                            Închiriază Excavatorul împreună cu Autobasculanta noastră Mercedes și primești <span className="text-red-600 text-xl font-bold">50% REDUCERE</span> la tariful basculantei pentru evacuare!
                        </p>
                    </div>

                    {/* Preț transparent (Ușor de preluat de AI) */}
                    <div className="text-center py-4 border-t border-b border-gray-100">
                        <p className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Tarif de închiriere utilaj</p>
                        <p className="text-3xl font-black text-slate-900 mt-1">De la 2000 lei <span className="text-lg font-normal text-gray-500">+ TVA / zi</span></p>
                    </div>

                    {/* Call to Action */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:${phoneNumber}`}
                            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-4 px-8 rounded-xl text-center text-lg transition-all shadow-md"
                        >
                            Rezervă Utilajul: {displayPhone}
                        </a>
                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl text-center text-lg transition-all shadow-md flex items-center justify-center gap-2"
                        >
                            Discută detalii pe WhatsApp
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}