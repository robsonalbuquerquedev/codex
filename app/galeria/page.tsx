import GalleryHub from "@/components/gallery/GalleryHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: { absolute: "Galeria do LEXARA | Wallpapers, Capas e Artes da Cultura Geek" },
    description:
        "Acesse a Galeria do LEXARA e explore imagens usadas como capa de artigos e artes do universo geek. Baixe wallpapers, aprecie as composições e encontre com facilidade capas de filmes, séries, games, HQs e narrativas.",
    keywords: [
        "LEXARA",
        "galeria LEXARA",
        "wallpapers geek",
        "capas de artigos",
        "imagens cultura geek",
        "arte geek",
        "filmes e séries",
        "games",
        "HQs e mangás",
        "narrativas",
        "animações",
        "download de wallpapers",
    ],
    alternates: {
        canonical: "https://lexara.com.br/galeria",
    },
    openGraph: {
        type: "website",
        url: "https://lexara.com.br/galeria",
        title: "Galeria do LEXARA | Artes, Capas e Wallpapers",
        description:
            "Explore a galeria visual do LEXARA com capas e artes usadas nos conteúdos. Baixe wallpapers e navegue por imagens de filmes, séries, games, HQs e narrativas.",
        siteName: "LEXARA",
        images: [
            {
                url: "https://lexara.com.br/og/og-galeria.png",
                width: 1200,
                height: 630,
                alt: "Galeria do LEXARA — Wallpapers e Capas",
            },
        ],
        locale: "pt_BR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Galeria do LEXARA | Wallpapers e artes do universo geek",
        description:
            "Capas e imagens usadas no LEXARA, organizadas para apreciar e baixar. Um hub visual com artes de filmes, séries, games e narrativas.",
        images: ["https://lexara.com.br/og/og-galeria.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

export default function GaleriaPage() {
    return <GalleryHub />;
}
