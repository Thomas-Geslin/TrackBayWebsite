import { PrivacyPolicies } from '@/data/PrivacyPolicies';

export default function PrivacyPolicy() {
  return (
    <div className="mt-30 mx-auto max-w-6xl">
      <h1 className="text-center text-4xl font-bold mb-32">
        TrackBay - Privacy Policy
      </h1>

      {PrivacyPolicies.map((policy, index) => (
        <div
          key={index}
          className="mb-20"
        >
          <h2 className="mb-4 text-2xl font-semibold">{policy.category}</h2>
          <p>{policy.content}</p>
        </div>
      ))}
    </div>
  );
}
