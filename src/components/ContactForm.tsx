"use client";

import { useRef, useState } from "react";
import { handleFormSubmit } from "../actions/sendEmail";

export default function ContactForm() {
    const [status, setStatus] = useState("");
    const formRef = useRef<HTMLFormElement | null>(null);

    const clientAction = async (formData: FormData) => {
        setStatus("Se trimite mesajul...");

        const result = await handleFormSubmit(formData);

        if (result?.success) {
            setStatus("Mesajul a fost trimis cu succes! Te vom contacta în curând.");
            formRef.current?.reset();
        } else {
            setStatus(`${result}`);
        }
    };

    return (
        <form ref={formRef} action={clientAction} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Numele tău / Firma</label>
                <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none" placeholder="Ex: Ion Popescu" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adresa de email</label>
                <input type="email" name="clientEmail" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none" placeholder="Ex: nume@email.com" />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Număr de telefon</label>
                <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none" placeholder="07..." />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">De ce serviciu ești interesat?</label>
                <select name="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none bg-white">
                    <option value="Excavații / Demolări (CAT 5t)">Excavații / Demolări (CAT 5t)</option>
                    <option value="Săpături pentru fundații">Săpături pentru fundații</option>
                    <option value="Săpături generale">Săpături generale</option>
                    <option value="Săpături rețele">Săpături rețele</option>
                    <option value="Săpături drenuri">Săpături drenuri</option>
                    <option value="Amenajare drum / drum forestier">Amenajare drum / drum forestier</option>
                    <option value="Transport Agregate (Basculantă)">Transport Agregate (Basculantă)</option>
                    <option value="Pachet utilaje (50% Reducere)">Pachet utilaje (50% Reducere)</option>
                    <option value="Închirere utilaje">Închirere utilaje</option>
                    <option value="Altceva">Altceva</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Detalii lucrare</label>
                <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none" placeholder="Locația lucrării, volumul estimat..."></textarea>
            </div>

            <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-colors shadow-md">
                Trimite Cererea
            </button>

            {status && (
                <div className={`p-4 mt-4 text-center rounded-lg font-medium ${status.includes("✅") ? 'bg-green-100 text-green-800 border border-green-200' : status.includes("❌") ? 'bg-red-100 text-red-800 border border-red-200' : 'bg-blue-50 text-blue-800'}`}>
                    {status}
                </div>
            )}
        </form>
    );
}