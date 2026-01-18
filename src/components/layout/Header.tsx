import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navigation/Navbar";

export default function Header() {
    return (
        <header className="w-full bg-gradient-to-br from-indigo-400/10 via-indigo-400/5 to-transparent relative z-40 ">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo da LEXARA */}
                <Link
                    href="/"
                    aria-label="Página inicial da Lexara"
                    className="flex items-center group"
                >
                    <Image
                        src="/images/logolexaraconceitual.png"
                        alt="LEXARA — Arquivo vivo do universo geek"
                        width={160}
                        height={40}
                        priority
                        className="drop-shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                </Link>

                {/* Navegação */}
                <Navbar />
            </div>
        </header>
    );
}
