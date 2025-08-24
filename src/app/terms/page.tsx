import Link from 'next/link';

export default function TermsPage() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-black/10 p-8 md:p-10">
          <h1 className="text-3xl font-bold">Terms of Use</h1>
          <p className="mt-2 text-sm text-white/60">
            Last updated: August 23, 2025
          </p>

          <div className="prose prose-neutral mt-8 max-w-none">
            <p className="mb-8">
              Welcome to <strong>TrackBay</strong>. By downloading or using this
              app, you agree to be bound by these Terms of Use. If you do not
              agree, please do not use the app.
            </p>

            <h2 className="text-lg mb-2 font-semibold">
              1. Purpose of the App
            </h2>
            <p className="mb-8">
              TrackBay helps you track fixed monthly expenses (rent, bills,
              subscriptions, etc.) and set reminders. The app is provided for
              personal, informational purposes only.
            </p>

            <h2 className="text-lg mb-2 font-semibold">
              2. No Financial Advice
            </h2>
            <p className="mb-8">
              TrackBay is not a bank and does not provide financial, investment,
              tax, or legal advice. You remain solely responsible for decisions
              you make based on information in the app.
            </p>

            <h2 className="text-lg mb-2 font-semibold">
              3. User Responsibilities
            </h2>
            <ul className="mb-8">
              <li>Use the app in compliance with applicable laws.</li>
              <li>
                Do not misuse, disrupt, or attempt to reverse engineer it.
              </li>
              <li>Provide accurate information where required.</li>
            </ul>

            <h2 className="text-lg mb-2 font-semibold">
              4. Data &amp; Privacy
            </h2>
            <p className="mb-8">
              Your use of TrackBay is also governed by our{' '}
              <Link href="/privacy_policy">Privacy Policy</Link>.
            </p>

            <h2 className="text-lg mb-2 font-semibold">
              5. Limitation of Liability
            </h2>
            <p className="mb-8">
              TrackBay is provided “as is” without warranties of any kind. To
              the maximum extent permitted by law, we are not liable for any
              indirect, incidental, or consequential damages, or for missed
              payments or losses resulting from use of the app.
            </p>

            <h2 className="text-lg mb-2 font-semibold">6. Termination</h2>
            <p className="mb-8">
              We may suspend or terminate access to the app at any time if you
              violate these Terms or use the app in a harmful or unlawful
              manner.
            </p>

            <h2 className="text-lg mb-2 font-semibold">7. Changes to Terms</h2>
            <p className="mb-8">
              We may update these Terms from time to time. Continued use of the
              app after changes means you accept the updated Terms.
            </p>

            <h2 className="text-lg mb-2 font-semibold">8. Governing Law</h2>
            <p className="mb-8">
              These Terms are governed by the laws of France. Courts of France
              have exclusive jurisdiction.
            </p>

            <p className="mt-8 text-sm text-white/60">
              If you have questions about these Terms, please{' '}
              <Link href="/contact">contact us</Link>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
