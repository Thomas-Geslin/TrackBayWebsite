import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-8">
      <Link
        href="/privacy_policy"
        className="bg-[#1f1f1f] rounded-md w-40 h-14 flex items-center justify-center text-white"
      >
        Privacy Policy
      </Link>

      <Link
        href="/contact"
        className="bg-[#1f1f1f] rounded-md w-40 h-14 flex items-center justify-center text-white"
      >
        Contact
      </Link>
    </div>
  );
}
