import type { Metadata } from "next";
import ContatoLexaraHeroSplit from "@/components/hero/ContatoLexaraHeroSplit";

export const metadata: Metadata = {
    title: { absolute: "Contato | LEXARA" },
    description:
        "Fale com o LEXARA. Envie dúvidas, sugestões, correções ou propostas de parceria. Respondemos pelo e-mail informado, com clareza e respeito ao leitor.",
    keywords: [
        "LEXARA contato",
        "contato LEXARA",
        "fale com o lexara",
        "sugestões de pauta",
        "correções de conteúdo",
        "parcerias cultura geek",
        "cultura geek em análise",
        "filmes e séries",
        "games",
        "HQs e mangás",
        "narrativas",
    ],
    alternates: {
        canonical: "https://lexara.com.br/contato",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    openGraph: {
        title: "Contato | LEXARA",
        description:
            "Dúvidas, sugestões, correções ou parcerias? Entre em contato com o LEXARA e receba retorno pelo e-mail informado.",
        url: "https://lexara.com.br/contato",
        siteName: "LEXARA",
        locale: "pt_BR",
        type: "website",
        images: [
            {
                url: "https://lexara.com.br/og/og-contato.png",
                width: 1200,
                height: 630,
                alt: "Contato | LEXARA",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contato | LEXARA",
        description:
            "Fale com o LEXARA: dúvidas, sugestões, correções e parcerias. Retorno pelo e-mail informado.",
        images: ["https://lexara.com.br/og/og-contato.png"],
    },
};

export default function ContatoLexaraHeroSplitPage() {
    return <ContatoLexaraHeroSplit />;
}
