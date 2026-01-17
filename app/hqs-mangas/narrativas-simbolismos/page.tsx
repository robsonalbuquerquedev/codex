import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import NarrativasSimbolismosCard from "@/components/card/NarrativasSimbolismosCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Narrativas & Simbolismos — Temas, Metáforas e Subtexto | LEXARA",
    },
    description:
        "Temas, metáforas, subtexto e simbolismo em HQs e mangás. Análises que revelam significados ocultos, escolhas narrativas e como histórias dizem muito além do que está desenhado na página.",
    keywords: [
        "narrativas nos quadrinhos",
        "simbolismo em hqs",
        "subtexto narrativo",
        "metáforas visuais",
        "temas em mangás",
        "leitura simbólica",
        "análise narrativa",
        "arquétipos nos quadrinhos",
        "linguagem visual",
        "significado nos quadrinhos",
        "final aberto interpretação",
        "HQs e mangás em análise",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/hqs-mangas/narrativas-simbolismos",
    },
    openGraph: {
        title: "Narrativas & Simbolismos — HQs e Mangás em Análise | LEXARA",
        description:
            "Subtexto, metáforas e construção de significado em HQs e mangás. Quando a narrativa diz mais do que mostra.",
        url: "https://lexara.com.br/hqs-mangas/narrativas-simbolismos",
        siteName: "LEXARA",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://lexara.com.br/og/og-narrativas-simbolismos.png",
                width: 1200,
                height: 630,
                alt: "Narrativas & Simbolismos — LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Narrativas & Simbolismos — HQs e Mangás em Análise | LEXARA",
        description:
            "Temas, metáforas e subtexto em HQs e mangás — histórias que dizem mais do que mostram.",
        images: ["https://lexara.com.br/og/og-narrativas-simbolismos.png"],
    },
};

export default function NarrativasSimbolismosPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/hqs-mangas"
                    label="Voltar para HQs & Mangás"
                />
            }
        >
            <NarrativasSimbolismosCard />
        </CardLayout>
    );
}