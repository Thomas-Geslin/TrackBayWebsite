import Link from 'next/link';

export default function ContactSuccess() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <section className="w-full max-w-md">
        <div className="relative rounded-2xl border border-white/10 bg-[#0E0E12] p-8 shadow-xl ring-1 ring-white/5">
          {/* Soft glow accent */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-emerald-500/10 via-transparent to-sky-500/10 blur-2xl" />

          {/* Header */}
          <div className="mx-auto grid place-items-center">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-white/5 ring-1 ring-white/10">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-7 w-7"
              >
                <path
                  d="M20 7L9 18l-5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <h1 className="mt-4 text-center text-2xl font-semibold tracking-tight">
              Thanks! 🙌
            </h1>
            <p className="mt-2 max-w-sm text-center text-sm text-white/70">
              Your message has been sent successfully. We’ll get back to you as
              soon as possible.
            </p>
          </div>

          {/* Divider */}
          <hr className="my-6 border-white/10" />

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/90 px-4 py-2 text-sm font-medium text-black transition hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              Go to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
