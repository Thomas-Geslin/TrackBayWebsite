import Link from "next/link";

export default function Footer() {
  return (
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
          <Link
            href="/contact"
            className="hover:opacity-80"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
