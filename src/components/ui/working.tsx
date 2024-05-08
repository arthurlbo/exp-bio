"use client";

import Link from "next/link";

import { bouncy } from "ldrs";
import { ArrowLeft } from "@phosphor-icons/react";

bouncy.register();

export const Working = () => {
    return (
        <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-16">
            <l-bouncy size="60" speed="1.75" color="#00EAFF"></l-bouncy>

            <div className="flex w-full flex-col items-center gap-6">
                <h1 className="text-2xl font-medium text-primary">Trabalho em progresso!</h1>

                <h2 className="text-center text-base font-normal text-secondary">
                    Estamos melhorando esta página para torná-la ainda mais incrível. Em breve, estará pronta para você
                </h2>

                <Link
                    href="/"
                    role="button"
                    className="
                        mt-6
                        flex
                        w-3/4
                        items-center
                        justify-center
                        rounded-xl
                        bg-gradient-to-r
                        from-accent
                        to-complementary
                        p-px
                        transition-all
                        duration-300
                        ease-in-out
                        hover:scale-[1.03]
                        hover:shadow-lg
                        hover:shadow-accent/30
                        focus:outline-none
                        focus:ring-2
                        focus:ring-white
                        focus:ring-offset-2
                        focus:ring-offset-background
                    "
                >
                    <div className="flex h-full w-full items-center justify-center gap-2 rounded-xl bg-background py-3 text-sm font-semibold text-primary">
                        <ArrowLeft size={16} />
                        Voltar
                    </div>
                </Link>
            </div>
        </div>
    );
};
