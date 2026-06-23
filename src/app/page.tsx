import Link from "next/link";
import Image from "next/image";

export default function Home() {
    const phoneNumber = "+40720883503";
    const whatsappNumber = "40720883503";
    const displayPhone = "0720 883 503";
    return (
        <div className="flex flex-col items-center justify-center">

            {/* 1. HERO SECTION (Fundal cu utilajele reale) */}
            <section className="relative w-full bg-slate-900 text-white pt-32 pb-24 px-4 text-center overflow-hidden">
                {/* Imaginea de fundal optimizată */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/utilaje/excavator-si-basculata.jpeg"
                        alt="Transport agabaritic și utilaje în Cluj-Napoca"
                        fill
                        className="object-cover object-center"
                        priority // Spune browserului să încarce poza asta prima
                    />
                </div>

                {/* Conținutul text peste imagine */}
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight drop-shadow-lg">
                        Lucrări de Excavații și Închirieri Utilaje în <span
                        className="text-yellow-500">Cluj-Napoca</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto drop-shadow-md font-medium">
                        Executăm săpături rezidențiale, decopertări, profilare drumuri și terasamente de anvergură. Săpături fine,
                        transport pământ, balast, piatră și agregat. Intervenții rapide, direct pe șantierul tău.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:${phoneNumber}`}
                            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 py-3 px-6 md:py-4 md:px-8 rounded-xl transition-all shadow-md flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2"
                        >
                            <span className="font-bold text-base md:text-lg">Sună Acum:</span>
                            <span className="font-black text-xl md:text-xl whitespace-nowrap">{displayPhone}</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. BANNER OFERTĂ */}
            <section className="w-full bg-yellow-500 text-slate-900 py-6 px-4 text-center shadow-md z-20 relative">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="bg-slate-900 text-white font-bold px-3 py-1 rounded-full text-sm animate-pulse">
            OFERTĂ SPECIALĂ
          </span>
                    <p className="text-lg md:text-xl font-bold">
                        Închiriază utilajele în pereche și ai <span
                        className="text-red-700 text-2xl">50% REDUCERE</span> la al doilea utilaj!
                    </p>
                    <p className="text-sm font-medium opacity-80 mt-1 md:mt-0 md:ml-4">
                        (Ex: Închiriere excavator și Autobasculantă)
                    </p>
                </div>
            </section>

            {/* 3. FLOTA ȘI SERVICIILE */}
            <section id="servicii" className="w-full max-w-7xl mx-auto py-20 px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">Flota Noastră de
                    Utilaje</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Oferim servicii complete sau închiriere utilaje cu operator (de la 2000 RON + TVA / zi).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Excavator CAT */}
                    <div
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 group flex flex-col">
                        <div className="h-56 rounded-xl mb-6 overflow-hidden relative bg-slate-100">
                            <Image
                                src="/utilaje/excavator-5t.jpeg"
                                alt="Excavator CAT 5 tone sapaturi fundatii Cluj"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div
                                className="absolute top-4 left-4 bg-slate-900 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                                5 Tone
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-slate-800">Excavator CAT</h3>
                        <h4 className="text-sm font-bold text-yellow-600 mb-4 uppercase tracking-wider">Excavații de
                            Finețe</h4>
                        <ul className="text-gray-600 mb-6 space-y-2 flex-grow">
                            <li>✓ Decoperte, săpături generale, fundații, șanțuri,taluzuri, etc.</li>
                            <li>✓ Săpături rețele (apă, gaz, curent, fibră)</li>
                            <li>✓ Montaj fose septice și drenuri</li>
                            <li>✓ Ideal pentru lucrări rezidențiale în spații restrânse</li>
                        </ul>
                    </div>

                    {/* Basculanta Mercedes */}
                    <div
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 group flex flex-col">
                        <div className="h-56 rounded-xl mb-6 overflow-hidden relative bg-slate-100">
                            <Image
                                src="/utilaje/basculanta-mercedes-agregate.jpeg"
                                alt="Basculanta Mercedes Atego transport agregate Cluj"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div
                                className="absolute top-4 left-4 bg-slate-900 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                                7.5 Tone
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-slate-800">Basculantă 7.5 tone</h3>
                        <h4 className="text-sm font-bold text-yellow-600 mb-4 uppercase tracking-wider">Transport
                            Agregate</h4>
                        <ul className="text-gray-600 mb-6 space-y-2 flex-grow">
                            <li>✓ Livrare nisip, sort, piatră, balast, beton semiuscat</li>
                            <li>✓ Pământ de umplutură și vegetal</li>
                            <li>✓ Evacuare moloz de pe șantiere</li>
                            <li>✓ Acces facil pe străzi înguste din Cluj</li>
                        </ul>
                    </div>

                    {/* Card 3 (NOU): Lucrări de Anvergură / Flota Parteneri */}
                    <div
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 group flex flex-col">
                        <div className="h-56 rounded-xl mb-6 overflow-hidden relative bg-slate-100">
                            <Image
                                src="/utilaje/terasiere.jpeg"
                                alt="Proiect anvergura excavator 18T"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div
                                className="absolute top-4 left-4 bg-slate-900 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                                Flotă parteneri
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-slate-800">Lucrări de Mare Anvergură</h3>
                        <h4 className="text-sm font-bold text-yellow-600 mb-4 uppercase tracking-wider">Terasamente Grele</h4>
                        <ul className="text-gray-600 mb-6 space-y-2 flex-grow">
                            <li>✓ Excavații și săpături generale mai</li>
                            <li>✓ Decopertări masive și nivelări industriale</li>
                            <li>✓ Amenajare drumuri forestiere și agricole</li>
                            <li>✓ Compactare straturi suport</li>
                            <li>✓ Evacuări volume mari</li>
                        </ul>
                    </div>
                </div>

                {/* --- ADAUGĂ ACEST BLOC NOU DE AICI --- */}
                {/* FLOTĂ EXTINSĂ (Echipamente grele) */}
                <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
                    {/* Un mic accent vizual de fundal */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
                        <div className="lg:w-1/3 text-center lg:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-4">
                                Flotă Extinsă
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Pentru șantiere majore, infrastructură și lucrări de mare anvergură, vă punem la dispoziție și echipamente de tonaj superior.
                            </p>
                        </div>

                        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                            {/* Card 1 */}
                            <div className="bg-slate-800/50 p-5 rounded-r-xl border-l-4 border-yellow-500 hover:bg-slate-800 transition-colors shadow-sm">
                                <h4 className="font-bold text-lg text-white mb-1">Excavator pe Șenile</h4>
                                <p className="text-xs text-yellow-500 font-bold uppercase tracking-wider">Tonaj: 18 Tone</p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-slate-800/50 p-5 rounded-r-xl border-l-4 border-yellow-500 hover:bg-slate-800 transition-colors shadow-sm">
                                <h4 className="font-bold text-lg text-white mb-1">Autobasculante 8x4</h4>
                                <p className="text-xs text-yellow-500 font-bold uppercase tracking-wider">Transport agregate tonaj mare</p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-slate-800/50 p-5 rounded-r-xl border-l-4 border-yellow-500 hover:bg-slate-800 transition-colors shadow-sm">
                                <h4 className="font-bold text-lg text-white mb-1">Cilindru Compactor</h4>
                                <p className="text-xs text-yellow-500 font-bold uppercase tracking-wider">Clasele 3.5 Tone și 15 Tone</p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-slate-800/50 p-5 rounded-r-xl border-l-4 border-yellow-500 hover:bg-slate-800 transition-colors shadow-sm">
                                <h4 className="font-bold text-lg text-white mb-1">Buldoexcavator</h4>
                                <p className="text-xs text-yellow-500 font-bold uppercase tracking-wider">Lucrări mixte & terasamente</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --- PÂNĂ AICI --- */}

                {/* --- ADAUGĂ ACEST BLOC SUB FLOTA EXTINSĂ --- */}
                {/* GALERIE FOTO - PROIECTE DIN TEREN */}
                <div className="mt-24 pt-12 border-t border-gray-200">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                            Portofoliu Lucrări. <span className="text-yellow-500">Direct de pe Șantier.</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            De la fundații rezidențiale de finețe, până la drumuri și infrastructură grea. Faptele și rezultatele vorbesc pentru noi.
                        </p>
                    </div>

                    {/* Grid de 6 imagini */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/sapaturi-fundatii-rezidentiale.jpeg" alt="Sapaturi fundatii case Cluj" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Rezidențial</p>
                                <h4 className="text-white font-bold text-xl">Săpături Generale și Fundații</h4>
                            </div>
                        </div>
                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/sapaturi.jpeg" alt="Demolari mecanizate si evacuare moloz" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
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
                            <Image src="/utilaje/1-sapatura-fundatie-casa.jpeg" alt="Sapatura de precizie pentru fundatie casa" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
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


                        {/* Poza 6 */}
                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/compactare-cilindru.jpeg" alt="Transport utilaje cu platforma MAN" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Stabilizare</p>
                                <h4 className="text-white font-bold text-xl">Compactare Straturi Suport</h4>
                            </div>
                        </div>

                        {/* Poza 3: Cilindru Vibro */}
                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/cilindru-vibro-compactor-1.jpeg" alt="Compactare drum cu cilindru vibro" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Stabilizare</p>
                                <h4 className="text-white font-bold text-xl">Compactare Straturi Suport</h4>
                            </div>
                        </div>

                        {/* Poza 3: Cilindru Vibro */}
                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/cilindru-vibro-compactor-2.jpeg" alt="Compactare drum cu cilindru vibro" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Stabilizare</p>
                                <h4 className="text-white font-bold text-xl">Compactare Straturi Suport</h4>
                            </div>
                        </div>


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
                            <Image src="/utilaje/amenajare-drum-umplutura-cu-balast.jpeg" alt="Umplutura cu balast pentru drum" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Drumuri</p>
                                <h4 className="text-white font-bold text-xl">Umplutură cu Balast</h4>
                            </div>
                        </div>
                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/4-drum.jpeg" alt="Umplutura cu balast pentru drum" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Drumuri</p>
                                <h4 className="text-white font-bold text-xl">Umplutură cu Balast</h4>
                            </div>
                        </div>
                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/6-drum.jpeg" alt="Pietruire drum utilaje" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Drumuri</p>
                                <h4 className="text-white font-bold text-xl">Pietruire și Nivelare</h4>
                            </div>
                        </div>





                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/8-drum2.jpeg" alt="Compactare drum cu cilindru vibro" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
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
                            <Image src="/utilaje/amenajare-drum.jpeg" alt="Pietruire drum utilaje" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Drumuri</p>
                                <h4 className="text-white font-bold text-xl">Amenajare drum evacuări</h4>
                            </div>
                        </div>

                        {/* Poza 1: Amenajare Drum (Geotextil) */}
                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/amanajare-drum-2.jpeg" alt="Amenajare drum cu piatra si geotextil" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură</p>
                                <h4 className="text-white font-bold text-xl">Amenajare Drumuri</h4>
                            </div>
                        </div>
                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/amanajare-drum-3.jpeg" alt="Pietruire drum utilaje" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură</p>
                                <h4 className="text-white font-bold text-xl">Amenajare drum</h4>
                            </div>
                        </div>

                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/amanajare-drum-4.jpeg" alt="Pietruire drum utilaje" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Drumuri</p>
                                <h4 className="text-white font-bold text-xl">Amenajare drum</h4>
                            </div>
                        </div>
                       {/* <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/5-drum.jpeg" alt="Aplicare strat geotextil drum" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Drumuri</p>
                                <h4 className="text-white font-bold text-xl">Aplicare Strat Geotextil</h4>
                            </div>
                        </div>*/}











                        {/* Poza 1 */}
                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/amenajare-drum-forestier.jpeg" alt="Amenajare drum forestier Cluj" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
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
                       {/* <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/amenajare-drum-forestier-2.jpeg" alt="Amenajare drum forestier" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură</p>
                                <h4 className="text-white font-bold text-xl">Profilare Drum Forestier</h4>
                            </div>
                        </div>*/}


                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/amenajare-drum-forestier-3.jpeg" alt="Lucrari drum forestier" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură</p>
                                <h4 className="text-white font-bold text-xl">Amenajare drum forestier</h4>
                            </div>
                        </div>





                        {/* --- SECTIUNEA 3: AMENAJĂRI, CURȚI ȘI PISCINE --- */}
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
                            <Image src="/utilaje/amenajare-platforma-parcare-1.jpeg" alt="Amenajare platforma parcare" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                                <h4 className="text-white font-bold text-xl">Amenajare Platformă Parcare</h4>
                            </div>
                        </div>
                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/terasamente-excavator-18-tone.jpeg" alt="Terasamente si decopertari cu excavator 18 tone" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                                <h4 className="text-white font-bold text-xl">Amenajare Platformă Parcare</h4>
                            </div>
                        </div>
                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/amenajare-platforma-parcare-3.jpeg" alt="Amenajare platforma parcare" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                                <h4 className="text-white font-bold text-xl">Amenajare Platformă Parcare</h4>
                            </div>
                        </div>


                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/amenajare-piscina-2.jpeg" alt="Amenajare piscina lucrari" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
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
                            <Image src="/utilaje/sapatura-genereala-amenajare-piscina-1.jpeg" alt="Sapatura piscina curte" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Amenajări Exterioare</p>
                                <h4 className="text-white font-bold text-xl">Săpătură Piscină</h4>
                            </div>
                        </div>



                        {/* --- SECTIUNEA 4: INTUBĂRI VĂI, DRENAJE ȘI UTILITĂȚI --- */}
                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/intubare-vale-0.JPEG" alt="Start intubare vale" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură Apă</p>
                                <h4 className="text-white font-bold text-xl">Pregătire Intubare Vale</h4>
                            </div>
                        </div>

                       {/* <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/intubare-vale-1.JPEG" alt="Intubare vale montaj tevi" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură Apă</p>
                                <h4 className="text-white font-bold text-xl">Poziționare Tuburi Corugate</h4>
                            </div>
                        </div>
*/}
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

                       {/* <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/intubare-vale-8.JPEG" alt="Intubare vale" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură Apă</p>
                                <h4 className="text-white font-bold text-xl">Intubare Vale</h4>
                            </div>
                        </div>
*/}
                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/intubare-vale-9.JPEG" alt="Finalizare intubare vale si podet" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
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
                            <Image src="/utilaje/drenuri-si-pluviale2.JPEG" alt="Drenuri si pluviale sapaturi" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Edilitar</p>
                                <h4 className="text-white font-bold text-xl">Drenuri și Ape Pluviale</h4>
                            </div>
                        </div>

                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/drenuri.JPEG" alt="Drenuri langa gard" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Edilitar</p>
                                <h4 className="text-white font-bold text-xl">Drenuri</h4>
                            </div>
                        </div>


                        {/* Poza 5: Sant Retele */}
                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/1-sant-retele-utilitati.jpeg" alt="Sapatura sant retele utilitati" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
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
                            <Image src="/utilaje/1-montaj-fosa-septica.jpeg" alt="Montaj fosa septica si drenaj" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Infrastructură</p>
                                <h4 className="text-white font-bold text-xl">Sapături reșele apa, curent, pluviale</h4>
                            </div>
                        </div>
                        <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
                            <Image src="/utilaje/3-montaj-fosa-septica.jpeg" alt="Montaj fosa septica" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-yellow-400 font-bold text-sm uppercase tracking-wider mb-1">Edilitar</p>
                                <h4 className="text-white font-bold text-xl">Săpături Fosă Septică</h4>
                            </div>
                        </div>

                    </div>

                </div>

                {/* --- PÂNĂ AICI --- */}
            </section>

            {/* 4. STICKY WHATSAPP BUTTON */}
            <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 z-50 flex items-center justify-center"
                aria-label="Contactează-ne pe WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
            </a>

        </div>
    );
}