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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TrackBay preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  metadataBase: new URL('https://trackbayapp.com'),
};

import Image from 'next/image';
import './globals.css';
import Link from 'next/link';

import Logo from '../../public/images/logo.png';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className="h-full flex flex-col text-[#30303c] antialiased">
        <header className="bg-[#121216]">
          <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <Image
                src={Logo}
                alt="Logo"
                width={35}
                height={35}
                className="rounded-md"
              />
              <span className="font-semibold">TrackBay</span>
            </Link>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-[#353542] px-4 py-2 text-white font-semibold hover:bg-[#4E4E61] duration-500"
              >
                Contact
              </Link>
              <a
                href="#download"
                className="inline-flex items-center rounded-md bg-[#FF7966] px-4 py-2 text-white font-semibold hover:bg-[#FFA699] duration-500"
              >
                Get the app
              </a>
            </nav>
          </div>
        </header>

        {/* Main content grows to fill available space */}
        <main className="flex-grow">{children}</main>

        <footer className="bg-[#0E0E12]">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} TrackBay. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <Link
                href="/privacy_policy"
                className="hover:opacity-80"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:opacity-80"
              >
                Terms of Use
              </Link>
              <a
                href="/contact"
                className="hover:opacity-80"
              >
                Contact
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
