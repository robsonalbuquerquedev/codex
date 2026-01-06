import MainHeroSplit from "@/components/hero/MainHeroSplit";
import HomePillars from "@/components/HomePillars";
import HomeFeaturedContent from "@/components/HomeFeaturedContent";
import HomeAboutCodex from "@/components/HomeAboutCodex";
import HomeCTASection from "@/components/HomeCTASection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "CODEX — Cultura Geek Sem Rótulos",
  },

  description:
    "CODEX é um espaço criado entre amigos para quem vive a cultura geek sem rótulos. Filmes, séries, games, HQs, mangás, histórias, origens e curiosidades analisados com paixão, pesquisa e troca de ideias.",

  keywords: [
    "codex",
    "cultura geek",
    "filmes e séries",
    "games",
    "hqs",
    "mangás",
    "universo geek",
    "história geek",
    "curiosidades geek",
    "conteúdo geek",
  ],

  alternates: {
    canonical: "https://codex.com.br/",
  },

  openGraph: {
    title: "CODEX — Cultura Geek Sem Rótulos",
    description:
      "Um espaço para quem ama cultura geek sem disputas: filmes, séries, games, HQs, mangás e histórias analisados com critério, curiosidade e paixão.",
    url: "https://codex.com.br/",
    siteName: "CODEX",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://codex.com.br/og-home.png",
        width: 1200,
        height: 630,
        alt: "CODEX — Cultura Geek Sem Rótulos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CODEX — Cultura Geek Sem Rótulos",
    description:
      "Filmes, séries, games, HQs e mangás analisados com paixão, pesquisa e troca de ideias.",
    images: ["https://codex.com.br/og-home.png"],
  },
};

export default function Home() {
  return (
    <>
      <MainHeroSplit />
      <HomePillars />
      <HomeFeaturedContent />
      <HomeAboutCodex />
      <HomeCTASection />
    </>
  );
}
