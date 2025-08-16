'use client';

import { useEffect, useState } from 'react';

/**
 * Solid, SSR-safe fallback page that force-opens the native app.
 * - Preserves BOTH ?query and #hash params (Supabase often uses #).
 * - Never touches `window` during render → avoids hydration mismatch.
 * - Renders stable markup; sets href + redirects only after mount.
 */
export default function WebSignUpConfirmation() {
  const [href, setHref] = useState<string>(''); // custom-scheme target
  const [showTips, setShowTips] = useState(false); // simple UX hint after 1.5s

  useEffect(() => {
    // Build deep link on the client
    const qs = window.location.search || '';
    const hash = window.location.hash || '';
    const scheme = `com.trackbay://pages/SignUpConfirmation${qs}${hash}`;
    setHref(scheme);

    // Try to open the app immediately
    const tipsTimer = setTimeout(() => setShowTips(true), 1500);
    window.location.replace(scheme);

    return () => clearTimeout(tipsTimer);
  }, []);

  return (
    <main className="mx-auto my-18 max-w-[560px] px-5 font-sans text-white">
      <h1 className="text-2xl font-semibold">
        Open TrackBay to finish sign-up
      </h1>
      <p className="mt-2">
        We’re opening the TrackBay app to complete your email confirmation.
      </p>

      {/* Anchor is rendered with a stable initial href to avoid hydration mismatch;
          it's updated after mount when href is set. */}
      <a
        href={href || '#'}
        className="mt-4 inline-block rounded-lg border border-neutral-800 px-4 py-3 no-underline"
      >
        Open in TrackBay
      </a>

      {showTips && (
        <div className="mt-4">
          <p>If nothing happened, try one of these:</p>
          <ul className="list-disc pl-5">
            <li>Tap the button above again.</li>
            <li>Open the link from the iOS Mail app or paste it in Safari.</li>
            <li>Make sure TrackBay is installed on this device.</li>
          </ul>
        </div>
      )}

      <noscript>
        <p className="mt-4">
          JavaScript is required to open the TrackBay app automatically. Please
          tap the button above after enabling JavaScript.
        </p>
      </noscript>
    </main>
  );
}
