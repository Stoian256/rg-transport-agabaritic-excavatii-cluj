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
                    {/*/!* --- CARUSEL DINAMIC PROIECTE --- *!/*/}
                    {/*<div className="pt-8 pb-4">*/}
                    {/*    <h3 className="text-2xl font-bold text-slate-800 mb-2">Galerie Lucrări: Capabilități de Transport</h3>*/}
                    {/*    <p className="text-gray-600 mb-6">Câteva dintre utilajele și structurile mutate de noi în condiții de maximă siguranță.</p>*/}

                    {/*    /!* Containerul cu Scroll Orizontal *!/*/}
                    {/*    <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>*/}

                    {/*        /!* Slide 1: Excavator *!/*/}
                    {/*        <div className="snap-center shrink-0 w-80 sm:w-96 flex flex-col group">*/}
                    {/*            <div className="h-64 w-full relative rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100">*/}
                    {/*                <Image src="/utilaje/platforma-incarcata.jpeg" alt="Transport excavator pe platforma" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />*/}
                    {/*                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">Utilaje Grele</div>*/}
                    {/*            </div>*/}
                    {/*            <h4 className="font-bold text-lg text-slate-800">Relocare Excavații</h4>*/}
                    {/*            <p className="text-sm text-gray-600 mt-1">Încărcarea și ancorarea profesională a unui excavator pentru relocarea pe un nou șantier.</p>*/}
                    {/*        </div>*/}

                    {/*        /!* Slide 2: Capacitate *!/*/}
                    {/*        <div className="snap-center shrink-0 w-80 sm:w-96 flex flex-col group">*/}
                    {/*            <div className="h-64 w-full relative rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100">*/}
                    {/*                <Image src="/utilaje/2-platforma-man-26t.jpeg" alt="Platforma MAN 26 tone" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />*/}
                    {/*                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">26 Tone</div>*/}
                    {/*            </div>*/}
                    {/*            <h4 className="font-bold text-lg text-slate-800">Capacitate Superioară</h4>*/}
                    {/*            <p className="text-sm text-gray-600 mt-1">Platformă robustă, pregătită pentru sarcini utile mari și rute naționale lungi.</p>*/}
                    {/*        </div>*/}

                    {/*        /!* Slide 3: Containere *!/*/}
                    {/*        <div className="snap-center shrink-0 w-80 sm:w-96 flex flex-col group">*/}
                    {/*            <div className="h-64 w-full relative rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100">*/}
                    {/*                <Image src="/utilaje/3-transport-containere-santier.jpeg" alt="Transport containere modulare" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />*/}
                    {/*                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">Structuri Modulare</div>*/}
                    {/*            </div>*/}
                    {/*            <h4 className="font-bold text-lg text-slate-800">Transport Containere</h4>*/}
                    {/*            <p className="text-sm text-gray-600 mt-1">Mutarea containerelor de șantier, a barăcilor sau a structurilor metalice voluminoase.</p>*/}
                    {/*        </div>*/}

                    {/*        /!* Slide 4: Siguranta *!/*/}
                    {/*        <div className="snap-center shrink-0 w-80 sm:w-96 flex flex-col group">*/}
                    {/*            <div className="h-64 w-full relative rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100">*/}
                    {/*                <Image src="/utilaje/4-transport-agabaritic-national.jpeg" alt="Transport utilaje national" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />*/}
                    {/*                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">Național</div>*/}
                    {/*            </div>*/}
                    {/*            <h4 className="font-bold text-lg text-slate-800">Siguranță pe Traseu</h4>*/}
                    {/*            <p className="text-sm text-gray-600 mt-1">Garantăm integritatea echipamentelor transportate și respectarea timpilor de livrare.</p>*/}
                    {/*        </div>*/}

                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*/!* --- FINAL CARUSEL --- *!/*/}
                    {/* Banner Avantaje Transport Agabaritic */}
                    <div className="bg-yellow-50 border-2 border-dashed border-yellow-400 p-6 rounded-2xl text-center">
                        <h4 className="font-bold text-slate-900 text-lg mb-2">Specializați în Transport Greu și Utilaje</h4>
                        <p className="text-slate-700">
                            Indiferent dacă ai nevoie să muți un <strong>excavator de mare tonaj, utilaje agricole grele sau componente industriale</strong>, platforma noastră MAN de 26 de tone este pregătită. Asigurăm preluare rapidă, ancorare profesională și transport în maximă siguranță oriunde în țară.
                        </p>
                    </div>

                    {/* Call to Action (Butoane de contact) */}
                    <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:${phoneNumber}`}
                            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 py-3 px-6 md:py-4 md:px-8 rounded-xl transition-all shadow-md flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
                        >
                            <span className="font-bold text-base md:text-lg">Cere Ofertă Preț:</span>
                            <span className="font-black text-xl md:text-xl whitespace-nowrap">{displayPhone}</span>
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