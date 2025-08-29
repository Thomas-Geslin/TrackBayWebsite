// app/components/Footer.tsx  (no "use client")
import Link from 'next/link';

export default function Footer() {
  const year = new Date().getUTCFullYear(); // stable across TZs

  return (
    <footer className="bg-[#0E0E12] md:px-12">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {year} TrackBay. All rights reserved.</p>

        <nav className="flex items-center gap-8">
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

          <Link
            href="/contact"
            className="hover:opacity-80"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
