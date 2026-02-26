import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/images/logo.png';
import AppleLogo from '../../public/images/apple-logo.png';
import GooglePlayLogo from '../../public/images/google-play-logo.png';

export default function Footer() {
  const year = new Date().getUTCFullYear();

  return (
    <footer className="bg-background border-t border-white/5 md:px-12">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          {/* Left: Logo + tagline */}
          <div className="flex items-center gap-6">
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

            <p className="text-sm text-white/40">
              Your subscriptions, under control.
            </p>
          </div>

          {/* Right: Nav + store badges */}
          <div className="flex flex-col items-start sm:items-end gap-4">
            <nav className="flex items-center gap-6">
              <Link
                href="/privacy_policy"
                className="text-sm text-white/60 hover:text-white/90 transition-colors"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="text-sm text-white/60 hover:text-white/90 transition-colors"
              >
                Terms
              </Link>

              <Link
                href="/contact"
                className="text-sm text-white/60 hover:text-white/90 transition-colors"
              >
                Contact
              </Link>

              {/* Separator */}
              <div className="w-px h-4 bg-white/10 mx-1" />

              {/* Store badges */}
              <div className="flex items-center gap-5">
                <Link
                  href="https://apps.apple.com/fr/app/trackbay/id6751021688"
                  target="_blank"
                  className="hover:cursor-pointer"
                >
                  <Image
                    src={AppleLogo}
                    alt="App Store"
                    width={20}
                    height={20}
                    className="opacity-50 hover:opacity-80 transition-opacity"
                  />
                </Link>

                <Link
                  href="https://play.google.com/store/apps/details?id=com.thomasgeslin.trackbay&pli=1"
                  target="_blank"
                  className="hover:cursor-pointer"
                >
                  <Image
                    src={GooglePlayLogo}
                    alt="Google Play"
                    width={20}
                    height={20}
                    className="opacity-50 hover:opacity-80 transition-opacity"
                  />
                </Link>
              </div>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-xs text-white/30">
            © {year} TrackBay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
