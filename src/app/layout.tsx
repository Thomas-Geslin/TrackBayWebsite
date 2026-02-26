import './globals.css';

import { Inter } from 'next/font/google';
import { ModalProvider } from '../providers/ModalProvider';
import Header from '../components/Header';
import AppStoreModalMount from '../components/AppStoreModalMount';
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'TrackBay — Track your monthly expenses',
  description:
    'Centralize your rent, bills & subscriptions — get reminders before they hit. No bank connection. Private by design.',
  openGraph: {
    title: 'TrackBay — Track your monthly expenses',
    description:
      'Centralize your rent, bills & subscriptions — get reminders before they hit.',
    url: 'https://trackbayapp.com/',
    siteName: 'TrackBay',
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://trackbayapp.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full ${inter.variable}`}
    >
      <body className="h-full flex flex-col antialiased">
        <ModalProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />

          {/* Modal is mounted globally once, via a client bridge */}
          <AppStoreModalMount />
        </ModalProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
