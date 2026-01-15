import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import IndiesAutoraisCard from "@/components/card/IndiesAutoraisCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Indies & Autorais | Jogos criativos e inovadores em análise | LEXARA",
    },
    description:
        "Explore Indies & Autorais na LEXARA: análises de jogos independentes com ideias ousadas, narrativa marcante e identidade visual única. Descubra por que a inovação costuma nascer primeiro no cenário indie.",
    keywords: [
        "jogos indies",
        "jogos independentes",
        "jogos autorais",
        "games indies",
        "melhores jogos indies",
        "inovação em jogos",
        "narrativa em jogos indies",
        "identidade visual nos games",
        "pixel art",
        "design minimalista",
        "game design indie",
        "análise de jogos",
        "cultura gamer",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/games/indies-autorais",
    },
    openGraph: {
        title: "Indies & Autorais | Onde a inovação aparece primeiro | LEXARA",
        description:
            "Análises de jogos indies e autorais: criatividade, narrativa e arte como linguagem. Entre no lado mais ousado e pessoal dos games com a LEXARA.",
        url: "https://lexara.com.br/games/indies-autorais",
        siteName: "LEXARA",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://lexara.com.br/og/og-indies-autorais.png",
                width: 1200,
                height: 630,
                alt: "Indies & Autorais | LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Indies & Autorais | Jogos com personalidade | LEXARA",
        description:
            "Criatividade, narrativa e identidade visual: descubra por que os indies são o laboratório da inovação nos games.",
        images: ["https://lexara.com.br/og/og-indies-autorais.png"],
    },
};

export default function IndiesAutoraisPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/games"
                    label="Voltar para Games"
                />
            }
        >
            <IndiesAutoraisCard />
        </CardLayout>
    );
}