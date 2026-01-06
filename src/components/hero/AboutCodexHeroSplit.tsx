"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutCodexHeroSplit() {
    return (
        <section className="w-full py-24">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Lado imagem */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-3 gap-4"
                >
                    <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/about/emanuel.jpeg"
                            alt="Emanuel José, cofundador do CÓDEX"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/about/robson.png"
                            alt="Robson Albuquerque, cofundador do CÓDEX"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/about/celso.jpeg"
                            alt="Celso Lopes, cofundador do CÓDEX"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
                
                {/* Lado texto */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    {/* Título */}
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        O CÓDEX nasceu de conversas reais entre amigos
                    </h1>

                    {/* Origem */}
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                        Antes de ser um site, o CÓDEX foi um grupo de WhatsApp.
                        Um espaço onde filmes, séries, games e histórias sempre
                        foram discutidos com curiosidade, respeito e paixão.
                    </p>

                    {/* Propósito */}
                    <p className="text-slate-400 text-sm md:text-base">
                        Transformamos essas conversas em um lugar para revisitar
                        clássicos, acompanhar lançamentos e entender por que
                        certas histórias continuam vivas dentro da gente.
                    </p>

                    {/* Quem está por trás */}
                    <div className="pt-4 space-y-3 text-sm md:text-base text-slate-300">
                        <p>
                            <strong>Robson Albuquerque</strong> — Análise e Desenvolvimento de Sistemas
                        </p>
                        <p>
                            <strong>Emanuel José</strong> — Jornalismo
                        </p>
                        <p>
                            <strong>Celso Lopes</strong> — Ciências da Computação
                        </p>
                    </div>

                    {/* Compromisso */}
                    <p className="text-slate-400 text-sm md:text-base pt-2">
                        Aqui você não encontra conteúdo feito de qualquer jeito.
                        Existe opinião e ponto de vista, mas também pesquisa,
                        curiosidade, história e compromisso com qualidade.
                    </p>

                    {/* Encerramento */}
                    <p className="text-slate-300 font-medium pt-2">
                        Este espaço é nosso. E agora, também é seu.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
