import Link from "next/link";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { CtaButton } from "@/components";

export const Heading = () => {
    return (
        <section className="flex w-full flex-col gap-8">
            <div className="flex flex-col items-start gap-5">
                <span className="font-title text-sm font-normal leading-tight text-secondary">
                    Experiencia • Expansão • Expertize
                </span>

                <h1 className="max-w-xs text-3xl font-semibold leading-snug text-primary xs:max-w-md">
                    Transformando conceitos em{" "}
                    <span className="bg-gradient-to-r  from-accent  to-complementary bg-clip-text  text-transparent">
                        sucesso palpável.
                    </span>
                </h1>

                <p className="max-w-sm text-base font-normal text-secondary xs:max-w-md">
                    Nosso compromisso é oferecer soluções inovadoras que agreguem valor à sua marca. Com ações ágeis e
                    estratégicas, focamos em potencializar seus resultados.
                </p>
            </div>

            <div className="flex flex-col items-start gap-7">
                <CtaButton label="Vamos trabalhar juntos!" link="https://forms.gle/axz4W7NPY2H5dFBG7" className="h-auto w-[258px] py-3 text-sm" />

                <Link href="/formations" target="_blank" className="group flex items-center gap-1 text-sm font-medium text-secondary">
                    <span>Conheça nossas soluções</span>
                    <ArrowRight
                        size={16}
                        className="transition-all duration-300 ease-in-out group-hover:translate-x-1 -mb-px"
                    />
                </Link>
            </div>
        </section>
    );
};
