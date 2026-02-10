"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Modalidades", href: "#modalidades" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Planos", href: "#planos" },
  { label: "Localização", href: "#localizacao" },
] as const;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="relative z-10 shrink-0" aria-label="Geometrik Escalada - Home">
          <img
            src="/images/geometrik_logo-white.png"
            alt="Geometrik Escalada"
            className="h-8 w-auto md:h-10"
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-neon-cyan text-background font-bold tracking-wider text-sm glow-cyan glow-cyan-hover transition-all duration-300 hover:bg-neon-cyan/90"
          >
            <a href="#planos">FACA SEU CADASTRO</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="relative z-10 md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-2xl tracking-wider text-foreground/80 transition-colors hover:text-neon-cyan"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              size="lg"
              className="mt-4 bg-neon-cyan text-background font-bold tracking-wider glow-cyan"
            >
              <a href="#planos" onClick={() => setIsMobileMenuOpen(false)}>
                FACA SEU CADASTRO
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
