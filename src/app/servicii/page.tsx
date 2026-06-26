import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// OPTIMIZARE SEO PENTRU HUB-UL DE SERVICII
export const metadata: Metadata = {
    title: "Servicii Excavații, Terasamente și Transport | R&G Cluj",
    description: "Gamă completă de servicii pentru construcții: de la săpături fundații cu excavator CAT 5t, la terasamente grele și transport agregate. Închiriere utilaje în județul Cluj.",
};

export default function ServiciiHubPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">

            {/* Header Pagina de Servicii */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
                    Soluții Complete pentru <span className="text-yellow-500">Terasamente și Infrastructură</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Avem utilajele, experiența și logistica necesare pentru a acoperi orice etapă a proiectului tău, de la prima săpătură până la nivelarea finală și evacuarea molozului.
                </p>
            </div>

            <div className="max-w-7xl mx-auto space-y-24">

                {/* CATEGORIA 1: FLOTĂ PROPRIE - EXCAVAȚII */}
                <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <div className="w-full md:w-1/2 relative h-80 rounded-2xl overflow-hidden group">
                        <Image
                            src="/utilaje/excavator-5t.jpeg"
                            alt="Excavator CAT 5t lucrari de precizie"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                            Flotă Proprie
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-slate-800">Săpături și Excavații de Precizie</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Intervenții rapide cu excavatorul CAT pe șenile de 5 tone. Datorită dimensiunilor compacte, este ideal pentru spații înguste, curți rezidențiale și lucrări de finețe care necesită protejarea infrastructurii existente.
                        </p>
                        <ul className="text-gray-700 space-y-2 font-medium">
                            <li className="flex items-center gap-2"><span className="text-yellow-500">✓</span> Fundații case și decopertări</li>
                            <li className="flex items-center gap-2"><span className="text-yellow-500">✓</span> Șanțuri pentru utilități (apă, gaz, curent)</li>
                            <li className="flex items-center gap-2"><span className="text-yellow-500">✓</span> Montaj fose septice și drenaje</li>
                        </ul>
                        <div className="pt-4">
                            <Link href="/servicii/excavatii-cat" className="inline-flex items-center justify-center bg-slate-900 text-white hover:bg-slate-800 font-bold py-3 px-8 rounded-xl transition-all shadow-md">
                                Vezi detalii și galerie completă &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

                {/* CATEGORIA 2: FLOTĂ PROPRIE - AGREGATE (Reverse layout) */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-10 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                    <div className="w-full md:w-1/2 relative h-80 rounded-2xl overflow-hidden group">
                        <Image
                            src="/utilaje/basculanta-mercedes-agregate.jpeg"
                            alt="Basculanta 7.5 tone transport nisip si pietris"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 right-4 bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                            Flotă Proprie
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold text-slate-800">Transport Agregate și Evacuare</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Livrăm rapid materialele necesare șantierului tău cu basculanta Mercedes de 7.5 tone. Asigurăm necesarul de agregate minerale direct de la balastieră și evacuăm eficient pământul sau molozul rezultat în urma săpăturilor.
                        </p>
                        <ul className="text-gray-700 space-y-2 font-medium">
                            <li className="flex items-center gap-2"><span className="text-yellow-500">✓</span> Nisip, pietriș, sorturi, piatră concasată</li>
                            <li className="flex items-center gap-2"><span className="text-yellow-500">✓</span> Pământ vegetal (negru) pentru grădini</li>
                            <li className="flex items-center gap-2"><span className="text-yellow-500">✓</span> Evacuare pământ de excavație și moloz</li>
                        </ul>
                        <div className="pt-4">
                            {/* Observație: Asigură-te că creezi pagina /servicii/transport-agregate în pasul următor */}
                            <Link href="/servicii/transport-agregate" className="inline-flex items-center justify-center bg-slate-900 text-white hover:bg-slate-800 font-bold py-3 px-8 rounded-xl transition-all shadow-md">
                                Vezi tipuri de materiale &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

                {/* CATEGORIA 3: ANTREPRIZĂ - PROIECTE MARI */}
                <div className="flex flex-col md:flex-row items-center gap-10 bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                    {/* Background accent */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-500 opacity-5 rounded-full blur-3xl"></div>

                    <div className="w-full md:w-1/2 relative h-80 rounded-2xl overflow-hidden group border border-slate-700 z-10">
                        <Image
                            src="/utilaje/terasamente-excavator-18-tone.jpeg"
                            alt="Excavator 18 tone executand lucrari de anvergura"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 bg-slate-800 text-yellow-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md border border-slate-700">
                            Antrepriză Generală
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-6 z-10">
                        <h2 className="text-3xl font-bold text-yellow-500">Infrastructură & Terasamente Masive</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Nu ne limităm doar la proiecte rezidențiale mici. Prin rețeaua noastră de parteneri, mobilizăm utilaje de mare tonaj pentru a gestiona cap-coadă lucrări de anvergură care implică volume mari de pământ.
                        </p>
                        <ul className="text-gray-300 space-y-2 font-medium">
                            <li className="flex items-center gap-2"><span className="text-yellow-500">✓</span> Construcție drumuri forestiere și agricole</li>
                            <li className="flex items-center gap-2"><span className="text-yellow-500">✓</span> Decopertări masive pentru platforme industriale</li>
                            <li className="flex items-center gap-2"><span className="text-yellow-500">✓</span> Intubări de văi și compactare (Cilindri 15t)</li>
                        </ul>
                        <div className="pt-4">
                            {/* Aici putem duce spre pagina de contact sau spre o pagina separata de antrepriza in viitor */}
                            <Link href="/contact" className="inline-flex items-center justify-center bg-yellow-500 text-slate-900 hover:bg-yellow-600 font-bold py-3 px-8 rounded-xl transition-all shadow-md">
                                Solicită deviz pentru proiect mare &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}