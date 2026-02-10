"use client";

import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_VIDEO_URL =
  "/images/geometrik-video.mp4";

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        {/* Extra bottom fade for seamless transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1 className="font-display text-5xl leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance">
          DESAFIE A GRAVIDADE.
          <br />
          <span className="neon-text-cyan text-neon-cyan">ENCONTRE SUA TRIBO.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl text-pretty">
          A comunidade de escalada mais vibrante da cidade. Do iniciante ao pro,
          seu lugar é na parede.
        </p>

        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="bg-neon-cyan text-background font-bold tracking-widest text-base px-10 py-6 glow-cyan glow-cyan-hover transition-all duration-300 hover:bg-neon-cyan/90 hover:scale-105"
          >
            <a href="#planos">QUERO ESCALAR AGORA</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float">
        <a
          href="#comunidade"
          className="flex flex-col items-center gap-2 text-foreground/40 transition-colors hover:text-foreground/70"
          aria-label="Rolar para baixo"
        >
          <span className="text-xs uppercase tracking-widest">MAIS</span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
