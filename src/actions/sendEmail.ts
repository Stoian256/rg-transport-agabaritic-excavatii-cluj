"use server";

import nodemailer from "nodemailer";

export async function handleFormSubmit(formData: FormData) {
    // Preluăm câmpurile din formular
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const clientEmail = formData.get("clientEmail") as string; // Preluăm noul câmp
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    // Validare
    if (!name || !phone || !clientEmail) {
        return { success: false, error: "Numele, telefonul și adresa de email sunt obligatorii." };
    }

    // Configurăm serverul SMTP pentru Yahoo
    const transporter = nodemailer.createTransport({
        host: "smtp.mail.yahoo.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Cerere Nouă Site: ${service} - de la ${name}`,
            text: `
        Ai primit o cerere nouă de ofertă de pe site!
        
        Nume client: ${name}
        Email client: ${clientEmail}
        Telefon: ${phone}
        Serviciu dorit: ${service}
        
        Mesaj / Detalii lucrare:
        ${message || "Nu a lăsat un mesaj suplimentar."}
      `,
        });

        return { success: true };
    } catch (error) {
        console.error("Eroare SMTP:", error);
        return { success: false, error: "Eroare la trimiterea email-ului. Încearcă din nou." };
    }
}