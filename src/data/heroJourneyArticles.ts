export type HeroJourneyArticle = {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    href: string;
};

export const heroJourneyArticles: HeroJourneyArticle[] = [
    {
        id: 1,
        title: "Jornada do Herói: o mapa invisível do cinema",
        excerpt: "Como histórias épicas repetem um mesmo esqueleto narrativo — e por que isso funciona tão bem.",
        category: "Narrativas • Estrutura",
        image: "/images/narrativas/hero-journey-map.png",
        href: "/filmes-series/narrativas/jornada-do-heroi",
    },
    {
        id: 2,
        title: "O chamado, a queda e o retorno: as etapas mais poderosas",
        excerpt: "As viradas que criam catarse: recusa do chamado, provações, morte simbólica e transformação.",
        category: "Narrativas • Simbolismo",
        image: "/images/narrativas/hero-journey-stages.png",
        href: "/filmes-series/narrativas/etapas-da-jornada",
    },
    {
        id: 3,
        title: "Arquétipos da Jornada: mentor, sombra e trickster",
        excerpt: "Personagens que não são só pessoas: eles carregam funções, ideias e conflitos internos do protagonista.",
        category: "Narrativas • Arquétipos",
        image: "/images/narrativas/archetypes-mentor-shadow.png",
        href: "/filmes-series/narrativas/arquetipos-da-jornada",
    },
];
