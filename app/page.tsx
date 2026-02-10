import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { SocialProofSection } from "@/components/landing/social-proof-section";
import { ModalitiesSection } from "@/components/landing/modalities-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { LocationFooter } from "@/components/landing/location-footer";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <ModalitiesSection />
        <PricingSection />
      </main>
      <LocationFooter />
      <WhatsAppButton />
    </>
  );
}
