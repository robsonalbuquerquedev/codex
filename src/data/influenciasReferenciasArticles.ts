export type ArticleCardItem = {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    href: string;
    image: string;
};

export const influenciasReferenciasArticles: ArticleCardItem[] = [
    {
        id: "mitos-e-arquetipos-nas-narrativas-geek",
        title: "Mitos & Arquétipos: as raízes invisíveis das narrativas geek",
        excerpt:
            "Heróis, jornadas, monstros e símbolos antigos continuam vivos em histórias modernas. Veja como mitologia e arquétipos moldam personagens, conflitos e temas em filmes, séries, games, HQs e mangás.",
        category: "Mitologia & Simbolismo",
        href: "/historia-origem/influencias-referencias/mitos-e-arquetipos-nas-narrativas-geek",
        image: "/images/historia-origem/influencias-mitos-arquetipos.png",
    },
    {
        id: "literatura-e-cinema-como-mapa-de-inspiracao",
        title: "Literatura & Cinema: o mapa de inspiração por trás de mundos e estilos",
        excerpt:
            "De romances clássicos a grandes obras do cinema: descubra como linguagem, ritmo, enquadramento e construção de mundo atravessam mídias e influenciam estéticas que viraram referência.",
        category: "Literatura & Cinema",
        href: "/historia-origem/influencias-referencias/literatura-e-cinema-como-mapa-de-inspiracao",
        image: "/images/historia-origem/influencias-literatura-cinema.png",
    },
    {
        id: "politica-e-tecnologia-por-tras-da-ficcao",
        title: "Política & Tecnologia: o que a ficção absorve do mundo real",
        excerpt:
            "Guerras, crises, vigilância, inteligência artificial e mudanças sociais não ficam fora das histórias. Entenda como contexto político e avanços tecnológicos influenciam temas, futuros imaginados e escolhas estéticas.",
        category: "Política & Tecnologia",
        href: "/historia-origem/influencias-referencias/politica-e-tecnologia-por-tras-da-ficcao",
        image: "/images/historia-origem/influencias-politica-tecnologia.png",
    },
];
