export type ThorArticle = {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    href: string;
};

export const thorArticles: ThorArticle[] = [
    {
        id: 1,
        title: "Thor no MCU: de deus arrogante a herói consciente",
        excerpt:
            "A jornada de Thor no Universo Cinematográfico Marvel vai muito além do martelo e dos trovões. Neste artigo, analisamos como o personagem evolui de um guerreiro impulsivo para um herói marcado por perdas, responsabilidades e amadurecimento emocional.",
        image: "/images/featured/thor-mcu.png",
        category: "Filmes & Séries",
        href: "/filmes-series/marvel/thor-mcu-evolucao",
    },
    {
        id: 2,
        title: "Thor: Ragnarok — quando o humor redefine um herói trágico",
        excerpt:
            "Thor: Ragnarok dividiu fãs ao trocar solenidade por humor, mas também reinventou o personagem. Aqui exploramos como a comédia, o visual e a quebra de expectativas transformaram Thor em um dos heróis mais complexos e humanos da Marvel.",
        image: "/images/featured/thor-ragnarok.png",
        category: "Filmes & Séries",
        href: "/filmes-series/marvel/thor-ragnarok-analise",
    },
    {
        id: 3,
        title: "Mjolnir, Stormbreaker e identidade: o que realmente faz Thor ser digno",
        excerpt:
            "Ser digno não é apenas levantar o martelo. Nesta análise, discutimos o simbolismo de Mjolnir e Stormbreaker e como essas armas refletem a identidade, as falhas e o crescimento interno de Thor ao longo de sua trajetória no cinema.",
        image: "/images/featured/thor-mjolnir-stormbreaker.png",
        category: "Filmes & Séries",
        href: "/filmes-series/marvel/thor-identidade-e-dignidade",
    },
];
