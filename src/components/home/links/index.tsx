import { links } from "@/utils";

import { Card, CardProps } from "./card";

import SiteBanner from "@/assets/links/site.webp";
import BudgetBanner from "@/assets/links/budget.webp";
import DoubtsBanner from "@/assets/links/doubts.webp";
import FormationsBanner from "@/assets/links/formations.webp";

const linksCards: CardProps[] = [
    {
        alt: "Faça seu orçamento conosco!",
        cover: BudgetBanner,
        link: "https://forms.gle/axz4W7NPY2H5dFBG7",
    },
    {
        alt: "Conheça nosso site!",
        cover: SiteBanner,
        link: "/formations",
    },
    {
        alt: "Conheça nossas formações!",
        cover: FormationsBanner,
        link: "/formations",
    },
    {
        alt: "Alguma dúvida? Fale conosco!",
        cover: DoubtsBanner,
        link: links.whatsapp,
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
