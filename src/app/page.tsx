import Image from 'next/image';
import Link from 'next/link';

import Mockup from '../../public/images/app_preview.png';
import Spending from '../../public/images/spending.png';
import Notification from '../../public/images/notification.png';

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-28 flex items-center justify-between">
          <div className="w-[50%]">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Track your monthly expenses{' '}
              <span className="text-[#FF7966]">before they hit</span>.
            </h1>
            <p className="mt-4 text-lg text-white">
              Centralize rent, bills & subscriptions and get reminded before
              each due date. No bank connection. Private by design.
            </p>

            <div
              id="download"
              className="mt-16 flex items-center gap-4"
            >
              {/* Replace with real store links */}
              <a
                href="#"
                className="rounded-md bg-[#FFA699] px-5 py-3 text-white font-semibold hover:opacity-90 duration-500 hover:bg-[#FF7966]"
              >
                Get the app
              </a>
              <a
                href="#how"
                className="rounded-md border border-white/30 px-5 py-3 font-semibold hover:border-white/70 duration-500"
              >
                See how it works
              </a>
            </div>

            <p className="mt-6 text-sm text-white">
              By using TrackBay you agree to our{' '}
              <Link
                href="/terms"
                className="underline underline-offset-2 hover:opacity-80"
              >
                Terms
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy_policy"
                className="underline underline-offset-2 hover:opacity-80"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Mockup / image placeholder */}
          <Image
            src={Mockup}
            alt="Mockup de l'application"
            className="w-[35%]"
          />
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-black/[0.1]">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-3 gap-8">
          <Feature
            title="One clear monthly total"
            desc="See all your fixed expenses in one place — rent, bills, insurance, subscriptions."
          />
          <Feature
            title="Smart reminders"
            desc="Get notified before due dates so you never miss a payment again."
          />
          <Feature
            title="Private by design"
            desc="No bank connection required. Just email & name. Data stays under your control."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <div className="mx-auto max-w-6xl px-4 py-32 grid md:grid-cols-2 gap-12">
          <Step
            idx="1"
            title="Add your expenses"
            desc="List rent, utilities, insurance, and subscriptions."
            image={Mockup}
          />

          <div className="translate-y-80">
            <Step
              idx="2"
              title="Categorize"
              desc="Easily manage, and sort your expenses. To keep track of your money."
              image={Spending}
            />
          </div>

          <div className="mt-20">
            <Step
              idx="3"
              title="Be reminded"
              desc="Get a reminder 2 days before one of your expense is due."
              image={Notification}
            />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF (optional)
      <section className="bg-black/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">What users say</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Quote
              text="Finally stopped getting surprised at month-end."
              author="Alex, 26"
            />
            <Quote
              text="Simple and private. Exactly what I needed."
              author="Emma, 22"
            />
            <Quote
              text="Reminders saved me late fees twice already."
              author="Louis, 31"
            />
          </div>
        </div>
      </section> */}

      {/* FINAL CTA */}
      <section className="bg-black/[0.1]">
        <div className="mx-auto max-w-6xl px-4 py-80 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to take control of your monthly expenses?
          </h2>
          <p className="mt-3 text-white">
            Join thousands of users who get notified before due dates — no bank
            connection needed.
          </p>
          <div className="mt-16">
            <a
              href="#"
              className="rounded-md bg-[#FFA699] px-6 py-3 text-white font-semibold hover:bg-[#FF7966] duration-300"
            >
              Get the app
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/10 p-6 odd:bg-[#ff7966] even:bg-[#4E4E61]">
      <h3 className="font-bold text-2xl">{title}.</h3>
      <p className="mt-12 text-black">{desc}</p>
    </div>
  );
}

function Step({
  idx,
  title,
  desc,
  image,
}: {
  idx: string;
  title: string;
  desc: string;
  image: any;
}) {
  return (
    <div className="p-6 rounded-lg mb-16 items-center">
      <div className="flex items-start gap-8 mb-8">
        <div
          className="h-9 w-9 shrink-0 rounded-full grid place-items-center text-white font-bold"
          style={{ background: '#ff7966' }}
        >
          {idx}
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-white/50">{desc}</p>
        </div>
      </div>

      <Image
        src={image}
        alt="a"
        className="w-[50%] m-auto"
      />
    </div>
  );
}

// function Quote({ text, author }: { text: string; author: string }) {
//   return (
//     <figure className="rounded-2xl border border-black/10 bg-white p-6">
//       <blockquote className="text-black/80">“{text}”</blockquote>
//       <figcaption className="mt-3 text-sm text-black/60">— {author}</figcaption>
//     </figure>
//   );
// }
