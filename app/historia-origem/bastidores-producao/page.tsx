import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import BastidoresProducaoCard from "@/components/card/BastidoresProducaoCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute:
            "Bastidores & Produção — Decisões, Limitações e Conflitos que Moldaram Obras | LEXARA",
    },
    description:
        "Entenda os bastidores por trás de obras marcantes: decisões criativas, limitações técnicas, conflitos de produção e soluções inesperadas que explicam por que certas histórias nasceram do jeito que nasceram.",
    keywords: [
        "bastidores da produção",
        "processo criativo",
        "decisões criativas",
        "limitações de produção",
        "conflitos de bastidores",
        "história da produção audiovisual",
        "como uma obra é feita",
        "cultura geek bastidores",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/historia-origem/bastidores-producao",
    },
    openGraph: {
        title: "Bastidores & Produção — O que Molda uma Obra por Dentro | LEXARA",
        description:
            "Decisões criativas, limitações e conflitos de bastidor: descubra o que influencia roteiro, estética e resultado final das obras que marcaram a cultura geek.",
        url: "https://lexara.com.br/historia-origem/bastidores-producao",
        siteName: "LEXARA",
        locale: "pt_BR",
        type: "article",
        images: [
            {
                url: "https://lexara.com.br/og/og-bastidores-producao.png",
                width: 1200,
                height: 630,
                alt: "Bastidores & Produção — LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Bastidores & Produção — Decisões e Limites que Viram História | LEXARA",
        description:
            "Por trás das obras: escolhas criativas, conflitos e soluções que definem o que chega ao público — e por que chega assim.",
        images: ["https://lexara.com.br/og/og-bastidores-producao.png"],
    },
};

export default function BastidoresProducaoPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/historia-origem"
                    label="Voltar para História & Origem"
                />
            }
        >
            <BastidoresProducaoCard />
        </CardLayout>
    );
}