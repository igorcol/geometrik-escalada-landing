"use client";

interface CommunityImage {
  src: string;
  alt: string;
}

const COMMUNITY_IMAGES: CommunityImage[] = [
  { src: "/images/community-1.jpg", alt: "Escaladores se divertindo no boulder" },
  { src: "/images/community-2.jpg", alt: "Comunidade reunida na Geometrik" },
  { src: "/images/community-3.jpg", alt: "Escalador em parede de boulder" },
  { src: "/images/community-4.jpg", alt: "Amigos celebrando conquista na escalada" },
  { src: "/images/community-5.jpg", alt: "Treino em grupo na Geometrik" },
  { src: "/images/community-6.jpg", alt: "Escaladora concentrada no boulder" },
];

function MarqueeRow({ images, direction = "left" }: { images: CommunityImage[]; direction?: "left" | "right" }) {
  const doubled = [...images, ...images];

  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex gap-4 ${direction === "left" ? "animate-marquee" : "animate-marquee [animation-direction:reverse]"}`}
        style={{ width: "max-content" }}
      >
        {doubled.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="relative h-48 w-72 shrink-0 overflow-hidden rounded-lg md:h-64 md:w-96"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/20 transition-opacity hover:opacity-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SocialProofSection() {
  const firstRow = COMMUNITY_IMAGES.slice(0, 3);
  const secondRow = COMMUNITY_IMAGES.slice(3, 6);

  return (
    <section
      id="comunidade"
      className="relative overflow-hidden py-24 md:py-32 noise-overlay"
      aria-labelledby="social-proof-heading"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2
            id="social-proof-heading"
            className="font-display text-4xl tracking-tight text-foreground md:text-6xl text-balance"
          >
            MAIS QUE UMA ACADEMIA,
            <br />
            <span className="text-neon-cyan neon-text-cyan">SUA SEGUNDA CASA.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/60 text-pretty">
            Aqui a gente treina sério, mas não se leva a sério. Vibe única e
            gente boa.
          </p>
        </div>
      </div>

      {/* Marquee Rows - Full bleed */}
      <div className="relative z-10 flex flex-col gap-4">
        <MarqueeRow images={firstRow} direction="left" />
        <MarqueeRow images={secondRow} direction="right" />
      </div>
    </section>
  );
}
