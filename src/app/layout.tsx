import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TrackBay - Privacy Policy',
  description:
    'With TrackBay, no more surprises at the end of the month, you can now easily track and manage all of your monthly expenses to regaib control over your money.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-[80%] m-auto">{children}</body>
    </html>
  );
}
