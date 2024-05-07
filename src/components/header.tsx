import Link from "next/link";
import Image from "next/image";

import { CtaButton } from "@/components";

import ExpLogo from "@/assets/logo.svg";

export const Header = () => {
    return (
        <header className="fixed z-50 left-0 top-0 flex h-[72px] w-full items-center justify-between overflow-hidden border-b border-b-tertiary bg-background/70 backdrop-blur-sm py-4 px-5">
            <Link
                href="/"
                className="rounded-md focus:outline-none focus:ring-2  focus:ring-white focus:ring-offset-4 focus:ring-offset-background"
            >
                <Image src={ExpLogo} alt="Logo Exp" height={20} quality={100} priority className="w-auto" />
            </Link>

            <CtaButton label="Entrar em contato" link="https://wa.me/+5541995806896" />
        </header>
    );
};
