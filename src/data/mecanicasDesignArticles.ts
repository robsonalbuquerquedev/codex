export type ArticleCardItem = {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    href: string;
    image: string;
};

export const mecanicasDesignArticles: ArticleCardItem[] = [
    {
        id: "gameplay-loop",
        title: "Gameplay Loop: o ciclo que te prende sem você perceber",
        excerpt:
            "Entenda como objetivos curtos, recompensas rápidas e repetição inteligente formam o loop que faz o jogo ficar impossível de largar.",
        category: "Mecânicas & Design",
        href: "/games/mecanicas-design/gameplay-loop",
        image: "/images/mecanicas/gameplay-loop.png",
    },
    {
        id: "progression-systems",
        title: "Progressão bem feita: quando evoluir é divertido (não cansativo)",
        excerpt:
            "XP, habilidades, equipamentos e desafios: como a sensação de crescimento mantém o jogador motivado sem virar grind infinito.",
        category: "Mecânicas & Design",
        href: "/games/mecanicas-design/sistemas-de-progressao",
        image: "/images/mecanicas/sistemas-progressao.png",
    },
    {
        id: "level-design-flow",
        title: "Level Design e Flow: o mapa que te guia sem você notar",
        excerpt:
            "Ritmo, leitura visual, obstáculos e recompensas: por que fases bem desenhadas criam prazer e fazem cada minuto ‘clicar’ com o jogador.",
        category: "Mecânicas & Design",
        href: "/games/mecanicas-design/level-design-e-flow",
        image: "/images/mecanicas/level-design-flow.png",
    },
];
