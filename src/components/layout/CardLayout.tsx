import { ReactNode } from "react";

type CardLayoutProps = {
    children: ReactNode;
};

export default function CardLayout({ children }: CardLayoutProps) {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-col gap-20">
                {children}
            </div>
        </div>
    );
}
