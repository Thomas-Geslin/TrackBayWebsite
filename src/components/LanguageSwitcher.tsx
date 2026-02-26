'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Globe, ChevronDown } from 'lucide-react';

const locales = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
} as const;

type Locale = keyof typeof locales;

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const otherLocales = (Object.keys(locales) as Locale[]).filter(
    (l) => l !== locale,
  );

  return (
    <div
      ref={ref}
      className="relative"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer"
      >
        <Globe size={13} />

        <span>{locales[locale]}</span>

        <ChevronDown
          size={11}
          className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute bottom-full mb-2 left-0 bg-zinc-900 border border-white/10 rounded-md overflow-hidden shadow-xl">
          {otherLocales.map((language) => (
            <Link
              key={language}
              href={pathname}
              locale={language}
              onClick={() => setOpen(false)}
              className="block px-3 py-1.5 text-xs text-white/50 hover:text-white/90 hover:bg-white/5 transition-colors whitespace-nowrap"
            >
              {locales[language]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
