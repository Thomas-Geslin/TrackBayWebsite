'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import Apple from '../../public/images/apple-logo.png';
import Google from '../../public/images/google-play-logo.png';
import Image from 'next/image';

type Props = { onClose: () => void };

const EASE = [0.4, 0, 0.2, 1] as const;

export default function AppStoreModal({ onClose }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  // focus management only (no scroll lock anymore)
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    queueMicrotask(() => closeBtnRef.current?.focus());
    return () => prev?.focus?.();
  }, []);

  // ESC + focus trap
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="store-modal-title"
    >
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Modal */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.25, ease: EASE }}
        className="relative w-[92%] max-w-md rounded-2xl bg-[#0E0E12] p-6 shadow-2xl outline outline-1 outline-white/10"
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="absolute right-3 top-3 rounded-md px-2 py-1 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30 hover:cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>

        <h3
          id="store-modal-title"
          className="text-xl font-semibold"
        >
          Get TrackBay
        </h3>
        <p className="mt-1 text-sm text-white/70">
          Choose your platform to download the app.
        </p>

        <div className="mt-5 grid gap-4">
          {/* Apple */}
          <a
            href="https://apps.apple.com/fr/app/trackbay/id6751021688"
            target="_blank"
            className="group flex items-center gap-3 rounded-xl border border-white/10 bg-black px-4 py-3 hover:border-white/25"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-black">
              {/* Apple logo */}
              <Image
                src={Apple}
                alt="Apple logo"
                width={25}
              />
            </div>
            <div className="flex-1">
              <div className="text-white font-medium leading-tight">
                Download on the
              </div>
              <div className="text-white/80 text-sm -mt-0.5">App Store</div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps/details?id=com.thomasgeslin.trackbay"
            target="_blank"
            className="group flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3 hover:border-black/20"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-white">
              {/* Google Play logo */}
              <Image
                src={Google}
                alt="Google Play logo"
                width={20}
              />
            </div>
            <div className="flex-1">
              <div className="text-black font-medium leading-tight">
                Get it on
              </div>
              <div className="text-black/70 text-sm -mt-0.5">Google Play</div>
            </div>
          </a>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}
