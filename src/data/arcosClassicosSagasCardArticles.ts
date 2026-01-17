export type ArticleCardItem = {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    href: string;
    image: string;
};

export const arcosClassicosSagasCardArticles: ArticleCardItem[] = [
    {
        id: "dark-knight-returns",
        title: "O Cavaleiro das Trevas Retorna: quando o Batman virou lenda",
        excerpt:
            "Frank Miller redefiniu o Batman com uma história mais sombria, política e adulta. Um arco que mudou para sempre a forma como o herói é visto nos quadrinhos e fora deles.",
        category: "HQs Ocidentais",
        href: "/hqs-mangas/arcos-classicos-sagas/o-cavaleiro-das-trevas-retorna",
        image: "/images/arcos-sagas/dark-knight-returns.png",
    },
    {
        id: "infinity-gauntlet",
        title: "A Saga do Infinito: o evento que ensinou o que é épico",
        excerpt:
            "Joias do Infinito, Thanos e o destino do universo. Um dos maiores crossovers da Marvel, referência absoluta em sagas grandiosas e impacto narrativo.",
        category: "Marvel Comics",
        href: "/hqs-mangas/arcos-classicos-sagas/saga-do-infinito",
        image: "/images/arcos-sagas/infinity-gauntlet.png",
    },
    {
        id: "cell-saga",
        title: "Saga de Cell: o auge narrativo de Dragon Ball Z",
        excerpt:
            "Viagens no tempo, sacrifício e evolução dos personagens. A Saga de Cell marcou gerações e mostrou como batalhas podem carregar peso emocional e consequências reais.",
        category: "Mangás Shonen",
        href: "/hqs-mangas/arcos-classicos-sagas/saga-de-cell",
        image: "/images/arcos-sagas/cell-saga.png",
    },
];
