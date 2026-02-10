import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingSectionProps {
  onOpenAuth: () => void;
}

interface PricingPlan {
  name: string;
  badge?: string;
  price: string;
  period: string;
  description: string; // Nova prop para contexto
  features: string[];
  cta: string;
  highlighted: boolean;
}

const PLANS: PricingPlan[] = [
  {
    name: "DAY USE",
    price: "R$ 60",
    period: "/dia",
    description: "Para quem está de passagem ou quer conhecer a casa.",
    features: [
      "Acesso livre às paredes por 1 dia",
      "Sapatilhas não inclusas",
      "Instrução de segurança básica",
    ],
    cta: "Comprar Diária",
    highlighted: false,
  },
  {
    name: "MENSAL",
    badge: "MAIS ESCOLHIDO",
    price: "R$ 199",
    period: "/mês",
    description: "Para quem busca evolução constante e comunidade.",
    features: [
      "Acesso Ilimitado (todos os dias)",
      "Sem taxa de matrícula",
      "Cancelamento flexível",
      "Desconto em campeonatos e eventos",
    ],
    cta: "QUERO SER MEMBRO",
    highlighted: true,
  },
  {
    name: "SEMESTRAL",
    badge: "MAIOR ECONOMIA",
    price: "R$ 149",
    period: "/mês",
    description: "Foco total no longo prazo. Pague menos, escale mais.",
    features: [
      "Tudo do plano Mensal",
      "Pagamento único ou parcelado",
      "Prioridade em workshops",
      "2 Day-Pass gratuitos para amigos", // Adicionei um bônus legal aqui
    ],
    cta: "Garantir Semestral",
    highlighted: false,
  },
];

function PricingCard({ plan, onOpenAuth }: { plan: PricingPlan; onOpenAuth: () => void }) {
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl border p-8 transition-all duration-300 md:p-10",
        plan.highlighted
          ? "border-neon-cyan/50 bg-card/80 glow-cyan scale-[1.02] z-10 md:scale-105"
          : "border-white/5 bg-card/40 hover:border-white/10 hover:bg-card/60"
      )}
    >
      {/* Badge */}
      {plan.badge && (
        <div
          className={cn(
            "absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase shadow-lg",
            plan.highlighted
              ? "bg-neon-cyan text-background shadow-neon-cyan/20"
              : "bg-neon-magenta text-white shadow-neon-magenta/20"
          )}
        >
          {plan.badge}
        </div>
      )}

      {/* Header */}
      <div className="mb-6 space-y-2">
        <h3 className="font-display text-xl tracking-wider text-white/60">
            {plan.name}
        </h3>
        <div className="flex items-baseline gap-1">
            <span className={cn(
                "font-display text-5xl tracking-tighter",
                plan.highlighted ? "text-neon-cyan neon-text-cyan" : "text-white"
            )}>
                {plan.price}
            </span>
            <span className="text-sm font-medium text-white/40">{plan.period}</span>
        </div>
        <p className="text-sm leading-relaxed text-white/50">
            {plan.description}
        </p>
      </div>

      {/* Separator */}
      <div className={cn("h-px w-full mb-8", plan.highlighted ? "bg-neon-cyan/20" : "bg-white/10")} />

      {/* Features */}
      <ul className="mb-8 flex flex-1 flex-col gap-4" role="list">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check
              className={cn(
                "h-5 w-5 shrink-0",
                plan.highlighted ? "text-neon-cyan" : "text-white/30"
              )}
            />
            <span className="text-white/80">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        onClick={onOpenAuth}
        className={cn(
            "w-full h-12 font-bold tracking-widest uppercase transition-all duration-300",
            plan.highlighted
            ? "bg-neon-cyan text-background glow-cyan hover:bg-neon-cyan/90 hover:scale-[1.02]"
            : "bg-white/5 text-white hover:bg-white/10 hover:text-neon-cyan border border-white/10"
        )}
      >
        {plan.cta}
      </Button>
    </article>
  );
}

export function PricingSection({ onOpenAuth }: PricingSectionProps) {
  return (
    <section
      id="planos"
      className="relative py-24 md:py-32"
      aria-labelledby="pricing-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            id="pricing-heading"
            className="font-display text-4xl tracking-tight text-white md:text-6xl"
          >
            ESCOLHA SEU
            <span className="text-neon-cyan neon-text-cyan"> PLANO</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Sem pegadinhas. Apenas o passe para o seu novo vício.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3 md:items-start lg:gap-12">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} onOpenAuth={onOpenAuth} />
          ))}
        </div>
      </div>
    </section>
  );
}