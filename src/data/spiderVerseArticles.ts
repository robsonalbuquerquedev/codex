export type SpiderVerseArticle = {
    id: number;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    href: string;
};

export const spiderVerseArticles: SpiderVerseArticle[] = [
    {
        id: 1,
        title: "Homem-Aranha no Aranhaverso",
        excerpt: "Uma revolução visual e narrativa que redefiniu o que a animação pode ser no cinema moderno.",
        category: "Animação • Cinema",
        image: "/images/animacoes/spider-verse.png",
        href: "/filmes-series/animacoes/aranhaverso",
    },
    {
        id: 2,
        title: "Homem-Aranha: Através do Aranhaverso",
        excerpt: "Uma continuação ambiciosa que expande o multiverso e aprofunda temas como identidade e escolha.",
        category: "Animação • Multiverso",
        image: "/images/animacoes/across-the-spider-verse.jpg",
        href: "/filmes-series/animacoes/atraves-do-aranhaverso",
    },
    {
        id: 3,
        title: "A linguagem visual do Spider-Verse",
        excerpt: "Como a estética de quadrinhos, o ritmo da montagem e a arte híbrida criaram um novo padrão para a animação.",
        category: "Animação • Linguagem Visual",
        image: "/images/animacoes/spider-verse-art-style.jpg",
        href: "/filmes-series/animacoes/linguagem-visual-spider-verse",
    },
];
