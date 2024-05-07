import { Fragment } from "react";
import { At, FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

import { links } from "@/utils";

import { SocialButton, SocialButtonProps } from "@/components/ui";

const socialButtons: SocialButtonProps[] = [
    {
        icon: InstagramLogo,
        link: links.instagram,
    },
    {
        icon: FacebookLogo,
        link: links.facebook,
    },
    {
        icon: At,
        link: links.mail,
    },
    {
        icon: WhatsappLogo,
        link: links.whatsapp,
    },
];

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="flex w-full flex-col items-center gap-6">
            <h3 className="text-center font-title text-2xl font-normal text-primary">
                Estamos{" "}
                <span className="bg-gradient-to-r  from-accent  to-complementary bg-clip-text  text-transparent">
                    esperando
                </span>{" "}
                por você!
            </h3>

            <div className="flex w-full items-center justify-center gap-4">
                {socialButtons.map((button, index) => (
                    <Fragment key={index}> {/* We had to use the Fragment component instead <></> to fix key warning */}
                        <SocialButton {...button} />
                        <div className="h-4 w-px flex-shrink-0 bg-tertiary last:hidden" />
                    </Fragment>
                ))}
            </div>

            <div className="flex w-full flex-col items-center gap-1 text-center text-sm font-normal text-secondary">
                <span>© {year} EXP Marketing</span>
                <span>Todos os direitos reservados.</span>
            </div>
        </footer>
    );
};
