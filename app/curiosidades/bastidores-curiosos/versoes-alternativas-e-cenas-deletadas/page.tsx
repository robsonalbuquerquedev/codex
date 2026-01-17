import ArticleUnderConstruction from "@/components/shared/ArticleUnderConstruction";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Bastidores Curiosos | Improvisos e Decisões que Mudaram Obras – LEXARA",
    },
    description:
        "Improvisos, mudanças inesperadas, versões alternativas e decisões de produção que alteraram filmes, séries, games, animes e HQs. Bastidores que mudaram o resultado final e revelam o que quase foi.",
    keywords: [
        "bastidores curiosos",
        "improvisos no cinema",
        "mudanças no roteiro",
        "regravações",
        "finais alternativos",
        "cenas deletadas",
        "director's cut",
        "decisões de produção",
        "curiosidades de filmes e séries",
        "cultura geek",
        "cultura pop",
        "LEXARA",
    ],
    alternates: {
        canonical: "https://lexara.com.br/curiosidades/bastidores-curiosos",
    },
    openGraph: {
        title: "Bastidores Curiosos | O que Mudou o Resultado Final – LEXARA",
        description:
            "Improvisos, cortes, regravações e versões alternativas: descubra as decisões de produção que mudaram histórias — e como o ‘por trás’ às vezes é mais interessante que o ‘na tela’.",
        url: "https://lexara.com.br/curiosidades/bastidores-curiosos",
        siteName: "LEXARA",
        images: [
            {
                url: "https://lexara.com.br/og/og-bastidores-curiosos.png",
                width: 1200,
                height: 630,
                alt: "Bastidores Curiosos | Improvisos, Cortes e Versões Alternativas – LEXARA",
            },
        ],
        locale: "pt_BR",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Bastidores Curiosos | LEXARA",
        description:
            "Improvisos, regravações, cenas deletadas e decisões que mudaram obras — o lado invisível da cultura geek.",
        images: ["https://lexara.com.br/og/og-bastidores-curiosos.png"],
    },
};

export default function VersoesAlternativasECenasDeletadasPage() {
    return (
        <ArticleUnderConstruction />
    )
}