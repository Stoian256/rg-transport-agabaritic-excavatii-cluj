import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact R&G Company SRL | Închirieri Utilaje Cluj",
    description: "Contactează-ne pentru închiriere buldoexcavator, transport agabaritic și basculantă în Cluj. R&G Company SRL - CUI: 22139540.",
};

export default function ContactPage() {
    // Aici pui numărul exact de pe care ți-a scris Gabi pe WhatsApp
    const phoneNumber = "+40720883503";
    const displayPhone = "0720 883 503";
    const email = "irimiesgavril@yahoo.com";

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

                {/* Titlu Pagină */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Contactează-ne</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Ai nevoie de transport agabaritic, excavații sau agregate? Sună-ne direct sau lasă-ne un mesaj și îți răspundem în cel mai scurt timp.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">

                    {/* Partea Stângă - Date de Contact */}
                    <div className="bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-yellow-500 mb-6">Date Oficiale</h2>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="text-yellow-500 mt-1 mr-4">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Telefon (Asistență Rapidă)</p>
                                        <a href={`tel:${phoneNumber}`} className="text-xl font-bold hover:text-yellow-400 transition-colors">
                                            {displayPhone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-yellow-500 mt-1 mr-4">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <a href={`mailto:${email}`} className="text-lg font-bold hover:text-yellow-400 transition-colors break-all">
                                            {email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-yellow-500 mt-1 mr-4">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Date Firmă</p>
                                        <p className="text-lg font-bold">R&G Company SRL</p>
                                        <p className="text-gray-300">CUI: 22139540</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <a
                                href={`https://wa.me/${phoneNumber.replace('+', '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg w-full flex items-center justify-center transition-colors shadow-lg"
                            >
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                Mesaj pe WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Partea Dreaptă - Formular */}
                    <div className="p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">Cere o ofertă rapidă</h3>
                        <form className="space-y-6">

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Numele tău / Firma</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
                                    placeholder="Ex: Ion Popescu"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Număr de telefon</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
                                    placeholder="07..."
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">De ce serviciu ești interesat?</label>
                                <select
                                    id="service"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors bg-white"
                                >

                                    <option value="excavator">Excavații / Demolări (CAT 5t)</option>
                                    <option value="basculanta">Transport Agregate (Basculantă)</option>
                                    <option value="pachet">Pachet utilaje (50% Reducere)</option>
                                    <option value="altele">Utilaje tonaj mare - flotă parteneri</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Detalii lucrare (Opțional)</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors resize-none"
                                    placeholder="Locația lucrării, volumul estimat, perioada dorită..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-colors shadow-md"
                            >
                                Trimite Cererea
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-2">
                                *Acest formular este demonstrativ pentru versiunea curentă. Folosiți apelul telefonic pentru contact imediat.
                            </p>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}