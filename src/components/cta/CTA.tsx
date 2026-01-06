"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CTAProps {
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
}

export default function CTA({
    primaryLabel,
    primaryHref,
    secondaryLabel,
    secondaryHref,
}: CTAProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
        >
            {/* Botão principal */}
            <Link href={primaryHref}>
                <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 rounded-xl
                               bg-indigo-600 hover:bg-indigo-500
                               text-white px-6 py-3 text-sm font-medium
                               shadow-lg shadow-indigo-600/20
                               transition-colors cursor-pointer"
                >
                    {primaryLabel}
                    <ArrowRight className="w-4 h-4" />
                </motion.button>
            </Link>

            {/* Botão secundário (opcional) */}
            {secondaryLabel && secondaryHref && (
                <Link href={secondaryHref}>
                    <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 rounded-xl
                                   border border-slate-700 hover:border-slate-500
                                   text-slate-300 px-6 py-3 text-sm font-medium
                                   transition-colors cursor-pointer"
                    >
                        {secondaryLabel}
                    </motion.button>
                </Link>
            )}
        </motion.div>
    );
}
