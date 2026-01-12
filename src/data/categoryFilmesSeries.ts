import { Film, Zap, Shield, Sparkles, Palette } from "lucide-react";

export type CategoryFilmesSeries = {
    title: string;
    description: string;
    icon: React.ElementType;
    href: string;
};

export const categoryFilmesSeries: CategoryFilmesSeries[] = [
    {
        title: "Marvel",
        description:
            "Heróis, sagas interligadas e narrativas que redefiniram o cinema blockbuster.",
        icon: Zap,
        href: "/filmes-series/marvel",
    },
    {
        title: "DC",
        description:
            "Histórias mais densas, conflitos morais e personagens icônicos da cultura pop.",
        icon: Shield,
        href: "/filmes-series/dc",
    },
    {
        title: "Live Action",
        description:
            "Adaptações, reinterpretações e o desafio de trazer universos para o mundo real.",
        icon: Film,
        href: "/filmes-series/live-action",
    },
    {
        title: "Animações",
        description:
            "Narrativas visuais poderosas que vão muito além do público infantil.",
        icon: Palette,
        href: "/filmes-series/animacoes",
    },
    {
        title: "Narrativas & Simbolismos",
        description:
            "Leituras profundas sobre temas, metáforas e construção de significado.",
        icon: Sparkles,
        href: "/filmes-series/narrativas",
    },
];
