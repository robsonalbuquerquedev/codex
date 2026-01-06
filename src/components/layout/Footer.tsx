import {
    Instagram,
    ExternalLink,
    FileText,
    ShieldCheck,
    Layers
} from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-neutral-950 text-neutral-400 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-3">

                {/* Brand & Legal */}
                <div className="text-sm space-y-4">
                    <p className="text-neutral-300 font-medium">
                        © {currentYear} CODEX
                    </p>

                    <div className="flex flex-col gap-2">
                        <a
                            href="/termos-de-uso"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <FileText size={16} />
                            Termos de Uso
                        </a>

                        <a
                            href="/politica-de-privacidade"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                        >
                            <ShieldCheck size={16} />
                            Política de Privacidade
                        </a>
                    </div>
                </div>

                {/* Projects */}
                <div className="text-sm space-y-4">
                    <p className="text-neutral-300 font-medium flex items-center gap-2">
                        <Layers size={16} />
                        Outros projetos
                    </p>

                    <ul className="space-y-2">
                        <li>
                            <a
                                href="https://aprenderviolaoonline.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                Aprender Violão Online
                                <ExternalLink size={14} />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://cantosjsm.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                Cantos JSM
                                <ExternalLink size={14} />
                            </a>
                        </li>

                        <li>
                            <a
                                href="https://windly.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-white transition-colors"
                            >
                                Windly
                                <ExternalLink size={14} />
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div className="text-sm space-y-4">
                    <p className="text-neutral-300 font-medium">
                        Conecte-se com a gente
                    </p>

                    <div className="flex flex-col gap-3">
                        <a
                            href="https://www.instagram.com/celsiuslopes?igsh=MXdvdDM5YW9jbXg0aA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                            aria-label="Celso Lopes no Instagram"
                        >
                            <Instagram size={18} />
                            <span>@celsiuslopes</span>
                        </a>

                        <a
                            href="https://www.instagram.com/_emanuell_j?igsh=NWxlYWdwbDE4cmU5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                            aria-label="Emanuel José no Instagram"
                        >
                            <Instagram size={18} />
                            <span>@_emanuel_j</span>
                        </a>

                        <a
                            href="https://www.instagram.com/robson.albuquerque_cm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-white transition-colors"
                            aria-label="Robson Albuquerque no Instagram"
                        >
                            <Instagram size={18} />
                            <span>@robson.albuquerque_cm</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
