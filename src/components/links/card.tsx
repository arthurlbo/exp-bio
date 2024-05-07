export interface CardProps {
    link: string;
    cover: string;
    alt: string;
}

export const Card = ({ alt, cover, link }: CardProps) => {
    return <div className="h-[150px] overflow-hidden w-full rounded-2xl bg-tertiary" />;
};
