'use client';

import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import Logo from '../../public/images/logo.jpg';
import Apple from '../../public/images/apple-logo.png';
import GooglePlay from '../../public/images/google-play-logo.png';
import posthog from 'posthog-js';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('Header');

  function handleContact() {
    posthog.capture('header_contact_clicked');
  }

  return (
    <header className="fixed inset-x-3 sm:inset-x-6 top-3 sm:top-4 z-50 mx-auto max-w-6xl">
      <div
        className="flex items-center justify-between px-4 py-3 sm:px-8 sm:py-5 rounded-2xl border border-white/[0.08] backdrop-blur-md"
        style={{
          background: 'color-mix(in srgb, var(--background) 65%, transparent)',
          boxShadow:
            '0 0 0 1px rgba(255,255,255,0.04) inset, 0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-md bg-brand-purple opacity-20 blur-md scale-125 pointer-events-none" />
            <Image
              src={Logo}
              alt="TrackBay logo"
              width={32}
              height={32}
              className="relative rounded-md"
              priority
            />
          </div>

          <span className="font-semibold text-white/90 group-hover:text-white transition-colors ml-1">
            TrackBay
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-2">
          <a
            href="#features"
            className="px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 focus:outline-none"
          >
            {t('features')}
          </a>

          <Link
            href="/contact"
            onClick={handleContact}
            className="px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 focus:outline-none"
          >
            {t('contact')}
          </Link>

          {/* Separator */}
          <div className="w-px h-4 bg-white/10 mx-1" />

          {/* iOS — Raycast-style dark pill */}
          <a
            href="https://apps.apple.com/fr/app/trackbay/id6751021688"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog.capture('app_download_link_clicked', {
                platform: 'ios',
                location: 'header',
              })
            }
            className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium text-white/90 border border-white/[0.14] transition-all duration-200 hover:border-white/25 hover:text-white"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            <Image
              src={Apple}
              alt=""
              width={14}
              height={14}
            />
            <span>{t('appStore')}</span>
          </a>

          {/* Android — same language, slightly warmer */}
          <a
            href="https://play.google.com/store/apps/details?id=com.thomasgeslin.trackbay"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog.capture('app_download_link_clicked', {
                platform: 'android',
                location: 'header',
              })
            }
            className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium text-white/90 border border-white/[0.14] transition-all duration-200 hover:border-white/25 hover:text-white"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            <Image
              src={GooglePlay}
              alt=""
              width={14}
              height={14}
              className="opacity-90"
            />
            <span>{t('googlePlay')}</span>
          </a>
        </nav>

        {/* Mobile — icon-only store buttons */}
        <div className="sm:hidden flex items-center gap-2">
          <a
            href="https://apps.apple.com/fr/app/trackbay/id6751021688"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog.capture('app_download_link_clicked', {
                platform: 'ios',
                location: 'header',
              })
            }
            className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-white/[0.14] transition-all duration-200 hover:border-white/25"
            style={{ background: 'rgba(255,255,255,0.06)' }}
            aria-label="Download on App Store"
          >
            <Image
              src={Apple}
              alt=""
              width={14}
              height={14}
              className="opacity-90 invert"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.thomasgeslin.trackbay"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog.capture('app_download_link_clicked', {
                platform: 'android',
                location: 'header',
              })
            }
            className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-white/[0.14] transition-all duration-200 hover:border-white/25"
            style={{ background: 'rgba(255,255,255,0.06)' }}
            aria-label="Get it on Google Play"
          >
            <Image
              src={GooglePlay}
              alt=""
              width={14}
              height={14}
              className="opacity-90"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
