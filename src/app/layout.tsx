import "./globals.css";

import { ReactNode } from "react";

import { Poppins, MuseoModerno } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { HEADER_HEIGHT, MAX_WIDTH } from "@/utils";

import { Header } from "@/components";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

const museoModerno = MuseoModerno({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-museoModerno",
});

export const metadata = {
    title: "Exp Marketing | Bio",
    description:
        "Na Exp Marketing, estamos comprometidos em fornecer soluções inovadoras que impulsionam o valor da sua marca. Utilizando estratégias ágeis e focadas, trabalhamos para maximizar seus resultados. Navegue pelos nossos principais links de redirecionamento para acessar rapidamente informações sobre nossos serviços, formações, portfólio e contatos.",
    keywords:
        "Exp Marketing, Marketing, Agência de Marketing, Marketing Digital, Estética, Marketing Médico, Clínica, Marketing para clínica, Marketing para estética, Marketing para médicos, Marketing para dentistas",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`
                    ${poppins.variable}
                    ${museoModerno.variable}
                    relative
                    flex
                    min-h-screen
                    w-full
                    max-w-full
                    flex-col
                    items-center
                    justify-center
                    overflow-y-auto
                    overflow-x-hidden
                    bg-background
                    font-sans
                    scrollbar
                    scrollbar-thumb-slate-600
                    scrollbar-thumb-rounded-full
                    scrollbar-w-2
                    selection:bg-complementary/50
                `}
            >
                <Header />

                <main
                    className="z-20 flex h-full w-full flex-col justify-between gap-8 px-5 pt-5 xs:border-x xs:border-x-tertiary"
                    style={{
                        marginTop: HEADER_HEIGHT,
                        minHeight: `calc(100vh - ${HEADER_HEIGHT})`,
                        maxWidth: MAX_WIDTH,
                    }}
                >
                    {children}
                </main>

                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
