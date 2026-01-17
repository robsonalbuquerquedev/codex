import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import DetalhesCanonicosRetconsCard from "@/components/card/DetalhesCanonicosRetconsCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Detalhes Canônicos & Retcons | Cânone, Contradições e Lore – LEXARA",
    },
    description:
        "O que virou cânone, o que foi retcon e como contradições foram explicadas (ou ignoradas com estilo). Um guia sobre continuidade, mudanças de lore e ajustes que reescrevem universos da cultura geek.",
    keywords: [
        "cânone",
        "canon",
        "retcon",
        "retcons famosos",
        "continuidade",
        "furos de roteiro",
        "contradições de lore",
        "mudanças de lore",
        "linha do tempo",
        "multiverso",
        "reboot",
        "cultura geek",
        "cultura pop",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/curiosidades/detalhes-canonicos-retcons",
    },
    openGraph: {
        title: "Detalhes Canônicos & Retcons | Continuidade e Lore – LEXARA",
        description:
            "Cânone, retcons e contradições: entenda como franquias reescrevem o passado, ajustam regras e mantêm universos coerentes — ou fingem que nada aconteceu.",
        url: "https://lexara.com.br/curiosidades/detalhes-canonicos-retcons",
        siteName: "LEXARA",
        images: [
            {
                url: "https://lexara.com.br/og/og-detalhes-canonicos-retcons.png",
                width: 1200,
                height: 630,
                alt: "Detalhes Canônicos e Retcons | Cânone, Lore e Continuidade – LEXARA",
            },
        ],
        locale: "pt_BR",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Detalhes Canônicos & Retcons | LEXARA",
        description:
            "O que virou cânone, o que foi retcon e como franquias lidam com contradições e continuidade.",
        images: ["https://lexara.com.br/og/og-detalhes-canonicos-retcons.png"],
    },
};

export default function DetalhesCanonicosRetconsPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/curiosidades"
                    label="Voltar para Curiosidades"
                />
            }
        >
            <DetalhesCanonicosRetconsCard />
        </CardLayout>
    );
}
