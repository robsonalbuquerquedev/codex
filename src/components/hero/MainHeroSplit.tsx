"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "@/components/cta/CTA";
import { lexaraPillars } from "@/data/lexaraPillars";

export default function MainHeroSplit() {
    return (
        <section className="w-full py-20 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Bloco da Marca / Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex justify-center md:justify-start"
                >
                    <Image
                        src="/images/herosplitlexara.png"
                        alt="LEXARA — universo geek sem rótulos"
                        width={520}
                        height={520}
                        priority
                        className="drop-shadow-2xl"
                    />
                </motion.div>

                {/* Bloco de Identidade / Mensagem */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="space-y-8 text-center md:text-left"
                >
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Geek por paixão.
                        <span className="block text-indigo-400">
                            Histórias sem rótulos.
                        </span>
                    </h1>

                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                        A <strong>LEXARA</strong> nasce do encontro entre pessoas que vivem e
                        respiram cultura geek, mas que acreditam que grandes histórias não
                        precisam de lados, disputas ou barreiras. Aqui, universos coexistem,
                        ideias se cruzam e narrativas ganham espaço para serem exploradas com
                        profundidade, curiosidade e respeito — seja nos quadrinhos, no cinema,
                        nas séries, nos games ou em tudo aquilo que desperta imaginação.
                    </p>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        Nosso propósito é simples e ao mesmo tempo ambicioso: registrar,
                        analisar e celebrar o que torna o universo geek tão poderoso. A LEXARA
                        é guiada por pesquisa, reflexão e troca verdadeira de ideias, criando
                        um ambiente onde clássicos são revisitados, lançamentos são discutidos
                        com cuidado e cada conteúdo contribui para manter essas histórias
                        vivas, relevantes e conectadas às pessoas que as acompanham.
                    </p>

                    {/* Ícones conceituais alinhados aos pilares */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap justify-center md:justify-start gap-6 pt-4"
                    >
                        {lexaraPillars.map((pillar) => {
                            const Icon = pillar.icon;

                            return (
                                <div
                                    key={pillar.title}
                                    className="flex items-center gap-2 text-slate-300 text-sm"
                                >
                                    <Icon className="w-5 h-5 text-indigo-400" />
                                    {pillar.title}
                                </div>
                            );
                        })}
                    </motion.div>

                    <CTA
                        primaryLabel="Explorar conteúdos"
                        primaryHref="#pillars"
                        secondaryLabel="Sobre a LEXARA"
                        secondaryHref="#about-lexara"
                    />
                </motion.div>
            </div>
        </section>
    );
}
