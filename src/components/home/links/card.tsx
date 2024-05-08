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
            className="group w-full focus:outline-none rounded-2xl focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-background"
        >
            <Image
                src={cover}
                alt={alt}
                loading="lazy"
                placeholder="blur"
                quality={100}
                height={150}
                className="w-full min-h-[150px] rounded-2xl border border-tertiary"
            />
        </Link>
    );
};
