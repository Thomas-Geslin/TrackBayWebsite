import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Link
        href="/privacy_policy"
        className="bg-[#1f1f1f] rounded-md px-6 h-14 flex items-center justify-center text-white"
      >
        Privacy Policy
      </Link>
    </div>
  );
}
