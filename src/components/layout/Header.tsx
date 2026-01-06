import Link from "next/link";
import { BookOpen } from "lucide-react";
import Navbar from "@/components/navigation/Navbar";

export default function Header() {
    return (
        <header className="w-full bg-neutral-950 border-b border-neutral-800 relative z-40">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

                {/* Logo textual com conceito visual */}
                <Link
                    href="/"
                    aria-label="Página inicial do Codex"
                    className="flex items-center gap-3 group"
                >
                    {/* Livro */}
                    <div className="relative">
                        <BookOpen
                            size={28}
                            className="text-neutral-300 group-hover:text-neutral-100 transition-colors"
                        />

                        {/* Glow sutil */}
                        <div className="absolute inset-0 blur-md opacity-40 group-hover:opacity-70 transition-opacity
                        bg-gradient-to-r from-[#AB0B00] via-[#3091D8] to-[#FB6384]" />
                    </div>

                    {/* Texto emergindo */}
                    <span className="text-xl font-semibold tracking-wide">
                        <span style={{ color: "#AB0B00" }}>C</span>
                        <span style={{ color: "#3091D8" }}>Ó</span>
                        <span style={{ color: "#66546C" }}>D</span>
                        <span style={{ color: "#039BA5" }}>E</span>
                        <span style={{ color: "#FB6384" }}>X</span>
                    </span>
                </Link>
                
                {/* Navigation */}
                <Navbar />
            </div>
        </header>
    );
}
