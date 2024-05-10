import { IconType } from "@/lib";

export interface CardProps {
    value: string;
    description: string;
    icon: IconType;
}

/**
 * Card component that will display the highlights of the agency (years of experience, projects completed, etc.)
 * @param value - The value of the highlight(years, total, etc.)
 * @param description - The description of the highlight.
 * @param icon - The icon that will be displayed on the card.
 */
export const Card = ({ icon: Icon, description, value }: CardProps) => {
    return (
        <div className="flex h-[150px] w-full flex-col items-start justify-start gap-1 overflow-hidden rounded-2xl border border-tertiary p-5 pt-[11px]">
            <div className="relative flex items-center justify-start text-primary">
                <h2 className="text-[3.7rem] font-medium leading-tight tracking-tighter">{value}</h2>
                <div
                    className="
                        relative
                        -bottom-2
                        right-1
                        z-10
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-br
                        from-accent
                        to-complementary
                    "
                >
                    <Icon size={20} weight="thin" />
                </div>
            </div>

            <span className="px-1 text-sm font-normal text-secondary">{description}</span>
        </div>
    );
};
