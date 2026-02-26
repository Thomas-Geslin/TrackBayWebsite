import { Resend } from 'resend';
import { redirect } from '@/i18n/navigation';
import { getPostHogClient, shutdownPostHog } from '@/lib/posthog-server';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export const runtime = 'nodejs'; // Ensure Node runtime for Resend

/* -------------------------- Helpers & Constants -------------------------- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function assertEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

/* ----------------------------- UI Subcomponents ---------------------------- */
function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block"
    >
      <span className="mb-1 block text-sm text-white/80">{label}</span>
      {children}
    </label>
  );
}

/* --------------------------------- Page --------------------------------- */
type Props = { params: Promise<{ locale: string }> };

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Contact' });

  async function send(formData: FormData) {
    'use server';

    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const website = String(formData.get('website') || ''); // honeypot

    // Basic bot + validation guards
    if (website) return; // silently ignore bots
    if (!email || !message) throw new Error('Required fields are missing.');
    if (!EMAIL_RE.test(email)) throw new Error('Invalid email address.');

    const resend = new Resend(assertEnv('RESEND_API_KEY'));
    const from = assertEnv('CONTACT_FROM');
    const to = assertEnv('CONTACT_TO');

    await resend.emails.send({
      from,
      to,
      subject: 'Nouveau message depuis TrackBayApp.com',
      text: `De: ${email}\n\n${message}`,
      replyTo: email,
    });

    // Track the successful contact form submission server-side
    const posthog = getPostHogClient();
    posthog.capture({
      distinctId: email,
      event: 'contact_form_submitted',
      properties: {
        message_length: message.length,
      },
    });
    await shutdownPostHog();

    redirect({ href: '/contact/success', locale });
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto max-w-lg">
        <div className="rounded-2xl border border-black/10 bg-background p-6 shadow-lg ring-1 ring-white/5 md:p-8">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold tracking-tight">{t('heading')}</h1>
            <p className="mt-1 text-sm text-white/60">
              {t('subheading')}
            </p>
          </header>

          <form
            action={send}
            className="space-y-5"
          >
            {/* Honeypot: keep rendered but hidden from users & ATs */}
            <div
              aria-hidden="true"
              className="sr-only"
            >
              <label>
                <span>Website</span>
                <input
                  type="text"
                  name="website"
                  autoComplete="off"
                  tabIndex={-1}
                />
              </label>
            </div>

            <FormField
              label={t('emailLabel')}
              htmlFor="email"
            >
              <input
                id="email"
                name="email"
                type="email"
                required
                inputMode="email"
                autoComplete="email"
                className="w-full rounded-lg border border-white/10 bg-black/10 px-3 py-2 text-sm placeholder-white/40 outline-none transition focus:border-white/20 focus:ring-4 focus:ring-white/10"
                placeholder={t('emailPlaceholder')}
                aria-required="true"
              />
            </FormField>

            <FormField
              label={t('messageLabel')}
              htmlFor="message"
            >
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full resize-y rounded-lg border border-white/10 bg-black/10 px-3 py-2 text-sm placeholder-white/40 outline-none transition focus:border-white/20 focus:ring-4 focus:ring-white/10"
                placeholder={t('messagePlaceholder')}
                aria-required="true"
              />
            </FormField>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20 active:scale-[0.99] hover:cursor-pointer"
            >
              {t('submit')}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 transition group-hover:translate-x-0.5"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <p className="text-xs text-white/50">
              {t('disclaimer')}
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
