import { Clock, MapPin, Phone, ArrowUpRight, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function LocationFooter() {
  return (
    <footer id="localizacao" className="relative border-t border-white/5 bg-[#0E0E10]">
      {/* Background Noise/Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <section className="relative z-10 py-24 md:py-32" aria-labelledby="location-heading">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header Minimalista */}
          <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                id="location-heading"
                className="font-display text-5xl tracking-tighter text-white md:text-7xl uppercase"
              >
                ONDE <span className="text-neon-cyan neon-text-cyan">ESTAMOS</span>
              </h2>
            </div>
            <p className="max-w-md text-right text-lg text-white/50 hidden md:block">
              O ponto de encontro da comunidade.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:h-[500px]">
            
            {/* 1. O Mapa (Maior destaque - 7 colunas) */}
            <div className="relative h-80 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-white/20 lg:col-span-7 lg:h-full group">
              <iframe
                title="Localização da Geometrik Escalada"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6522!3d-23.5634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ4LjMiUyA0NsKwMzknMDcuOSJX!5e0!3m2!1spt-BR!2sbr!4v1706000000000!5m2!1spt-BR!2sbr"
                className="h-full w-full grayscale invert-[0.85] contrast-[1.1] opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay de Clicar */}
              <a 
                href="https://maps.google.com" 
                target="_blank"
                className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/40 backdrop-blur-[2px]"
              >
                <div className="flex items-center gap-2 rounded-full bg-neon-cyan px-6 py-3 font-bold text-black shadow-[0_0_20px_rgba(0,255,209,0.4)]">
                  <MapPin size={18} />
                  ABRIR NO MAPS
                </div>
              </a>
            </div>

            {/* 2. O Painel de Informações (5 colunas) */}
            <div className="flex flex-col gap-4 lg:col-span-5 lg:h-full">
              
              {/* Card de Horários (Estilo System Log) */}
              <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/[0.07]">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neon-cyan/10 text-neon-cyan">
                    <Clock size={20} />
                  </div>
                  <h3 className="font-display text-xl tracking-wider text-white">HORÁRIOS</h3>
                  <span className="ml-auto flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-green-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Aberto Agora
                  </span>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/40">SEG - SEX</span>
                    <span className="text-white font-bold">06:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/40">SÁBADO</span>
                    <span className="text-white font-bold">08:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/40">DOMINGO</span>
                    <span className="text-white font-bold">08:00 - 18:00</span>
                  </div>
                </div>
              </div>

              {/* Grid de Contato Rápido (2 botões grandes) */}
              <div className="grid grid-cols-2 gap-4 h-32">
                {/* Botão Whats */}
                <a href="#" className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-neon-cyan/50 hover:bg-neon-cyan/5">
                  <div className="flex justify-between">
                    <Phone className="text-white/40 group-hover:text-neon-cyan transition-colors" size={24} />
                    <ArrowUpRight className="text-white/20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-white">Ligar Agora</span>
                </a>
                
                {/* Botão Email */}
                <a href="mailto:contato@geometrik.com.br" className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-neon-magenta/50 hover:bg-neon-magenta/5">
                  <div className="flex justify-between">
                    <Mail className="text-white/40 group-hover:text-neon-magenta transition-colors" size={24} />
                    <ArrowUpRight className="text-white/20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-white">Email</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom Minimalista */}
      <div className="border-t border-white/5 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
          <div className="flex items-center gap-4">
            <img
              src="/images/geometrik_logo-white.png"
              alt="Geometrik"
              className="h-6 w-auto opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          </div>

          <div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-neon-cyan transition-colors">Privacidade</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">Termos</a>
            <a href="#" className="hover:text-neon-cyan transition-colors">Instagram</a>
          </div>

          <p className="text-xs text-white/20 font-mono">
            © 2026 GEOMETRIK.
          </p>
        </div>
      </div>
    </footer>
  );
}