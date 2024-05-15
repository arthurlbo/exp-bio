import Link from "next/link";
import Image from "next/image";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { cn } from "@/utils";

import BlurImage from "@/assets/blur.svg";

export interface CardProps {
    title: string;
    description: string;
    link: string;
    customDescriptionStyle?: string;
}

/**
 * Card component that will display the main links of the agency.
 * @param link - The link that the card will redirect to.
 * @param title - The title text of the image.
 * @param description - The description text of the image.
 * @param customDescriptionStyle - The custom style of the description text.
 */
export const Card = ({ customDescriptionStyle, description, link, title }: CardProps) => {
    return (
        <Link
            href={link}
            target="_blank"
            className="
                group
                relative
                flex
                h-[150px]
                w-full
                overflow-hidden
                rounded-2xl
                border
                border-tertiary
                transition-all
                duration-300
                ease-in-out
                hover:border-[#403e46]
                focus:outline-none
                focus:ring-2
                focus:ring-white
                focus:ring-offset-2
                focus:ring-offset-background
            "
        >
            <div
                className="
                    flex
                    h-full
                    w-full
                    flex-col
                    items-start
                    justify-center
                    gap-3
                    bg-background/50
                    pl-5
                    pr-8
                    transition-all
                    duration-300
                    ease-in-out
                    group-hover:bg-background/20
                "
            >
                <h1 className="text-xl font-semibold text-primary">{title}</h1>

                <span
                    className={cn("max-w-xs text-sm font-normal leading-tight text-secondary", customDescriptionStyle)}
                >
                    {description}
                </span>
            </div>

            <div
                className="
                    absolute
                    bottom-3
                    right-3
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-accent
                    to-complementary
                    text-primary
                    transition-all
                    duration-300
                    ease-in-out
                    group-hover:scale-110
                    group-hover:shadow-lg
                   group-hover:shadow-accent/30
                "
            >
                <ArrowRight size={16} className="transition-all duration-200 ease-in-out group-hover:-rotate-45" />
            </div>

            <Image src={BlurImage} alt="blur" loading="lazy" quality={100} className="absolute -z-10 h-auto w-full" />
        </Link>
    );
};
