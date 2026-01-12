"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeCTASection() {
    return (
        <section className="w-full py-28">
            <div className="max-w-5xl mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-3xl
                               bg-gradient-to-br from-indigo-600/20
                               via-indigo-500/10 to-slate-900
                               border border-indigo-500/20
                               p-10 md:p-16 text-center
                               backdrop-blur"
                >
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">
                        Pronto para mergulhar no universo LEXARA?
                    </h2>

                    <p className="text-slate-300 text-sm md:text-lg max-w-2xl mx-auto mb-10">
                        Explore análises aprofundadas, histórias bem contextualizadas, curiosidades
                        e reflexões construídas com pesquisa, diálogo e paixão pela cultura geek.
                    </p>

                    <Link href="#pillars">
                        <motion.button
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3
                                       rounded-2xl bg-indigo-600
                                       hover:bg-indigo-500
                                       text-white px-8 py-4
                                       text-sm md:text-base font-semibold
                                       shadow-xl shadow-indigo-600/30
                                       transition-colors cursor-pointer"
                        >
                            Explorar conteúdos
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
