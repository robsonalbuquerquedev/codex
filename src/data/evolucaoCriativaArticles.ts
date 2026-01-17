export type ArticleCardItem = {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    href: string;
    image: string;
};

export const evolucaoCriativaArticles: ArticleCardItem[] = [
    {
        id: "como-estilos-evoluem-com-o-tempo",
        title: "Como Estilos Evoluem com o Tempo: do traço ao visual contemporâneo",
        excerpt:
            "Entenda como mudanças de traço, cor, composição e linguagem visual acompanham transformações sociais e tecnológicas — e por que certas escolhas viram padrão em cada geração.",
        category: "Estilo & Linguagem Visual",
        href: "/historia-origem/evolucao-criativa/como-estilos-evoluem-com-o-tempo",
        image: "/images/historia-origem/evolucao-estilos-linguagem-visual.png",
    },
    {
        id: "mudancas-de-formato-que-redefiniram-a-experiencia",
        title: "Mudanças de Formato que Redefiniram a Experiência: páginas, telas e interação",
        excerpt:
            "Do impresso ao streaming, do console ao mobile: veja como o formato muda ritmo, narrativa e consumo — e como cada transição revela novos hábitos e expectativas do público.",
        category: "Formato & Consumo",
        href: "/historia-origem/evolucao-criativa/mudancas-de-formato-que-redefiniram-a-experiencia",
        image: "/images/historia-origem/evolucao-formatos-experiencia.png",
    },
    {
        id: "evolucao-da-linguagem-narrativa-nas-midias",
        title: "Evolução da Linguagem Narrativa: ritmo, estrutura e novas regras do jogo",
        excerpt:
            "Cortes mais rápidos, estruturas não-lineares, humor meta e storytelling ambiental: descubra como a linguagem narrativa mudou e o que cada fase diz sobre a cultura do seu tempo.",
        category: "Narrativa & Estrutura",
        href: "/historia-origem/evolucao-criativa/evolucao-da-linguagem-narrativa-nas-midias",
        image: "/images/historia-origem/evolucao-linguagem-narrativa.png",
    },
];
