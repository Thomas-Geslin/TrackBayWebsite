import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ModalProvider } from '@/providers/ModalProvider';
import Header from '@/components/Header';
import AppStoreModalMount from '@/components/AppStoreModalMount';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const ogLocaleMap: Record<string, string> = {
  en: 'en_US',
  fr: 'fr_FR',
  es: 'es_ES',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const base = 'https://trackbayapp.com';

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(base),
    alternates: {
      canonical: `${base}/${locale}`,
      languages: {
        en: `${base}/en`,
        fr: `${base}/fr`,
        es: `${base}/es`,
        'x-default': `${base}/en`,
      },
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `${base}/${locale}`,
      siteName: 'TrackBay',
      locale: ogLocaleMap[locale] ?? 'en_US',
      type: 'website',
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`h-full ${inter.variable}`}
    >
      <body className="h-full flex flex-col antialiased">
        <NextIntlClientProvider>
          <ModalProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />

            {/* Modal mounted globally via client bridge */}
            <AppStoreModalMount />
          </ModalProvider>
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
