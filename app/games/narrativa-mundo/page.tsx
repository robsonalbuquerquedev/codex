import CardLayout from "@/components/layout/CardLayout";
import BackButton from "@/components/navigation/BackButton";
import GamesNarrativaMundoCard from "@/components/card/GamesNarrativaMundoCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: { absolute: "Narrativa & Mundo nos Games | LEXARA" },
    description:
        "Explore análises sobre Narrativa & Mundo nos games: lore, personagens, ambientação e construção de universos que transformam jogos em histórias vivas. Guia editorial da LEXARA com foco em pesquisa, contexto e leitura fluida.",
    keywords: [
        "LEXARA",
        "games",
        "narrativa nos games",
        "worldbuilding",
        "lore",
        "história nos jogos",
        "personagens",
        "construção de mundo",
        "universos dos games",
        "storytelling",
        "ambientação",
        "games com história",
        "análise de games",
        "cultura geek",
    ],
    alternates: {
        canonical: "https://lexara.com.br/games/narrativa-mundo",
    },
    openGraph: {
        type: "website",
        url: "https://lexara.com.br/games/narrativa-mundo",
        siteName: "LEXARA",
        title: "Narrativa & Mundo nos Games | LEXARA",
        description:
            "Lore, personagens e worldbuilding: descubra como alguns jogos constroem universos tão ricos que parecem livros jogáveis — análises e guias editoriais da LEXARA.",
        images: [
            {
                url: "https://lexara.com.br/og/og-games-narrativa-mundo.png",
                width: 1200,
                height: 630,
                alt: "LEXARA — Narrativa & Mundo nos Games",
            },
        ],
        locale: "pt_BR",
    },
    twitter: {
        card: "summary_large_image",
        title: "Narrativa & Mundo nos Games | LEXARA",
        description:
            "Análises de lore, personagens e construção de mundos nos games — quando o universo do jogo também conta a história.",
        images: ["https://lexara.com.br/og/og-games-narrativa-mundo.png"],
    },
};

export default function NarrativaMundoPage() {
    return (
        <CardLayout
            header={
                <BackButton
                    fallbackHref="/games"
                    label="Voltar para Games"
                />
            }
        >
            <GamesNarrativaMundoCard />
        </CardLayout>
    );
}
