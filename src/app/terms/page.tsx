import { TermsSections } from '@/data/TermsSection';
import Link from 'next/link';

const LAST_UPDATED = '2025-08-23';

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

export default function Terms() {
  return (
    <main className="py-20">
      <article className="mx-auto max-w-6xl rounded-2xl border border-black/10 p-8 md:p-10">
        <header>
          <h1 className="text-3xl font-bold tracking-tight">Terms of Use</h1>
          <p className="mt-2 text-sm text-white/60">
            Last updated: <time dateTime={LAST_UPDATED}>August 23, 2025</time>
          </p>
        </header>

        <p className="mt-8 leading-relaxed">
          Welcome to <strong>TrackBay</strong>. By downloading or using this
          app, you agree to be bound by these Terms of Use. If you do not agree,
          please do not use the app.
        </p>

        <ol className="mt-10 space-y-12">
          {TermsSections.map((section, idx) => (
            <li key={section.title}>
              <SectionHeading index={idx + 1}>{section.title}</SectionHeading>
              <div className="mt-3 text-base leading-relaxed">
                {section.content}
              </div>
            </li>
          ))}
        </ol>

        <footer className="mt-10 border-t border-black/10 pt-6">
          <p className="text-sm text-white/60">
            If you have questions about these Terms, please{' '}
            <Link
              className="underline hover:opacity-80"
              href="/contact"
            >
              contact us
            </Link>
            .
          </p>
        </footer>
      </article>
    </main>
  );
}
