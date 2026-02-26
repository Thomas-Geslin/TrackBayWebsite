import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import Logo from '../../public/images/logo.jpg';
import AppleLogo from '../../public/images/apple-logo.png';
import GooglePlayLogo from '../../public/images/google-play-logo.png';
import { getTranslations } from 'next-intl/server';
import LanguageSwitcher from './LanguageSwitcher';

export default async function Footer() {
  const t = await getTranslations('Footer');
  const year = new Date().getUTCFullYear();

  return (
    <footer className="bg-background border-t border-white/5 md:px-12">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          {/* Left: Logo + tagline */}
          <div className="flex items-center gap-6 flex-col sm:flex-row">
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="TrackBay logo"
                width={28}
                height={28}
                className="rounded-md"
              />
              <span className="font-semibold text-white/80">TrackBay</span>
            </div>

            <p className="text-sm text-white/40">{t('tagline')}</p>
          </div>

          {/* Right: Nav + store badges */}
          <div className="flex flex-col gap-4 items-center sm:items-end">
            <div className="flex flex-col items-center gap-4 sm:items-end lg:flex-row lg:items-center">
              <nav className="flex items-center gap-6 flex-col sm:flex-row">
                <Link
                  href="/privacy_policy"
                  className="text-sm text-white/60 hover:text-white/90 transition-colors"
                >
                  {t('privacy')}
                </Link>

                <Link
                  href="/terms"
                  className="text-sm text-white/60 hover:text-white/90 transition-colors"
                >
                  {t('terms')}
                </Link>

                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-white/90 transition-colors"
                >
                  {t('contact')}
                </Link>
              </nav>

              {/* Separator — desktop only */}
              <div className="hidden lg:block w-px h-4 bg-white/10" />

              {/* Store badges */}
              <div className="flex items-center gap-5">
                <a
                  href="https://apps.apple.com/fr/app/trackbay/id6751021688"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={AppleLogo}
                    alt="App Store"
                    width={20}
                    height={20}
                    className="opacity-50 hover:opacity-80 transition-opacity"
                  />
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.thomasgeslin.trackbay&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={GooglePlayLogo}
                    alt="Google Play"
                    width={20}
                    height={20}
                    className="opacity-50 hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
          <p className="text-xs text-white/30">{t('copyright', { year })}</p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
