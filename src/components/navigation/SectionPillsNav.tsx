// components/navigation/SectionPillsNav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Film, Gamepad2, BookOpen, ScrollText, Sparkles } from "lucide-react";

type NavItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
};

const navItems: NavItem[] = [
    { label: "Início", href: "/", icon: <Home className="w-4 h-4" /> },
    { label: "Filmes & Séries", href: "/filmes-series", icon: <Film className="w-4 h-4" /> },
    { label: "Games", href: "/games", icon: <Gamepad2 className="w-4 h-4" /> },
    { label: "HQs & Mangás", href: "/hqs-mangas", icon: <BookOpen className="w-4 h-4" /> },
    { label: "História & Origem", href: "/historia-origem", icon: <ScrollText className="w-4 h-4" /> },
    { label: "Curiosidades", href: "/curiosidades", icon: <Sparkles className="w-4 h-4" /> },
];

function isActivePath(pathname: string, href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SectionPillsNav() {
    const pathname = usePathname();

    return (
        <nav aria-label="Navegação por seções do LEXARA" className="w-full">
            <div
                className="
          flex items-center gap-3 overflow-x-auto pb-2
          [-ms-overflow-style:none] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
            >
                {navItems.map((item) => {
                    const active = isActivePath(pathname, item.href);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={[
                                "group inline-flex items-center gap-2 whitespace-nowrap",
                                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                                "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/70",
                                active
                                    ? "bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/20"
                                    : "bg-slate-950/40 text-slate-200 border-slate-700 hover:bg-slate-900/60 hover:border-slate-500",
                            ].join(" ")}
                            aria-current={active ? "page" : undefined}
                        >
                            <span
                                className={[
                                    "transition",
                                    active ? "text-white" : "text-slate-300 group-hover:text-slate-100",
                                ].join(" ")}
                            >
                                {item.icon}
                            </span>
                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
