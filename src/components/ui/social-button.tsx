import Link from "next/link";

import { IconType } from "@/lib";

export interface SocialButtonProps {
    icon: IconType;
    link: string;
}

export const SocialButton = ({ icon: Icon, link }: SocialButtonProps) => {
    return (
        <Link
            role="button"
            href={link}
            target="_blank"
            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-tertiary
                text-primary
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
            <Icon size={20} className="flex-shrink-0" />
        </Link>
    );
};
