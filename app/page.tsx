"use client"; // Importante ser client agora por causa do estado

import { useState } from "react";
import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { SocialProofSection } from "@/components/landing/social-proof-section";
import { ModalitiesSection } from "@/components/landing/modalities-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { LocationFooter } from "@/components/landing/location-footer";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import { AuthModal } from "@/components/auth/auth-modal";


export default function Page() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authTab, setAuthTab] = useState<"login" | "register">("register");

  // Função para abrir direto no registro ou login
  const openAuth = (tab: "login" | "register" = "register") => {
    setAuthTab(tab);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      {/* Passamos a função openAuth para a Navbar */}
      <Navbar onOpenAuth={() => openAuth("register")} />
      
      <main>
        {/* Passamos a função openAuth para o Hero */}
        <HeroSection onOpenAuth={() => openAuth("register")} />
        
        <SocialProofSection />
        <ModalitiesSection />
        
        {/* Na section de preços, o botão de "Assinar" também deve abrir o registro */}
        <PricingSection onOpenAuth={() => openAuth("register")} />
      </main>
      
      <LocationFooter />
      <WhatsAppButton />

      {/* O Modal vive aqui, sobrepondo tudo */}
      <AuthModal
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        defaultTab={authTab}
      />
    </>
  );
}