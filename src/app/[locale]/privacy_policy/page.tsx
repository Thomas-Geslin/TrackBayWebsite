import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

export default async function PrivacyPolicy({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'Privacy' });

  const sections = [
    [t('s1Title'), t('s1Content')],
    [t('s2Title'), t('s2Content')],
    [t('s3Title'), t('s3Content')],
    [t('s4Title'), t('s4Content')],
    [t('s5Title'), t('s5Content')],
    [t('s6Title'), t('s6Content')],
    [t('s7Title'), t('s7Content')],
    [t('s8Title'), t('s8Content')],
    [t('s9Title'), t('s9Content')],
    [t('s10Title'), t('s10Content')],
    [t('s11Title'), t('s11Content')],
    [t('s12Title'), t('s12Content')],
    [t('s14Title'), t('s14Content')],
    [t('s15Title'), t('s15Content')],
    [t('s13Title'), t('s13Content')],
  ] as const;

  return (
    <div className="mt-30 mx-auto max-w-6xl px-12">
      <h1 className="text-center text-4xl font-bold mb-4">
        {t('pageTitle')}
      </h1>
      <p className="text-center text-sm text-white/60 mb-32">
        {t('lastUpdated')}
      </p>

      {sections.map(([title, content]) => (
        <div
          key={title}
          className="mb-20"
        >
          <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
}
