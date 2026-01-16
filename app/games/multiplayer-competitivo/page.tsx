import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import MultiplayerCompetitivoCard from "@/components/card/MultiplayerCompetitivoCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute:
            "Multiplayer & Competitivo | Coop, PVP, ranked e meta em análise | LEXARA",
    },
    description:
        "Explore Multiplayer & Competitivo na LEXARA: análises sobre coop, PVP, ranked, matchmaking, meta e balanceamento. Entenda o que torna uma partida justa, divertida e viciante — sem virar estresse.",
    keywords: [
        "jogos multiplayer",
        "jogos competitivos",
        "pvp",
        "coop",
        "ranked",
        "matchmaking",
        "mmr",
        "meta de jogos",
        "balanceamento de jogos",
        "sistemas ranqueados",
        "progressão ranqueada",
        "design competitivo",
        "comunidade gamer",
        "análise de jogos",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/games/multiplayer-competitivo",
    },
    openGraph: {
        title: "Multiplayer & Competitivo | A adrenalina do coop e do PVP | LEXARA",
        description:
            "Ranked, matchmaking, meta e balanceamento: análises para entender por que o competitivo vicia — e como um bom design evita frustração.",
        url: "https://lexara.com.br/games/multiplayer-competitivo",
        siteName: "LEXARA",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://lexara.com.br/og/og-multiplayer-competitivo.png",
                width: 1200,
                height: 630,
                alt: "Multiplayer & Competitivo | LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Multiplayer & Competitivo | Coop, ranked e meta | LEXARA",
        description:
            "Análises sobre PVP e coop: ranked, matchmaking, meta e balanceamento — a competição no ponto certo, sem destruir a diversão.",
        images: ["https://lexara.com.br/og/og-multiplayer-competitivo.png"],
    },
};

export default function MultiplayerCompetitivoPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/games"
                    label="Voltar para Games"
                />
            }
        >
            <MultiplayerCompetitivoCard />
        </CardLayout>
    );
}