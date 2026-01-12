"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeAboutCodex() {
    return (
        <section id="about-lexara" className="w-full py-24">
            <div className="max-w-4xl mx-auto px-4 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl md:text-4xl font-bold">
                        Por que o LEXARA existe?
                    </h2>

                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                        O LEXARA nasceu de conversas sinceras entre amigos apaixonados por filmes, séries,
                        games, quadrinhos e pelas histórias que atravessam gerações. Em vez de debates rasos
                        ou disputas de opinião, sempre nos interessou entender o porquê das narrativas,
                        das escolhas criativas e do impacto cultural que essas obras exercem sobre quem as consome.
                    </p>

                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                        Aqui, a cultura geek é tratada como um espaço de análise, reflexão e troca.
                        Não acreditamos em rótulos fechados, rankings definitivos ou verdades absolutas.
                        A proposta é investigar contextos, origens e significados, conectando entretenimento
                        e pensamento crítico de forma acessível e respeitosa.
                    </p>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        Pesquisamos, debatemos e escrevemos porque entendemos que cultura também se constrói
                        no diálogo. O LEXARA existe para quem gosta de ir além da superfície e enxergar o
                        universo geek como um território vivo, plural e em constante transformação.
                    </p>

                    <div className="pt-4">
                        <Link
                            href="/sobre"
                            className="inline-block text-sm font-medium
                                       text-indigo-400 hover:text-indigo-300"
                        >
                            Conheça mais sobre o LEXARA →
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
