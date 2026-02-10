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
  features: string[];
  cta: string;
  highlighted: boolean;
}

const PLANS: PricingPlan[] = [
  {
    name: "DIÁRIA",
    price: "R$ 60",
    period: "day use",
    features: [
      "Acesso total por 1 dia",
      "Equipamento à parte",
      "Instrução básica inclusa",
    ],
    cta: "Comprar Diária",
    highlighted: false,
  },
  {
    name: "MENSAL",
    badge: "MAIS USADO",
    price: "R$ 199",
    period: "/mês",
    features: [
      "Acesso Ilimitado",
      "Sem taxa de matrícula",
      "Cancelamento fácil",
      "Acesso a eventos exclusivos",
    ],
    cta: "ASSINAR AGORA",
    highlighted: true,
  },
  {
    name: "SEMESTRAL",
    badge: "MELHOR VALOR",
    price: "R$ 149",
    period: "/mês",
    features: [
      "Maior desconto",
      "Pagamento único ou parcelado",
      "Todos os benefícios do mensal",
      "Prioridade em eventos",
    ],
    cta: "Ver Plano",
    highlighted: false,
  },
];

function PricingCard({ plan, onOpenAuth }: { plan: PricingPlan; onOpenAuth: () => void }) {
  return (
    <article
      className={cn(
        "relative flex flex-col rounded-xl border p-8 transition-all duration-300 md:p-10",
        plan.highlighted
          ? "border-neon-cyan/50 bg-card glow-cyan scale-[1.02] md:scale-105"
          : "border-border/50 bg-card card-glow"
      )}
    >
      {/* Badge */}
      {plan.badge && (
        <div
          className={cn(
            "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold tracking-wider",
            plan.highlighted
              ? "bg-neon-cyan text-background"
              : "bg-neon-magenta text-foreground"
          )}
        >
          {plan.badge}
        </div>
      )}

      {/* Plan Name */}
      <h3 className="font-display text-xl tracking-wide text-foreground/70">
        {plan.name}
      </h3>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-2">
        <span
          className={cn(
            "font-display text-5xl tracking-tight",
            plan.highlighted ? "text-neon-cyan neon-text-cyan" : "text-foreground"
          )}
        >
          {plan.price}
        </span>
        <span className="text-sm text-foreground/50">{plan.period}</span>
      </div>

      {/* Features */}
      <ul className="mt-8 flex flex-1 flex-col gap-4" role="list">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check
              className={cn(
                "h-4 w-4 shrink-0",
                plan.highlighted ? "text-neon-cyan" : "text-foreground/50"
              )}
            />
            <span className="text-sm text-foreground/70">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8">
        <Button
          onClick={onOpenAuth}
          className={cn(
            "w-full font-bold tracking-wider transition-all duration-300",
            plan.highlighted
              ? "bg-neon-cyan text-background glow-cyan glow-cyan-hover hover:bg-neon-cyan/90"
              : "bg-muted text-foreground hover:bg-muted/80 border border-border/50"
          )}
          size="lg"
        >
          {plan.cta}
        </Button>
      </div>
    </article>
  );
}

export function PricingSection({ onOpenAuth }: PricingSectionProps) {
  return (
    <section
      id="planos"
      className="relative py-24 md:py-32 noise-overlay"
      aria-labelledby="pricing-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            id="pricing-heading"
            className="font-display text-4xl tracking-tight text-foreground md:text-6xl text-balance"
          >
            ESCOLHA SEU
            <span className="text-neon-cyan neon-text-cyan"> PLANO</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/60 text-pretty">
            Sem surpresas, sem letras miúdas. Comece a escalar hoje.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 items-start">
          {PLANS.map((plan) => (
            <PricingCard key={plan.name} plan={plan} onOpenAuth={onOpenAuth} />
          ))}
        </div>
      </div>
    </section>
  );
}