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
                src="/utilaje/platforma-incarcata.jpeg"
                alt="Transport agabaritic și utilaje în Cluj-Napoca"
                fill
                className="object-cover object-center"
                priority // Spune browserului să încarce poza asta prima
            />
          </div>

          {/* Conținutul text peste imagine */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto leading-tight drop-shadow-lg">
              Transport Agabaritic și Închirieri Utilaje în <span className="text-yellow-500">Cluj-Napoca</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-3xl mx-auto drop-shadow-md font-medium">
              Platformă MAN de 26 tone pentru transport utilaje grele. Excavații de precizie și transport agregate. Intervenții rapide, direct pe șantierul tău.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                  href={`tel:${phoneNumber}`}
                  className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-xl"
              >
                Sună Acum: {displayPhone}
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
              Închiriază utilajele în pereche și ai <span className="text-red-700 text-2xl">50% REDUCERE</span> la al doilea utilaj!
            </p>
            <p className="text-sm font-medium opacity-80 mt-1 md:mt-0 md:ml-4">
              (Ex: Săpătură cu Excavatorul + Evacuare moloz cu Basculanta)
            </p>
          </div>
        </section>

        {/* 3. FLOTA ȘI SERVICIILE */}
        <section id="servicii" className="w-full max-w-7xl mx-auto py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">Flota Noastră de Utilaje</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Oferim servicii complete sau închiriere utilaje cu operator (de la 2000 RON + TVA / zi).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Platforma MAN */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="h-56 rounded-xl mb-6 overflow-hidden relative bg-slate-100">
                <Image
                    src="/utilaje/platforma-man-26-tone.jpeg"
                    alt="Platforma MAN 26 tone transport utilaje Cluj"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-900 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  Capacitate: 26 Tone
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Platformă MAN</h3>
              <h4 className="text-sm font-bold text-yellow-600 mb-4 uppercase tracking-wider">Transport Agabaritic</h4>
              <ul className="text-gray-600 mb-6 space-y-2 flex-grow">
                <li>✓ Transport utilaje agricole și construcții</li>
                <li>✓ Relocare containere de șantier</li>
                <li>✓ Acoperire locală (Cluj) și Națională</li>
                <li>✓ Siguranță maximă pe timpul transportului</li>
              </ul>
            </div>

            {/* Excavator CAT */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="h-56 rounded-xl mb-6 overflow-hidden relative bg-slate-100">
                <Image
                    src="/utilaje/excavator-cat-sapaturi.jpeg"
                    alt="Excavator CAT 5 tone sapaturi fundatii Cluj"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-900 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  Capacitate: 5 Tone
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Excavator CAT</h3>
              <h4 className="text-sm font-bold text-yellow-600 mb-4 uppercase tracking-wider">Excavații de Finețe</h4>
              <ul className="text-gray-600 mb-6 space-y-2 flex-grow">
                <li>✓ Săpături fundații, șanțuri, decopertări</li>
                <li>✓ Săpături rețele (apă, gaz, curent, fibră)</li>
                <li>✓ Montaj fose septice și drenuri</li>
                <li>✓ Ideal pentru lucrări rezidențiale restrânse</li>
              </ul>
            </div>

            {/* Basculanta Mercedes */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="h-56 rounded-xl mb-6 overflow-hidden relative bg-slate-100">
                <Image
                    src="/utilaje/basculanta-mercedes-agregate.jpeg"
                    alt="Basculanta Mercedes Atego transport agregate Cluj"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-slate-900 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  Capacitate: 7.5 Tone
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Basculantă Mercedes</h3>
              <h4 className="text-sm font-bold text-yellow-600 mb-4 uppercase tracking-wider">Transport Agregate</h4>
              <ul className="text-gray-600 mb-6 space-y-2 flex-grow">
                <li>✓ Livrare nisip, sort, piatră, beton semiuscat</li>
                <li>✓ Pământ de umplutură și vegetal</li>
                <li>✓ Evacuare moloz de pe șantiere</li>
                <li>✓ Acces facil pe străzi înguste din Cluj</li>
              </ul>
            </div>

          </div>
        </section>

        {/* 4. STICKY WHATSAPP BUTTON */}
        <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 z-50 flex items-center justify-center"
            aria-label="Contactează-ne pe WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>

      </div>
  );
}