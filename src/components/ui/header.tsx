import Link from "next/link";
import Image from "next/image";

import { HEADER_HEIGHT, links, MAX_WIDTH } from "@/utils";

import { CtaButton } from "@/components";

import ExpLogo from "@/assets/logo.svg";

/**
 * Header component for all the pages.
 */
export const Header = () => {
    return (
        <header
            className="
                fixed
                left-0
                top-0
                z-50
                flex
                w-full
                items-center
                justify-between
                overflow-hidden
                border-b
                border-b-tertiary
                bg-background/70
                px-5
                py-4
                backdrop-blur-sm
                xs:left-1/2
                xs:-translate-x-1/2
                xs:border-x
                xs:border-x-tertiary
            "
            style={{ height: HEADER_HEIGHT, maxWidth: MAX_WIDTH }}
        >
            <Link
                href="/"
                className="rounded-md focus:outline-none focus:ring-2  focus:ring-white focus:ring-offset-4 focus:ring-offset-background"
            >
                <Image src={ExpLogo} alt="Logo Exp" height={20} quality={100} priority className="w-auto" />
            </Link>

            <CtaButton label="Entrar em contato" link={links.whatsapp} />
        </header>
    );
};
