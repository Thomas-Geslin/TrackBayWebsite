'use client';

import { useEffect, useState } from 'react';

/**
 * Solid, SSR-safe fallback page that force-opens the native app.
 * - Preserves BOTH ?query and #hash params (Supabase often uses #).
 * - Never touches `window` during render → avoids hydration mismatch.
 * - Renders stable markup; sets href + redirects only after mount.
 */
export default function WebResetPassword() {
  const [href, setHref] = useState<string>('');
  const [showTips, setShowTips] = useState(false);

  useEffect(() => {
    const qs = window.location.search || '';
    const hash = window.location.hash || '';
    const scheme = `com.trackbay://pages/ResetPassword${qs}${hash}`;
    setHref(scheme);

    const tipsTimer = setTimeout(() => setShowTips(true), 1500);
    window.location.replace(scheme);

    return () => clearTimeout(tipsTimer);
  }, []);

  return (
    <main className="mx-auto my-18 max-w-[560px] px-5 font-sans text-white">
      <h1 className="text-2xl font-semibold">
        Open TrackBay to reset your password
      </h1>
      <p className="mt-2">
        We’re opening the TrackBay app where you can set a new password
        securely.
      </p>

      <a
        href={href || '#'}
        className="mt-4 inline-block rounded-lg border border-neutral-800 px-4 py-3 no-underline"
      >
        Open in TrackBay
      </a>

      {showTips && (
        <div className="mt-4">
          <p>If nothing happened, try:</p>
          <ul className="list-disc pl-5">
            <li>Tap the button above again.</li>
            <li>Open the link from the iOS Mail app or paste it in Safari.</li>
            <li>Confirm that TrackBay is installed on this device.</li>
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
