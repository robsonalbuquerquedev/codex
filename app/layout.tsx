import MainLayout from "@/components/layout/MainLayout";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEXARA",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
