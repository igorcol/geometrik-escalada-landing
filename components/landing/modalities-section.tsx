"use client";

import React from "react";
import { ArrowUpRight, Instagram } from "lucide-react";

interface ModalityCard {
  title: string;
  description: string;
  image: string;
  highlight?: boolean;
}

const MODALITIES: ModalityCard[] = [
  {
    title: "PRIMEIRA VEZ?",
    description: "Aluguel de sapatilha e instrução básica pra você começar voando.",
    image: "/images/community-1.jpg", 
  },
  {
    title: "PRA QUEM MANJA",
    description: "Boulders técnicos renovados a cada 2 semanas.",
    image: "/images/community-3.jpg", 
    highlight: true,
  },
  {
    title: "O AMBIENTE",
    description: "A melhor resenha pós-treino. Comunidade, eventos e música.",
    image: "/images/community-2.jpg", 
  },
];

function ModalityCardComponent({ modality }: { modality: ModalityCard }) {
  return (
    <article className="group relative h-[400px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black transition-all duration-500 hover:border-neon-cyan/50 hover:shadow-[0_0_30px_rgba(0,255,209,0.2)] md:h-[500px]">
      {/* Background Image with Grayscale Effect */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={modality.image}
          alt={modality.title}
          className="h-full w-full object-cover transition-all duration-700 grayscale filter group-hover:scale-110 group-hover:grayscale-0"
        />
        {/* Dark Gradient Overlay (Always visible so text pops) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
      </div>

      {/* Content Content positioned at bottom */}
      <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 group-hover:translate-y-0">
        
        {/* Decorative Line */}
        <div className="mb-4 h-1 w-12 bg-white/20 transition-all duration-500 group-hover:w-full group-hover:bg-neon-cyan" />

        <div className="flex items-center justify-between">
          <h3 className="font-display text-3xl font-bold uppercase leading-none tracking-tighter text-white transition-colors group-hover:text-neon-cyan">
            {modality.title}
          </h3>
          <ArrowUpRight className="h-6 w-6 text-white/0 transition-all duration-300 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:text-neon-cyan" />
        </div>

        <p className="mt-4 max-w-[90%] text-sm font-medium leading-relaxed text-gray-400 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:delay-100">
          {modality.description}
        </p>
      </div>
    </article>
  );
}

export function ModalitiesSection() {
  return (
    <section
      id="modalidades"
      className="relative py-24 md:py-32"
      aria-labelledby="modalities-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2
              id="modalities-heading"
              className="font-display text-5xl tracking-tight text-white md:text-7xl uppercase"
            >
              ESCALE DO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white">
                SEU JEITO
              </span>
            </h2>
          </div>
          <p className="max-w-md text-right text-lg text-gray-400 hidden md:block">
            Do iniciante ao atleta, temos a estrutura e o ambiente perfeito para sua evolução.
          </p>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {MODALITIES.map((modality) => (
            <ModalityCardComponent key={modality.title} modality={modality} />
          ))}
        </div>

        {/* Instagram Horizontal Card */}
        <a
          href="https://instagram.com/geometrikescalada"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-4 flex w-full items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-8 transition-all duration-500 hover:border-neon-magenta/50 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,0,153,0.2)] md:px-10"
        >
          <div className="flex items-center gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-neon-magenta/20 group-hover:text-neon-magenta text-white/70">
              <Instagram className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold uppercase tracking-wider text-white transition-colors group-hover:text-neon-magenta">
                @GEOMETRIKESCALADA
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300">
                Acompanhe os treinos e novidades no Instagram
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 pr-4">
            <span className="hidden text-sm font-bold tracking-widest text-white/50 transition-colors group-hover:text-white md:block">
              VEJA MAIS
            </span>
            <ArrowUpRight className="h-6 w-6 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neon-magenta" />
          </div>
        </a>

      </div>
    </section>
  );
}