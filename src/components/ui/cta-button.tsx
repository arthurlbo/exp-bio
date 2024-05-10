import Link from "next/link";

import { cn } from "@/utils";

interface CtaButtonProps {
    label: string;
    link: string;
    className?: string;
}

/**
 * CTA button component for all the page.
 * @param label - The label of the button.
 * @param link - The link that the button will redirect to.
 * @param className - Custom classes for the button.
 */
export const CtaButton = ({ className, label, link }: CtaButtonProps) => {
    return (
        <Link
            href={link}
            target="_blank"
            role="button"
            className={cn(
                `
                    flex
                    h-full
                    items-center
                    justify-center
                    gap-1
                    rounded-xl
                    bg-gradient-to-r
                    from-accent
                    to-complementary
                    px-4
                    text-xs
                    font-semibold
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
                `,
                className,
            )}
        >
            {label}
        </Link>
    );
};
