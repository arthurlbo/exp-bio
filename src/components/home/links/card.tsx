import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export interface CardProps {
    link: string;
    cover: StaticImageData;
    alt: string;
}

export const Card = ({ alt, cover, link }: CardProps) => {
    return (
        <Link
            href={link}
            target="_blank"
            className="group w-full rounded-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-background"
        >
            <Image
                src={cover}
                alt={alt}
                loading="lazy"
                quality={100}
                height={150}
                className="max-h-[150px] min-h-[150px] w-full rounded-2xl border border-tertiary"
            />
        </Link>
    );
};
