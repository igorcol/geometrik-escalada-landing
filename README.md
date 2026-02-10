# 🧗 Geometrik Escalada - Redesign Concept

![Project Banner](https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3)

> **Nota:** Este projeto é um *Redesign Conceitual (Case de Estudo)* criado para portfólio. O objetivo foi modernizar a presença digital de uma academia local, transformando um site funcional em uma experiência de marca imersiva.

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_Icons-Stunning-pink?style=for-the-badge&logo=lucide&logoColor=white)

[Ver Demo](#) • [Design System](#) • [Contato](#)

</div>

---

## 🎨 O Conceito: "Underground Premium"

A escalada indoor não é apenas um esporte; é um lifestyle. O site original, embora funcional, não transmitia a adrenalina, a comunidade e a energia do local.

Este projeto propõe uma nova identidade visual baseada em **Alto Contraste e Imersão**:
- **Dark Mode Nativo:** Fundo *Charcoal Deep* (#0E0E10) para destacar as fotos vibrantes.
- **Neon Accents:** Uso estratégico de *Ciano Elétrico* (#00FFD1) e *Magenta* para CTAs e feedbacks visuais.
- **Micro-interações:** Hovers, glows e motions que dão vida à navegação.

---

## 🆚 Antes e Depois

| **Site Original (Legado)** | **Novo Conceito (Redesign)** |
|:--------------------------:|:----------------------------:|
| ![Old Site](./public/images/old-site-preview.jpg) *Visual corporativo, baixo contraste e foco em texto.* | ![New Site](./public/images/hero-section-preview.jpg) *Visual imersivo, foco em conversão e prova social.* |

---

## ⚡ Funcionalidades e UX

### 1. Hero Section Cinematográfica
Substituição de carrosséis estáticos por um **Video Background** com overlay gradiente, focado em retenção imediata e tipografia de impacto (*Archivo Black*).

### 2. Estratégia de Pricing (Ancoragem)
A seção de planos foi redesenhada utilizando psicologia de preços:
- **Destaque Visual:** O plano "Mensal" possui escala maior e brilho neon.
- **Hierarquia:** Planos secundários com opacidade reduzida para guiar a decisão do usuário.

### 3. Prova Social Dinâmica (Marquee)
Um *scroll infinito* (Marquee) mostrando a comunidade real da academia. A ideia é vender o "pertencimento" antes de vender o treino.

### 4. Custom Dark Map
Integração com Google Maps utilizando filtros CSS (`grayscale` + `invert`) para que o mapa não quebre a estética Dark Mode do site, mantendo a harmonia visual.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes:** UI construída do zero com base em conceitos do Shadcn/UI.
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Animações:** CSS Keyframes puros (Glow, Float, Marquee).

---

## 🚀 Como Rodar o Projeto

1. **Clone o repositório**
   ```bash
   git clone [https://github.com/seu-usuario/geometrik-redesign.git](https://github.com/seu-usuario/geometrik-redesign.git)