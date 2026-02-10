import { Clock, MapPin, Phone } from "lucide-react";

const INFO_ITEMS = [
  {
    icon: Clock,
    label: "Horários",
    lines: ["Seg a Sex: 06h - 23h", "Sáb: 08h - 20h", "Dom: 08h - 18h"],
  },
  {
    icon: MapPin,
    label: "Endereço",
    lines: ["Rua da Escalada, 123", "Bairro Boulder - São Paulo, SP"],
  },
  {
    icon: Phone,
    label: "Contato",
    lines: ["(11) 99999-9999", "contato@geometrik.com.br"],
  },
] as const;

export function LocationFooter() {
  return (
    <footer id="localizacao" className="relative noise-overlay">
      {/* Location Section */}
      <section className="relative z-10 py-24 md:py-32" aria-labelledby="location-heading">
        <div className="mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2
              id="location-heading"
              className="font-display text-4xl tracking-tight text-foreground md:text-6xl text-balance"
            >
              ONDE
              <span className="text-neon-cyan neon-text-cyan"> ESTAMOS</span>
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Map */}
            <div className="relative overflow-hidden rounded-xl border border-border/50">
              <iframe
                title="Localização da Geometrik Escalada"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6522!3d-23.5634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ4LjMiUyA0NsKwMzknMDcuOSJX!5e0!3m2!1spt-BR!2sbr!4v1706000000000!5m2!1spt-BR!2sbr"
                className="h-80 w-full md:h-full md:min-h-[400px] grayscale invert-[0.85] contrast-[1.2]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info Cards */}
            <div className="flex flex-col gap-6">
              {INFO_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-5 rounded-xl border border-border/50 bg-card p-6 card-glow"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-neon-cyan/10">
                      <Icon className="h-6 w-6 text-neon-cyan" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg tracking-wide text-foreground">
                        {item.label}
                      </h3>
                      <div className="mt-2 flex flex-col gap-1">
                        {item.lines.map((line) => (
                          <p
                            key={line}
                            className="text-sm leading-relaxed text-foreground/60"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="relative z-10 border-t border-border/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src="/images/geometrik_logo-white.png"
              alt="Geometrik Escalada"
              className="h-6 w-auto opacity-60"
            />
          </div>

          <div className="flex items-center gap-6 text-sm text-foreground/40">
            <a
              href="#"
              className="transition-colors hover:text-foreground/70"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="transition-colors hover:text-foreground/70"
            >
              Termos de Uso
            </a>
          </div>

          <p className="text-xs text-foreground/30">
            {"© 2026 Geometrik Escalada. Todos os direitos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
}
