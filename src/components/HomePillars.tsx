"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { lexaraPillars } from "@/data/lexaraPillars";

export default function HomePillars() {
    return (
        <section id="pillars" className="w-full py-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* Section title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-2xl md:text-4xl font-bold">
                        O que você encontra no LEXARA
                    </h2>
                    <p className="text-slate-400 mt-4 text-sm md:text-base max-w-3xl mx-auto">
                        No LEXARA, a cultura geek é explorada com profundidade, respeito e olhar crítico.
                        Aqui você encontra análises detalhadas, reflexões bem fundamentadas e conteúdos
                        que vão além da superfície, conectando filmes, séries, games, quadrinhos e narrativas
                        que moldam o imaginário contemporâneo.
                    </p>
                </motion.div>

                {/* Pillars grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {lexaraPillars.map((pillar, index) => {
                        const Icon = pillar.icon;

                        return (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                            >
                                <Link
                                    href={pillar.href}
                                    className="group block h-full rounded-2xl
                                               border border-slate-800
                                               bg-slate-900/40 backdrop-blur
                                               p-6 hover:border-indigo-500/40
                                               transition-colors"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex items-center justify-center
                                                        w-12 h-12 rounded-xl
                                                        bg-indigo-500/10
                                                        group-hover:bg-indigo-500/20
                                                        transition-colors">
                                            <Icon className="w-6 h-6 text-indigo-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold">
                                            {pillar.title}
                                        </h3>
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
