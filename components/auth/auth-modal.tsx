"use client";

import { useState, useEffect } from "react";
import { X, Mail, Lock, User, FileText, Calendar, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "login" | "register";
}

export function AuthModal({ isOpen, onClose, defaultTab = "register" }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"login" | "register">(defaultTab);
  const [showPassword, setShowPassword] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Sincroniza a tab quando o modal abre
  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
      setIsAnimating(true);
    } else {
      setTimeout(() => setIsAnimating(false), 300);
    }
  }, [isOpen, defaultTab]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center px-4 transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Backdrop com Blur e Dark Overlay */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div 
        className={`relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E10] shadow-[0_0_50px_-12px_rgba(0,255,209,0.2)] transition-all duration-300 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/40 hover:text-white transition-colors z-20"
        >
          <X size={20} />
        </button>

        {/* Header com Tabs */}
        <div className="flex border-b border-white/5">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-6 text-center text-sm font-bold tracking-widest uppercase transition-all ${
              activeTab === "login"
                ? "text-neon-cyan border-b-2 border-neon-cyan bg-white/[0.02]"
                : "text-white/40 hover:text-white/70 hover:bg-white/[0.01]"
            }`}
          >
            Entrar
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`flex-1 py-6 text-center text-sm font-bold tracking-widest uppercase transition-all ${
              activeTab === "register"
                ? "text-neon-cyan border-b-2 border-neon-cyan bg-white/[0.02]"
                : "text-white/40 hover:text-white/70 hover:bg-white/[0.01]"
            }`}
          >
            Cadastrar
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          {activeTab === "login" ? (
            <LoginForm />
          ) : (
            <RegisterForm />
          )}
        </div>
      </div>
    </div>
  );
}

/* --- Subcomponentes de Formulário --- */

function InputField({ icon: Icon, type, placeholder, label }: any) {
  const [showPass, setShowPass] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="group space-y-2">
      <label className="text-xs font-bold uppercase tracking-wider text-white/40 group-focus-within:text-neon-cyan transition-colors">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-neon-cyan transition-colors">
          <Icon size={18} />
        </div>
        <input
          type={isPassword ? (showPass ? "text" : "password") : type}
          className="w-full rounded-lg border border-white/10 bg-white/5 py-3 pl-12 pr-10 text-white placeholder:text-white/20 focus:border-neon-cyan focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all"
          placeholder={placeholder}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
          >
            {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}

function LoginForm() {
  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-4">
        <InputField icon={Mail} type="email" label="Email" placeholder="seu@email.com" />
        <InputField icon={Lock} type="password" label="Senha" placeholder="••••••••" />
      </div>

      <div className="flex justify-end">
        <a href="#" className="text-xs text-white/40 hover:text-neon-cyan transition-colors">
          Esqueceu a senha?
        </a>
      </div>

      <Button className="w-full bg-neon-cyan text-background font-bold tracking-wider glow-cyan hover:bg-neon-cyan/90 h-12 mt-2 group">
        ACESSAR CONTA
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </form>
  );
}

function RegisterForm() {
  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-4">
        <InputField icon={User} type="text" label="Nome Completo" placeholder="Como te chamamos?" />
        <div className="grid grid-cols-2 gap-4">
            <InputField icon={FileText} type="text" label="CPF" placeholder="000.000.000-00" />
            <InputField icon={Calendar} type="date" label="Nascimento" />
        </div>
        <InputField icon={Mail} type="email" label="Email" placeholder="seu@email.com" />
        <InputField icon={Lock} type="password" label="Senha" placeholder="Crie uma senha forte" />
      </div>

      <Button className="w-full bg-neon-magenta text-white font-bold tracking-wider hover:bg-neon-magenta/90 h-12 mt-4 shadow-[0_0_20px_rgba(255,0,153,0.3)] hover:shadow-[0_0_30px_rgba(255,0,153,0.5)] transition-all group">
        CRIAR MINHA CONTA
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>

      <p className="text-center text-xs text-white/30 mt-2">
        Ao se cadastrar, você concorda com nossos <a href="#" className="underline hover:text-white">Termos de Uso</a>.
      </p>
    </form>
  );
}