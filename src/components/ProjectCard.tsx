import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import type { Project } from "../types";

interface CardProps extends Project {
    index: number;
    range: number[];
    targetScale: number;
    progress: MotionValue<number>;
}

export default function Card({
    title,
    description,
    src,
    link,
    color,
    index,
    range,
    targetScale,
    progress,
}: CardProps) {
    const container = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [3, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            className="h-[100vh] flex items-center justify-center w-full sticky top-0"
            ref={container}
        >
            <motion.div
                className="bg-slate-900 relative w-full max-w-2xl min-h-[400px] rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 py-14 px-7 overflow-hidden"
                style={{
                    marginBottom: "3rem",
                    scale,
                    top: `calc(-10% + ${index * 25}px)`,
                }}
            >
                {/* part 1 */}
                <div className="order-2 md:order-1 flex flex-col justify-between gap-4 items-start">
                    <div>
                        <h2 className="text-2xl font-bold mb-3">{title}</h2>
                        <div>{description}</div>
                    </div>
                    {link ? (
                        <a
                            href={link}
                            target="_blank"
                            className="rounded-[2rem] border border-gray-700 hover:bg-white hover:text-black transition-all px-4 py-2"
                        >
                            visit project
                        </a>
                    ) : (
                        "coming soon"
                    )}
                </div>

                {/* part 2 */}
                <div className="order-1 md:order-2">
                    <div className="relative">
                        {/* glow */}
                        <div
                            className="absolute -right-5 w-[110%] h-[110%] rounded-full overflow-hidden blur-[20px] filter -z-10 opacity-20"
                            style={{ backgroundColor: color }}
                        ></div>
                        <div className="overflow-hidden">
                            <motion.img
                                src={src}
                                style={{ scale: imageScale }}
                                className="w-full object-cover aspect-video object-top"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
