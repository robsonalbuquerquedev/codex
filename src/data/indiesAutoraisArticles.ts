export type ArticleCardItem = {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    href: string;
    image: string;
};

export const indiesAutoraisArticles: ArticleCardItem[] = [
    {
        id: "indies-por-que-inovam",
        title: "Por que jogos indies inovam mais que grandes estúdios?",
        excerpt:
            "Liberdade criativa, riscos calculados e paixão pelo processo: entenda por que os jogos independentes costumam ser o berço das ideias mais ousadas da indústria.",
        category: "Indies & Criatividade",
        href: "/games/indies-autorais/por-que-indies-inovam",
        image: "/images/indies/indies-inovacao.png",
    },
    {
        id: "narrativa-em-jogos-indies",
        title: "Narrativas autorais: quando um jogo conta histórias que ficam",
        excerpt:
            "Sem fórmulas prontas, jogos indies apostam em histórias íntimas, pessoais e impactantes. Veja como a narrativa virou uma das maiores forças do cenário independente.",
        category: "Narrativa & Design",
        href: "/games/indies-autorais/narrativas-autorais",
        image: "/images/indies/narrativa-indie.png",
    },
    {
        id: "visual-identidade-indie",
        title: "Arte e identidade visual nos jogos indies: estilo acima do realismo",
        excerpt:
            "Pixel art, minimalismo e traços únicos: descubra por que jogos indies usam a arte como linguagem e não apenas como estética.",
        category: "Arte & Identidade",
        href: "/games/indies-autorais/arte-identidade-visual",
        image: "/images/indies/arte-indie.png",
    },
];
