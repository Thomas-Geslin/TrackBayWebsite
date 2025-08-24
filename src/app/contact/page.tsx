import { Resend } from 'resend';
import { redirect } from 'next/navigation';

export const runtime = 'nodejs'; // garantit le runtime Node pour le SDK Resend

export default function ContactPage() {
  async function send(formData: FormData) {
    'use server';

    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    // Champ "honeypot" anti-bot
    const website = String(formData.get('website') || '');

    if (website) return; // bot détecté
    if (!email || !message) throw new Error('Required fields.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Invalid email.');
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = process.env.CONTACT_FROM!;
    const to = process.env.CONTACT_TO!;

    await resend.emails.send({
      from,
      to,
      subject: 'Nouveau message depuis TrackBayApp.com',
      text: `De: ${email}\n\n${message}`,
      // Le SDK Node accepte "replyTo" pour l'adresse de réponse
      replyTo: email,
    });

    redirect('/contact/success');
  }

  return (
    <main className="max-w-md mx-auto p-6 mt-20">
      <h1 className="text-2xl font-semibold mb-4">Contact</h1>

      <form
        action={send}
        className="space-y-4"
      >
        {/* Honeypot (ne pas supprimer) */}
        <input
          type="text"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          className="hidden"
          aria-hidden="true"
        />

        <label className="block">
          <span className="block text-sm mb-1">Email</span>
          <input
            type="email"
            name="email"
            required
            className="w-full border rounded-md px-3 py-2"
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          <span className="block text-sm mb-1">Message</span>
          <textarea
            name="message"
            required
            rows={6}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Write your message here…"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-md px-4 py-2 border hover:bg-white hover:text-black duration-300 hover:cursor-pointer"
        >
          Send
        </button>
      </form>
    </main>
  );
}
