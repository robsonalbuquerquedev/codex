import ContentsHub from "@/components/contents/ContentsHub";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: { absolute: "Conteúdos do LEXARA | Categorias, Análises e Cultura Geek" },
    description:
        "Explore os conteúdos do LEXARA: análises profundas de filmes e séries, estudos sobre games, HQs e mangás, história & origem e curiosidades. Um hub para navegar por críticas bem fundamentadas, leituras narrativas e conexões que vão além da superfície.",
    keywords: [
        "LEXARA",
        "conteúdos LEXARA",
        "cultura geek",
        "análises de filmes e séries",
        "críticas de filmes e séries",
        "games análises",
        "HQs e mangás",
        "quadrinhos",
        "história e origem",
        "curiosidades geek",
        "narrativas",
        "universo pop",
        "entretenimento",
    ],
    alternates: {
        canonical: "https://lexara.com.br/conteudos",
    },
    openGraph: {
        type: "website",
        url: "https://lexara.com.br/conteudos",
        title: "Conteúdos do LEXARA | O hub da cultura geek em análise",
        description:
            "O centro do LEXARA: encontre categorias, análises e conteúdos que conectam filmes, séries, games e quadrinhos com profundidade, contexto e olhar crítico.",
        siteName: "LEXARA",
        images: [
            {
                url: "https://lexara.com.br/og/og-conteudos.png",
                width: 1200,
                height: 630,
                alt: "Conteúdos do LEXARA — Cultura Geek em Análise",
            },
        ],
        locale: "pt_BR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Conteúdos do LEXARA | Categorias e análises em profundidade",
        description:
            "Navegue pelo coração do LEXARA: filmes & séries, games, HQs & mangás, história & origem e curiosidades — tudo com olhar crítico e bem fundamentado.",
        images: ["https://lexara.com.br/og/og-conteudos.png"],
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

export default function ConteudosPage() {
    return <ContentsHub />;
}
