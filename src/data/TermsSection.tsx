import Link from 'next/link';
import type { ReactNode } from 'react';

type Section = {
  title: string;
  content: ReactNode;
};

export const TermsSections: Section[] = [
  {
    title: 'Purpose of the App',
    content: (
      <p>
        TrackBay helps you track fixed monthly expenses (rent, bills,
        subscriptions, etc.) and set reminders. The app is provided for
        personal, informational purposes only.
      </p>
    ),
  },
  {
    title: 'No Financial Advice',
    content: (
      <p>
        TrackBay is not a bank and does not provide financial, investment, tax,
        or legal advice. You remain solely responsible for decisions you make
        based on information in the app.
      </p>
    ),
  },
  {
    title: 'User Responsibilities',
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Use the app in compliance with applicable laws.</li>
        <li>Do not misuse, disrupt, or attempt to reverse engineer it.</li>
        <li>Provide accurate information where required.</li>
      </ul>
    ),
  },
  {
    title: 'Data & Privacy',
    content: (
      <p>
        Your use of TrackBay is also governed by our{' '}
        <Link className="underline hover:opacity-80" href="/privacy_policy">
          Privacy Policy
        </Link>
        .
      </p>
    ),
  },
  {
    title: 'Limitation of Liability',
    content: (
      <p>
        TrackBay is provided “as is” without warranties of any kind. To the
        maximum extent permitted by law, we are not liable for any indirect,
        incidental, or consequential damages, or for missed payments or losses
        resulting from use of the app.
      </p>
    ),
  },
  {
    title: 'Termination',
    content: (
      <p>
        We may suspend or terminate access to the app at any time if you violate
        these Terms or use the app in a harmful or unlawful manner.
      </p>
    ),
  },
  {
    title: 'Changes to Terms',
    content: (
      <p>
        We may update these Terms from time to time. Continued use of the app
        after changes means you accept the updated Terms.
      </p>
    ),
  },
  {
    title: 'Governing Law',
    content: (
      <p>
        These Terms are governed by the laws of France. Courts of France have
        exclusive jurisdiction.
      </p>
    ),
  },
];
