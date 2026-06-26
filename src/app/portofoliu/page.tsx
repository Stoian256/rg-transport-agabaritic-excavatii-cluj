import type { Metadata } from "next";
import Image from "next/image";

// OPTIMIZARE SEO PENTRU PAGINA DE PORTOFOLIU
export const metadata: Metadata = {
    title: "Portofoliu Lucrări: Excavații, Terasamente și Drumuri Cluj",
    description: "Imagini de pe șantierele R&G Company în județul Cluj. Vezi proiecte reale de săpături fundații, amenajări curți, drumuri de acces și intubări.",
};

export default function PortofoliuPage() {
    const phoneNumber = "+40720883503";
    const displayPhone = "0720 883 503";

    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">

            {/* Header Pagina Portofoliu */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
                    Imagini din Teren. <span className="text-yellow-500">Proiecte Executate.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    De la fundații rezidențiale de finețe, până la drumuri și infrastructură grea. Faptele și rezultatele vorbesc pentru noi.
                </p>
            </div>

            {/* GALERIA MASIVĂ */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* --- EXCAVAȚII ȘI FUNDAȚII REZIDENȚIALE --- */}
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/sapaturi-fundatii-rezidentiale.jpeg" alt="Sapaturi fundatii case Cluj" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Rezidențial</p>
                            <h4 className="text-white font-bold text-xl">Săpături Generale și Fundații</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/sapaturi.jpeg" alt="Evacuare moloz" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Săpături generale</p>
                            <h4 className="text-white font-bold text-xl">Evacuare și transport</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/sapatura-generala.jpeg" alt="Sapatura de precizie pentru fundatie casa" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Săpături generale</p>
                            <h4 className="text-white font-bold text-xl">Săpături Fundații</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/2-sapatura-fundatie-casa.jpeg" alt="Sapatura exacta fundatie casa" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Rezidențial</p>
                            <h4 className="text-white font-bold text-xl">Săpătură Fundație Casă</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/1-sapatura-fundatie-casa.jpeg" alt="Sapatura de precizie" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Rezidențial</p>
                            <h4 className="text-white font-bold text-xl">Săpături Fundații</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/3-sapatura-fundatie-casa.jpeg" alt="Sapatura fundatie casa finalizata" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Rezidențial</p>
                            <h4 className="text-white font-bold text-xl">Șanțuri Fundații</h4>
                        </div>
                    </div>

                    {/* --- COMPACTARE ȘI DRUMURI --- */}
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/compactare-cilindru.jpeg" alt="Compactare straturi suport" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Stabilizare</p>
                            <h4 className="text-white font-bold text-xl">Compactare Straturi Suport</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/cilindru-vibro-compactor-1.jpeg" alt="Compactare drum cu cilindru vibro" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Stabilizare</p>
                            <h4 className="text-white font-bold text-xl">Compactare Straturi Suport</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/cilindru-vibro-compactor-2.jpeg" alt="Compactare drum cu cilindru vibro" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Stabilizare</p>
                            <h4 className="text-white font-bold text-xl">Compactare Straturi Suport</h4>
                        </div>
                    </div>

                    {/* --- TERASAMENTE DE ANVERGURĂ --- */}
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/sapatura-generala-de-anvergura.jpeg" alt="Sapatura de anvergura" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Terasamente</p>
                            <h4 className="text-white font-bold text-xl">Săpături de Anvergură</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/2-incarcare-basculanta-8x4.jpeg" alt="Excavator incarcand basculanta 8x4" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Săpături</p>
                            <h4 className="text-white font-bold text-xl">Săpături de Anvergură</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/sapatura-generala-cu-fundatie.jpeg" alt="Sapatura generala si fundatii" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Rezidențial</p>
                            <h4 className="text-white font-bold text-xl">Săpătură Generală cu Fundație</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/sapatura-generala-cu-fundatie-2.jpeg" alt="Sapatura generala si fundatii" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Rezidențial</p>
                            <h4 className="text-white font-bold text-xl">Săpătură Generală cu Fundație</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/sapatura-generala-cu-fundatie-3.jpeg" alt="Sapatura generala si fundatii" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Rezidențial</p>
                            <h4 className="text-white font-bold text-xl">Săpătură Generală Fundație</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/sapatura-generala-cu-fundatie-4.jpeg" alt="Sapatura generala si fundatii" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Rezidențial</p>
                            <h4 className="text-white font-bold text-xl">Săpătură Generală Fundație</h4>
                        </div>
                    </div>

                    {/* --- UMPLUTURI ELEVAȚII --- */}
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/umpluturi-elevatie-I.JPEG" alt="Umpluturi elevatie pamant" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Construcții</p>
                            <h4 className="text-white font-bold text-xl">Umpluturi Elevație</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/umpluturi-elevatie-2.JPEG" alt="Umpluturi elevatie pamant" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Construcții</p>
                            <h4 className="text-white font-bold text-xl">Umpluturi Elevație</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/umpluturi-elevatie-cu-drenaj-0.JPEG" alt="Umplutura elevatie cu sistem drenaj" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Construcții</p>
                            <h4 className="text-white font-bold text-xl">Elevații și Sisteme Drenaj</h4>
                        </div>
                    </div>

                    {/* --- AMENAJARE DRUMURI --- */}
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-drum-decoperta-1.jpeg" alt="Amenajare drum decoperta" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură</p>
                            <h4 className="text-white font-bold text-xl">Amenajare drum - decoperta</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-drum-strat-geotextil.jpeg" alt="Aplicare strat geotextil drum" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Drumuri</p>
                            <h4 className="text-white font-bold text-xl">Aplicare Strat Geotextil</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-drum-umplutura-cu-balast.jpeg" alt="Umplutura cu balast" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Drumuri</p>
                            <h4 className="text-white font-bold text-xl">Umplutură cu Balast</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/4-drum.jpeg" alt="Drum balastat" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Drumuri</p>
                            <h4 className="text-white font-bold text-xl">Umplutură cu Balast</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/6-drum.jpeg" alt="Pietruire drum" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Drumuri</p>
                            <h4 className="text-white font-bold text-xl">Pietruire și Nivelare</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/8-drum2.jpeg" alt="Compactare drum" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajare Drum</p>
                            <h4 className="text-white font-bold text-xl">Umplere si compactare</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/7-drum-pieturire.jpeg" alt="Pietruire drum utilaje" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Drumuri</p>
                            <h4 className="text-white font-bold text-xl">Pietruire și Nivelare</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/9-drum.jpeg" alt="Compactare drum cu cilindru vibro" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură</p>
                            <h4 className="text-white font-bold text-xl">Compactare drum</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-drum.jpeg" alt="Amenajare drum" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Drumuri</p>
                            <h4 className="text-white font-bold text-xl">Amenajare drum evacuări</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amanajare-drum-2.jpeg" alt="Amenajare drum geotextil" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură</p>
                            <h4 className="text-white font-bold text-xl">Amenajare Drumuri</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amanajare-drum-3.jpeg" alt="Pietruire drum" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură</p>
                            <h4 className="text-white font-bold text-xl">Amenajare drum</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amanajare-drum-4.jpeg" alt="Amenajare drum" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Drumuri</p>
                            <h4 className="text-white font-bold text-xl">Amenajare drum</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-drum-forestier.jpeg" alt="Drum forestier" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură</p>
                            <h4 className="text-white font-bold text-xl">Amenajare Drum Forestier</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-drum-forestier-5.jpeg" alt="Finalizare drum forestier" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură</p>
                            <h4 className="text-white font-bold text-xl">Amenajare Drum Forestier</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-platforma-cabana.jpeg" alt="Amenajare platforma cabana" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                            <h4 className="text-white font-bold text-xl">Amenajare platfromă cabană</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-drum-forestier-1.jpeg" alt="Amenajare drum forestier" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură</p>
                            <h4 className="text-white font-bold text-xl">Profilare Drum Forestier</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-drum-forestier-3.jpeg" alt="Lucrari drum forestier" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură</p>
                            <h4 className="text-white font-bold text-xl">Amenajare drum forestier</h4>
                        </div>
                    </div>

                    {/* --- AMENAJĂRI EXTERIOARE --- */}

                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/1-nivelare-curte-rezidentiala.jpeg" alt="Nivelare curte rezidentiala" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                            <h4 className="text-white font-bold text-xl">Nivelare Curte Rezidențială</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-drum-de-acces-cabana.jpeg" alt="Amenajare drum acces cabana" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                            <h4 className="text-white font-bold text-xl">Amenajare drum acces cabană</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amnajare-platforma-cabana-1.jpeg" alt="Amenajare platforma cabana" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                            <h4 className="text-white font-bold text-xl">Amenajare platfromă cabană</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amanejare-platforma-cabana2.jpeg" alt="Amenajare platforma cabana" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                            <h4 className="text-white font-bold text-xl">Amenajare platfromă cabană</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-alee-1.JPEG" alt="Pregatire alee curte" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                            <h4 className="text-white font-bold text-xl">Pregătire Alee</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-alee-acces-garaj.jpeg" alt="Amenajare acces garaj" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                            <h4 className="text-white font-bold text-xl">Amenajare Acces Garaj</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-curte.jpeg" alt="Amenajare curte" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                            <h4 className="text-white font-bold text-xl">Amenajare Curte</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/terasamente-excavator-18-tone.jpeg" alt="Platforma parcare" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                            <h4 className="text-white font-bold text-xl">Amenajare Platformă Parcare</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-platforma-parcare-1.jpeg" alt="Platforma parcare" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                            <h4 className="text-white font-bold text-xl">Amenajare Platformă Parcare</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-platforma-parcare-3.jpeg" alt="Platforma parcare" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                            <h4 className="text-white font-bold text-xl">Amenajare Platformă Parcare</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/amenajare-piscina-2.jpeg" alt="Pregatire teren piscina" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                            <h4 className="text-white font-bold text-xl">Pregătire Teren Piscină</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/sapatura-generala-amenajare-piscina.jpeg" alt="Sapatura piscina curte" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                            <h4 className="text-white font-bold text-xl">Săpătură Piscină</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/sapatura-genereala-amenajare-piscina-1.jpeg" alt="Sapatura piscina" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                            <h4 className="text-white font-bold text-xl">Săpătură Piscină</h4>
                        </div>
                    </div>

                    {/* --- INTUBĂRI VĂI, DRENAJE ȘI UTILITĂȚI --- */}
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/intubare-vale-0.JPEG" alt="Pregatire intubare vale" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură Apă</p>
                            <h4 className="text-white font-bold text-xl">Pregătire Intubare Vale</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/intubare-vale-2.JPEG" alt="Intubare vale" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură Apă</p>
                            <h4 className="text-white font-bold text-xl">Intubare Vale</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/intubare-vale-3.JPEG" alt="Intubare vale" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură Apă</p>
                            <h4 className="text-white font-bold text-xl">Intubare Vale</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/intubare-vale-4.JPEG" alt="Intubare vale" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură Apă</p>
                            <h4 className="text-white font-bold text-xl">Intubare Vale</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/intubare-vale-5.JPEG" alt="Intubare vale" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură Apă</p>
                            <h4 className="text-white font-bold text-xl">Intubare Vale</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/intubare-vale-6.JPEG" alt="Intubare vale" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură Apă</p>
                            <h4 className="text-white font-bold text-xl">Intubare Vale</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/intubare-vale-7.JPEG" alt="Intubare vale" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură Apă</p>
                            <h4 className="text-white font-bold text-xl">Intubare Vale</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/intubare-vale-9.JPEG" alt="Finalizare intubare" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură Apă</p>
                            <h4 className="text-white font-bold text-xl">Intubare Vale</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/dren-ansamblu.JPEG" alt="Sistem complet drenaj" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Edilitar</p>
                            <h4 className="text-white font-bold text-xl">Ansamblu Drenaj</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/drenuri-si-pluviale2.JPEG" alt="Drenuri si pluviale" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Edilitar</p>
                            <h4 className="text-white font-bold text-xl">Drenuri și Ape Pluviale</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/drenuri.JPEG" alt="Drenuri" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Edilitar</p>
                            <h4 className="text-white font-bold text-xl">Drenuri</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/1-sant-retele-utilitati.jpeg" alt="Sapatura sant retele" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Edilitar</p>
                            <h4 className="text-white font-bold text-xl">Șanțuri Rețele Utilități</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/3-sant-retele-utilitati.jpeg" alt="Sant retele utilitati" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Edilitar</p>
                            <h4 className="text-white font-bold text-xl">Șanțuri Rețele Utilități</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/1-montaj-fosa-septica.jpeg" alt="Montaj fosa septica" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură</p>
                            <h4 className="text-white font-bold text-xl">Sapături rețele apă, curent, pluviale</h4>
                        </div>
                    </div>
                    <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                        <Image src="/utilaje/3-montaj-fosa-septica.jpeg" alt="Montaj fosa septica" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Edilitar</p>
                            <h4 className="text-white font-bold text-xl">Sapături rețele apă, curent, pluviale</h4>
                        </div>
                    </div>
                </div>
            </div>

            {/* CALL TO ACTION FINAL */}
            <div className="mt-20 max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 text-center shadow-xl">
                <h2 className="text-3xl font-bold text-white mb-4">Ai un proiect similar în plan?</h2>
                <p className="text-gray-300 text-lg mb-8">
                    Contactează-ne pentru o evaluare gratuită. Îți vom recomanda utilajele potrivite și îți vom oferi o cotație corectă de preț.
                </p>
                <a
                    href={`tel:${phoneNumber}`}
                    className="inline-block bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold text-xl py-4 px-10 rounded-xl transition-all shadow-md"
                >
                    Sună Acum: {displayPhone}
                </a>
            </div>

        </div>
    );
}