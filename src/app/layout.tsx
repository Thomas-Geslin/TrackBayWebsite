import './globals.css';

// Root layout: provides <html> and <body> (required by Next.js 15).
// The locale is read dynamically via next-intl so the lang attribute is correct.
// Falls back to "en" for routes excluded from locale routing (deep-link pages).
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
