"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CTA from "@/components/cta/CTA";
import { codexPillars } from "@/data/codexPillars";

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
                        src="/images/logocodex.png"
                        alt="CODEX Logo"
                        width={420}
                        height={420}
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
                            Conteúdo por convicção.
                        </span>
                    </h1>

                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                        O CÓDEX nasce entre amigos que amam o universo geek sem rótulos.
                        Aqui, DC e Marvel dividem o mesmo espaço, assim como filmes,
                        séries, games, histórias, origens e curiosidades.
                    </p>

                    <p className="text-slate-400 text-sm md:text-base">
                        Nossa visão é imparcial, baseada em pesquisa, análise e troca
                        verdadeira de ideias — sempre atualizando e celebrando essa
                        cultura que conecta pessoas.
                    </p>

                    {/* Ícones conceituais alinhados aos pilares */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap justify-center md:justify-start gap-6 pt-4"
                    >
                        {codexPillars.map((pillar) => {
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
                        secondaryLabel="Sobre o CODEX"
                        secondaryHref="#about-codex"
                    />
                </motion.div>
            </div>
        </section>
    );
}
