import { links } from "@/utils";

import { Card, CardProps } from "./card";

const linksCards: CardProps[] = [
    {
        title: "Contate seu orçamento.",
        description: "Preencha o Forms e receba uma proposta personalizado.",
        link: "https://forms.gle/axz4W7NPY2H5dFBG7",
    },
    {
        title: "Conheça nosso site.",
        description: "Conheça mais sobre nossos serviços e nossa história.",
        customDescriptionStyle: "max-w-[270px]",
        link: "/formations",
    },
    {
        title: "Formações Online!",
        description: "Acesse nossas formações online e aprenda mais sobre o mundo digital.",
        link: "/formations",
    },
    {
        title: "Alguma dúvida? Fale conosco.",
        description: "Estamos disponíveis para tirar suas dúvidas e ajudar no que for preciso.",
        link: links.whatsapp,
    },
];

/**
 * Section that will display the main links of the agency.
 */
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
