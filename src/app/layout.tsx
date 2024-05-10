import "./globals.css";

import Image from "next/image";
import { Poppins, MuseoModerno } from "next/font/google";

import { HEADER_HEIGHT } from "@/utils";

import { Header } from "@/components";

import BlurImage from "@/assets/blur.svg";

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
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

                <Image
                    src={BlurImage}
                    alt="Blur"
                    quality={100}
                    priority
                    className="absolute right-0 top-0 -z-10 h-[600px] w-full opacity-80 xs:right-1/2 xs:w-[500px] xs:translate-x-1/2"
                />

                <main
                    className="flex w-full flex-col justify-between gap-8 px-5 pt-5 xs:max-w-[500px] xs:border-x xs:border-x-tertiary"
                    style={{ marginTop: HEADER_HEIGHT, height: `calc(100% - ${HEADER_HEIGHT})` }}
                >
                    {children}
                </main>
            </body>
        </html>
    );
}
