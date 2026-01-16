export type ArticleCardItem = {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    href: string;
    image: string;
};

export const origensHistoriaArticles: ArticleCardItem[] = [
    {
        id: "origem-das-hqs-modernas",
        title: "A origem das HQs modernas: dos jornais ao nascimento dos super-heróis",
        excerpt:
            "Antes das grandes editoras e dos universos compartilhados, os quadrinhos nasceram nos jornais. Veja como tiras simples evoluíram para heróis icônicos e mudaram a cultura pop.",
        category: "Origens dos Quadrinhos",
        href: "/hqs-mangas/origens-historia/origem-das-hqs-modernas",
        image: "/images/origens-historia/origem-hqs-modernas.png",
    },
    {
        id: "historia-dos-mangas-no-japao",
        title: "A história dos mangás no Japão: tradição, guerra e revolução cultural",
        excerpt:
            "Do traço tradicional japonês ao impacto do pós-guerra, entenda como o mangá se formou, se diversificou em gêneros e conquistou leitores no mundo inteiro.",
        category: "História do Mangá",
        href: "/hqs-mangas/origens-historia/historia-dos-mangas-no-japao",
        image: "/images/origens-historia/historia-mangas-japao.png",
    },
    {
        id: "hq-ocidental-vs-manga",
        title: "HQ ocidental vs mangá: duas linguagens, duas culturas, um mesmo poder",
        excerpt:
            "Enquanto as HQs ocidentais seguem um caminho, os mangás criaram outro. Compare estilos, narrativas e modelos de publicação que moldaram gerações de leitores.",
        category: "Cultura & Linguagem",
        href: "/hqs-mangas/origens-historia/hq-ocidental-vs-manga",
        image: "/images/origens-historia/hq-vs-manga.png",
    },
];

