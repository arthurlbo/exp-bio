import { IconType } from "@/lib";

export interface CardProps {
    value: string;
    description: string;
    icon: IconType;
}

export const Card = ({ icon: Icon, description, value }: CardProps) => {
    return (
        <div className="flex w-full flex-col items-start justify-start gap-1 rounded-2xl border border-tertiary p-5 pt-[11px] h-[150px] xs:pt-5 overflow-hidden">
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

            <span className="text-sm font-normal text-secondary px-1">{description}</span>
        </div>
    );
};
