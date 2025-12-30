import type { Metadata } from "next";
import { Jost, Outfit } from "next/font/google";
import "./globals.css";

const jost = Jost({
    subsets: ["latin"],
    variable: "--font-jost",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "SHREE VISHWAKARMA BUSINESS EXPO 2026",
    description: "Gujarat's landmark two-day business exhibition showcasing the strength, diversity, and innovation of businesses owned by members of the Mevada community.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${jost.variable} ${outfit.variable}`}>
                {children}
            </body>
        </html>
    );
}
