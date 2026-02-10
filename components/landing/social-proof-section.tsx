"use client";

import { Heart, MessageCircle, Share2, Star, Quote } from "lucide-react";

// --- DADOS DO FEED (Instagram Style) ---
interface SocialPost {
  id: number;
  handle: string;
  image: string;
  caption: string;
  likes: string;
  comments: string;
}

const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 1,
    handle: "@camilasouza",
    image: "/images/img-6.jpg",
    caption: "Foco total no projeto! Aquele V4 que não saía por nada... hoje foi! 🧗‍♀️🔥",
    likes: "243",
    comments: "12",
  },
  {
    id: 2,
    handle: "@joao.beta",
    image: "/images/img-3.jpg",
    caption: "Aquele beta que demorou mas saiu. Vibe surreal dessa galera!",
    likes: "892",
    comments: "45",
  },
  {
    id: 3,
    handle: "@geometrik_oficial",
    image: "/images/img-2.jpg",
    caption: "Casa cheia e energia lá em cima. Quem vem pro treino hoje à noite? 👇",
    likes: "1.2k",
    comments: "88",
  },
  {
    id: 4,
    handle: "@resenha_climb",
    image: "/images/img-7.jpg",
    caption: "Porque ninguém é de ferro né? O melhor after de Sorocaba 🍻",
    likes: "420",
    comments: "30",
  },
  {
    id: 5,
    handle: "@aninha.climb",
    image: "/images/img-1.jpg",
    caption: "Evoluindo 1% todo dia. O ambiente aqui inspira demais!",
    likes: "315",
    comments: "18",
  },
];

// --- DADOS DOS DEPOIMENTOS (Reviews) ---
interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ricardo S.",
    role: "Iniciante",
    content: "Vim pela curiosidade, fiquei pela resenha. O medo de altura sumiu na terceira semana. A galera te ajuda muito.",
    avatar: "/images/img-3.jpg", 
  },
  {
    name: "Fernanda K.",
    role: "Viciada em Boulder",
    content: "A estrutura é animal, mas a comunidade que faz o lugar. Ninguém te julga se você cai do V0. Vibe surreal.",
    avatar: "/images/img-6.jpg",
  },
  {
    name: "Pedro M.",
    role: "Local do After",
    content: "Melhor escape do stress do trabalho. Treino pesado e cerveja gelada na sexta-feira é lei aqui.",
    avatar: "/images/img-7.jpg",
  },
];

// --- COMPONENTES ---

function SocialPostCard({ post }: { post: SocialPost }) {
  return (
    <article className="group/card relative h-[320px] w-[260px] shrink-0 overflow-hidden rounded-xl border border-white/10 bg-black transition-all duration-300 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,255,209,0.15)]">
      <img
        src={post.image}
        alt={`Post de ${post.handle}`}
        className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover/card:opacity-90" />
      
      <div className="absolute left-0 top-0 flex w-full items-center justify-between p-4 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
        <span className="rounded-full bg-black/50 px-3 py-1 text-xs font-bold text-white backdrop-blur-md border border-white/10">
          {post.handle}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-4">
        <p className="mb-3 line-clamp-2 text-xs font-medium leading-relaxed text-gray-200 group-hover/card:line-clamp-none group-hover/card:text-white">
          <span className="font-bold text-neon-cyan mr-1">{post.handle}</span>
          {post.caption}
        </p>
        <div className="flex items-center justify-between border-t border-white/10 pt-3">
          <div className="flex gap-4">
            <button className="flex items-center gap-1.5 text-white/70 hover:text-neon-magenta transition-colors">
              <Heart className="h-4 w-4" />
              <span className="text-xs font-bold">{post.likes}</span>
            </button>
            <button className="flex items-center gap-1.5 text-white/70 hover:text-neon-cyan transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs font-bold">{post.comments}</span>
            </button>
          </div>
          <button className="text-white/70 hover:text-white transition-colors">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({ posts, direction = "left" }: { posts: SocialPost[]; direction?: "left" | "right" }) {
  const doubled = [...posts, ...posts, ...posts];
  return (
    <div className="group/marquee flex overflow-hidden">
      <div
        className={`flex gap-6 py-4 ${direction === "left" ? "animate-marquee" : "animate-marquee [animation-direction:reverse]"} group-hover/marquee:[animation-play-state:paused]`}
        style={{ width: "max-content" }}
      >
        {doubled.map((post, index) => (
          <SocialPostCard key={`${post.id}-${index}`} post={post} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-neon-cyan/30 hover:bg-white/[0.07]">
      <Quote className="absolute right-6 top-6 h-10 w-10 text-white/5 rotate-12" />
      <div>
        <div className="mb-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-neon-cyan text-neon-cyan" />
          ))}
        </div>
        <p className="mb-6 text-base leading-relaxed text-white/80 italic">
          "{item.content}"
        </p>
      </div>
      <div className="flex items-center gap-4 border-t border-white/10 pt-4">
        <div className="h-10 w-10 overflow-hidden rounded-full border border-neon-cyan/50">
          <img src={item.avatar} alt={item.name} className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0" />
        </div>
        <div>
          <h4 className="font-display text-sm font-bold text-white">{item.name}</h4>
          <p className="text-xs text-white/40 uppercase tracking-wider">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

// --- MAIN SECTION ---

export function SocialProofSection() {
  return (
    <section
      id="comunidade"
      className="relative overflow-hidden py-24 md:py-32 bg-[#0E0E10] noise-overlay"
      aria-labelledby="social-proof-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* 1. Header Principal */}
        <div className="mb-12 text-center">
          <h2
            id="social-proof-heading"
            className="font-display text-4xl tracking-tight text-white md:text-6xl uppercase"
          >
            MAIS QUE UMA ACADEMIA,
            <br />
            <span className="text-neon-cyan neon-text-cyan">O FEED DA GALERA.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Aqui a gente treina sério, mas não se leva a sério.
          </p>
        </div>
      </div>

      {/* 2. O Feed Infinito (Marquee) */}
      <div className="relative z-10 mb-24 flex flex-col gap-4">
        <MarqueeRow posts={SOCIAL_POSTS} direction="left" />
        {/* Blur nas laterais para suavizar */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#0E0E10] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#0E0E10] to-transparent z-20" />
      </div>

      {/* 3. Os Depoimentos (Prova Social Profunda) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/30">O que dizem por aí</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={idx} item={testimonial} />
          ))}
        </div>
      </div>

    </section>
  );
}