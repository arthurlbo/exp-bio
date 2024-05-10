import { Globe, Package, UsersThree } from "@phosphor-icons/react/dist/ssr";

import { Card, CardProps } from "./card";

const highlightsCards: CardProps[] = [
    {
        value: "+3",
        icon: Globe,
        description: "Com mais de 3 anos de atuação consolidada no mercado.",
    },
    {
        value: "+400",
        icon: UsersThree,
        description: "Atendemos com sucesso mais de 400 clientes em diferentes países.",
    },
    {
        value: "+500",
        icon: Package,
        description: "Realizamos com êxito mais de 500 projetos em diversas áreas.",
    },
];

/**
 * Section that will display the highlights of the agency (years of experience, projects completed, etc.)
 */
export const Highlights = () => {
    return (
        <section className="flex w-full flex-col items-start gap-6">
            {highlightsCards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </section>
    );
};
