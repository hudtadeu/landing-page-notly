import { REVIEWS } from "@/app/constants/reviews";
import { Badge } from "../../ui/badge"; // import Badge

const Reviews = () => {
    const firstRow = REVIEWS.slice(0, REVIEWS.length / 2);
    const secondRow = REVIEWS.slice(REVIEWS.length / 2);

    // CSS para o efeito marquee
    const marqueeStyle: React.CSSProperties = {
        display: "flex",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
    };

    const marqueeInnerStyle: React.CSSProperties = {
        display: "flex",
        gap: "1.5rem",
        animation: "marquee 30s linear infinite",
    };

    const marqueeInnerReverseStyle: React.CSSProperties = {
        ...marqueeInnerStyle,
        animationDirection: "reverse",
    };

    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                `}
            </style>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center text-center max-w-xl mx-auto">
                    <Badge>nossos clientes</Badge>
                    <h2 className="text-2xl md:text-4xl lg:text-4xl font-heading font-medium !leading-snug mt-6">
                        O que nossos clientes dizem
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Veja como clínicas de todo o Brasil estão reduzindo faltas.
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4">
                <div className="mt-16 w-full relative overflow-hidden">
                    <div className="relative flex flex-col items-center justify-center overflow-hidden">
                        {/* Marquee 1 */}
                        <div style={marqueeStyle}>
                            <div style={marqueeInnerStyle}>
                                {[...firstRow, ...firstRow].map((review, idx) => (
                                    <ReviewCard key={review.name + idx} {...review} />
                                ))}
                            </div>
                        </div>
                        {/* Marquee 2 (reverse) */}
                        <div style={{ ...marqueeStyle, marginTop: "2rem" }}>
                            <div style={marqueeInnerReverseStyle}>
                                {[...secondRow, ...secondRow].map((review, idx) => (
                                    <ReviewCard key={review.name + idx} {...review} />
                                ))}
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                        <div className="absolute hidden lg:block top-1/4 left-1/4 w-28 h-28 rounded-full bg-primary/80 -z-10 blur-[6rem]"></div>
                        <div className="absolute hidden lg:block top-1/4 right-1/4 w-28 h-28 rounded-full bg-primary/80 -z-10 blur-[6rem]"></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

const ReviewCard = ({
    img,
    name,
    review,
}: {
    img: string;
    name: string;
    review: string;
}) => {
    return (
        <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border border-foreground/5 bg-neutral-50/[.05] hover:bg-foreground/10 p-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-foreground">
                        {name}
                    </figcaption>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{review}</blockquote>
        </figure>
    );
};

export default Reviews