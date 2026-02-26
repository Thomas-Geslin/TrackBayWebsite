import { Link } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

const LAST_UPDATED = '2025-08-23';

type Props = { params: Promise<{ locale: string }> };

function SectionHeading({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-lg font-semibold">
      <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-md border border-black/10 font-medium">
        {index}.
      </span>
      {children}
    </h2>
  );
}

export default async function Terms({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Terms' });

  return (
    <main className="py-20">
      <article className="mx-auto max-w-6xl rounded-2xl border border-black/10 p-8 md:p-10">
        <header>
          <h1 className="text-3xl font-bold tracking-tight">{t('pageTitle')}</h1>
          <p className="mt-2 text-sm text-white/60">
            <time dateTime={LAST_UPDATED}>{t('lastUpdated')}</time>
          </p>
        </header>

        <p className="mt-8 leading-relaxed">
          {t('intro')}
        </p>

        <ol className="mt-10 space-y-12">
          <li>
            <SectionHeading index={1}>{t('s1Title')}</SectionHeading>
            <div className="mt-3 text-base leading-relaxed">
              <p>{t('s1Content')}</p>
            </div>
          </li>

          <li>
            <SectionHeading index={2}>{t('s2Title')}</SectionHeading>
            <div className="mt-3 text-base leading-relaxed">
              <p>{t('s2Content')}</p>
            </div>
          </li>

          <li>
            <SectionHeading index={3}>{t('s3Title')}</SectionHeading>
            <div className="mt-3 text-base leading-relaxed">
              <ul className="list-disc pl-5 space-y-1">
                <li>{t('s3Item1')}</li>
                <li>{t('s3Item2')}</li>
                <li>{t('s3Item3')}</li>
              </ul>
            </div>
          </li>

          <li>
            <SectionHeading index={4}>{t('s4Title')}</SectionHeading>
            <div className="mt-3 text-base leading-relaxed">
              <p>
                {t('s4Before')}{' '}
                <Link
                  className="underline hover:opacity-80"
                  href="/privacy_policy"
                >
                  {t('s4LinkText')}
                </Link>
                .
              </p>
            </div>
          </li>

          <li>
            <SectionHeading index={5}>{t('s5Title')}</SectionHeading>
            <div className="mt-3 text-base leading-relaxed">
              <p>{t('s5Content')}</p>
            </div>
          </li>

          <li>
            <SectionHeading index={6}>{t('s6Title')}</SectionHeading>
            <div className="mt-3 text-base leading-relaxed">
              <p>{t('s6Content')}</p>
            </div>
          </li>

          <li>
            <SectionHeading index={7}>{t('s7Title')}</SectionHeading>
            <div className="mt-3 text-base leading-relaxed">
              <p>{t('s7Content')}</p>
            </div>
          </li>

          <li>
            <SectionHeading index={8}>{t('s8Title')}</SectionHeading>
            <div className="mt-3 text-base leading-relaxed">
              <p>{t('s8Content')}</p>
            </div>
          </li>
        </ol>

        <footer className="mt-10 border-t border-black/10 pt-6">
          <p className="text-sm text-white/60">
            {t('footerBefore')}{' '}
            <Link
              className="underline hover:opacity-80"
              href="/contact"
            >
              {t('footerLink')}
            </Link>
            .
          </p>
        </footer>
      </article>
    </main>
  );
}
