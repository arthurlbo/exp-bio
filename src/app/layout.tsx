import "./globals.css";

import Image from "next/image";
import { Poppins, MuseoModerno } from "next/font/google";

import { Header } from "@/components";

import BlurImage from "@/assets/blur.webp";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins" });

const museoModerno = MuseoModerno({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-museoModerno",
});

export const metadata = {
    title: "Exp Marketing | Bio",
    description:
        "Na Exp Marketing, estamos comprometidos em fornecer soluções inovadoras que impulsionam o valor da sua marca. Utilizando estratégias ágeis e focadas, trabalhamos para maximizar seus resultados. Navegue pelos nossos principais links de redirecionamento para acessar rapidamente informações sobre nossos serviços, portfólio e contatos.",
    keywords:
        "Exp Marketing, Marketing, Agência de Marketing, Marketing Digital, Estética, Marketing Médico, Clínica, Marketing para clínica, Marketing para estética, Marketing para médicos, Marketing para dentistas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} ${museoModerno.variable} relative flex min-h-screen w-full max-w-full flex-col items-center justify-start overflow-x-hidden bg-background font-sans`}
            >
                <Header />

                <Image
                    src={BlurImage}
                    alt="Blur"
                    height={332}
                    width={386}
                    quality={100}
                    priority
                    className="absolute top-14 right-0"
                />

                {children}
            </body>
        </html>
    );
}
