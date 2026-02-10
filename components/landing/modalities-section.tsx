import React from "react"
import { Hand, Mountain, Users } from "lucide-react";

interface ModalityCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const MODALITIES: ModalityCard[] = [
  {
    icon: Hand,
    title: "Primeira Vez?",
    description:
      "Nunca subiu? Sem problemas. Aluguel de sapatilha e instrução básica pra você começar voando.",
  },
  {
    icon: Mountain,
    title: "Pra quem VOA",
    description:
      "Boulders renovados toda semana, graus desafiadores e estrutura para atletas de elite.",
  },
  {
    icon: Users,
    title: "O After-Climb",
    description:
      "Eventos, campeonatos internos e a melhor resenha pós-treino da cidade.",
  },
];

function ModalityCardComponent({ modality }: { modality: ModalityCard }) {
  const Icon = modality.icon;

  return (
    <article className="group relative rounded-xl border border-border/50 bg-card p-8 card-glow md:p-10">
      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-neon-cyan/10">
        <Icon className="h-7 w-7 text-neon-cyan transition-transform duration-300 group-hover:scale-110" />
      </div>

      {/* Title */}
      <h3 className="font-display text-2xl tracking-tight text-foreground">
        {modality.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-base leading-relaxed text-foreground/60 text-pretty">
        {modality.description}
      </p>

      {/* Decorative corner accent */}
      <div className="absolute right-4 top-4 h-8 w-8 rounded-tr-xl border-r-2 border-t-2 border-neon-cyan/0 transition-all duration-300 group-hover:border-neon-cyan/40" />
    </article>
  );
}

export function ModalitiesSection() {
  return (
    <section
      id="modalidades"
      className="relative py-24 md:py-32 noise-overlay"
      aria-labelledby="modalities-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            id="modalities-heading"
            className="font-display text-4xl tracking-tight text-foreground md:text-6xl text-balance"
          >
            ESCALE DO
            <span className="text-neon-cyan neon-text-cyan"> SEU JEITO</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/60 text-pretty">
            Seja você iniciante ou atleta, temos a estrutura e o ambiente perfeito.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {MODALITIES.map((modality) => (
            <ModalityCardComponent key={modality.title} modality={modality} />
          ))}
        </div>
      </div>
    </section>
  );
}
