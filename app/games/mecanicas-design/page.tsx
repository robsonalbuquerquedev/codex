import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import MecanicasDesignCard from "@/components/card/MecanicasDesignCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: { absolute: "Mecânicas & Design nos Games | LEXARA" },
    description:
        "Explore Mecânicas & Design nos games: gameplay loop, progressão, combate e level design. Entenda por que certos jogos viciam (no bom sentido) com análises claras, exemplos e leitura fluida no padrão editorial da LEXARA.",
    keywords: [
        "LEXARA",
        "games",
        "mecânicas de jogos",
        "design de jogos",
        "game design",
        "gameplay",
        "gameplay loop",
        "progressão",
        "sistemas de progressão",
        "combate",
        "level design",
        "flow",
        "balanceamento",
        "engajamento",
        "jogos viciantes",
        "análise de games",
        "cultura geek",
    ],
    alternates: {
        canonical: "https://lexara.com.br/games/mecanicas-design",
    },
    openGraph: {
        type: "website",
        url: "https://lexara.com.br/games/mecanicas-design",
        siteName: "LEXARA",
        title: "Mecânicas & Design nos Games | LEXARA",
        description:
            "Gameplay na veia: sistemas, progressão, combate e level design. Veja como o design transforma boas ideias em jogos que prendem o jogador — do jeito certo.",
        images: [
            {
                url: "https://lexara.com.br/og/og-games-mecanicas-design.png",
                width: 1200,
                height: 630,
                alt: "LEXARA — Mecânicas & Design nos Games",
            },
        ],
        locale: "pt_BR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mecânicas & Design nos Games | LEXARA",
        description:
            "Gameplay loop, progressão e level design: por que certos jogos viciam (no bom sentido). Análises da LEXARA.",
        images: ["https://lexara.com.br/og/og-games-mecanicas-design.png"],
    },
};

export default function MecanicasDesignPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/games"
                    label="Voltar para Games"
                />
            }
        >
            <MecanicasDesignCard />
        </CardLayout>
    );
}