import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Tatsuo Saka",
    description:
        "Site pessoal de Matheus Tatsuo Saka, um apaixonado por código e arte",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    );
}
