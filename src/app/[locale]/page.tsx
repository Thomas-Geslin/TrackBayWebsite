import HeroA from '@/components/sectionVariants/hero/HeroA';
import SocialProof from '@/components/SocialProof';
import FeatureA from '@/components/sectionVariants/features/FeatureA';
import FaqA from '@/components/sectionVariants/faq/FaqA';
import AppScreenshotsD from '@/components/sectionVariants/appScreenshots/AppScreenshotsD';
import CtaB from '@/components/sectionVariants/cta/CtaB';

export default function HomePage() {
  return (
    <main className="relative z-10">
      {/* ===== HERO ===== */}
      <HeroA />

      {/* ===== SOCIAL PROOF STRIP ===== */}
      {/* <SocialProof /> */}

      {/* ===== FEATURES ===== */}
      <FeatureA />

      {/* ===== APP SCREENSHOTS ===== */}
      <AppScreenshotsD />

      {/* ===== FAQ ===== */}
      <FaqA />

      {/* ===== FINAL CTA ===== */}
      <CtaB />
    </main>
  );
}
