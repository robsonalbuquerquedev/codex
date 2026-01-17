import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import InfluenciasReferenciasCard from "@/components/card/InfluenciasReferenciasCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute:
            "Influências & Referências — Mitos, Literatura, Cinema, Política e Tecnologia | LEXARA",
    },
    description:
        "Descubra as influências por trás das narrativas e estéticas: mitos, literatura, cinema, política e tecnologia que inspiram personagens, mundos, temas e estilos na cultura geek.",
    keywords: [
        "influências culturais",
        "referências na cultura geek",
        "mitologia e arquétipos",
        "influência da literatura",
        "influência do cinema",
        "política na ficção",
        "tecnologia na ficção",
        "mapa de inspiração",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/historia-origem/influencias-referencias",
    },
    openGraph: {
        title: "Influências & Referências — O que Inspira Mundos e Estéticas | LEXARA",
        description:
            "Mapas de inspiração: mitos, literatura, cinema, política e tecnologia por trás das narrativas e estéticas que marcaram a cultura geek.",
        url: "https://lexara.com.br/historia-origem/influencias-referencias",
        siteName: "LEXARA",
        locale: "pt_BR",
        type: "article",
        images: [
            {
                url: "https://lexara.com.br/og/og-influencias-referencias.png",
                width: 1200,
                height: 630,
                alt: "Influências & Referências — LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Influências & Referências — Mapas de Inspiração | LEXARA",
        description:
            "Mitos, literatura, cinema, política e tecnologia: entenda as referências que alimentam narrativas e estilos na cultura geek.",
        images: ["https://lexara.com.br/og/og-influencias-referencias.png"],
    },
};

export default function InfluenciasReferenciasPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/historia-origem"
                    label="Voltar para História & Origem"
                />
            }
        >
            <InfluenciasReferenciasCard />
        </CardLayout>
    );
}