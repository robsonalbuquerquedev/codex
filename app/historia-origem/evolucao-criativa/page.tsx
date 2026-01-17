import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import EvolucaoCriativaCard from "@/components/card/EvolucaoCriativaCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute:
            "Evolução Criativa — Como Estilos, Linguagem e Formatos Mudam com o Tempo | LEXARA",
    },
    description:
        "Entenda como estilos, linguagem narrativa e formatos evoluíram ao longo do tempo. Uma análise de como cada mudança criativa reflete transformações culturais, sociais e tecnológicas.",
    keywords: [
        "evolução criativa",
        "evolução dos estilos",
        "linguagem narrativa",
        "formatos criativos",
        "história da criatividade",
        "mudanças culturais na narrativa",
        "evolução da cultura geek",
        "análise cultural",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/historia-origem/evolucao-criativa",
    },
    openGraph: {
        title:
            "Evolução Criativa — O que as Mudanças Revelam sobre a Cultura | LEXARA",
        description:
            "Estilos, linguagem e formatos mudam com o tempo. Descubra como essas transformações criativas refletem a cultura de cada era.",
        url: "https://lexara.com.br/historia-origem/evolucao-criativa",
        siteName: "LEXARA",
        locale: "pt_BR",
        type: "article",
        images: [
            {
                url: "https://lexara.com.br/og/og-evolucao-criativa.png",
                width: 1200,
                height: 630,
                alt: "Evolução Criativa — LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Evolução Criativa — Estilos, Linguagem e Formatos | LEXARA",
        description:
            "Como a criatividade muda com o tempo e o que cada transformação revela sobre cultura, mídia e sociedade.",
        images: ["https://lexara.com.br/og/og-evolucao-criativa.png"],
    },
};

export default function EvolucaoCriativaPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/historia-origem"
                    label="Voltar para História & Origem"
                />
            }
        >
            <EvolucaoCriativaCard />
        </CardLayout>
    );
}