export type ArticleCardItem = {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    href: string;
    image: string;
};

export const linhaDoTempoMovimentosArticles: ArticleCardItem[] = [
    {
        id: "origens-cultura-pop-moderna",
        title: "As Origens da Cultura Pop Moderna",
        excerpt:
            "Do pós-guerra ao surgimento da indústria do entretenimento global: como mudanças sociais, tecnologia e mídia moldaram a cultura pop que consumimos hoje.",
        category: "Contexto Histórico",
        href: "/historia-origem/linha-do-tempo-movimentos/origens-cultura-pop-moderna",
        image: "/images/historia-origem/origens-cultura-pop.png",
    },
    {
        id: "movimentos-criativos-que-mudaram-a-industria",
        title: "Movimentos Criativos que Mudaram a Indústria",
        excerpt:
            "Expressionismo, contracultura, underground e novas linguagens visuais: os movimentos criativos que romperam padrões e redefiniram narrativas em diferentes mídias.",
        category: "Movimentos Culturais",
        href: "/historia-origem/linha-do-tempo-movimentos/movimentos-criativos-industria",
        image: "/images/historia-origem/movimentos-criativos.png",
    },
    {
        id: "marcos-historicos-da-narrativa-geek",
        title: "Marcos Históricos da Narrativa Geek",
        excerpt:
            "Eventos, obras e transformações que elevaram HQs, games, filmes e séries ao status de fenômeno cultural e econômico em escala mundial.",
        category: "Eras & Transformações",
        href: "/historia-origem/linha-do-tempo-movimentos/marcos-narrativa-geek",
        image: "/images/historia-origem/marcos-narrativa-geek.png",
    },
];
