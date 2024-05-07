import { Card, CardProps } from "./card";

const linksCards: CardProps[] = [
    {
        alt: "Link 1",
        cover: "https://via.placeholder.com/150",
        link: "/link-1",
    },
    {
        alt: "Link 1",
        cover: "https://via.placeholder.com/150",
        link: "/link-1",
    },
    {
        alt: "Link 1",
        cover: "https://via.placeholder.com/150",
        link: "/link-1",
    },
    {
        alt: "Link 1",
        cover: "https://via.placeholder.com/150",
        link: "/link-1",
    },
];

export const Links = () => {
    return (
        <section className="flex w-full flex-col items-start gap-6">
            <h2 className="text-2xl font-medium text-primary">Nossos principais links</h2>

            {linksCards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </section>
    );
};
