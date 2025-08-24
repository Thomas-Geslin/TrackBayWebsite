'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '../providers/ModalProvider';
import Logo from '../../public/images/logo.png';

export default function Header() {
  const { openModal } = useModal();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#121216]/70 backdrop-blur supports-[backdrop-filter]:bg-[#121216]/60">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2"
        >
          <Image
            src={Logo}
            alt="TrackBay logo"
            width={36}
            height={36}
            className="rounded-md"
            priority
          />
          <span className="font-semibold text-white/90 group-hover:text-white transition-colors">
            TrackBay
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/15 hover:ring-white/25 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 duration-500"
          >
            Contact
          </Link>

          <button
            onClick={openModal}
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#FF7966] hover:bg-[#ffa295] duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 hover:cursor-pointer"
            aria-label="Get the TrackBay app"
          >
            Get the app
          </button>
        </nav>

        {/* Mobile CTA only (keeps it simple) */}
        <div className="sm:hidden">
          <button
            onClick={openModal}
            className="inline-flex items-center rounded-xl px-3 py-2 text-sm font-semibold text-white bg-[#FF7966] hover:bg-[#FFA699] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            aria-label="Get the TrackBay app"
          >
            Get the app
          </button>
        </div>
      </div>
    </header>
  );
}
