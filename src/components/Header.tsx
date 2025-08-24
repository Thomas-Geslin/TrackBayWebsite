'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useModal } from '../providers/ModalProvider';
import Logo from '../../public/images/logo.png';

export default function Header() {
  const { openModal } = useModal();

  return (
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
          <button
            onClick={openModal}
            className="inline-flex items-center rounded-md bg-[#FF7966] px-4 py-2 text-white font-semibold hover:bg-[#FFA699] duration-500 hover:cursor-pointer"
          >
            Get the app
          </button>
        </nav>
      </div>
    </header>
  );
}
